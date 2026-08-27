'use client';

import { motion } from 'framer-motion';

interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export default function PrincipleCard({
  number,
  title,
  description,
  index,
}: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative p-6 md:p-8 rounded-xl bg-white border border-neutral-200 hover:border-brand-300 transition-all duration-300 hover:shadow-lg hover:shadow-brand-50"
    >
      <span className="block text-5xl md:text-6xl font-bold text-brand-100 group-hover:text-brand-200 transition-colors duration-300 font-heading mb-4">
        {number}
      </span>
      <h3 className="text-xl font-semibold text-brand-900 mb-3">{title}</h3>
      <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
