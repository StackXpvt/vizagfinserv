'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { AMC_PARTNERS } from '@/lib/constants';

export default function AssociateWith() {
  return (
    <SectionWrapper background="white" id="associate-with">
      <SectionHeading
        eyebrow="Associated With"
        title="Mutual Fund Houses We Distribute"
        subtitle="Access to schemes across India's leading asset management companies."
      />

      {/* Logo Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
        {AMC_PARTNERS.map((partner, i) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="group flex items-center justify-center p-3 md:p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-300 aspect-square"
          >
            <span className="text-[11px] md:text-xs font-semibold text-neutral-500 group-hover:text-brand-700 text-center leading-tight transition-colors duration-300">
              {partner}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-neutral-400 max-w-2xl mx-auto">
        The above are mutual fund houses whose schemes are distributed. This does not imply endorsement or recommendation of any specific AMC or scheme. Scheme selection should be based on individual goals and suitability.
      </p>
    </SectionWrapper>
  );
}
