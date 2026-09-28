import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Commission Disclosure',
  description: 'Commission disclosure and compliance details for VizagFinServ.',
};

export default function CommissionDisclosurePage() {
  return (
    <>
      <PageHero
        title="Commission Disclosure"
        subtitle={`${CONTACT.name} · ${CONTACT.arn} · Transparent & AMFI Compliant`}
      />
      
      <section className="py-16 md:py-24 bg-white text-brand-800">
        <div className="container-narrow max-w-4xl mx-auto space-y-12 text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Our Commission Philosophy</h2>
            <p>
              As a registered mutual fund distributor, we earn our commission through the distribution of mutual fund products. In addition to this core service, we also offer complementary financial solutions — such as assistance with fixed deposits, RBI bonds, and other investment options — at no additional cost. These incidental services are provided as part of our commitment to delivering comprehensive financial support, with no extra fees beyond our distributor commission.
            </p>
            <p>
              As a part of our philosophy we keep a very transparent and clear disclosure of our earnings for the understanding of our clients.
            </p>
            <p>
              In accordance with SEBI Circular: SEBI/IMD/CIR No. 4/168230/09, the following are the details of the comparative commission earned by VizagFinServ from various fund-houses whose products are being distributed.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Commission Rate Table — By Fund Category</h2>
            <div className="overflow-x-auto border border-brand-200 rounded-lg">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-brand-50 text-brand-900 font-semibold border-b border-brand-200">
                  <tr>
                    <th className="px-4 py-3">Sr. No</th>
                    <th className="px-4 py-3">Mutual Fund Type</th>
                    <th className="px-4 py-3">Commission Method</th>
                    <th className="px-4 py-3">Rate Range</th>
                    <th className="px-4 py-3">Paid From</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100">
                  <tr className="hover:bg-brand-50/50">
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">Liquid Funds</td>
                    <td className="px-4 py-3">Trail</td>
                    <td className="px-4 py-3 font-medium">0.02% to 0.10%</td>
                    <td className="px-4 py-3">Expenses charged by AMC</td>
                  </tr>
                  <tr className="hover:bg-brand-50/50">
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">Debt</td>
                    <td className="px-4 py-3">Trail</td>
                    <td className="px-4 py-3 font-medium">0.10% to 0.60%</td>
                    <td className="px-4 py-3">Expenses charged by AMC</td>
                  </tr>
                  <tr className="hover:bg-brand-50/50">
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">Hybrid Funds</td>
                    <td className="px-4 py-3">Trail</td>
                    <td className="px-4 py-3 font-medium">0.60% to 1.20%</td>
                    <td className="px-4 py-3">Expenses charged by AMC</td>
                  </tr>
                  <tr className="hover:bg-brand-50/50">
                    <td className="px-4 py-3">4</td>
                    <td className="px-4 py-3">Equity</td>
                    <td className="px-4 py-3">Trail</td>
                    <td className="px-4 py-3 font-medium">0.60% to 1.20%</td>
                    <td className="px-4 py-3">Expenses charged by AMC</td>
                  </tr>
                  <tr className="hover:bg-brand-50/50">
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">Solution Oriented and other Mutual Funds</td>
                    <td className="px-4 py-3">Trail</td>
                    <td className="px-4 py-3 font-medium">0.20% to 1.20%</td>
                    <td className="px-4 py-3">Expenses charged by AMC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-sm text-brand-600">
              <li>Check out latest data on AMFI website : AMFI Expense Ratio</li>
              <li>Details of Scheme level commission on Mutual Funds are available and would be produced on demand.</li>
              <li>This is on a best effort basis and rates are updated as and when actual rates are received from AMCs.</li>
              <li>We are a NISM certified / AMFI registered mutual fund distributor and not an RIA. We get compensated / incentivised by AMCs. We don't charge any fees for our product distribution.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Key Declarations</h2>
            <div className="bg-brand-50 p-6 rounded-lg space-y-4 text-sm border border-brand-100">
              <p>
                <strong>We deal in Regular Plans only.</strong> We do not deal in Direct Plans and are not entitled to earn any commission on Direct Plans. Direct Plan for every Mutual Fund Scheme is available to investors offering the advantage of a lower expense ratio.
              </p>
              <p>
                <strong>We receive only trailing commission</strong> from AMCs as part of the Total Expense Ratio (TER). No upfront commission is charged to investors.
              </p>
              <p>
                <strong>We accept no non-cash benefits, gifts, or incentives</strong> from any AMC that could influence our recommendations.
              </p>
              <p>
                <strong>Commission disclosure is made to clients at the time of investment.</strong> Investors can also view commissions in their Consolidated Account Statement (CAS).
              </p>
              <p className="font-semibold text-brand-900 pt-2 border-t border-brand-200">
                Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
