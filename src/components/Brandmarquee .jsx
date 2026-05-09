import React, { useState, useEffect } from 'react';

import logoIsro from '../assets/logo/isro.svg';
import logoDrdo from '../assets/logo/drdo.svg';
import logoBel from '../assets/logo/bel.svg';
import logoHal from '../assets/logo/hal.svg';
import logoEcil from '../assets/logo/ecil.svg';
import logoTvs from '../assets/logo/tvs.svg';
import logoSameer from '../assets/logo/sameer.png';
import logoAlphaDesign from '../assets/logo/alphadesigntechnologies.jpg';
import logoHoneywell from '../assets/logo/honeywell.svg';
import logoTuvRheinland from '../assets/logo/tuvrheinland.svg';
import logoGe from '../assets/logo/ge.svg';
import logoUl from '../assets/logo/ulsolution.svg';
import logoWipro from '../assets/logo/wipro.png';
import logoCyient from '../assets/logo/cyient.svg';
import logoTataPower from '../assets/logo/tatapowersed.svg';
import logoBosch from '../assets/logo/bosch.svg';
import logoIitBombay from '../assets/logo/iitbombay.svg';
import logoIitDelhi from '../assets/logo/iitdelhi.svg';
import logoIntel from '../assets/logo/intel.svg';
import logoQualcomm from '../assets/logo/qualcomm.svg';
import logoArai from '../assets/logo/arai.png';
import logoIitMadras from '../assets/logo/iitmadras.svg';
import logoIiscBangalore from '../assets/logo/iiscbangalore.svg';
import logoIitKharagpur from '../assets/logo/iitkharagpur.svg';
import logoIitKanpur from '../assets/logo/iitkanpur.svg';
import logoIitGuwahati from '../assets/logo/iitguhwati.svg';
import logoIitHyderabad from '../assets/logo/iithyderbad.svg';

const brands = [
  { name: 'ISRO', logo: logoIsro },
  { name: 'DRDO', logo: logoDrdo },
  { name: 'Bharat Electronics', logo: logoBel },
  { name: 'Hindustan Aeronautics', logo: logoHal },
  { name: 'ECIL', logo: logoEcil },
  { name: 'TVS', logo: logoTvs },
  { name: 'SAMEER', logo: logoSameer },
  { name: 'AMP', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/AMP_Logo.svg' },
  { name: 'Alpha Design Technologies', logo: logoAlphaDesign },
  { name: 'Honeywell', logo: logoHoneywell },
  { name: 'TUV Rheinland', logo: logoTuvRheinland },
  { name: 'GE', logo: logoGe },
  { name: 'UL', logo: logoUl },
  { name: 'Wipro', logo: logoWipro },
  { name: 'Cyient', logo: logoCyient },
  { name: 'Tata Power SED', logo: logoTataPower },
  { name: 'Bosch', logo: logoBosch },
  { name: 'IIT Bombay', logo: logoIitBombay },
  { name: 'IIT Delhi', logo: logoIitDelhi },
  { name: 'Intel', logo: logoIntel },
  { name: 'Qualcomm', logo: logoQualcomm },
  { name: 'ARAI', logo: logoArai },
  { name: 'IIT Madras', logo: logoIitMadras },
  { name: 'IIT Kharagpur', logo: logoIitKharagpur },
  { name: 'IIT Kanpur', logo: logoIitKanpur },
  { name: 'IIT Guwahati', logo: logoIitGuwahati },
  { name: 'IIT Hyderabad', logo: logoIitHyderabad },
  { name: 'IISc Bangalore', logo: logoIiscBangalore }
];

const BrandLogo = ({ brand }) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [brand.logo]);

  if (failed) return null;
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-32 sm:w-44">
      <img
        src={brand.logo}
        alt={brand.name}
        onError={() => setFailed(true)}
        className="h-8 sm:h-14 w-auto max-w-[100px] sm:max-w-[160px] object-contain"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
};

const BrandMarquee = () => {
  return (
    <section className="py-5 sm:py-8 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 sm:mb-6">
        Our Clients
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-brand-marquee">
          <div className="flex items-center gap-4 sm:gap-8 pr-4 sm:pr-8">
            {brands.map((brand, i) => (
              <BrandLogo key={`orig-${i}`} brand={brand} />
            ))}
          </div>
          <div className="flex items-center gap-4 sm:gap-8 pr-4 sm:pr-8">
            {brands.map((brand, i) => (
              <BrandLogo key={`dup-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes brand-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-brand-marquee {
          animation: brand-marquee 30s linear infinite;
        }
        .animate-brand-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandMarquee;