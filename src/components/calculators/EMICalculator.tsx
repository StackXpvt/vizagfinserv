"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

const formatIndian = (value: number) => {
  return new Intl.NumberFormat("en-IN").format(value);
};

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  useEffect(() => {
    const styleId = "emi-calc-slider-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .emi-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
      .emi-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
      .emi-slider::-moz-range-track { height: 8px; border-radius: 4px; }
      .emi-num-input::-webkit-outer-spin-button, .emi-num-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
      .emi-num-input[type=number] { -moz-appearance: textfield; }
    `;
    document.head.appendChild(style);
  }, []);

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #3B82C4 ${pct}%, #E2E8F0 ${pct}%)`;
  };

  const p = loanAmount;
  const r = (interestRate / 12) / 100;
  const n = loanTenure * 12;
  
  let emi = 0;
  if (r > 0) {
    emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  } else {
    emi = p / n;
  }
  
  const totalPayable = emi * n;
  const totalInterest = totalPayable - p;
  
  const safeTotal = totalPayable || 1;
  const principalPct = p / safeTotal;
  
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const principalDashoffset = circumference * (1 - principalPct);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 max-w-5xl mx-auto">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Loan Amount</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 min-w-[10rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input type="text" value={formatIndian(loanAmount)} onChange={(e) => { const raw = e.target.value.replace(/[^0-9]/g, ""); const num = parseInt(raw, 10); if (!isNaN(num)) setLoanAmount(Math.min(num, 100000000)); else setLoanAmount(10000); }} className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={10000} max={100000000} step={10000} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="emi-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(loanAmount, 10000, 100000000) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Interest Rate (p.a)</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={30} step={0.1} value={interestRate} onChange={(e) => setInterestRate(Math.min(Math.max(Number(e.target.value), 0), 30))} className="emi-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={1} max={30} step={0.1} value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="emi-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(interestRate, 1, 30) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Loan Tenure</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={30} step={1} value={loanTenure} onChange={(e) => setLoanTenure(Math.min(Math.max(Number(e.target.value), 1), 30))} className="emi-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-2">Yr</span>
              </div>
            </div>
            <input type="range" min={1} max={30} step={1} value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="emi-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(loanTenure, 1, 30) }} />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Principal Amount</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(p)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Total Interest</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
              <span className="text-neutral-800 font-medium text-lg">Total Amount Payable</span>
              <span className="font-bold text-xl text-gold-500">{formatCurrency(totalPayable)}</span>
            </div>
            <div className="pt-4">
              <Button href="/contact" className="w-full justify-center" size="lg">Apply Now</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
              <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#163A64" strokeWidth="30" className="transition-all duration-150 ease-out" />
              <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#5A9BD5" strokeWidth="30" strokeDasharray={circumference} strokeDashoffset={principalDashoffset} strokeLinecap="butt" className="transition-all duration-150 ease-out" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] font-semibold mb-1">Monthly EMI</span>
              <span className="text-lg md:text-xl font-bold text-gold-500">{formatCurrency(emi)}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5A9BD5]" />
              <span className="text-sm text-neutral-600">Principal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#163A64]" />
              <span className="text-sm text-neutral-600">Interest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
