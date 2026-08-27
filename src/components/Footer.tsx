import Link from 'next/link';
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

      {/* Disclosures */}
      <div className="border-t border-brand-800/50">
        <div className="container-narrow py-6">
          <div className="space-y-3 text-xs text-brand-400 leading-relaxed">
            <p className="font-semibold text-brand-300">
              ⚠️ {DISCLAIMERS.riskWarning}
            </p>
            <p>{DISCLAIMERS.regularPlan}</p>
            <p>{DISCLAIMERS.notAdvisor}</p>
            <p>{DISCLAIMERS.investmentRisk}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-800/30">
        <div className="container-narrow py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-500">
            <p>© {currentYear} VizagFinServ. All rights reserved.</p>
            <p>{CONTACT.arn} | {CONTACT.euin}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
