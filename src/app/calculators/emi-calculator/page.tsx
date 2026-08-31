import React, { Suspense } from "react";
import type { Metadata } from "next";
import EMICalculator from "@/components/calculators/EMICalculator";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "EMI Calculator — Loan Repayments Plan",
  description:
    "Use our free EMI Calculator to estimate Equated Monthly Installments for home, auto, or personal loans. Calculate total interest payable.",
  keywords: [
    "EMI Calculator",
    "Equated Monthly Installment",
    "home loan emi",
    "loan calculator",
    "interest rate calculator",
  ],
};

export default function EMICalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading
            eyebrow="Financial Tools"
            title="EMI Calculator"
            subtitle="Plan your borrowing responsibly. Calculate monthly loan payments, total interest, and the total cost of repaying your loan."
            align="center"
          />
        </div>

        <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-medium">Loading Calculator...</div>}>
          <EMICalculator />
        </Suspense>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-8 font-heading">
            Understanding Loan EMIs
          </h2>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                What is an EMI?
              </h3>
              <p>
                An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are structured to pay off both the interest and the principal components of a loan over a set tenure, ensuring the loan is completely paid off by the end of the duration.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                How is EMI Calculated?
              </h3>
              <p className="mb-4">
                The standard formula used to compute loan EMIs is:
              </p>
              <div className="bg-brand-50 p-5 rounded-xl font-mono text-brand-900 text-sm md:text-base overflow-x-auto border border-brand-100">
                EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> − 1)
              </div>
              <ul className="list-disc pl-6 mt-5 space-y-2">
                <li>
                  <strong>P</strong> — Principal loan amount borrowed
                </li>
                <li>
                  <strong>r</strong> — Monthly interest rate, calculated as (Annual Interest Rate / 12) / 100
                </li>
                <li>
                  <strong>n</strong> — Loan tenure in number of months (Tenure in Years × 12)
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-brand-800 mb-3">
                Principal vs Interest Component
              </h3>
              <p>
                In the early years of a loan, a major portion of your EMI goes towards paying the interest. As time progresses and the principal reduces, the interest component decreases and the principal repayment component increases. This amortization schedule ensures you pay off the lender's interest requirements while reducing the actual debt.
              </p>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-xs text-neutral-400 leading-relaxed">
            <strong className="text-neutral-500">Disclaimer:</strong> The calculations shown are estimates for illustrative purposes only and do not constitute an offer, sanction, or guarantee of a loan. Actual EMI schedules may vary based on processing fees, compounding frequency, and lenders' specific floating-rate recalculations. VizagFinServ (ARN 138117) provides this tool for financial planning and educational purposes.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
