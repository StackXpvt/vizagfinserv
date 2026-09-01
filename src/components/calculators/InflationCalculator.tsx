"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const formatIndian = (value: number) => {
  return new Intl.NumberFormat("en-IN").format(value);
};

export default function InflationCalculator() {
  const [currentValue, setCurrentValue] = useState(50000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);

  useEffect(() => {
    const styleId = "inf-calc-slider-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .inf-slider::-webkit-slider-thumb { 
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
      .inf-slider::-moz-range-thumb { 
        width: 18px; 
        height: 18px; 
        border-radius: 50%; 
        background: #89B8E3; 
        border: 2px solid white; 
        box-shadow: 0 1px 4px rgba(0,0,0,0.3); 
        cursor: pointer; 
      }
      .inf-num-input::-webkit-outer-spin-button, .inf-num-input::-webkit-inner-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
      }
      .inf-num-input[type=number] { 
        -moz-appearance: textfield; 
      }
    `;
    document.head.appendChild(style);
  }, []);

  const futureValue = Math.round(currentValue * Math.pow(1 + inflationRate / 100, years));
  const purchasingPower = Math.round(currentValue / Math.pow(1 + inflationRate / 100, years));
  const inflationErosion = futureValue - currentValue;
  const purchasingPowerReducedPct = Math.round((1 - purchasingPower / currentValue) * 100);

  const sliderTrackBg = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #89B8E3 ${pct}%, rgba(255, 255, 255, 0.15) ${pct}%)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row gap-8"
    >
      {/* Left side: Inputs */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="lg:w-7/12 bg-brand-900/90 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/10 shadow-xl space-y-8 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 font-heading">
            Inflation Calculator
          </h2>
          <p className="text-brand-200/80 text-sm mb-8">
            Understand how inflation erodes the purchasing power of your money over time.
          </p>

          <div className="space-y-8">
            {/* Input 1: Current Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-brand-100 font-semibold text-sm">
                  Current Amount / Expense
                </label>
                <span className="bg-white/10 text-brand-300 text-xs font-bold px-3.5 py-1.5 rounded-lg border border-white/10">
                  ₹{formatIndian(currentValue)}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={10000000}
                step={1000}
                value={currentValue}
                onChange={(e) => setCurrentValue(Number(e.target.value))}
                className="inf-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ background: sliderTrackBg(currentValue, 1000, 10000000) }}
              />
              <div className="flex justify-end">
                <input
                  type="text"
                  value={currentValue}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    const num = parseInt(raw, 10);
                    if (!isNaN(num)) setCurrentValue(Math.min(num, 10000000));
                    else setCurrentValue(1000);
                  }}
                  className="w-28 text-right px-3 py-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg outline-none focus:border-brand-300"
                />
              </div>
            </div>

            {/* Input 2: Inflation Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-brand-100 font-semibold text-sm">
                  Expected Inflation Rate
                </label>
                <span className="bg-white/10 text-brand-300 text-xs font-bold px-3.5 py-1.5 rounded-lg border border-white/10">
                  {inflationRate}%
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={0.5}
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="inf-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ background: sliderTrackBg(inflationRate, 1, 20) }}
              />
              <div className="flex justify-end">
                <input
                  type="number"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="inf-num-input w-24 text-right px-3 py-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg outline-none focus:border-brand-300"
                />
              </div>
            </div>

            {/* Input 3: Years */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-brand-100 font-semibold text-sm">
                  Years in Future
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
                className="inf-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ background: sliderTrackBg(years, 1, 40) }}
              />
              <div className="flex justify-end">
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="inf-num-input w-24 text-right px-3 py-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg outline-none focus:border-brand-300"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Brand Navy Summary Panel */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
        className="lg:w-5/12 bg-brand-950 text-white p-8 lg:p-10 flex flex-col justify-between rounded-2xl shadow-xl border border-white/10"
      >
        <div className="space-y-6">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-brand-300 uppercase">
              FUTURE COST
            </span>
            <motion.div
              key={futureValue}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-1 text-white font-heading"
            >
              ₹{formatIndian(futureValue)}
            </motion.div>
            <p className="text-xs text-brand-200/80 mt-1">
              What ₹{formatIndian(currentValue)} today will cost in {years} years
            </p>
          </div>

          {/* Today vs Future Box */}
          <div className="bg-brand-800/70 rounded-xl p-5 border border-brand-700/50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <span className="text-[10px] text-brand-300 uppercase font-semibold tracking-wider block">
                  TODAY
                </span>
                <span className="text-base font-bold text-white">
                  ₹{formatIndian(currentValue)}
                </span>
              </div>
              <svg className="w-5 h-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-center">
                <span className="text-[10px] text-brand-300 uppercase font-semibold tracking-wider block">
                  IN FUTURE
                </span>
                <span className="text-base font-bold text-gold-400">
                  ₹{formatIndian(futureValue)}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-brand-950/80 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gold-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.max(100 - purchasingPowerReducedPct, 15)}%` }}
              />
            </div>
            <p className="text-[11px] text-center text-brand-200/90 font-medium">
              Purchasing power reduced by {purchasingPowerReducedPct}%
            </p>
          </div>

          {/* Table Breakdown */}
          <div className="bg-brand-800/70 rounded-xl p-5 border border-brand-700/50 space-y-3.5 text-xs">
            <div className="flex justify-between items-center text-brand-100">
              <span>Current Value</span>
              <span className="font-semibold text-white">₹{formatIndian(currentValue)}</span>
            </div>
            <div className="border-t border-brand-700/50 pt-2.5 flex justify-between items-center text-brand-100">
              <span>Inflation Erosion</span>
              <span className="font-semibold text-gold-400">₹{formatIndian(inflationErosion)}</span>
            </div>
            <div className="border-t border-brand-700/50 pt-2.5 flex justify-between items-center text-sm font-bold text-white">
              <span>Required in Future</span>
              <span>₹{formatIndian(futureValue)}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <motion.a
            href="/contact"
            whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(15,42,74,0.4)" }}
            transition={{ duration: 0.2 }}
            className="w-full bg-brand-800 hover:bg-brand-700 text-white font-semibold py-3.5 px-6 rounded-xl text-center block text-sm transition-colors border border-brand-600 shadow-md"
          >
            Beat Inflation – Invest Now →
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
