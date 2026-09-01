import React, { Suspense } from "react";
import type { Metadata } from "next";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Retirement Calculator — Estimate Target Corpus",
  description:
    "Plan your retirement with our easy-to-use Retirement Calculator. Estimate your future living costs, total target corpus, and monthly SIP requirements.",
  keywords: [
    "Retirement Calculator",
    "retirement planning",
    "pension corpus calculator",
    "inflation adjusted retirement",
    "VizagFinServ",
  ],
};

export default function RetirementCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Financial Tools"
            title="Retirement Calculator"
            subtitle="Plan your golden years with confidence. Calculate the retirement corpus you need based on inflation, living expenses, and life expectancy."
            align="center"
          />
        </div>

        <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-medium">Loading Calculator...</div>}>
          <RetirementCalculator />
        </Suspense>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-8 font-heading">
            The Essentials of Retirement Planning
          </h2>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                Why Retirement Planning is Critical
              </h3>
              <p>
                Retirement planning is not just about setting aside surplus money; it is about building a secure financial runway for the stage of life when active income ceases. Two primary forces make planning essential:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Inflation:</strong> A monthly lifestyle costing ₹50,000 today will cost significantly more in 20 or 30 years. At a modest 6% annual inflation, prices will double in 12 years.
                </li>
                <li>
                  <strong>Longevity:</strong> With medical advancements, people are living longer. Your retirement corpus needs to support you for 20, 25, or even 30+ years post-retirement.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                How Your Retirement Corpus is Estimated
              </h3>
              <p>
                A comprehensive retirement plan involves two phases:
              </p>
              <ol className="list-decimal pl-6 mt-3 space-y-2">
                <li>
                  <strong>Accumulation Phase (Pre-Retirement):</strong> The years you spend working and growing your investments (usually via equity-oriented or balanced mutual fund SIPs) to reach the target retirement corpus.
                </li>
                <li>
                  <strong>Distribution Phase (Post-Retirement):</strong> The years you systematically draw down your accumulated corpus (often using tax-efficient routes like SWPs) while keeping the remainder invested in conservative options that beat inflation.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                The Power of Starting Early
              </h3>
              <p>
                The sooner you begin investing, the lower the monthly contribution you require. Compounding grows exponentially in its final years. Delaying retirement planning by even 5 years can nearly double the monthly SIP investment required to reach the exact same target corpus.
              </p>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-xs text-neutral-400 leading-relaxed">
            <strong className="text-neutral-500">Disclaimer:</strong> Mutual
            Fund investments are subject to market risks, read all scheme related
            documents carefully. The calculations shown are for illustrative
            purposes only and do not represent actual returns or guarantee future
            results. Post-retirement yield is subject to portfolio selection and
            prevailing market interest rates. This calculator should not be construed
            as financial or retirement advice. VizagFinServ (ARN 138117) is an
            AMFI-Registered Mutual Fund Distributor and not a SEBI-Registered
            Investment Adviser.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
