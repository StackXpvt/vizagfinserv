'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-50 to-white pt-20">
      <div className="container-narrow text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 mb-3">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 font-heading mb-5">
            {title}
          </h1>
          <p className="text-neutral-600 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact">Start a Conversation</Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
          <p className="mt-8 text-sm text-neutral-400">
            This page is being prepared. Please{' '}
            <Link href="/contact" className="text-brand-600 hover:text-brand-800 underline underline-offset-2">
              contact us
            </Link>{' '}
            for any enquiries in the meantime.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
