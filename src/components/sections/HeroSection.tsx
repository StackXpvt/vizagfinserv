'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/Icons';

export default function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const chartData = [
    { year: "Yr 1", value: "1.2x", height: 20 },
    { year: "Yr 3", value: "1.8x", height: 35 },
    { year: "Yr 5", value: "2.8x", height: 48 },
    { year: "Yr 7", value: "4.2x", height: 65 },
    { year: "Yr 9", value: "6.5x", height: 82 },
    { year: "Yr 10", value: "10.0x", height: 100 },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-36 overflow-hidden bg-brand-950 text-white">
      {/* Background architectural image */}
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute right-[-10%] top-[-20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-brand-800 to-transparent blur-3xl opacity-50 mix-blend-screen" />

      {/* Content */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left: Text Content (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="col-span-1 lg:col-span-8 flex flex-col items-start gap-6 lg:gap-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-brand-300 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-200">
              AMFI-Registered Distributor
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.08] max-w-[800px] font-heading text-white">
            Invest with{' '}
            <span className="text-brand-300 italic">clarity.</span>
            <br />
            Stay disciplined.
            <br />
            Think long term.
          </h1>

          {/* Supporting copy with left border */}
          <p className="text-base md:text-lg text-brand-200/80 max-w-[600px] leading-relaxed border-l-4 border-brand-300 pl-4 md:pl-5">
            Partnering with families to build resilient mutual fund portfolios. We focus on process-driven distribution grounded in enduring financial principles, not market noise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <motion.a
              href="/contact"
              whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(174, 199, 247, 0.25)' }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-300 text-brand-950 font-semibold text-sm px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <Button
              href="/our-approach"
              variant="ghost"
              size="lg"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              View Methodology
            </Button>
          </div>
        </motion.div>

        {/* Right: Decorative Chart Card (4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="col-span-1 lg:col-span-4 hidden lg:flex items-end justify-end relative"
        >
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-[3/4] bg-brand-800 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between border border-white/10 backdrop-blur-md group cursor-pointer"
          >
            {/* Header */}
            <div className="flex justify-between items-center text-white/50 text-xs font-medium mb-4">
              <span>Long-Term View</span>
              <span>10Y Horizon</span>
            </div>

            {/* Bar chart */}
            <div className="flex-grow flex flex-col justify-end w-full relative mt-6">
              {/* Bars container */}
              <div className="flex-grow flex items-end gap-2 w-full relative">
                {chartData.map((bar, i) => {
                  const isHovered = hoveredIndex === i;
                  const isAnyHovered = hoveredIndex !== null;
                  return (
                    <div
                      key={i}
                      className="relative w-1/6 h-full flex flex-col justify-end cursor-pointer group/bar"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Tooltip */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -15, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            className="absolute left-1/2 -translate-x-1/2 bg-white text-brand-950 text-[10px] font-bold px-2 py-1 rounded shadow-md whitespace-nowrap z-20 pointer-events-none"
                            style={{ bottom: `${bar.height}%` }}
                          >
                            {bar.value}
                            <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ 
                          height: `${bar.height}%`,
                        }}
                        transition={{ 
                          height: { duration: 1, delay: 0.5 + i * 0.12, ease: 'easeOut' },
                        }}
                        whileHover={{
                          scaleY: 1.05,
                          backgroundColor: '#89b8e3',
                          boxShadow: '0 0 20px rgba(137, 184, 227, 0.8)'
                        }}
                        className="w-full rounded-t-sm origin-bottom transition-all duration-300"
                        style={{
                          backgroundColor: isHovered 
                            ? '#89b8e3' 
                            : (isAnyHovered 
                              ? `rgba(137, 184, 227, 0.15)` 
                              : `rgba(137, 184, 227, ${0.2 + i * 0.16})`),
                          boxShadow: i === 5 && !isAnyHovered ? '0 0 15px rgba(137, 184, 227, 0.5)' : 'none',
                        }}
                      />
                    </div>
                  );
                })}

                {/* Overlay curve line */}
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 5,80 C 20,70 35,65 50,50 C 65,30 80,15 95,0"
                    fill="none"
                    stroke={hoveredIndex !== null ? "#89b8e3" : "#ffffff"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: hoveredIndex !== null ? 0.9 : 0.5 }}
                    transition={{ 
                      pathLength: { duration: 1.5, delay: 1, ease: 'easeInOut' },
                      stroke: { duration: 0.3 },
                      opacity: { duration: 0.3 }
                    }}
                  />
                  {/* Glowing secondary path on hover */}
                  <AnimatePresence>
                    {hoveredIndex !== null && (
                      <motion.path
                        d="M 5,80 C 20,70 35,65 50,50 C 65,30 80,15 95,0"
                        fill="none"
                        stroke="#89b8e3"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="blur-sm opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </svg>
              </div>

              {/* Labels Row */}
              <div className="flex justify-between w-full mt-3 pt-2 border-t border-white/5">
                {chartData.map((bar, i) => (
                  <span 
                    key={i} 
                    className="w-1/6 text-center text-[10px] font-medium transition-colors duration-300"
                    style={{
                      color: hoveredIndex === i ? '#89b8e3' : 'rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    {bar.year}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
