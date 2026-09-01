"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

import SIPCalculator from "@/components/calculators/SIPCalculator";
import InflationCalculator from "@/components/calculators/InflationCalculator";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import SWPCalculator from "@/components/calculators/SWPCalculator";
import StepUpCalculator from "@/components/calculators/StepUpCalculator";
import EMICalculator from "@/components/calculators/EMICalculator";

const tabs = [
  {
    id: "sip",
    name: "SIP",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "lumpsum",
    name: "Lumpsum",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6m-6 4h4" />
      </svg>
    ),
  },
  {
    id: "inflation",
    name: "Inflation",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-3m5 3V9m5 7V5" />
      </svg>
    ),
  },
  {
    id: "retirement",
    name: "Retirement",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18C7.03 3 3 7.03 3 12h18c0-4.97-4.03-9-9-9zm0 18a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    id: "stepup",
    name: "Step-Up SIP",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "swp",
    name: "SWP",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "emi",
    name: "EMI",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState("sip");

  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        {/* Heading — fade in from below */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <SectionHeading
            eyebrow="Tools"
            title="Financial Calculators"
            subtitle="Use our comprehensive suite of calculators to plan your financial goals and estimate returns."
            align="center"
          />
        </motion.div>

        {/* Tab bar — fade in + staggered children */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-2xl p-3 md:p-4 shadow-sm border border-neutral-200/80 max-w-6xl mx-auto mb-10 overflow-x-auto"
        >
          <div className="flex items-center gap-1.5 md:gap-2 min-w-max">
            {tabs.map((tab, i) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.35, ease: "easeOut" }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-900 text-white shadow-sm ring-2 ring-brand-900"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span>{tab.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Calculator panel — AnimatePresence slides up + fades on tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeTab === "inflation" && <InflationCalculator />}
            {activeTab === "sip" && <SIPCalculator defaultTab="SIP" hideToggle />}
            {activeTab === "lumpsum" && <SIPCalculator defaultTab="Lumpsum" hideToggle />}
            {activeTab === "retirement" && <RetirementCalculator />}
            {activeTab === "swp" && <SWPCalculator />}
            {activeTab === "stepup" && <StepUpCalculator />}
            {activeTab === "emi" && <EMICalculator />}
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>
    </main>
  );
}
