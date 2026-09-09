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
