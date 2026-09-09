'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const TESTIMONIALS = [
  {
    name: 'Rajesh K.',
    role: 'Business Owner',
    quote:
      'Sreekar helped us plan our children\'s education fund and retirement corpus with a clear, goal-based approach. His patience in explaining every detail gave us real confidence in our decisions.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    role: 'IT Professional',
    quote:
      'What I appreciate most is the transparency. There are no hidden agendas—just honest advice that always puts our family\'s interests first. We\'ve been investing with VizagFinServ for over 3 years now.',
    rating: 5,
  },
  {
    name: 'Venkat R.',
    role: 'Retired Government Officer',
    quote:
      'After retirement, I needed someone trustworthy to manage my savings wisely. Sreekar\'s disciplined approach and regular reviews have given me complete peace of mind.',
    rating: 5,
  },
  {
    name: 'Sunitha D.',
    role: 'Doctor',
    quote:
      'I was new to mutual funds and had many questions. Sreekar took the time to walk me through everything—from SIPs to goal planning. His multi-generational experience really shows.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-neutral-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper background="dark" id="testimonials" className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-400/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        subtitle="Real experiences from families and individuals who trust us with their financial goals."
        light={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-6 md:p-8 rounded-2xl bg-white shadow-xl shadow-black/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/40 transition-all duration-300"
          >
            {/* Quote icon */}
            <svg
              className="absolute top-5 right-5 w-10 h-10 text-brand-100/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 5.996 8.789 5.996 11h4v10H0z" />
            </svg>

            {/* Stars */}
            <StarRating rating={testimonial.rating} />

            {/* Quote */}
            <p className="mt-4 text-sm md:text-base text-neutral-700 leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="mt-5 flex items-center gap-3">
              {/* Avatar initial */}
              <div className="w-10 h-10 rounded-full bg-brand-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
