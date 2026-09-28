import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Investor Charter',
  description: 'Investor Charter outlining the rights, responsibilities, and do\'s and don\'ts for mutual fund investors.',
};

export default function InvestorCharterPage() {
  return (
    <>
      <PageHero
        title="Investor Charter"
        subtitle="Empowering investors with awareness of their rights and responsibilities."
      />
      
      <section className="py-16 md:py-24 bg-white text-brand-800">
        <div className="container-narrow max-w-4xl mx-auto space-y-12 text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <p>
              In accordance with SEBI guidelines, this Investor Charter aims to protect investors' interests by promoting transparency, resolving grievances efficiently, and ensuring awareness of rights and responsibilities. As an AMFI-Registered Mutual Fund Distributor, VizagFinServ ({CONTACT.arn}) is committed to upholding these principles.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">Vision</h3>
                <p className="text-sm">To develop the Indian Mutual Fund Industry and bring a high degree of professionalism to mutual fund distribution, empowering investors to achieve their financial goals.</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">Mission</h3>
                <p className="text-sm">To ensure that investors' interests are protected, they are aware of their rights, and are provided with timely, transparent, and accurate information.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Investor Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to receive all material information about the mutual fund schemes before investing.</li>
              <li>Right to receive scheme-wise risk-o-meter and performance details.</li>
              <li>Right to receive the Consolidated Account Statement (CAS) in a timely manner.</li>
              <li>Right to transparent disclosure of the commission (trail commission) paid to the distributor.</li>
              <li>Right to file a grievance and have it resolved in a time-bound manner.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Responsibilities of Investors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Read all scheme-related documents (SID, SAI, KIM) carefully before investing.</li>
              <li>Ensure that all personal information and KYC details provided are accurate and updated.</li>
              <li>Understand the risks associated with mutual fund investments and assess if they align with personal financial goals and risk appetite.</li>
              <li>Monitor investments regularly through account statements and CAS.</li>
              <li>Never share OTPs, passwords, or login credentials with anyone.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Grievance Redressal Mechanism</h2>
            <p>
              Investors are encouraged to raise any grievances directly with us for prompt resolution:
            </p>
            <div className="bg-brand-50 p-6 rounded-lg text-sm border border-brand-100 space-y-2">
              <p><strong>Primary Contact:</strong> {CONTACT.name}</p>
              <p><strong>Email:</strong> <a href={CONTACT.emailHref} className="text-brand-700 hover:underline">{CONTACT.email}</a></p>
              <p><strong>Phone:</strong> <a href={CONTACT.phoneHref} className="text-brand-700 hover:underline">{CONTACT.phone}</a></p>
            </div>
            <p className="text-sm text-brand-600 mt-4">
              If the grievance remains unresolved, investors can approach the respective Asset Management Company (AMC) or escalate it via the SEBI Complaints Redress System (SCORES) portal at <a href="https://scores.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">scores.gov.in</a>.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
