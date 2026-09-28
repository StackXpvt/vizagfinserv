import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/sections/FinalCTA';
import { CONTACT, OFFICE_HOURS } from '@/lib/constants';
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with VizagFinServ for a no-obligation conversation about your mutual fund investment goals. Based in Visakhapatnam, Andhra Pradesh.',
};

function WhatsAppGlyph({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// One shadow for every raised surface on this page. Tinted with the brand navy
// rather than pure black, so it reads as depth instead of grey haze.
const CARD_SHADOW = 'shadow-card';
const CARD_SHADOW_HOVER = 'hover:shadow-card-lg';

const REACH_CARDS = [
  {
    key: 'phone',
    icon: PhoneIcon,
    label: 'Phone',
    value: CONTACT.phone,
    note: 'Tap to call directly',
    href: CONTACT.phoneHref,
    external: false,
    feature: false,
  },
  {
    key: 'email',
    icon: MailIcon,
    label: 'Email',
    value: CONTACT.email,
    note: 'For documents and detail',
    href: CONTACT.emailHref,
    external: false,
    feature: false,
  },
  {
    key: 'office',
    icon: MapPinIcon,
    label: 'Office',
    value: CONTACT.location,
    note: 'Open in Maps',
    // Opens the location in Maps, so this card behaves like the other three.
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.location)}`,
    external: true,
    feature: false,
  },
  {
    key: 'whatsapp',
    icon: WhatsAppGlyph,
    label: 'WhatsApp',
    value: 'Chat with Us',
    note: 'The quickest way to reach us',
    href: `https://wa.me/${CONTACT.whatsapp}`,
    external: true,
    feature: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Ready to start a conversation about your investment goals? Reach out for a no-obligation discussion."
      />

      {/* Hero supplies the top spacing, so this only needs breathing room. */}
      <main className="pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="container-narrow">
          {/* Rule + kicker, as in the reference. */}
          <div className="flex items-center gap-4 mb-8">
            <span aria-hidden="true" className="h-px w-10 bg-brand-900" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-800">
              Reach Us
            </span>
          </div>

          {/* Four channels. The WhatsApp card is the featured one. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20">
            {REACH_CARDS.map((card) => {
              const Icon = card.icon;
              const feature = card.feature;

              const shell = [
                'group flex flex-col rounded-2xl border p-5',
                'transition duration-400 ease-out-expo',
                CARD_SHADOW,
                // Lift + deeper shadow on the ones you can actually click.
                card.href ? `${CARD_SHADOW_HOVER} hover:-translate-y-1.5` : '',
                feature
                  ? 'bg-brand-900 border-brand-800 hover:border-brand-600'
                  : 'bg-neutral-50 border-neutral-200 hover:bg-white hover:border-brand-200',
              ].join(' ');

              // The icon tile inverting is the main event, as on the reference.
              const iconTile = [
                'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                'transition-colors duration-300 ease-out-expo',
                feature
                  ? 'bg-white/10 text-white group-hover:bg-white group-hover:text-brand-900'
                  : 'bg-brand-50 border border-brand-100 text-brand-700 group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white',
              ].join(' ');

              const body = (
                <>
                  <span className={iconTile}>
                    <Icon className="w-5 h-5" />
                  </span>

                  <span
                    className={`block text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                      feature ? 'text-brand-300' : 'text-neutral-400'
                    }`}
                  >
                    {card.label}
                  </span>
                  <span
                    className={`block font-semibold leading-snug break-words ${
                      feature ? 'text-white' : 'text-brand-900'
                    }`}
                  >
                    {card.value}
                  </span>
                  <span
                    className={`block mt-2 text-sm leading-relaxed ${
                      feature ? 'text-brand-200' : 'text-neutral-500'
                    }`}
                  >
                    {card.note}
                  </span>

                  {card.href && (
                    <span
                      aria-hidden="true"
                      className={`mt-auto pt-5 self-end transition-transform duration-300 group-hover:translate-x-1 ${
                        feature ? 'text-brand-200' : 'text-neutral-400'
                      }`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  )}
                </>
              );

              return card.href ? (
                <a
                  key={card.key}
                  href={card.href}
                  {...(card.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={shell}
                >
                  {body}
                </a>
              ) : (
                <div key={card.key} className={shell}>
                  {body}
                </div>
              );
            })}
          </div>

          {/* Form beside map, hours and tip. Stacks on small screens. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className={`rounded-2xl overflow-hidden border border-neutral-200 h-64 sm:h-72 ${CARD_SHADOW}`}>
                <iframe
                  title={`Map of ${CONTACT.location}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.location)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>

              <div className={`rounded-2xl border border-neutral-200 p-6 bg-white ${CARD_SHADOW}`}>
                <h2 className="text-[11px] font-semibold uppercase tracking-wider text-brand-800 mb-5">
                  Office Hours
                </h2>
                <dl className="flex flex-col gap-3.5">
                  {OFFICE_HOURS.map((row) => (
                    <div key={row.day} className="flex items-center justify-between gap-4 text-sm">
                      <dt className="text-neutral-600">{row.day}</dt>
                      <dd
                        className={`font-semibold ${row.closed ? '' : 'text-brand-900'}`}
                        style={row.closed ? { color: '#B42318' } : undefined}
                      >
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={`rounded-2xl border border-gold-400/40 bg-gold-400/10 p-5 ${CARD_SHADOW}`}>
                <p className="text-sm text-brand-900 leading-relaxed">
                  <span className="font-semibold">Quick tip:</span>{' '}
                  <span className="text-brand-800">
                    WhatsApp is the fastest way to reach us. Messages from the form land there too,
                    so you can keep the conversation in one place.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FinalCTA linkToPage={false} />
    </>
  );
}
