'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxW = align === 'center' ? 'max-w-2xl' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${alignClass} ${maxW} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? 'text-brand-300' : 'text-brand-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight ${
          light ? 'text-white' : 'text-brand-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-brand-200' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
