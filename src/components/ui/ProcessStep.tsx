'use client';

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  index,
  isLast = false,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-5 md:gap-6"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-800 text-white flex items-center justify-center text-lg md:text-xl font-bold font-heading shrink-0 shadow-md shadow-brand-200">
          {number}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-brand-300 to-brand-100 mt-3" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 md:pb-12 ${isLast ? 'pb-0' : ''}`}>
        <h3 className="text-xl md:text-2xl font-semibold text-brand-900 mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
