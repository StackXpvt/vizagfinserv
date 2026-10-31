import type { Metadata } from 'next';
import ApproachHero from '@/components/sections/approach/ApproachHero';
import ApproachPhilosophy from '@/components/sections/approach/ApproachPhilosophy';
import ApproachPrinciples from '@/components/sections/approach/ApproachPrinciples';
import ApproachProcess from '@/components/sections/approach/ApproachProcess';
import ApproachWhyUs from '@/components/sections/approach/ApproachWhyUs';
import ApproachCTA from '@/components/sections/approach/ApproachCTA';

export const metadata: Metadata = {
  title: 'Our Investment Approach — Goal-Based, Disciplined & Long-Term',
  description:
    'Understand VizagFinServ\'s investing philosophy: goals before products, discipline over market timing, compounding through patience, and regular portfolio reviews. A process-driven approach to mutual fund distribution that prioritises your life goals, not market noise.',
  keywords: [
    'investment philosophy',
    'goal-based investing approach',
    'disciplined mutual fund investing',
    'long-term compounding strategy',
    'process-driven investing',
    'portfolio review methodology',
    'VizagFinServ approach',
    'mutual fund distribution philosophy India',
  ],
  openGraph: {
    title: 'Our Approach — How VizagFinServ Builds Disciplined Portfolios',
    description:
      'Goals before products. Discipline over timing. Compounding through patience. Learn the four principles behind every portfolio we help build.',
    url: 'https://www.vizagfinserv.com/our-approach',
    siteName: 'VizagFinServ',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/philosophy.webp', width: 1200, height: 630, alt: 'VizagFinServ Investment Philosophy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Approach — Goal-Based & Disciplined Investing | VizagFinServ',
    description: 'Goals first, discipline always, compounding with patience. The philosophy behind 100+ family portfolios.',
    images: ['/images/philosophy.webp'],
  },
  alternates: { canonical: 'https://www.vizagfinserv.com/our-approach' },
};

export default function OurApproachPage() {
  return (
    <>
      <ApproachHero />
      <ApproachPhilosophy />
      <ApproachPrinciples />
      <ApproachProcess />
      <ApproachWhyUs />
      <ApproachCTA />
    </>
  );
}
