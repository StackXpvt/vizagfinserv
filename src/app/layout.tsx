import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    default: "VizagFinServ | AMFI-Registered Mutual Fund Distributor | Visakhapatnam",
    template: "%s | VizagFinServ",
  },
  description:
    "VizagFinServ (Sasanapuri Sreekar) is an AMFI-Registered Mutual Fund Distributor (ARN 138117) based in Visakhapatnam, helping families invest in mutual funds with clarity, discipline and a long-term approach.",
  keywords: [
    "mutual fund distributor",
    "AMFI registered",
    "Visakhapatnam",
    "Vizag",
    "SIP",
    "goal-based investing",
    "mutual fund",
    "Sasanapuri Sreekar",
    "ARN 138117",
    "financial planning",
    "investment",
  ],
  authors: [{ name: "Sasanapuri Sreekar" }],
  creator: "Sasanapuri Sreekar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vizagfinserv.com",
    siteName: "VizagFinServ",
    title: "VizagFinServ | AMFI-Registered Mutual Fund Distributor",
    description:
      "Helping families invest in mutual funds with clarity, discipline and a long-term approach. AMFI-Registered MFD since 2017.",
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
    title: "VizagFinServ | AMFI-Registered Mutual Fund Distributor",
    description:
      "Helping families invest in mutual funds with clarity, discipline and a long-term approach.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://vizagfinserv.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0F2A4A" />
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "VizagFinServ — AMFI-Registered Mutual Fund Distributor",
              alternateName: "VizagFinServ",
              description:
                "AMFI-Registered Mutual Fund Distributor helping families invest with clarity, discipline and a long-term approach.",
              url: "https://vizagfinserv.com",
              telephone: "+919087859350",
              email: "funds844@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Visakhapatnam",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              founder: {
                "@type": "Person",
                name: "Sasanapuri Sreekar",
                jobTitle: "AMFI-Registered Mutual Fund Distributor",
              },
              areaServed: {
                "@type": "Place",
                name: "India",
              },
              serviceType: "Mutual Fund Distribution",
              foundingDate: "2017",
            }),
          }}
        />
      </body>
    </html>
  );
}
