'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { DISCLAIMERS } from '@/lib/constants';

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  index: number;
  isLast?: boolean;
}

function AnimatedStat({ value, label, icon, index, isLast = false }: AnimatedStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-5 md:p-8 flex flex-col items-center justify-center text-center group ${
        isLast ? 'bg-brand-900/5' : ''
      }`}
    >
      {/* Icon */}
      <div className="text-brand-800/30 mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      {/* Value */}
      <div className="text-2xl md:text-[2.5rem] text-brand-900 font-bold tracking-tight tabular-lining-nums">
        {value}
      </div>
      {/* Label */}
      <div className="text-[10px] md:text-[11px] font-semibold text-neutral-500 uppercase tracking-[0.15em] mt-1">
        {label}
      </div>
    </motion.div>
  );
}

export default function BusinessSnapshot() {
  return (
    <section className="relative z-20 -mt-14 mx-auto max-w-[1100px] px-4 md:px-0 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-100"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200/60">
          <AnimatedStat
            value="Since 2017"
            label="Years of Service"
            index={0}
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />
          <AnimatedStat
            value="₹140+ Cr"
            label="Assets Under Distribution"
            index={1}
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <AnimatedStat
            value="100+"
            label="Families Served"
            index={2}
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            }
          />
          <AnimatedStat
            value="₹30L+"
            label="Monthly SIP Book"
            index={3}
            isLast
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            }
          />
        </div>
      </motion.div>

      {/* Disclaimer */}
      <p className="mt-4 text-center text-[11px] text-neutral-400 max-w-2xl mx-auto px-4">
        {DISCLAIMERS.statsDisclaimer}
      </p>
    </section>
  );
}
