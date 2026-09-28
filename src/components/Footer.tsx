import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, NAV_ITEMS, DISCLAIMERS } from '@/lib/constants';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/ui/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main Footer */}
      <div className="container-narrow pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold font-heading text-white leading-tight">
                VizagFinServ
              </h3>
              <p className="text-xs text-brand-300 uppercase tracking-wide mt-1">
                {CONTACT.designation}
              </p>
            </Link>
            <p className="mt-4 text-sm text-brand-300 leading-relaxed">
              Helping families invest in mutual funds with clarity, discipline and a long-term approach since {CONTACT.since}.
            </p>
            <div className="mt-4 text-xs text-brand-400">
              <p>{CONTACT.arn} | {CONTACT.euin}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investor Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-200 mb-4">
              Investor Information
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/commission-disclosure"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  Commission Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/risk-disclosures"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  Risk Disclosures
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-charter"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  Investor Charter
                </Link>
              </li>
              <li>
                <a
                  href="https://www.amfiindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  AMFI India
                </a>
              </li>
              <li>
                <a
                  href="https://www.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  SEBI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  <PhoneIcon className="w-4 h-4 shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-2.5 text-sm text-brand-300 hover:text-white transition-colors duration-200"
                >
                  <MailIcon className="w-4 h-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-brand-300">
                  <MapPinIcon className="w-4 h-4 shrink-0 mt-0.5" />
                  {CONTACT.location}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Unified Disclosures & Copyright */}
      <div className="border-t border-brand-800/50 bg-brand-950">
        <div className="container-narrow pt-8 pb-24 sm:pb-12">
          
          {/* Detailed Disclosures */}
          <div className="space-y-3 text-xs text-brand-400/80 leading-relaxed max-w-5xl text-center mx-auto mb-8">
            <p className="font-medium text-brand-300/90">
              ⚠️ {DISCLAIMERS.riskWarning}
            </p>
            <p>{DISCLAIMERS.regularPlan} {DISCLAIMERS.notAdvisor} {DISCLAIMERS.investmentRisk}</p>
          </div>

          {/* Quick Disclosures Links */}
          <div className="text-center space-y-6 pt-6 border-t border-brand-800/30">
            <p className="text-[11px] sm:text-xs text-brand-400 leading-relaxed max-w-5xl mx-auto">
              Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns. | VizagFinServ &middot; AMFI Registered MF Distributor ({CONTACT.arn}) | <Link href="/risk-disclosures" className="hover:text-white transition-colors">Risk Disclosures</Link> &middot; <Link href="/commission-disclosure" className="hover:text-white transition-colors">Commission Disclosure</Link> &middot; <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SEBI SCORES</a> &middot; <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SMART ODR</a>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-6 text-xs text-brand-500">
              <p>&copy; {currentYear} VizagFinServ. All rights reserved.</p>
              <span className="hidden sm:inline text-brand-700">&middot;</span>
              <div className="flex items-center gap-2">
                <span>Powered by</span>
                <a 
                  href="https://stackx.co.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Image 
                    src="/logos/stackx-logo.png" 
                    alt="StackX Logo" 
                    width={76} 
                    height={30} 
                    className="brightness-0 invert drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
