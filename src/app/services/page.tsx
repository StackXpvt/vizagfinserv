import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mutual fund distribution, goal-based SIP planning, portfolio review, STP/SWP structuring, and more. Explore our full range of services.',
};

export default function ServicesPage() {
  return (
    <PlaceholderPage
      eyebrow="Our Services"
      title="Services"
      description="From goal-based SIP planning and fund selection to portfolio reviews and STP/SWP structuring—explore the full range of mutual fund distribution and financial services we offer."
    />
  );
}
