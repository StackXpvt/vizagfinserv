import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Calculators — SIP, SWP, Step-Up, Retirement, EMI & Inflation',
  description:
    'Free financial calculators by VizagFinServ (AMFI-Registered MFD ARN 138117, Visakhapatnam). Estimate SIP returns, Step-Up SIP growth, SWP pension cashflow, retirement corpus, inflation impact, and loan EMIs instantly.',
  keywords: [
    'financial calculators India',
    'SIP calculator',
    'mutual fund calculator',
    'SWP calculator',
    'step up SIP calculator',
    'retirement planning calculator',
    'inflation calculator India',
    'EMI calculator',
    'lumpsum calculator',
    'mutual fund distributor Visakhapatnam',
    'VizagFinServ calculators',
  ],
  openGraph: {
    title: 'Free Financial Calculators — Plan SIP, SWP, Retirement & Loans | VizagFinServ',
    description:
      'Plan your financial future with VizagFinServ\'s suite of free calculators: SIP, SWP, Step-Up SIP, Retirement Corpus, EMI, and Inflation.',
    url: 'https://www.vizagfinserv.com/calculators',
    siteName: 'VizagFinServ',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Financial Calculators — VizagFinServ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Calculators — Free Mutual Fund & Planning Tools | VizagFinServ',
    description:
      'Interactive SIP, SWP, Step-Up, Retirement, and EMI calculators to plan your wealth journey.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.vizagfinserv.com/calculators',
  },
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
