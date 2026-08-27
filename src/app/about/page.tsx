import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about VizagFinServ (Sasanapuri Sreekar), an AMFI-Registered Mutual Fund Distributor since 2017, based in Visakhapatnam, Andhra Pradesh. A multi-generational commitment to helping families invest.',
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About Us"
      title="Our Story"
      description="Learn about VizagFinServ's journey as an AMFI-registered Mutual Fund Distributor, the family's multi-generational commitment since 1995, and our approach to helping families invest with clarity and discipline."
    />
  );
}
