'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="bg-brand-950 text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 mb-3">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-brand-200 text-base md:text-lg leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
