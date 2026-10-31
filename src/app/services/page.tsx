import type { Metadata } from 'next';
import ServicesHero from '@/components/sections/services/ServicesHero';
import DetailedPrimaryServices from '@/components/sections/services/DetailedPrimaryServices';
import SupportingServices from '@/components/sections/services/SupportingServices';
import AdditionalServices from '@/components/sections/services/AdditionalServices';
import ServicesCTA from '@/components/sections/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Mutual Fund Distribution Services — SIP, Lumpsum, SWP & Portfolio Reviews',
  description:
    'Explore VizagFinServ\'s full suite of mutual fund distribution services: goal-based SIP planning, lumpsum investments, STP/SWP structuring, portfolio reviews, and Specialized Investment Funds (SIF). Access 24+ AMC partners through one trusted distributor in Visakhapatnam.',
  keywords: [
    'mutual fund services Vizag',
    'SIP planning Visakhapatnam',
    'lumpsum investment distributor',
    'STP SWP structuring',
    'portfolio review mutual fund',
    'Specialized Investment Fund SIF',
    'goal-based investing services',
    'fund selection distributor India',
    'VizagFinServ services',
  ],
  openGraph: {
    title: 'Mutual Fund Services — Goal-Based SIP, Lumpsum, SWP & More',
    description:
      'From SIP planning and lumpsum deployment to STP/SWP structuring and annual portfolio reviews — VizagFinServ distributes across 24+ AMC partners with a goal-first approach.',
    url: 'https://www.vizagfinserv.com/services',
    siteName: 'VizagFinServ',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/services-hero.jpg', width: 1200, height: 630, alt: 'VizagFinServ Mutual Fund Distribution Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Fund Services — SIP, Lumpsum, SWP & Reviews | VizagFinServ',
    description: 'Goal-based SIP, lumpsum, STP/SWP, and portfolio review services from an AMFI-Registered MFD in Visakhapatnam.',
    images: ['/images/services-hero.jpg'],
  },
  alternates: { canonical: 'https://www.vizagfinserv.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <DetailedPrimaryServices />
      <SupportingServices />
      <AdditionalServices />
      <ServicesCTA />
    </>
  );
}
