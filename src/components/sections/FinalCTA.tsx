'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CONTACT, DISCLAIMERS } from '@/lib/constants';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/ui/Icons';

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-brand-900">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-800/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-700/30 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-5">
            Let&apos;s Start Your{' '}
            <span className="text-brand-300">Investment Journey</span>
          </h2>
          <p className="text-base md:text-lg text-brand-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Reach out for a no-obligation conversation about your investment goals. Whether you&apos;re just starting or looking to review your existing portfolio, we&apos;re here to help.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              href="/contact"
              className="bg-white text-brand-900 hover:bg-brand-50"
              size="lg"
            >
              Start a Conversation
            </Button>
            <Button
              href={CONTACT.phoneHref}
              variant="ghost"
              size="lg"
              className="text-white border border-brand-500/30 hover:bg-brand-800/50 hover:text-white"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              Call {CONTACT.phone}
            </Button>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-brand-300">
            <a
              href={CONTACT.emailHref}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <span className="hidden sm:inline text-brand-600">·</span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              {CONTACT.location}
            </span>
          </div>

          {/* Registration */}
          <p className="mt-6 text-xs text-brand-500">
            {CONTACT.name} · {CONTACT.designation} · {CONTACT.arn} | {CONTACT.euin}
          </p>

          {/* Risk Disclaimer */}
          <p className="mt-4 text-[11px] text-brand-600 max-w-xl mx-auto">
            {DISCLAIMERS.riskWarning}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
