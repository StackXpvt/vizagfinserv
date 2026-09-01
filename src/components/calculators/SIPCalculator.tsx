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
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #89B8E3;
        border: 2px solid white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        cursor: pointer;
      }
      .sip-slider::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #89B8E3;
        border: 2px solid white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3);
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

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #89B8E3 ${pct}%, rgba(255, 255, 255, 0.15) ${pct}%)`;
  };

  return (
    <div className="overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left side: Inputs */}
      <div className="lg:w-7/12 bg-brand-900/90 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/10 shadow-xl space-y-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-heading">
            {activeTab === "SIP" ? "SIP Calculator" : "Lumpsum Calculator"}
          </h2>
          <p className="text-brand-200/80 text-sm mb-8">
            {activeTab === "SIP"
              ? "Calculate the future value of your systematic monthly investments."
              : "Estimate returns on one-time lump sum mutual fund investments."}
          </p>

          <div className="space-y-8">
            {/* Input 1: Investment Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-brand-100 font-semibold text-sm">
                  {activeTab === "SIP" ? "Monthly Investment" : "Total Investment"}
                </label>
                <span className="bg-white/10 text-brand-300 text-xs font-bold px-3.5 py-1.5 rounded-lg border border-white/10">
                  ₹{formatIndian(investment)}
                </span>
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
              <div className="flex justify-end">
                <input
                  type="text"
                  value={formatIndian(investment)}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    const num = parseInt(raw, 10);
                    if (!isNaN(num)) setInvestment(Math.min(num, investMax));
                    else setInvestment(investMin);
                  }}
                  className="w-28 text-right px-3 py-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg outline-none focus:border-brand-300"
                />
              </div>
            </div>

            {/* Input 2: Expected Return Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-brand-100 font-semibold text-sm">
                  Expected Return Rate (p.a)
                </label>
                <span className="bg-white/10 text-brand-300 text-xs font-bold px-3.5 py-1.5 rounded-lg border border-white/10">
                  {rate}%
                </span>
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
              <div className="flex justify-end">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="sip-num-input w-24 text-right px-3 py-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg outline-none focus:border-brand-300"
                />
              </div>
            </div>

            {/* Input 3: Time Period */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-brand-100 font-semibold text-sm">
                  Time Period
                </label>
                <span className="bg-white/10 text-brand-300 text-xs font-bold px-3.5 py-1.5 rounded-lg border border-white/10">
                  {years} years
                </span>
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
              <div className="flex justify-end">
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="sip-num-input w-24 text-right px-3 py-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg outline-none focus:border-brand-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Dark Navy Panel */}
      <div className="lg:w-5/12 bg-brand-950 text-white p-8 lg:p-10 flex flex-col justify-between rounded-2xl shadow-xl border border-white/10">
        <div className="space-y-6">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-brand-300 uppercase">
              EXPECTED CORPUS
            </span>
            <div className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-1 text-white font-heading">
              {formatCurrency(totalValue)}
            </div>
            <p className="text-xs text-brand-200/80 mt-1">
              Total wealth accumulated in {years} years
            </p>
          </div>

          {/* Breakdown Box */}
          <div className="bg-brand-900/80 rounded-xl p-5 border border-white/10 space-y-3.5 text-xs">
            <div className="flex justify-between items-center text-brand-100">
              <span>Invested Amount</span>
              <span className="font-semibold text-white">{formatCurrency(investedAmount)}</span>
            </div>
            <div className="border-t border-white/10 pt-2.5 flex justify-between items-center text-brand-100">
              <span>Estimated Returns</span>
              <span className="font-semibold text-gold-400">{formatCurrency(estReturns)}</span>
            </div>
            <div className="border-t border-white/10 pt-2.5 flex justify-between items-center text-sm font-bold text-white">
              <span>Total Value</span>
              <span>{formatCurrency(totalValue)}</span>
            </div>
          </div>

          {/* Doughnut Chart Progress Visual */}
          <div className="flex items-center justify-center pt-2">
            <div className="relative w-40 h-40">
              <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
                <circle cx="100" cy="100" r={radius} fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="24" />
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="transparent"
                  stroke="#D4A537"
                  strokeWidth="24"
                  strokeDasharray={circumference}
                  strokeDashoffset={investedDashoffset}
                  strokeLinecap="butt"
                  className="transition-all duration-300"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] text-brand-200 uppercase font-semibold">Gain Ratio</span>
                <span className="text-sm font-bold text-gold-400">
                  {Math.round((estReturns / (totalValue || 1)) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="w-full bg-brand-800 hover:bg-brand-700 text-white font-semibold py-3.5 px-6 rounded-xl text-center block text-sm transition-colors border border-brand-600 shadow-md"
          >
            Start Investing Now →
          </a>
        </div>
      </div>
    </div>
  );
}
