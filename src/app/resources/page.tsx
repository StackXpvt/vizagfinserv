import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import QuickLinks from '@/components/sections/resources/QuickLinks';
import ResourcesGlossary from '@/components/sections/resources/ResourcesGlossary';
import FAQ from '@/components/sections/FAQ';
import OfficialResources from '@/components/sections/resources/OfficialResources';
import ResourcesCTA from '@/components/sections/resources/ResourcesCTA';

export const metadata: Metadata = {
  title: 'Investor Resources — Mutual Fund Glossary, Guides & FAQs',
  description:
    'Free educational resources for mutual fund investors: a comprehensive glossary (SIP, NAV, SWP, ELSS and more), frequently asked questions, official AMFI/SEBI links, and beginner-friendly guides. Curated by VizagFinServ.',
  keywords: [
    'mutual fund glossary',
    'SIP meaning',
    'NAV explained',
    'SWP STP meaning',
    'mutual fund FAQ India',
    'investor education',
    'AMFI resources',
    'SEBI investor portal',
    'mutual fund terms',
    'VizagFinServ resources',
  ],
  openGraph: {
    title: 'Investor Resources — Glossary, FAQs & Official Links',
    description:
      'Everything you need to understand mutual fund investing: plain-language glossary, FAQs, and official AMFI/SEBI links — curated by VizagFinServ.',
    url: 'https://www.vizagfinserv.com/resources',
    siteName: 'VizagFinServ',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mutual Fund Resources & FAQs — VizagFinServ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Fund Resources — Glossary, FAQs & Guides | VizagFinServ',
    description: 'Free investor education: mutual fund glossary, FAQs, and official AMFI/SEBI links.',
    images: ['/images/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.vizagfinserv.com/resources' },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Resources"
        subtitle="Educational articles, investor guides and financial literacy resources to help you understand mutual fund investing, goal planning and disciplined wealth building."
      />
      <QuickLinks />
      <ResourcesGlossary />
      <FAQ />
      <OfficialResources />
      <ResourcesCTA />
    </>
  );
}
