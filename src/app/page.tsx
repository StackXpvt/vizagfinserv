import HeroSection from '@/components/sections/HeroSection';
import BusinessSnapshot from '@/components/sections/BusinessSnapshot';
import InvestmentPhilosophy from '@/components/sections/InvestmentPhilosophy';
import AssociateWith from '@/components/sections/AssociateWith';
import OurPrinciples from '@/components/sections/OurPrinciples';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyWorkWithUs from '@/components/sections/WhyWorkWithUs';
import AboutSreekar from '@/components/sections/AboutSreekar';
import HowWeWork from '@/components/sections/HowWeWork';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessSnapshot />
      <InvestmentPhilosophy />
      <AssociateWith />
      <OurPrinciples />
      <ServicesSection />
      <WhyWorkWithUs />
      <AboutSreekar />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
