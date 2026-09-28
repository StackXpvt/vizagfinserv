import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BusinessSnapshot from '@/components/sections/BusinessSnapshot';
import AboutSreekar from '@/components/sections/AboutSreekar';
import WhyWorkWithUs from '@/components/sections/WhyWorkWithUs';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about VizagFinServ (Sasanapuri Sreekar), an AMFI-Registered Mutual Fund Distributor since 2018, based in Visakhapatnam, Andhra Pradesh. A multi-generational commitment to helping families invest.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        subtitle="A multi-generational commitment to helping families invest with clarity, discipline and a long-term approach."
      />
      <BusinessSnapshot />
      <AboutSreekar linkToPage={false} />
      <WhyWorkWithUs />
    </>
  );
}
