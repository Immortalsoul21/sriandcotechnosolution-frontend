import React, { useState } from 'react';

const brands = [
  { name: 'Bosch',             logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bosch-logo.svg'                 },
  { name: 'Qualcomm',          logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qualcomm-Logo.svg'               },
  { name: 'Honeywell',         logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Honeywell_logo.svg'              },
  { name: 'Intel',             logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Intel_logo_2023.svg'             },
  { name: 'Samsung',           logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Samsung_Logo.svg'                },
  { name: 'Texas Instruments', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Texas_Instruments_logo_2024.svg' },
  { name: 'NVIDIA',            logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA_logo.svg'                 },
  { name: 'Arm',               logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arm_logo_2017.svg'               },
  { name: 'Keysight',          logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Keysight_Technologies_logo.svg'  },
  { name: 'Rohde & Schwarz',   logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rohde_%26_Schwarz_Logo.svg'      },
];

const BrandLogo = ({ brand }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={brand.logo}
      alt={brand.name}
      onError={() => setFailed(true)}
      className="h-5 sm:h-8 w-auto max-w-[70px] sm:max-w-[110px] object-contain"
      loading="lazy"
      draggable={false}
    />
  );
};

const BrandMarquee = () => {
  const allBrands = [...brands, ...brands];

  return (
    <section className="py-5 sm:py-8 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 sm:mb-6">
        Trusted Partners &amp; Suppliers
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-6 sm:gap-12 animate-brand-marquee">
          {allBrands.map((brand, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center">
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brand-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-brand-marquee {
          animation: brand-marquee 30s linear infinite;
          width: max-content;
        }
        .animate-brand-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandMarquee;