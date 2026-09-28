import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for VizagFinServ.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we use and protect your information."
      />
      
      <section className="py-16 md:py-24 bg-white text-brand-800">
        <div className="container-narrow max-w-4xl mx-auto space-y-10 text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <p>
              This privacy policy sets out how VizagFinServ uses and protects any information that you share when you use this website.
            </p>
            <p>
              VizagFinServ is committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Collection of Information</h2>
            <p>
              VizagFinServ, its employees and agents collect information (which can include sensitive personal information) to assist us in our relationship with you. If you are unable to provide the information we need we may not be able to provide you with the service you have requested. We may also be required by law to collect information. The types of information collected can include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identity information such as Name, Contact Details, Postal Address, Email Address, etc.</li>
              <li>Information in the course of establishing a customer relationship including, but not limited to, applications, forms, and questionnaires.</li>
              <li>Demographic information such as gender and income.</li>
              <li>Other information that can help us improve our services.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Distribution of Information</h2>
            <p>
              While we will not generally disclose your personal information, we may do so if we are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Required to do so by law, any Government authority, any court order, decree or award,</li>
              <li>Required to do so to market intermediaries, agents, product developers in relation to investments made by you.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">Dedication to Data Security</h2>
            <p>
              Your personal information is kept secure. We comply with the relevant security principles set out in the applicable privacy laws of India. We are not bound by privacy laws of any jurisdiction other than India. Only employees of VizagFinServ, its authorised agents and affiliates (who have agreed to maintain confidentiality in relation to the information) and market intermediaries and product developers with respect to investments made by you will have access to this information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-brand-900">How we use Cookies</h2>
            <p>
              A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic, or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to our customers’ needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
            </p>
            <p>
              Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
            </p>
            <p>
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser’s settings to decline cookies. This may prevent you from taking full advantage of the website.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
