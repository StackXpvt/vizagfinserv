import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Educational resources, investor guides, and financial literacy content to help you make informed investment decisions.',
};

export default function ResourcesPage() {
  return (
    <PlaceholderPage
      eyebrow="Learn"
      title="Resources"
      description="Educational articles, investor guides and financial literacy resources to help you understand mutual fund investing, goal planning and disciplined wealth building."
    />
  );
}
