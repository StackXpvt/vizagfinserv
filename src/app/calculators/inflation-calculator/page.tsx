import React, { Suspense } from "react";
import type { Metadata } from "next";
import InflationCalculator from "@/components/calculators/InflationCalculator";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Inflation Calculator — Estimate Purchasing Power",
  description:
    "Understand the impact of inflation on your money. Calculate the future cost of today's expenses and see how purchasing power declines over time.",
  keywords: [
    "Inflation Calculator",
    "purchasing power calculator",
    "future value of expense",
    "real value of money",
    "VizagFinServ",
  ],
};

export default function InflationCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Financial Tools"
            title="Inflation Calculator"
            subtitle="Understand the impact of rising costs on your savings. Calculate what a sum of money will buy in the future and what you need to invest to beat inflation."
            align="center"
          />
        </div>

        <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-medium">Loading Calculator...</div>}>
          <InflationCalculator />
        </Suspense>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-8 font-heading">
            Inflation: The Silent Wealth Destroyer
          </h2>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                What is Inflation?
              </h3>
              <p>
                Inflation is the rate at which the general level of prices for goods and services is rising, and subsequently, your purchasing power is falling. In simple terms, inflation means your money buys less tomorrow than it does today. If a basket of groceries costs ₹1,000 today and inflation is at 6%, that same basket will cost ₹1,060 next year.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                Nominal Value vs. Real Value
              </h3>
              <p>
                When planning for long-term goals like retirement or children's education, looking only at nominal values (the face value of money) can be misleading. You must calculate the **real value** — which is adjusted for inflation. 
              </p>
              <p className="mt-3">
                For example, if you save ₹1 Crore for retirement 25 years from now, it will only have the purchasing power of about ₹23 Lakhs today (assuming a 6% inflation rate). This highlights why simply keeping cash in low-yielding bank accounts actually decreases your real wealth over time.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                How to Protect Your Savings from Inflation
              </h3>
              <p>
                To grow your wealth in real terms, you must invest in assets that deliver a **real rate of return** (return rate minus inflation rate) that is positive. Historically, equity-oriented mutual funds have been one of the few asset classes that have consistently beaten inflation over long-term horizons, helping investors build and preserve wealth.
              </p>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-xs text-neutral-400 leading-relaxed">
            <strong className="text-neutral-500">Disclaimer:</strong> The calculations shown are for illustrative and educational purposes only and are based on standard historical compound inflation formulas. Actual inflation rates vary by economic conditions, consumption baskets, and geography. VizagFinServ (ARN 138117) provides this tool to support goal-based financial education.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
