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

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflationRate, setInflationRate] = useState(6);
  const [preRate, setPreRate] = useState(12);
  const [postRate, setPostRate] = useState(8);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);

  useEffect(() => {
    const styleId = "ret-calc-slider-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .ret-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
      .ret-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
      .ret-slider::-moz-range-track { height: 8px; border-radius: 4px; }
      .ret-num-input::-webkit-outer-spin-button, .ret-num-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
      .ret-num-input[type=number] { -moz-appearance: textfield; }
    `;
    document.head.appendChild(style);
  }, []);

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #3B82C4 ${pct}%, #E2E8F0 ${pct}%)`;
  };

  // Calculations
  const Y = Math.max(0, retirementAge - currentAge);
  const R = Math.max(0, lifeExpectancy - retirementAge);
  
  // Monthly expense at retirement
  const F = monthlyExpense * Math.pow(1 + inflationRate / 100, Y);
  
  // Real rate of return post retirement
  const post_monthly = Math.pow(1 + postRate / 100, 1 / 12) - 1;
  const inf_monthly = Math.pow(1 + inflationRate / 100, 1 / 12) - 1;
  const real_rate = (1 + post_monthly) / (1 + inf_monthly) - 1;
  
  // Total corpus needed
  const months_R = R * 12;
  let corpus = 0;
  if (real_rate > 0) {
    corpus = F * ((1 - Math.pow(1 + real_rate, -months_R)) / real_rate);
  } else {
    corpus = F * months_R;
  }
  
  // Monthly SIP required
  const pre_monthly = Math.pow(1 + preRate / 100, 1 / 12) - 1;
  const months_pre = Y * 12;
  let monthlySip = 0;
  if (pre_monthly > 0 && months_pre > 0) {
    monthlySip = corpus / (((Math.pow(1 + pre_monthly, months_pre) - 1) / pre_monthly) * (1 + pre_monthly));
  } else if (months_pre > 0) {
    monthlySip = corpus / months_pre;
  }

  // Handle Edge Cases
  if (Y <= 0) monthlySip = 0;
  if (R <= 0) corpus = 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 max-w-5xl mx-auto">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium text-sm">Current Age</label>
              <div className="bg-brand-50 flex items-center px-3 py-1 rounded-lg border border-brand-100 w-24">
                <input type="number" min={18} max={60} step={1} value={currentAge} onChange={(e) => setCurrentAge(Math.min(Math.max(Number(e.target.value), 18), 60))} className="ret-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={18} max={60} step={1} value={currentAge} onChange={(e) => { setCurrentAge(Number(e.target.value)); if (Number(e.target.value) >= retirementAge) setRetirementAge(Number(e.target.value) + 1); }} className="ret-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(currentAge, 18, 60) }} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium text-sm">Retirement Age</label>
              <div className="bg-brand-50 flex items-center px-3 py-1 rounded-lg border border-brand-100 w-24">
                <input type="number" min={40} max={75} step={1} value={retirementAge} onChange={(e) => setRetirementAge(Math.max(Number(e.target.value), currentAge + 1))} className="ret-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={40} max={75} step={1} value={retirementAge} onChange={(e) => setRetirementAge(Math.max(Number(e.target.value), currentAge + 1))} className="ret-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(retirementAge, 40, 75) }} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium text-sm">Current Monthly Expense</label>
              <div className="bg-brand-50 flex items-center px-3 py-1 rounded-lg border border-brand-100 min-w-[8rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input type="text" value={formatIndian(monthlyExpense)} onChange={(e) => { const raw = e.target.value.replace(/[^0-9]/g, ""); const num = parseInt(raw, 10); if (!isNaN(num)) setMonthlyExpense(Math.min(num, 1000000)); else setMonthlyExpense(5000); }} className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={5000} max={1000000} step={1000} value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} className="ret-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(monthlyExpense, 5000, 1000000) }} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium text-sm">Inflation Rate (p.a)</label>
              <div className="bg-brand-50 flex items-center px-3 py-1 rounded-lg border border-brand-100 w-24">
                <input type="number" min={1} max={15} step={0.5} value={inflationRate} onChange={(e) => setInflationRate(Math.min(Math.max(Number(e.target.value), 0), 15))} className="ret-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={1} max={15} step={0.5} value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))} className="ret-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(inflationRate, 1, 15) }} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium text-sm">Pre-retirement Return (p.a)</label>
              <div className="bg-brand-50 flex items-center px-3 py-1 rounded-lg border border-brand-100 w-24">
                <input type="number" min={5} max={30} step={0.5} value={preRate} onChange={(e) => setPreRate(Math.min(Math.max(Number(e.target.value), 5), 30))} className="ret-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={5} max={30} step={0.5} value={preRate} onChange={(e) => setPreRate(Number(e.target.value))} className="ret-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(preRate, 5, 30) }} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium text-sm">Post-retirement Return (p.a)</label>
              <div className="bg-brand-50 flex items-center px-3 py-1 rounded-lg border border-brand-100 w-24">
                <input type="number" min={4} max={20} step={0.5} value={postRate} onChange={(e) => setPostRate(Math.min(Math.max(Number(e.target.value), 4), 20))} className="ret-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={4} max={20} step={0.5} value={postRate} onChange={(e) => setPostRate(Number(e.target.value))} className="ret-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(postRate, 4, 20) }} />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="w-full bg-brand-50 p-8 rounded-2xl border border-brand-100 text-center mb-6 shadow-inner">
            <p className="text-neutral-600 text-sm font-medium mb-2 uppercase tracking-wide">Corpus Needed at Age {retirementAge}</p>
            <h3 className="text-3xl font-bold text-brand-900 mb-6">{formatCurrency(corpus)}</h3>
            
            <div className="h-px w-full bg-brand-200 mb-6"></div>
            
            <p className="text-neutral-600 text-sm font-medium mb-2 uppercase tracking-wide">Monthly SIP Required</p>
            <h3 className="text-3xl font-bold text-gold-500">{formatCurrency(monthlySip)}</h3>
          </div>
          
          <div className="w-full text-sm text-neutral-500 space-y-2 bg-neutral-50 p-4 rounded-xl">
            <div className="flex justify-between">
              <span>Years to invest:</span>
              <span className="font-semibold text-neutral-700">{Y} years</span>
            </div>
            <div className="flex justify-between">
              <span>Years in retirement:</span>
              <span className="font-semibold text-neutral-700">{R} years</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly expense at age {retirementAge}:</span>
              <span className="font-semibold text-neutral-700">{formatCurrency(F)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
