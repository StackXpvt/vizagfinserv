import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.vizagfinserv.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages — highest priority
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/our-approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/calculators`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Legal / regulatory pages
  const legalPages: MetadataRoute.Sitemap = [
    'privacy-policy',
    'terms-and-conditions',
    'risk-disclosures',
    'commission-disclosure',
    'investor-charter',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...corePages, ...legalPages];
}
