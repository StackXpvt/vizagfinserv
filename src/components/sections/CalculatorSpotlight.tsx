'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CALCULATORS = [
  {
    name: 'SIP',
    desc: 'Monthly growth',
    href: '/calculators/sip-calculator',
    color: 'text-emerald-600 bg-emerald-50',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'Step-Up',
    desc: 'Annual increments',
    href: '/calculators/step-up-calculator',
    color: 'text-blue-600 bg-blue-50',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
  },
  {
    name: 'Retirement',
    desc: 'Target corpus',
    href: '/calculators/retirement-calculator',
    color: 'text-amber-600 bg-amber-50',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'SWP',
    desc: 'Regular pension',
    href: '/calculators/swp-calculator',
    color: 'text-purple-600 bg-purple-50',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Inflation',
    desc: 'Cost of living',
    href: '/calculators/inflation-calculator',
    color: 'text-rose-600 bg-rose-50',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'EMI',
    desc: 'Loan planner',
    href: '/calculators/emi-calculator',
    color: 'text-sky-600 bg-sky-50',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function CalculatorSpotlight() {
  return (
    <section className="py-12 md:py-16 bg-white relative z-10">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-200/80"
        >
          {/* Left Side: Text Content (Dark) */}
          <div className="lg:w-[40%] bg-brand-950 p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-brand-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Planning Tools
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 leading-tight">
                Smart Financial <br className="hidden lg:block" /> Calculators
              </h2>
              <p className="text-brand-200 text-sm sm:text-base leading-relaxed mb-8">
                Take the guesswork out of wealth creation. Use our interactive tools to model your SIPs, plan retirement, and understand inflation.
              </p>
              
              <Link
                href="/calculators"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-950 text-sm font-bold shadow-lg hover:bg-brand-50 transition-all hover:scale-105 active:scale-95 group w-max"
              >
                <span>Explore All Tools</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Grid of Calculators (Light) */}
          <div className="lg:w-[60%] p-6 sm:p-8 lg:p-12 bg-neutral-50/50 flex items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              {CALCULATORS.map((calc, i) => (
                <motion.div
                  key={calc.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={calc.href}
                    className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-brand-900/30 shadow-sm hover:shadow-md hover:border-brand-900 hover:ring-1 hover:ring-brand-900 transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className={`w-12 h-12 rounded-full ${calc.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {calc.icon}
                    </div>
                    <h4 className="text-sm font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                      {calc.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-1 line-clamp-2">
                      {calc.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
