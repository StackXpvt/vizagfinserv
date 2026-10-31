import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BusinessSnapshot from '@/components/sections/BusinessSnapshot';
import AboutSreekar from '@/components/sections/AboutSreekar';
import WhyWorkWithUs from '@/components/sections/WhyWorkWithUs';
import AboutProcess from '@/components/sections/about/AboutProcess';
import AboutScopeBento from '@/components/sections/about/AboutScopeBento';
import AboutContactCTA from '@/components/sections/about/AboutContactCTA';

export const metadata: Metadata = {
  title: 'About Sasanapuri Sreekar — AMFI-Registered MFD Since 2018',
  description:
    'Meet Sasanapuri Sreekar, the AMFI-Registered Mutual Fund Distributor (ARN 138117) behind VizagFinServ. Serving 100+ families in Visakhapatnam with ₹140 Cr+ under distribution since 2018 — built on goal-based planning, disciplined investing, and long-term relationships.',
  keywords: [
    'Sasanapuri Sreekar',
    'VizagFinServ founder',
    'AMFI registered distributor Vizag',
    'mutual fund distributor Visakhapatnam',
    'ARN 138117',
    'goal-based financial planning',
    'about VizagFinServ',
  ],
  openGraph: {
    title: 'About VizagFinServ — Meet the Distributor Behind 100+ Family Portfolios',
    description:
      'Sasanapuri Sreekar (ARN 138117) has been helping families in Visakhapatnam build disciplined mutual fund portfolios since 2018. ₹140 Cr+ under distribution, process-driven, goal-first.',
    url: 'https://www.vizagfinserv.com/about',
    siteName: 'VizagFinServ',
    locale: 'en_IN',
    type: 'profile',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'About VizagFinServ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About VizagFinServ — Sasanapuri Sreekar, AMFI-Registered MFD',
    description: 'Goal-based mutual fund distribution for 100+ families in Visakhapatnam since 2018. Meet the distributor.',
    images: ['/images/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.vizagfinserv.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VizagFinServ"
        title="We don't just invest your money. We invest in your plans."
        subtitle="Every family we meet is working toward something specific: a child's education, a first home, or a secure retirement. We start with that goal, then build a disciplined investing approach around it."
      />
      <BusinessSnapshot />
      <AboutSreekar linkToPage={false} />
      <WhyWorkWithUs />
      <AboutProcess />
      <AboutScopeBento />
      <AboutContactCTA />
    </>
  );
}
