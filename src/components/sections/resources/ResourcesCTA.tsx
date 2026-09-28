'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ResourcesCTA() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-brand-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-800/30 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 mb-3">
            Plan Ahead
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading leading-tight mb-5">
            See how your goals could grow
          </h2>
          <p className="text-base md:text-lg text-brand-200/80 leading-relaxed mb-10">
            Use our calculators to estimate SIPs, lumpsum growth, retirement corpus and more—then talk to us about turning the numbers into a plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/calculators"
              className="!bg-white !text-brand-900 hover:!bg-brand-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 font-semibold"
              size="lg"
            >
              Try Our Calculators
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="lg"
              className="!text-white border-2 border-brand-500/30 hover:border-brand-300 hover:!bg-brand-800/50 hover:!text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Talk to Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
