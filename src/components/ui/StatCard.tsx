'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  display: string;
  index: number;
}

export default function StatCard({
  label,
  value,
  prefix = '',
  suffix = '',
  display,
  index,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, hasAnimated]);

  // For "Since 2017", don't animate — just show the display value
  const isYear = label === 'Years of Service';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6 md:p-8"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-800 font-heading mb-2">
        {isYear ? display : `${prefix}${count}${suffix}`}
      </div>
      <div className="text-sm md:text-base text-neutral-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
