import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with VizagFinServ for a no-obligation conversation about your mutual fund investment goals. Based in Visakhapatnam, Andhra Pradesh.',
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Get in Touch"
      title="Contact Us"
      description="Ready to start a conversation about your investment goals? Reach out for a no-obligation discussion. Call +91 90878 59350 or email funds844@gmail.com."
    />
  );
}
