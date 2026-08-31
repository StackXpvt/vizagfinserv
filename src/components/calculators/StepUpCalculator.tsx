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

export default function StepUpCalculator() {
  const [initialSip, setInitialSip] = useState(10000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  useEffect(() => {
    const styleId = "step-calc-slider-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .step-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
      .step-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
      .step-slider::-moz-range-track { height: 8px; border-radius: 4px; }
      .step-num-input::-webkit-outer-spin-button, .step-num-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
      .step-num-input[type=number] { -moz-appearance: textfield; }
    `;
    document.head.appendChild(style);
  }, []);

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #3B82C4 ${pct}%, #E2E8F0 ${pct}%)`;
  };

  const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
  let totalInvested = 0;
  let totalValue = 0;

  for (let y = 1; y <= years; y++) {
    const p_y = initialSip * Math.pow(1 + stepUp / 100, y - 1);
    totalInvested += p_y * 12;
    
    // Value from previous years growing for this year
    const s_grown = totalValue * Math.pow(1 + rate / 100, 1); // approximate 1 year growth
    
    // Value of this year's SIP contributions
    let sip_grown = 0;
    if (i > 0) {
      sip_grown = p_y * ((Math.pow(1 + i, 12) - 1) / i) * (1 + i);
    } else {
      sip_grown = p_y * 12;
    }
    
    totalValue = s_grown + sip_grown;
  }
  
  totalValue = Math.round(totalValue);
  totalInvested = Math.round(totalInvested);
  const estReturns = Math.max(0, totalValue - totalInvested);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const safeTotal = totalValue || 1;
  const investedPct = totalInvested / safeTotal;
  const investedDashoffset = circumference * (1 - investedPct);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 max-w-5xl mx-auto">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Monthly Investment (Initial)</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 min-w-[10rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input type="text" value={formatIndian(initialSip)} onChange={(e) => { const raw = e.target.value.replace(/[^0-9]/g, ""); const num = parseInt(raw, 10); if (!isNaN(num)) setInitialSip(Math.min(num, 1000000)); else setInitialSip(500); }} className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={500} max={1000000} step={500} value={initialSip} onChange={(e) => setInitialSip(Number(e.target.value))} className="step-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(initialSip, 500, 1000000) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Annual Step-up</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={50} step={1} value={stepUp} onChange={(e) => setStepUp(Math.min(Math.max(Number(e.target.value), 0), 50))} className="step-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={1} max={50} step={1} value={stepUp} onChange={(e) => setStepUp(Number(e.target.value))} className="step-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(stepUp, 1, 50) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Expected Return Rate (p.a)</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={30} step={0.1} value={rate} onChange={(e) => setRate(Math.min(Math.max(Number(e.target.value), 0), 30))} className="step-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={1} max={30} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="step-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(rate, 1, 30) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Time Period</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Math.min(Math.max(Number(e.target.value), 1), 40))} className="step-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-2">Yr</span>
              </div>
            </div>
            <input type="range" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="step-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(years, 1, 40) }} />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Invested amount</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(totalInvested)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Est. returns</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(estReturns)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
              <span className="text-neutral-800 font-medium text-lg">Total value</span>
              <span className="font-bold text-xl text-gold-500">{formatCurrency(totalValue)}</span>
            </div>
            <div className="pt-4">
              <Button href="/contact" className="w-full justify-center" size="lg">Start SIP</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
              <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#163A64" strokeWidth="30" className="transition-all duration-150 ease-out" />
              <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#5A9BD5" strokeWidth="30" strokeDasharray={circumference} strokeDashoffset={investedDashoffset} strokeLinecap="butt" className="transition-all duration-150 ease-out" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] font-semibold mb-1">Total Value</span>
              <span className="text-lg md:text-xl font-bold text-gold-500">{formatCurrency(totalValue)}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5A9BD5]" />
              <span className="text-sm text-neutral-600">Invested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#163A64]" />
              <span className="text-sm text-neutral-600">Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
