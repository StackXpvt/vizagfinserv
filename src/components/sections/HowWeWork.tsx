'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcessStep from '@/components/ui/ProcessStep';
import { PROCESS_STEPS, DISCLAIMERS } from '@/lib/constants';

export default function HowWeWork() {
  return (
    <SectionWrapper background="brand" id="how-we-work">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          eyebrow="Our Process"
          title="How we work together"
          subtitle="A simple, transparent process designed to put your goals at the centre of every decision."
        />

        <div className="mt-10 md:mt-14">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={i}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>

        {/* Risk note */}
        <div className="mt-10 p-4 bg-white/60 rounded-lg border border-brand-100">
          <p className="text-xs text-neutral-500 leading-relaxed">
            <strong className="text-neutral-600">Important:</strong>{' '}
            {DISCLAIMERS.riskWarning} {DISCLAIMERS.investmentRisk}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
