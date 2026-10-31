import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import RegulatoryStrip from "@/components/ui/RegulatoryStrip";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VizagFinServ — AMFI-Registered Mutual Fund Distributor | Visakhapatnam",
    template: "%s | VizagFinServ",
  },
  description:
    "VizagFinServ (Sasanapuri Sreekar, ARN 138117) is an AMFI-Registered Mutual Fund Distributor based in Visakhapatnam, helping 100+ families invest in mutual funds with clarity, discipline and a long-term approach.",
  keywords: [
    "VizagFinServ",
    "mutual fund distributor Visakhapatnam",
    "AMFI registered distributor Vizag",
    "Sasanapuri Sreekar",
    "ARN 138117",
    "EUIN E233588",
    "SIP investment Visakhapatnam",
    "goal-based financial planning",
    "mutual fund portfolio review",
    "SWP pension planning India",
    "wealth creation Visakhapatnam",
    "best mutual fund distributor Andhra Pradesh",
  ],
  authors: [
    { name: "Sasanapuri Sreekar", url: "https://www.vizagfinserv.com/about" },
    { name: "VizagFinServ", url: "https://www.vizagfinserv.com" },
  ],
  creator: "Sasanapuri Sreekar",
  publisher: "VizagFinServ",
  applicationName: "VizagFinServ",
  category: "Finance",
  classification: "Financial Services / Mutual Fund Distribution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.vizagfinserv.com"),
  alternates: {
    canonical: "https://www.vizagfinserv.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vizagfinserv.com",
    siteName: "VizagFinServ",
    title: "VizagFinServ — AMFI-Registered Mutual Fund Distributor | Visakhapatnam",
    description:
      "Helping 100+ families invest in mutual funds with clarity, discipline and a long-term approach. AMFI-Registered MFD (ARN 138117) since 2018.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VizagFinServ — AMFI-Registered Mutual Fund Distributor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VizagFinServ — AMFI-Registered Mutual Fund Distributor",
    description:
      "Helping families invest in mutual funds with clarity, discipline and a long-term approach.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VizagFinServ",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2A4A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="author" href="/humans.txt" />
        <meta name="theme-color" content="#0F2A4A" />
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <ScrollProgressBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RegulatoryStrip />

        {/* Schema.org Connected Graph: Organization (VizagFinServ) + Human (Sasanapuri Sreekar) + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["FinancialService", "Organization"],
                  "@id": "https://www.vizagfinserv.com/#organization",
                  "name": "VizagFinServ",
                  "legalName": "VizagFinServ",
                  "alternateName": "Vizag FinServ",
                  "url": "https://www.vizagfinserv.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.vizagfinserv.com/images/og-image.jpg",
                    "width": 1200,
                    "height": 630,
                  },
                  "image": "https://www.vizagfinserv.com/images/og-image.jpg",
                  "description":
                    "AMFI-Registered Mutual Fund Distributor (ARN 138117, EUIN E233588) helping 100+ families invest with clarity, discipline, and a long-term goal-based approach since 2018 in Visakhapatnam.",
                  "telephone": "+91 90878 59350",
                  "email": "funds844@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Visakhapatnam",
                    "addressRegion": "Andhra Pradesh",
                    "postalCode": "530001",
                    "addressCountry": "IN",
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 17.6868,
                    "longitude": 83.2185,
                  },
                  "founder": {
                    "@id": "https://www.vizagfinserv.com/#founder",
                  },
                  "employee": [
                    {
                      "@id": "https://www.vizagfinserv.com/#founder",
                    },
                  ],
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Visakhapatnam",
                    },
                    {
                      "@type": "Country",
                      "name": "India",
                    },
                  ],
                  "serviceType": "Mutual Fund Distribution",
                  "priceRange": "Free for Investors (Distributor commission paid by AMCs)",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": "Cheque, Net Banking, UPI, Auto-Debit (NACH)",
                  "foundingDate": "2018",
                  "knowsAbout": [
                    "Mutual Funds",
                    "Systematic Investment Plans (SIP)",
                    "Systematic Withdrawal Plans (SWP)",
                    "Retirement Planning",
                    "Portfolio Reviews",
                    "Goal-Based Wealth Creation",
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-90878-59350",
                      "contactType": "customer service",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Telugu", "Hindi"],
                    },
                  ],
                },
                {
                  "@type": "Person",
                  "@id": "https://www.vizagfinserv.com/#founder",
                  "name": "Sasanapuri Sreekar",
                  "jobTitle": "Founder & AMFI-Registered Mutual Fund Distributor",
                  "identifier": "ARN-138117",
                  "worksFor": {
                    "@id": "https://www.vizagfinserv.com/#organization",
                  },
                  "url": "https://www.vizagfinserv.com/about",
                  "image": "https://www.vizagfinserv.com/images/about-portrait.webp",
                  "knowsAbout": [
                    "Mutual Funds",
                    "Goal-Based Financial Planning",
                    "SIP Strategies",
                    "Portfolio Diversification",
                    "Asset Allocation",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.vizagfinserv.com/#website",
                  "url": "https://www.vizagfinserv.com",
                  "name": "VizagFinServ",
                  "description": "AMFI-Registered Mutual Fund Distributor in Visakhapatnam",
                  "publisher": {
                    "@id": "https://www.vizagfinserv.com/#organization",
                  },
                  "inLanguage": "en-IN",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
