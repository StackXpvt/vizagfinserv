import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Calculators',
  description:
    'Use our financial calculators to plan your SIP investments, estimate future value, understand the power of compounding, and plan for your financial goals.',
};

export default function CalculatorsPage() {
  return (
    <PlaceholderPage
      eyebrow="Tools"
      title="Calculators"
      description="Financial planning tools to help you estimate SIP growth, understand compounding, and plan for your goals. Our calculators are being developed to provide you with useful planning insights."
    />
  );
}
