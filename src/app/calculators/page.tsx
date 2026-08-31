import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Financial Calculators",
  description:
    "Plan your financial goals with our easy-to-use financial calculators. Estimate returns on SIPs, lumpsum investments, and more with VizagFinServ.",
};

const calculators = [
  {
    title: "SIP Calculator",
    description:
      "Calculate the future value of your systematic monthly investments and see the power of compounding.",
    href: "/calculators/sip-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    isAvailable: true,
  },
  {
    title: "Lumpsum Calculator",
    description:
      "Estimate returns on one-time mutual fund investments and plan your surplus deployment.",
    href: "/calculators/sip-calculator?tab=lumpsum",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    isAvailable: true,
  },
  {
    title: "SWP Calculator",
    description:
      "Plan your regular withdrawals from mutual funds for steady post-retirement income.",
    href: "/calculators/swp-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    ),
    isAvailable: true,
  },
  {
    title: "Step-Up SIP Calculator",
    description:
      "See the compounding power of increasing your SIP contributions annually as your income grows.",
    href: "/calculators/step-up-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    isAvailable: true,
  },
  {
    title: "Retirement Calculator",
    description:
      "Calculate the inflation-adjusted target corpus you need and your monthly savings required.",
    href: "/calculators/retirement-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
        />
      </svg>
    ),
    isAvailable: true,
  },
  {
    title: "Inflation Calculator",
    description:
      "Understand the impact of inflation on your purchasing power and estimate future living costs.",
    href: "/calculators/inflation-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
    isAvailable: true,
  },
  {
    title: "EMI Calculator",
    description:
      "Estimate your Equated Monthly Installment repayments and total interest costs for any loan.",
    href: "/calculators/emi-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    isAvailable: true,
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-brand-50/30 pt-24 pb-20">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            eyebrow="Tools"
            title="Financial Calculators"
            subtitle="Use our comprehensive suite of calculators to plan your investments, estimate returns, and take the first step towards your financial goals."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {calculators.map((calc, idx) => (
            <div key={idx} className="relative group h-full">
              {calc.isAvailable ? (
                <Link href={calc.href} className="block h-full">
                  <div className="h-full bg-white rounded-2xl p-8 border border-brand-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-300 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 text-brand-600">
                      {calc.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-900 mb-2 font-heading">
                      {calc.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {calc.description}
                    </p>
                    <div className="mt-6 flex items-center text-brand-600 font-semibold text-sm group-hover:text-brand-800 transition-colors">
                      Try Calculator
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="h-full bg-white rounded-2xl p-8 border border-neutral-100 opacity-70 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="bg-neutral-100 text-neutral-500 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                  <div className="w-14 h-14 bg-neutral-50 rounded-xl flex items-center justify-center mb-5 text-neutral-400">
                    {calc.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-400 mb-2 font-heading">
                    {calc.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {calc.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
