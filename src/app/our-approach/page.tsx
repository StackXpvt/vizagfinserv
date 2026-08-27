import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Understand our investment philosophy — a goal-based, disciplined approach to mutual fund investing focused on long-term compounding rather than short-term market timing.',
};

export default function OurApproachPage() {
  return (
    <PlaceholderPage
      eyebrow="Investment Philosophy"
      title="Our Approach"
      description="A goal-based, disciplined approach to mutual fund investing. We focus on understanding your objectives first, choosing suitable funds second, and staying invested for the long term—not chasing short-term market movements."
    />
  );
}
