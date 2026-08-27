'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import PrincipleCard from '@/components/ui/PrincipleCard';
import { PRINCIPLES } from '@/lib/constants';

export default function OurPrinciples() {
  return (
    <SectionWrapper background="brand" id="our-principles">
      <SectionHeading
        eyebrow="Our Principles"
        title="What guides our approach"
        subtitle="Four principles that shape how we think about investing—rooted in discipline, patience and transparency."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {PRINCIPLES.map((principle, i) => (
          <PrincipleCard
            key={principle.number}
            number={principle.number}
            title={principle.title}
            description={principle.description}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
