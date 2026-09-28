import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Risk Disclosures',
  description: 'Important risk disclosures regarding mutual fund investments and the services provided by VizagFinServ.',
};

export default function RiskDisclosuresPage() {
  return (
    <>
      <PageHero
        title="Risk Disclosures"
        subtitle="Understanding the risks associated with mutual fund investments."
      />
      
      <section className="py-16 md:py-24 bg-white text-brand-800">
        <div className="container-narrow max-w-4xl mx-auto space-y-10 text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Standard Risk Warning</h2>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-red-900 font-medium">
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
            </div>
            <p>
              Past performance of mutual funds is not an indicator of future returns. There is no assurance or guarantee that the objectives of any mutual fund scheme will be achieved. The NAV of the schemes may go up or down depending upon the factors and forces affecting the securities market.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Distributor Role Disclosure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>VizagFinServ ({CONTACT.arn}) acts merely as a Mutual Fund Distributor (MFD) registered with AMFI.</li>
              <li>We are <strong>not</strong> a SEBI Registered Investment Advisor (RIA). The information, data, or tools provided on this website are for educational and informational purposes only and do not constitute binding investment advice or portfolio management services.</li>
              <li>We distribute only "Regular Plans" of mutual fund schemes. Direct plans are available for every scheme with lower expense ratios, and we earn no commission on direct plans.</li>
              <li>We receive trail commission from the Asset Management Companies (AMCs) for the investments routed through our ARN. No upfront fees or advisory fees are charged to the investors by us.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">General Market Risks</h2>
            <p>Investors should be aware of the following general risks before investing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Market Risk:</strong> The value of your investment may decline due to overall market volatility, economic conditions, political events, or changes in interest rates.</li>
              <li><strong>Liquidity Risk:</strong> In certain market conditions, it may become difficult to sell or liquidate the underlying securities of a mutual fund scheme quickly without a significant price impact.</li>
              <li><strong>Credit Risk:</strong> Applicable mainly to debt funds, this is the risk that the issuer of a fixed-income security may default on interest or principal payments.</li>
              <li><strong>Inflation Risk:</strong> The risk that the rate of return on your investment will not keep pace with inflation, thereby eroding purchasing power over time.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">No Guarantees</h2>
            <p>
              Investment in mutual funds does not offer any guaranteed returns or capital protection. The sponsor of a mutual fund is not responsible or liable for any loss resulting from the operation of the scheme beyond the initial contribution made by it towards setting up the mutual fund.
            </p>
          </div>

          <div className="bg-brand-50 p-6 rounded-lg text-sm border border-brand-100 mt-8">
            <p>
              Investors are requested to assess their risk appetite, financial goals, and investment horizon before investing. If you have any queries regarding these disclosures, please contact us at <strong>{CONTACT.email}</strong>.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
