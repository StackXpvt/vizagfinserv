import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import BusinessSnapshot from '@/components/sections/BusinessSnapshot';
import InvestmentPhilosophy from '@/components/sections/InvestmentPhilosophy';
import AssociateWith from '@/components/sections/AssociateWith';
import OurPrinciples from '@/components/sections/OurPrinciples';
import ServicesSection from '@/components/sections/ServicesSection';
import CalculatorSpotlight from '@/components/sections/CalculatorSpotlight';
import WhyWorkWithUs from '@/components/sections/WhyWorkWithUs';
import AboutSreekar from '@/components/sections/AboutSreekar';
import HowWeWork from '@/components/sections/HowWeWork';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'VizagFinServ — AMFI-Registered Mutual Fund Distributor in Visakhapatnam',
  description:
    'VizagFinServ (Sasanapuri Sreekar, ARN 138117) is an AMFI-Registered Mutual Fund Distributor in Visakhapatnam. Helping 100+ families invest in mutual funds with clarity, discipline, and a long-term goal-based approach since 2018.',
  keywords: [
    'mutual fund distributor Visakhapatnam',
    'AMFI registered distributor Vizag',
    'Sasanapuri Sreekar',
    'ARN 138117',
    'best mutual fund distributor Vizag',
    'SIP investment Visakhapatnam',
    'goal-based financial planning Vizag',
    'mutual funds Andhra Pradesh',
    'VizagFinServ',
  ],
  openGraph: {
    title: 'VizagFinServ — AMFI-Registered Mutual Fund Distributor | Visakhapatnam',
    description:
      'Helping 100+ families invest with clarity, discipline, and a long-term approach. AMFI-Registered Mutual Fund Distributor (ARN 138117) since 2018.',
    url: 'https://www.vizagfinserv.com',
    siteName: 'VizagFinServ',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VizagFinServ — AMFI-Registered Mutual Fund Distributor Visakhapatnam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VizagFinServ — Mutual Fund Distributor in Visakhapatnam',
    description:
      'Disciplined mutual fund investing for families. AMFI-Registered MFD (ARN 138117).',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.vizagfinserv.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessSnapshot />
      <InvestmentPhilosophy />
      <AssociateWith />
      <OurPrinciples />
      <ServicesSection />
      <CalculatorSpotlight />
      <WhyWorkWithUs />
      <AboutSreekar />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
