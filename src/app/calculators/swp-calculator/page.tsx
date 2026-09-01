import React, { Suspense } from "react";
import type { Metadata } from "next";
import SWPCalculator from "@/components/calculators/SWPCalculator";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "SWP Calculator — Plan Your Cashflows",
  description:
    "Use our free SWP (Systematic Withdrawal Plan) Calculator to plan regular withdrawals from your mutual fund investments and estimate the remaining balance.",
  keywords: [
    "SWP Calculator",
    "Systematic Withdrawal Plan",
    "regular income mutual funds",
    "retirement cashflow calculator",
    "VizagFinServ",
  ],
};

export default function SWPCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Financial Tools"
            title="SWP Calculator"
            subtitle="Plan a regular income stream from your investments. Estimate total withdrawals and the final remaining balance over your chosen tenure."
            align="center"
          />
        </div>

        <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-medium">Loading Calculator...</div>}>
          <SWPCalculator />
        </Suspense>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-8 font-heading">
            Understanding Systematic Withdrawal Plans (SWP)
          </h2>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                What is an SWP Calculator?
              </h3>
              <p>
                An SWP (Systematic Withdrawal Plan) calculator is a tool designed to help you determine the cash flows and remaining balance of your mutual fund investments when you make regular withdrawals. Unlike a SIP where you put money in, an SWP allows you to systematically take money out of your accumulated corpus — making it a popular choice for retirees seeking monthly pension-like income.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                How does an SWP work?
              </h3>
              <p>
                When you set up an SWP, you specify an amount to withdraw at regular intervals (usually monthly). On the withdrawal date, the mutual fund house redeems equivalent units from your portfolio to pay you that amount. 
              </p>
              <p className="mt-3">
                While withdrawals reduce your corpus, the remaining balance continues to grow at your fund's expected rate of return. If the rate of return is higher than the rate of withdrawal, your corpus can continue to grow over time. If withdrawals exceed growth, the corpus will gradually deplete.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                Benefits of an SWP
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Regular Income Stream:</strong> Provides customized income suited to your lifestyle needs.
                </li>
                <li>
                  <strong>Rupee Cost Averaging in Reverse:</strong> When markets are high, fewer units are redeemed; when markets are low, more units are redeemed.
                </li>
                <li>
                  <strong>Tax Efficiency:</strong> SWP withdrawals are treated as redemptions. Only the capital gains portion is taxed, not the entire withdrawn amount, which can be highly tax-efficient compared to interest income.
                </li>
              </ul>
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
            results. The estimated returns are based on a projected annual growth
            rate. Actual returns may vary significantly depending on market
            conditions. This calculator should not be construed as investment
            advice. VizagFinServ (ARN 138117) is an AMFI-Registered Mutual Fund
            Distributor and not a SEBI-Registered Investment Adviser.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
