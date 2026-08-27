'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import {
  PRIMARY_SERVICES,
  SUPPORTING_SERVICES,
  ADDITIONAL_SERVICES,
} from '@/lib/constants';

export default function ServicesSection() {
  return (
    <SectionWrapper background="white" id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Services"
        subtitle="Comprehensive mutual fund distribution and goal-based investing support, backed by personalized service."
      />

      {/* Primary Services */}
      <div className="mb-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-brand-800 mb-5"
        >
          Mutual Fund & Goal-Based Investing
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PRIMARY_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Supporting Services */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 p-5 md:p-6 bg-neutral-50 rounded-xl border border-neutral-100"
      >
        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
          Supporting Services
        </h4>
        <ul className="flex flex-wrap gap-3">
          {SUPPORTING_SERVICES.map((service) => (
            <li
              key={service}
              className="text-sm text-neutral-600 bg-white px-4 py-2 rounded-lg border border-neutral-200"
            >
              {service}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Additional Services */}
      <div className="mb-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-neutral-700 mb-5"
        >
          Additional Services
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl">
          {ADDITIONAL_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              note={service.note}
              index={i}
              variant="secondary"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button href="/services" variant="outline">
          View All Services
        </Button>
      </div>
    </SectionWrapper>
  );
}
