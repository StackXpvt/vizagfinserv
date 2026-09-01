'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { AMC_PARTNERS } from '@/lib/constants';
import Image from 'next/image';

const AMC_LOGOS = [
  { name: 'Franklin Templeton', src: '/logos/Franklin Templeton.png' },
  { name: 'Aditya Birla Sun Life', src: '/logos/Aditya Birla Sun Life.jpg' },
  { name: 'ICICI Prudential', src: '/logos/ICICI Prudential.png' },
  { name: 'SBI', src: '/logos/sbi.svg' },
  { name: 'Edelweiss', src: '/logos/Edelweiss.png' },
  { name: 'Nippon India', src: '/logos/Nippon India.jpg' },
  { name: 'HDFC', src: '/logos/HDFC.png' },
  { name: 'Canara Robeco', src: '/logos/Canara Robeco.jpg' },
  { name: 'DSP', src: '/logos/DSP.png' },
  { name: 'Kotak', src: '/logos/Kotak.png' },
  { name: 'HSBC', src: '/logos/HSBC.jpg' },
  { name: 'PPFAS', src: '/logos/PPFAS.svg' },
  { name: 'Mirae Asset', src: '/logos/Mirae Asset.jpg' },
  { name: 'UTI', src: '/logos/UTI.png' },
  { name: 'WhiteOak Capital', src: '/logos/WhiteOak Capital.jpg' },
  { name: 'Quant', src: '/logos/quant-logo.png' },
  { name: 'Tata', src: '/logos/Tata.jpg' },
  { name: 'Bank of India', src: '/logos/Bank of India.png' },
  { name: 'Union', src: '/logos/UNION.png' },
  { name: 'Helios', src: '/logos/Helios.png' },
  { name: 'Motilal Oswal', src: '/logos/MOTILALOSWAL.svg' },
  { name: 'Bandhan', src: '/logos/Bandhan.jpg' },
];

export default function AssociateWith() {
  const third = Math.ceil(AMC_LOGOS.length / 3);
  const row1 = AMC_LOGOS.slice(0, third);
  const row2 = AMC_LOGOS.slice(third, third * 2);
  const row3 = AMC_LOGOS.slice(third * 2);

  // Duplicate for seamless infinite loop
  const loopRow1 = [...row1, ...row1];
  const loopRow2 = [...row2, ...row2];
  const loopRow3 = [...row3, ...row3];

  return (
    <SectionWrapper background="white" id="associate-with" className="overflow-hidden">
      <SectionHeading
        eyebrow="Associated With"
        title="Mutual Fund Houses We Distribute"
        subtitle="Access to schemes across India's leading asset management companies."
      />

      {/* CSS keyframes for marquee — hover on strip pauses it */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: scroll-left 40s linear infinite;
        }
        .marquee-right {
          animation: scroll-right 35s linear infinite;
        }
        .marquee-left-slow {
          animation: scroll-left 45s linear infinite;
        }
        .marquee-strip:hover .marquee-left,
        .marquee-strip:hover .marquee-right,
        .marquee-strip:hover .marquee-left-slow {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative mt-12 flex flex-col gap-6 md:gap-8 -mx-6 md:-mx-10 lg:-mx-12 overflow-hidden">
        {/* Left/Right fading gradients for a clean edge transition */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="marquee-strip overflow-hidden py-2">
          <div className="flex gap-4 md:gap-6 w-max marquee-left">
            {loopRow1.map((logo, i) => (
              <div
                key={`r1-${logo.name}-${i}`}
                className="relative w-[140px] h-[70px] md:w-[180px] md:h-[90px] bg-white border-2 border-brand-900/20 rounded-xl flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-brand-300/30 hover:border-brand-800 hover:z-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 140px, 180px"
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="marquee-strip overflow-hidden py-2">
          <div className="flex gap-4 md:gap-6 w-max marquee-right">
            {loopRow2.map((logo, i) => (
              <div
                key={`r2-${logo.name}-${i}`}
                className="relative w-[140px] h-[70px] md:w-[180px] md:h-[90px] bg-white border-2 border-brand-900/20 rounded-xl flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-brand-300/30 hover:border-brand-800 hover:z-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 140px, 180px"
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scrolling Left (slower) */}
        <div className="marquee-strip overflow-hidden py-2">
          <div className="flex gap-4 md:gap-6 w-max marquee-left-slow">
            {loopRow3.map((logo, i) => (
              <div
                key={`r3-${logo.name}-${i}`}
                className="relative w-[140px] h-[70px] md:w-[180px] md:h-[90px] bg-white border-2 border-brand-900/20 rounded-xl flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-brand-300/30 hover:border-brand-800 hover:z-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 140px, 180px"
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-neutral-400 max-w-2xl mx-auto">
        The above are mutual fund houses whose schemes are distributed. This does not imply endorsement or recommendation of any specific AMC or scheme. Scheme selection should be based on individual goals and suitability.
      </p>
    </SectionWrapper>
  );
}
