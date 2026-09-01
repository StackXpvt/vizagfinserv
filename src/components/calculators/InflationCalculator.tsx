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

export default function InflationCalculator() {
  const [currentValue, setCurrentValue] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);

  useEffect(() => {
    const styleId = "inf-calc-slider-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .inf-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
      .inf-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #3B82C4; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
      .inf-slider::-moz-range-track { height: 8px; border-radius: 4px; }
      .inf-num-input::-webkit-outer-spin-button, .inf-num-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
      .inf-num-input[type=number] { -moz-appearance: textfield; }
    `;
    document.head.appendChild(style);
  }, []);

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #3B82C4 ${pct}%, #E2E8F0 ${pct}%)`;
  };

  const futureValue = currentValue * Math.pow(1 + inflationRate / 100, years);
  const purchasingPower = currentValue / Math.pow(1 + inflationRate / 100, years);

  // For the bar chart
  const maxVal = Math.max(currentValue, futureValue);
  const currentHeight = (currentValue / maxVal) * 100;
  const futureHeight = (futureValue / maxVal) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100 max-w-5xl mx-auto">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Current Amount</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 min-w-[10rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input type="text" value={formatIndian(currentValue)} onChange={(e) => { const raw = e.target.value.replace(/[^0-9]/g, ""); const num = parseInt(raw, 10); if (!isNaN(num)) setCurrentValue(Math.min(num, 100000000)); else setCurrentValue(1000); }} className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
              </div>
            </div>
            <input type="range" min={1000} max={100000000} step={1000} value={currentValue} onChange={(e) => setCurrentValue(Number(e.target.value))} className="inf-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(currentValue, 1000, 100000000) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Inflation Rate (p.a)</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={20} step={0.1} value={inflationRate} onChange={(e) => setInflationRate(Math.min(Math.max(Number(e.target.value), 0), 20))} className="inf-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input type="range" min={1} max={20} step={0.1} value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))} className="inf-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(inflationRate, 1, 20) }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Time Period</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input type="number" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Math.min(Math.max(Number(e.target.value), 1), 40))} className="inf-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right" />
                <span className="text-brand-900 font-semibold ml-2">Yr</span>
              </div>
            </div>
            <input type="range" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="inf-slider w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: sliderTrackBg(years, 1, 40) }} />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Value of amount today</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(currentValue)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Purchasing power after {years} years</span>
              <span className="font-semibold text-neutral-800">{formatCurrency(purchasingPower)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
              <span className="text-neutral-800 font-medium text-lg">Amount required after {years} years</span>
              <span className="font-bold text-xl text-gold-500">{formatCurrency(futureValue)}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-end pt-4 lg:pt-0">
          <div className="flex items-end justify-center h-64 gap-8 w-full border-b-2 border-neutral-200 pb-2 mb-4">
            <div className="flex flex-col items-center justify-end h-full">
              <span className="text-sm font-semibold text-brand-900 mb-2">{formatCurrency(currentValue)}</span>
              <div 
                className="w-16 bg-[#5A9BD5] rounded-t-md transition-all duration-300"
                style={{ height: `${currentHeight}%` }}
              ></div>
              <span className="text-xs text-neutral-500 mt-2">Today</span>
            </div>
            <div className="flex flex-col items-center justify-end h-full">
              <span className="text-sm font-semibold text-gold-500 mb-2">{formatCurrency(futureValue)}</span>
              <div 
                className="w-16 bg-[#163A64] rounded-t-md transition-all duration-300"
                style={{ height: `${futureHeight}%` }}
              ></div>
              <span className="text-xs text-neutral-500 mt-2">In {years} Yrs</span>
            </div>
          </div>
          
          <div className="text-center text-sm text-neutral-600 mt-4 px-4 bg-brand-50 p-4 rounded-xl border border-brand-100">
            To maintain the same lifestyle that costs <strong>{formatCurrency(currentValue)}</strong> today, you will need <strong>{formatCurrency(futureValue)}</strong> in {years} years.
          </div>
        </div>
      </div>
    </div>
  );
}
