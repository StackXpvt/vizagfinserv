'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function InvestmentPhilosophy() {
  return (
    <SectionWrapper background="dark" id="investment-philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            <Image
              src="/images/philosophy.webp"
              alt="Family discussing long-term financial goals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/20 to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-brand-100 max-w-[220px] text-left"
          >
            <p className="text-sm font-semibold text-brand-900">Goals-First Approach</p>
            <p className="text-xs text-neutral-600 mt-1">
              Every investment starts with understanding what the money is for.
            </p>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <SectionHeading
            eyebrow="Investment Philosophy"
            title="Goals come before products"
            subtitle="The right investment approach starts with understanding what you're working towards—not which fund is trending today."
            align="left"
            light={true}
          />

          <div className="space-y-4 text-brand-100/80 text-sm md:text-base leading-relaxed">
            <p>
              Whether it&apos;s building a retirement corpus, funding your child&apos;s education, saving for a home, or creating long-term financial independence—meaningful goals deserve a disciplined and thoughtful approach.
            </p>
            <p>
              We believe in staying invested through market cycles rather than reacting to short-term volatility. Discipline and patience have historically been more reliable allies than market timing.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/our-approach" variant="secondary" size="md" className="border-transparent shadow-lg shadow-black/10">
              Explore Our Approach
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
