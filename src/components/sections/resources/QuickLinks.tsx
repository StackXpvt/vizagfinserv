'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { ExternalLink } from 'lucide-react';

const QUICK_LINKS = [
  {
    title: 'CVL KRA',
    description: 'Check or update your KYC (Know Your Customer) status for mutual fund investments.',
    href: 'https://www.cvlkra.com/',
  },
  {
    title: 'MF Central',
    description: 'A unified hub by CAMS & KFintech to view all your mutual fund folios and manage service requests.',
    href: 'https://www.mfcentral.com/',
  },
  {
    title: 'CAMS Online',
    description: 'Request Consolidated Account Statements (CAS) and manage funds serviced by CAMS.',
    href: 'https://www.camsonline.com/',
  },
  {
    title: 'KFintech',
    description: 'Manage investments and request account statements for mutual funds serviced by KFintech.',
    href: 'https://mfs.kfintech.com/mfs/',
  },
  {
    title: 'AMFI India',
    description: 'Association of Mutual Funds in India. Find daily NAVs, investor education, and industry updates.',
    href: 'https://www.amfiindia.com/',
  },
];

export default function QuickLinks() {
  return (
    <SectionWrapper background="white" id="quick-links">
      <SectionHeading
        eyebrow="Essential Links"
        title="Quick Access Portals"
        subtitle="Important external platforms to manage your KYC, download consolidated statements, and access industry resources."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {QUICK_LINKS.map((link, i) => (
          <motion.a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex flex-col p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-brand-900 group-hover:text-brand-600 transition-colors">
                {link.title}
              </h3>
              <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {link.description}
            </p>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
