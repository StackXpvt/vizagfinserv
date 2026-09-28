import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using VizagFinServ website and services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using our services."
      />
      
      <section className="py-16 md:py-24 bg-white text-brand-800">
        <div className="container-narrow max-w-4xl mx-auto space-y-10 text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <p>
              Welcome to VizagFinServ. By continuing to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy and commission disclosure govern VizagFinServ's relationship with you in relation to this website and our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">General Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
              <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
              <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
              <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Mutual Fund Investments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>VizagFinServ ({CONTACT.arn}) acts as an AMFI-Registered Mutual Fund Distributor.</li>
              <li>Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.</li>
              <li>Past performance of mutual funds is not necessarily indicative of future performance.</li>
              <li>We distribute 'Regular Plans' of mutual funds and earn a trail commission from the Asset Management Companies (AMCs). We do not charge any direct advisory fees to our clients for mutual fund distribution.</li>
              <li>Any financial advice or information provided on the website is for educational purposes and should not be construed as a binding recommendation. Investors should consult with their tax advisors or financial planners before making any investment decisions.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Limitation of Liability</h2>
            <p>
              VizagFinServ, its partners, and employees shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or the investment products distributed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Governing Law</h2>
            <p>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India and the jurisdiction of the courts in Visakhapatnam, Andhra Pradesh.
            </p>
          </div>

          <div className="bg-brand-50 p-6 rounded-lg text-sm border border-brand-100 mt-8">
            <p>
              If you have any questions about these Terms and Conditions, please contact us at <strong>{CONTACT.email}</strong> or call us at <strong>{CONTACT.phone}</strong>.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
