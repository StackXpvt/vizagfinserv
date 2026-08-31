import React, { Suspense } from "react";
import type { Metadata } from "next";
import StepUpCalculator from "@/components/calculators/StepUpCalculator";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Step-Up SIP Calculator — Growth Investment Plan",
  description:
    "Calculate the impact of increasing your SIP contributions annually in line with your income growth. Reach your financial targets faster with VizagFinServ.",
  keywords: [
    "Step-Up SIP",
    "SIP Calculator with annual increment",
    "growing systematic investment",
    "wealth creation calculator",
    "VizagFinServ",
  ],
};

export default function StepUpCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Financial Tools"
            title="Step-Up SIP Calculator"
            subtitle="Accelerate your wealth building. See how stepping up your monthly investments periodically as your income rises significantly grows your end value."
            align="center"
          />
        </div>

        <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-medium">Loading Calculator...</div>}>
          <StepUpCalculator />
        </Suspense>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-8 font-heading">
            The Power of a Step-Up Systematic Investment Plan
          </h2>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                What is a Step-Up SIP?
              </h3>
              <p>
                A Step-Up SIP (also known as a Top-up SIP) is an investment feature that allows you to increase your monthly SIP contribution by a fixed percentage or amount at regular intervals (typically once a year). This feature is designed to sync your investments with your salary increments or business income growth.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                Why Step-Up SIP is Better Than a Fixed SIP
              </h3>
              <p>
                As your income increases over your career, your savings rate should ideally increase as well. Maintaining a flat SIP amount for 15–20 years doesn't leverage your growing financial strength.
              </p>
              <p className="mt-3">
                For example, a fixed SIP of ₹10,000 monthly for 20 years at a 12% return yields approximately **₹1 Crore**. However, if you simply increase (step-up) your SIP by **10% every year**, your accumulated corpus grows to over **₹2 Crore** — double the value, with manageable incremental steps.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                The Practical Approach to Stepping Up
              </h3>
              <p>
                Stretching to save a large sum right at the beginning of your career is difficult. The Step-Up approach lets you start small today (e.g. ₹5,000) and scale up gradually (adding ₹500 or 10% next year) as your disposable income increases. It makes ambitious long-term goals highly achievable.
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
            results. Actual growth depends on scheme performance and market cycles.
            VizagFinServ (ARN 138117) provides regular plan mutual fund distribution
            and educational tracking.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
