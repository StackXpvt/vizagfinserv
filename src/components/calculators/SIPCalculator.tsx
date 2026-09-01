"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";

// Utility for Indian currency formatting
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

// Format number with Indian grouping (no currency symbol)
const formatIndian = (value: number) => {
  return new Intl.NumberFormat("en-IN").format(value);
};

export default function SIPCalculator({ defaultTab = "SIP", hideToggle = false }: { defaultTab?: "SIP" | "Lumpsum"; hideToggle?: boolean }) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"SIP" | "Lumpsum">(defaultTab as "SIP" | "Lumpsum");

  // Sync tab with URL search parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab")?.toLowerCase();
    if (tabParam === "lumpsum") {
      setActiveTab("Lumpsum");
    } else if (tabParam === "sip") {
      setActiveTab("SIP");
    }
  }, [searchParams]);

  // SIP State
  const [sipInvestment, setSipInvestment] = useState(25000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Lumpsum State
  const [lumpInvestment, setLumpInvestment] = useState(2500000);
  const [lumpRate, setLumpRate] = useState(12);
  const [lumpYears, setLumpYears] = useState(10);

  // Inject slider thumb styles (since styled-jsx isn't available)
  useEffect(() => {
    const styleId = "sip-calc-slider-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .sip-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #3B82C4;
        border: 4px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        cursor: pointer;
      }
      .sip-slider::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #3B82C4;
        border: 4px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        cursor: pointer;
        border: none;
      }
      .sip-slider::-moz-range-track {
        height: 8px;
        border-radius: 4px;
      }
      /* Hide number input arrows */
      .sip-num-input::-webkit-outer-spin-button,
      .sip-num-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .sip-num-input[type=number] {
        -moz-appearance: textfield;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Inline synchronous calculations for real-time responsiveness
  const investedAmount = activeTab === "SIP"
    ? sipInvestment * (sipYears * 12)
    : lumpInvestment;

  let totalValue = 0;
  if (activeTab === "SIP") {
    const p = sipInvestment;
    const annualRate = sipRate / 100;
    const i = Math.pow(1 + annualRate, 1 / 12) - 1;
    const n = sipYears * 12;
    if (i > 0) {
      totalValue = Math.round(p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    } else {
      totalValue = investedAmount;
    }
  } else {
    const p = lumpInvestment;
    const r = lumpRate / 100;
    const t = lumpYears;
    totalValue = Math.round(p * Math.pow(1 + r, t));
  }

  const estReturns = Math.round(totalValue - investedAmount);

  // Slider track background helper
  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #3B82C4 ${pct}%, #E2E8F0 ${pct}%)`;
  };

  // SVG Doughnut Chart calculations
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const safeTotal = totalValue || 1;
  const investedPct = investedAmount / safeTotal;
  const investedDashoffset = circumference * (1 - investedPct);

  // Current active values
  const investment = activeTab === "SIP" ? sipInvestment : lumpInvestment;
  const setInvestment = activeTab === "SIP" ? setSipInvestment : setLumpInvestment;
  const investMin = 500;
  const investMax = activeTab === "SIP" ? 100000 : 10000000;
  const investStep = activeTab === "SIP" ? 500 : 10000;

  const rate = activeTab === "SIP" ? sipRate : lumpRate;
  const setRate = activeTab === "SIP" ? setSipRate : setLumpRate;

  const years = activeTab === "SIP" ? sipYears : lumpYears;
  const setYears = activeTab === "SIP" ? setSipYears : setLumpYears;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-neutral-200/80 overflow-hidden max-w-5xl mx-auto">
      {/* Tab Toggle */}
      {!hideToggle && (
        <div className="flex p-6 pb-0 md:p-8 md:pb-0">
          <div className="flex bg-brand-50 p-1 rounded-full">
            {(["SIP", "Lumpsum"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-brand-900 text-white shadow-md"
                    : "text-brand-800 hover:bg-brand-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 md:pt-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Inputs & Results */}
        <div className="lg:col-span-7 space-y-8">
          {/* Investment Amount */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">
                {activeTab === "SIP" ? "Monthly Investment" : "Total Investment"}
              </label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 min-w-[10rem]">
                <span className="text-brand-900 font-semibold mr-1">₹</span>
                <input
                  type="text"
                  value={formatIndian(investment)}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    const num = parseInt(raw, 10);
                    if (!isNaN(num)) {
                      setInvestment(Math.min(num, investMax));
                    } else {
                      setInvestment(investMin);
                    }
                  }}
                  className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right"
                />
              </div>
            </div>
            <input
              type="range"
              min={investMin}
              max={investMax}
              step={investStep}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="sip-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{ background: sliderTrackBg(investment, investMin, investMax) }}
            />
          </div>

          {/* Return Rate */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Expected Return Rate (p.a)</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input
                  type="number"
                  min={1}
                  max={30}
                  step={0.1}
                  value={rate}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setRate(Math.min(Math.max(val, 0), 30));
                  }}
                  className="sip-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right"
                />
                <span className="text-brand-900 font-semibold ml-1">%</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="sip-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{ background: sliderTrackBg(rate, 1, 30) }}
            />
          </div>

          {/* Time Period */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-neutral-600 font-medium">Time Period</label>
              <div className="bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 w-28">
                <input
                  type="number"
                  min={1}
                  max={40}
                  step={1}
                  value={years}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setYears(Math.min(Math.max(val, 1), 40));
                  }}
                  className="sip-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right"
                />
                <span className="text-brand-900 font-semibold ml-2">Yr</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={40}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="sip-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{ background: sliderTrackBg(years, 1, 40) }}
            />
          </div>

          {/* Results Summary */}
          <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Invested amount</span>
              <span className="font-semibold text-neutral-800">
                {formatCurrency(investedAmount)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Est. returns</span>
              <span className="font-semibold text-neutral-800">
                {formatCurrency(estReturns)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
              <span className="text-neutral-800 font-medium text-lg">Total value</span>
              <span className="font-bold text-xl text-gold-500">
                {formatCurrency(totalValue)}
              </span>
            </div>

            <div className="pt-4">
              <Button href="/contact" className="w-full justify-center" size="lg">
                Start Investing
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side: Doughnut Chart */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              className="transform -rotate-90"
            >
              {/* Returns segment (full circle behind) */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke="#163A64"
                strokeWidth="30"
                className="transition-all duration-150 ease-out"
              />
              {/* Invested segment (foreground arc) */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke="#5A9BD5"
                strokeWidth="30"
                strokeDasharray={circumference}
                strokeDashoffset={investedDashoffset}
                strokeLinecap="butt"
                className="transition-all duration-150 ease-out"
              />
            </svg>

            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] font-semibold mb-1">
                Total Value
              </span>
              <span className="text-lg md:text-xl font-bold text-gold-500">
                {formatCurrency(totalValue)}
              </span>
            </div>
          </div>

          {/* Legend */}
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
