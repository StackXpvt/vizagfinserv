'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { DIFFERENTIATORS } from '@/lib/constants';
import {
  UserIcon,
  CalendarIcon,
  EyeIcon,
  HandshakeIcon,
  GridIcon,
  FocusIcon,
} from '@/components/ui/Icons';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  user: UserIcon,
  calendar: CalendarIcon,
  eye: EyeIcon,
  handshake: HandshakeIcon,
  grid: GridIcon,
  focus: FocusIcon,
};

export default function WhyWorkWithUs() {
  return (
    <SectionWrapper background="light" id="why-us">
      <SectionHeading
        eyebrow="Why Work With Us"
        title="Built for trust, not transactions"
        subtitle="What makes our approach different—focused on relationships, transparency and your long-term financial well-being."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {DIFFERENTIATORS.map((item, i) => {
          const IconComponent = iconMap[item.icon] || UserIcon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 md:p-7 rounded-xl bg-white border border-neutral-200 hover:border-brand-200 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-brand-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
