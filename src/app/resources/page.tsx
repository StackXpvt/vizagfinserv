import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import QuickLinks from '@/components/sections/resources/QuickLinks';
import ResourcesGlossary from '@/components/sections/resources/ResourcesGlossary';
import FAQ from '@/components/sections/FAQ';
import OfficialResources from '@/components/sections/resources/OfficialResources';
import ResourcesCTA from '@/components/sections/resources/ResourcesCTA';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Educational resources, investor guides, and financial literacy content to help you make informed investment decisions.',
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
