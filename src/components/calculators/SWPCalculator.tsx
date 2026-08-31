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

export default function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(1000000);
  const [withdrawalAmount, setWithdrawalAmount] = useState(10000);
  const [expectedRate, setExpectedRate] = useState(8);
  const [years, setYears] = useState(10);

  useEffect(() => {
    const styleId = "swp-calc-slider-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .swp-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
      .swp-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
      .swp-slider::-moz-range-track { height: 8px; border-radius: 4px; }
      .swp-num-input::-webkit-outer-spin-button, .swp-num-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
      .swp-num-input[type=number] { -moz-appearance: textfield; }
    `;
    document.head.appendChild(style);
  }, []);

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #3B82C4 ${pct}%, #E2E8F0 ${pct}%)`;
  };

  const months = years * 12;
  const annualRate = expectedRate / 100;
  const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;

  let balance = totalInvestment;
  let totalWithdrawn = 0;
  
  for (let m = 1; m <= months; m++) {
    const prevBalance = balance;
    balance = (prevBalance - withdrawalAmount) * (1 + monthlyRate);
    if (balance <= 0) {
      totalWithdrawn += prevBalance;
      balance = 0;
      break;
    }
    totalWithdrawn += withdrawalAmount;
  }
  
  balance = Math.max(0, Math.round(balance));
  totalWithdrawn = Math.round(totalWithdrawn);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const safeTotal = (totalWithdrawn + balance) || 1;
  const withdrawnPct = totalWithdrawn / safeTotal;
  const withdrawnDashoffset = circumference * (1 - withdrawnPct);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 max-w-5xl mx-auto">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Total Investment</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 min-w-[10rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input type="text" value={formatIndian(totalInvestment)} onChange={(e) => { const raw = e.target.value.replace(/[^0-9]/g, ""); const num = parseInt(raw, 10); if (!isNaN(num)) setTotalInvestment(Math.min(num, 100000000)); else setTotalInvestment(10000); }} className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={10000} max={100000000} step={10000} value={totalInvestment} onChange={(e) => setTotalInvestment(Number(e.target.value))} className="swp-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(totalInvestment, 10000, 100000000) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Monthly Withdrawal</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 min-w-[10rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input type="text" value={formatIndian(withdrawalAmount)} onChange={(e) => { const raw = e.target.value.replace(/[^0-9]/g, ""); const num = parseInt(raw, 10); if (!isNaN(num)) setWithdrawalAmount(Math.min(num, 1000000)); else setWithdrawalAmount(500); }} className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={500} max={1000000} step={500} value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(Number(e.target.value))} className="swp-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(withdrawalAmount, 500, 1000000) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Expected Return Rate (p.a)</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={30} step={0.1} value={expectedRate} onChange={(e) => setExpectedRate(Math.min(Math.max(Number(e.target.value), 0), 30))} className="swp-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={1} max={30} step={0.1} value={expectedRate} onChange={(e) => setExpectedRate(Number(e.target.value))} className="swp-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(expectedRate, 1, 30) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Time Period</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Math.min(Math.max(Number(e.target.value), 1), 40))} className="swp-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-2">Yr</span>
              </div>
            </div>
            <input type="range" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="swp-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(years, 1, 40) }} />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Total Invested</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(totalInvestment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Total Withdrawal</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(totalWithdrawn)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
              <span className="text-neutral-800 font-medium text-lg">Final Balance</span>
              <span className="font-bold text-xl text-gold-500">{formatCurrency(balance)}</span>
            </div>
            <div className="pt-4">
              <Button href="/contact" className="w-full justify-center" size="lg">Start SWP</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
              <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#163A64" strokeWidth="30" className="transition-all duration-150 ease-out" />
              <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#5A9BD5" strokeWidth="30" strokeDasharray={circumference} strokeDashoffset={withdrawnDashoffset} strokeLinecap="butt" className="transition-all duration-150 ease-out" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] font-semibold mb-1">Final Value</span>
              <span className="text-lg md:text-xl font-bold text-gold-500">{formatCurrency(balance)}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5A9BD5]" />
              <span className="text-sm text-neutral-600">Withdrawal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#163A64]" />
              <span className="text-sm text-neutral-600">Final Balance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
