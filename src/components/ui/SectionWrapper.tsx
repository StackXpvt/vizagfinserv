'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'brand' | 'dark';
}

const bgClasses: Record<string, string> = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  brand: 'bg-brand-50',
  dark: 'bg-brand-950 text-white',
};

export default function SectionWrapper({
  children,
  className = '',
  id,
  background = 'white',
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <div className="container-narrow">{children}</div>
    </motion.section>
  );
}
