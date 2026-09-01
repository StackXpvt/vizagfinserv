import React, { Suspense } from "react";
import type { Metadata } from "next";
import SIPCalculator from "@/components/calculators/SIPCalculator";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "SIP Calculator — Plan Your Investments",
  description:
    "Use our free SIP Calculator to estimate returns on your mutual fund SIP and lumpsum investments. Plan your financial goals with VizagFinServ — AMFI-Registered MFD (ARN 138117).",
  keywords: [
    "SIP Calculator",
    "Mutual Fund Calculator",
    "Lumpsum Calculator",
    "investment returns",
    "VizagFinServ",
    "systematic investment plan",
    "compound interest calculator",
  ],
};

export default function SIPCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-16">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Financial Tools"
            title="SIP Calculator"
            subtitle="Estimate the future value of your systematic investment plan (SIP) or lumpsum investments and plan your financial goals."
            align="center"
          />
        </div>

        {/* Calculator Widget */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-medium">Loading Calculator...</div>}>
          <SIPCalculator />
        </Suspense>

        {/* Educational Content */}
        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-8 font-heading">
            Understanding SIP & Investment Planning
          </h2>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            {/* What is a SIP */}
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                What is a SIP Calculator?
              </h3>
              <p>
                A SIP (Systematic Investment Plan) calculator is a tool that
                helps you estimate the returns on your mutual fund investments
                made through SIP. It provides a projection of the future value
                of your investments based on the expected rate of return and the
                investment duration. SIPs allow you to invest a fixed amount
                regularly — weekly, monthly, or quarterly — into a mutual fund
                scheme of your choice.
              </p>
            </section>

            {/* How it works */}
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                How does a SIP Calculator work?
              </h3>
              <p className="mb-4">
                The calculator uses the future value of an annuity formula to
                estimate returns. The formula is:
              </p>
              <div className="bg-brand-50 p-5 rounded-xl font-mono text-brand-900 text-sm md:text-base overflow-x-auto border border-brand-100">
                M = P × ({"{"} [(1 + i)<sup>n</sup> − 1] / i {"}"}) × (1 + i)
              </div>
              <ul className="list-disc pl-6 mt-5 space-y-2">
                <li>
                  <strong>M</strong> — Maturity amount (total value at the end)
                </li>
                <li>
                  <strong>P</strong> — Amount invested at regular intervals
                  (e.g. monthly)
                </li>
                <li>
                  <strong>n</strong> — Total number of payments (years × 12 for
                  monthly SIP)
                </li>
                <li>
                  <strong>i</strong> — Effective monthly rate, calculated as{" "}
                  <code className="bg-brand-50 px-1.5 py-0.5 rounded text-xs">
                    (1 + annual_rate)<sup>1/12</sup> − 1
                  </code>
                </li>
              </ul>
              <p className="mt-4 text-sm text-neutral-500">
                <strong>Note:</strong> A common mistake is dividing the annual
                rate by 12 (e.g. 12% → 1%). The correct approach converts using
                compound interest: for 12% p.a., the effective monthly rate is
                ~0.949%, not 1%.
              </p>
            </section>

            {/* Advantages */}
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                Advantages of SIP Investing
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Disciplined Investing:</strong> Encourages a regular
                  saving habit by automating investments.
                </li>
                <li>
                  <strong>Rupee Cost Averaging:</strong> You buy more units when
                  markets are low and fewer when they are high, averaging out the
                  cost over time.
                </li>
                <li>
                  <strong>Power of Compounding:</strong> Returns generated on
                  your investment start generating their own returns, creating a
                  snowball effect over time.
                </li>
                <li>
                  <strong>Flexibility:</strong> Start with as little as ₹500 per
                  month and increase, decrease, or pause as needed.
                </li>
                <li>
                  <strong>No Market Timing:</strong> Removes the stress of
                  deciding when to enter the market.
                </li>
              </ul>
            </section>

            {/* SIP vs Lumpsum */}
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                SIP vs Lumpsum
              </h3>
              <p>
                While SIP involves investing small, regular amounts, a Lumpsum
                investment means deploying a larger amount of money in one go.
                SIP is generally preferred for salaried individuals looking to
                build wealth systematically while managing volatility. Lumpsum
                investing can be advantageous when you have surplus funds and a
                longer time horizon. Both approaches have their merits — and in
                practice, many investors use a combination of both.
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
