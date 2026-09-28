'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Select from '@/components/ui/Select';
import { CONTACT } from '@/lib/constants';

const INQUIRY_TYPES = [
  'Starting a SIP',
  'Lumpsum investment',
  'Retirement planning',
  'Portfolio review',
  'Tax planning',
  'Something else',
] as const;

interface Fields {
  fullName: string;
  email: string;
  phone: string;
  inquiry: string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  fullName: '',
  email: '',
  phone: '',
  inquiry: '',
  message: '',
};

const DANGER = '#B42318';

const LABEL = 'block text-xs font-semibold uppercase tracking-wider text-brand-800 mb-2';
const FIELD =
  'w-full rounded-lg border bg-white px-4 py-3 text-base text-brand-900 placeholder:text-neutral-400 outline-none transition-[border-color,box-shadow] duration-200';
const FIELD_REST = 'border-neutral-200 focus:border-brand-600 focus:ring-1 focus:ring-brand-600';
const FIELD_ERROR = 'border-[#B42318] focus:border-[#B42318] focus:ring-1 focus:ring-[#B42318]';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = 'Please enter your name.';
  }
  // Phone is the one we need: the reply happens on WhatsApp.
  const digits = fields.phone.replace(/\D/g, '');
  if (!fields.phone.trim()) {
    errors.phone = 'Please enter a phone number.';
  } else if (digits.length < 10) {
    errors.phone = 'That phone number looks too short.';
  }
  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'That email address does not look right.';
  }
  if (!fields.inquiry) {
    errors.inquiry = 'Please choose an inquiry type.';
  }
  if (!fields.message.trim()) {
    errors.message = 'Please add a short message.';
  }

  return errors;
}

function buildMessage(fields: Fields): string {
  const lines = [`Hi, I'm ${fields.fullName.trim()}.`, '', `Inquiry: ${fields.inquiry}`];

  lines.push(`Phone: ${fields.phone.trim()}`);
  if (fields.email.trim()) lines.push(`Email: ${fields.email.trim()}`);

  lines.push('', fields.message.trim());

  return lines.join('\n');
}

function SendGlyph() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildMessage(fields))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const fieldClass = (key: keyof Fields) => `${FIELD} ${errors[key] ? FIELD_ERROR : FIELD_REST}`;

  const error = (key: keyof Fields, id: string) =>
    errors[key] ? (
      <p id={id} className="mt-2 text-sm" style={{ color: DANGER }}>
        {errors[key]}
      </p>
    ) : null;

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="rounded-2xl bg-white border border-neutral-200 px-8 py-16 md:px-12 md:py-20 text-center shadow-card"
        role="status"
      >
        <h2 className="font-heading text-3xl text-brand-900 mb-4">Your message is waiting</h2>
        <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto mb-9">
          We opened WhatsApp in a new tab with everything filled in. Press send there and
          we&apos;ll reply personally. If nothing appeared, your browser may have blocked the popup.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSent(false);
          }}
          className="text-sm font-semibold text-brand-800 border-b-2 border-gold-500 pb-1 hover:text-brand-950 hover:border-gold-400 transition-colors duration-200 cursor-pointer"
        >
          Write another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-8 md:p-10 shadow-card"
    >
      <h2 className="font-heading text-3xl md:text-[2.25rem] leading-tight text-brand-900">
        Send us a Message
      </h2>
      <p className="mt-3 text-sm text-brand-700">
        Fill out the form below and we&apos;ll continue the conversation on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cf-name" className={LABEL}>
              Full Name
            </label>
            <input
              id="cf-name"
              type="text"
              autoComplete="name"
              value={fields.fullName}
              onChange={(e) => update('fullName')(e.target.value)}
              placeholder="Your name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'cf-name-error' : undefined}
              className={fieldClass('fullName')}
            />
            {error('fullName', 'cf-name-error')}
          </div>

          <div>
            <label htmlFor="cf-email" className={LABEL}>
              Email Address{' '}
              <span className="text-neutral-400 normal-case tracking-normal">(Optional)</span>
            </label>
            <input
              id="cf-email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={(e) => update('email')(e.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'cf-email-error' : undefined}
              className={fieldClass('email')}
            />
            {error('email', 'cf-email-error')}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cf-phone" className={LABEL}>
              Phone
            </label>
            <input
              id="cf-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={(e) => update('phone')(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'cf-phone-error' : undefined}
              className={fieldClass('phone')}
            />
            {error('phone', 'cf-phone-error')}
          </div>

          <div>
            <span id="cf-inquiry-label" className={LABEL}>
              Inquiry Type
            </span>
            <Select
              value={fields.inquiry}
              onChange={update('inquiry')}
              options={INQUIRY_TYPES}
              invalid={Boolean(errors.inquiry)}
              labelledBy="cf-inquiry-label"
              describedBy={errors.inquiry ? 'cf-inquiry-error' : undefined}
            />
            {error('inquiry', 'cf-inquiry-error')}
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className={LABEL}>
            Your Message
          </label>
          <textarea
            id="cf-message"
            rows={5}
            value={fields.message}
            onChange={(e) => update('message')(e.target.value)}
            placeholder="Tell us about your goals, or what you'd like reviewed..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'cf-message-error' : undefined}
            className={`${fieldClass('message')} resize-y leading-relaxed`}
          />
          {error('message', 'cf-message-error')}
        </div>

        <div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand-900 text-white text-sm font-semibold uppercase tracking-wider py-4 px-8 hover:bg-brand-800 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2"
          >
            <SendGlyph />
            Send Message
          </button>
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            Opens WhatsApp with your message ready. Nothing is sent until you send it there.
          </p>
        </div>
      </form>
    </motion.div>
  );
}
