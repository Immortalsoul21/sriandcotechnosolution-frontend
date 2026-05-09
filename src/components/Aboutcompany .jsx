import React from 'react';
import { useNavigate } from 'react-router-dom';

// ── REMOVED: data points / stats bar (per instructions) ──

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l.75 12H3.75L4.5 3zM9 21V9m6 12V9" />
      </svg>
    ),
    title: 'Manufacturing',
    description: 'Our manufacturing unit assembles RF and microwave coaxial cables, antennas and RF passive components with full in-house quality control.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
      </svg>
    ),
    title: 'Global Reach',
    description: 'Reliable shipping and logistics worldwide with trusted freight partners.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Quality Assured',
    description: 'Sourced exclusively from authorised manufacturers and globally certified suppliers.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Same-day dispatch on all in-stock items with express and standard freight options.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Expert Support',
    description: 'Dedicated technical team available for product selection, specs, and after-sales.',
  },
  // ── ADDED: 100% Customer Satisfaction card ──
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
    ),
    title: '100% Customer Satisfaction',
    description: 'Committed to delivering on every promise — from accurate specifications to on-time delivery and responsive after-sales support.',
  },
];

const images = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
];

/* ── Pasternack wordmark SVG ── */

const PasternackLogo = () => (
  <img
    src="https://www.bing.com/th/id/OIP.h9BiA6NLKzJgPdO4WUx0igHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    alt="Pasternack Logo"
    className="h-54 sm:h-58 w-auto object-contain"
  />
);

{/*const PasternackLogo = () => (
  <svg
    viewBox="0 0 280 60"
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 sm:h-11 w-auto"
    aria-label="Pasternack"
  >
    <rect x="0" y="6" width="48" height="48" rx="4" fill="#0057A8" />
    <text x="24" y="38" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="#ffffff" letterSpacing="-1">P</text>
    <text x="58" y="40" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#0057A8" letterSpacing="0.5">PASTERNACK</text>
    <text x="261" y="20" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="10" fill="#0057A8">®</text>
    <text x="58" y="54" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill="#5a7fa8" letterSpacing="1.8">AN INFINITE ELECTRONICS BRAND</text>
  </svg>
);*/}

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// ── UPDATED trust points:
// - "Authorised Supply Chain" → "Supply Chain"
// - "This partnership reflects" (was "refects") ──
const trustPoints = [
  {
    icon: <ShieldCheckIcon />,
    // UPDATED: "Authorized supply chain" → "Supply Chain"
    label: 'Supply Chain',
    desc: 'Every Pasternack product we offer is sourced directly from OEMs — ensuring quality, reliability, and authenticity.',
  },
  {
    icon: <LinkIcon />,
    label: 'Direct Industry Access',
    desc: 'Our association with Pasternack gives our customers access to 40,000+ RF & microwave products, including hard-to-find specials.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    // ISO Certification details from their website
    label: 'ISO 9001:2015 Certified',
    desc: "Pasternack's ISO 9001:2015-certified quality standards flow directly into every component we deliver — ensuring consistent, verified performance.",
  },
];

const AboutCompany = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ── TOP: image mosaic + text side-by-side ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-14 sm:mb-20">

          {/* Image mosaic */}
          <div className="relative w-full lg:w-[48%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={images[0]} alt="RF lab equipment" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6 w-28 h-28 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img src={images[1]} alt="Electronic components" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img src={images[2]} alt="Industrial manufacturing" className="w-full h-full object-cover" />
            </div>
            {/* REMOVED: data point badge (20+ Years of Excellence) per instructions */}
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-widest mb-2">
              Who We Are
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              India's Trusted Partner for RF & Electronic Components
            </h2>
            {/* UPDATED tagline & description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-5">
              Sri and Co Techno Solutions is a trusted Manufacturer and Distributor of Antennas,
              Electronics, Electrical, RF & Microwave Components. We specialise in delivering
              high-quality precision components to Space, Aerospace, Defense, R&D and Industrial
              Sectors.
            </p>
            {/* <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-5">
              Powering the defence and aerospace sectors from the ground up — connecting satellites
              (Sat-Com) through mission-critical components trusted by engineers and enterprises
              across the globe.
            </p> */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Our manufacturing unit assembles RF and Microwave Coaxial cables.
              Our sourcing network spans globally certified manufacturers, ensuring every component
              we supply meets the strictest performance and reliability standards.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-7 sm:mb-9">
              {[
                'ISO-certified supply chain with traceability',
                'Distributor for global brands',
                'Serving aerospace, defence & industrial sectors',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-sky-100 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/about')}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn More About Us →
            </button>
          </div>
        </div>

        {/* ── STATS BAR REMOVED per instructions ── */}

        {/* ── FEATURE CARDS ── */}
        <div className="text-center mb-7 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-widest mb-1">
            Why Choose Us
          </p>
          <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
            Built on Trust. Backed by Expertise.
          </h3>
        </div>

        {/* 6 cards: 2 cols mobile, 3 cols sm, 6 cols lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate('/about')}
              className="group p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl cursor-pointer border border-transparent transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-sky-50 hover:border-sky-200 hover:shadow-lg flex flex-col items-start gap-3 sm:gap-4"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all duration-300 shadow-sm flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 sm:mb-1.5 group-hover:text-sky-700 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-[9px] sm:text-xs leading-relaxed hidden sm:block">
                  {feature.description}
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                Learn more →
              </span>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════
            ── TRUSTED PARTNERSHIP SECTION ──
        ══════════════════════════════════════════════════ */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">

          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2145 50%, #0a1e3d 100%)' }} />
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 70%)' }} />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/20 rounded-full px-3 py-1 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                  </span>
                  {/* UPDATED: "Trusted Brand" */}
                  <span className="text-sky-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                    Trusted Brand
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                  Proudly Associated with
                </h3>
              </div>

              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 self-start sm:self-auto">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400"><StarIcon /></span>
                ))}
                <span className="text-white/60 text-xs ml-1 font-medium">Global Leader</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">

              <div className="flex-shrink-0">
                <div className="bg-white rounded-2xl px-6 py-5 sm:px-8 sm:py-6 shadow-2xl border border-white/10 inline-block transition-transform duration-300 hover:-translate-y-1">
                  <PasternackLogo />
                  <p className="text-[10px] text-gray-400 mt-3 font-medium tracking-wide text-center">
                    pasternack.com
                  </p>
                </div>
              </div>

              <div className="hidden lg:block w-px self-stretch bg-white/10" />
              <div className="lg:hidden w-full h-px bg-white/10" />

              <div className="flex-1 min-w-0">
                {/* FIXED: "partnership refects" → "association reflects" */}
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  We are proud to be in association with <span className="text-white font-semibold">Pasternack</span> —
                  a globally recognised leader in RF, Microwave, and Millimeter-wave Components
                  since 1972. This association reflects our commitment to offering our customers
                  access to the highest-calibre, ISO 9001:2015-certified products from one of
                  the industry's most trusted names.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {trustPoints.map((tp, i) => (
                    <div key={i} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/30 rounded-xl p-4 sm:p-5 transition-all duration-300">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-sky-400 group-hover:text-sky-300 transition-colors">
                          {tp.icon}
                        </span>
                        <h4 className="text-white text-xs sm:text-sm font-semibold leading-tight">
                          {tp.label}
                        </h4>
                      </div>
                      <p className="text-white/50 text-[10px] sm:text-xs leading-relaxed">
                        {tp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-white/40 text-[10px] sm:text-xs">
                Pasternack® is a registered trademark of Infinite Electronics International, Inc.
              </p>
              <a href="https://www.pasternack.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-[11px] sm:text-xs font-semibold transition-colors duration-200">
                Visit Pasternack.com
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* ══ END TRUSTED PARTNERSHIP ══ */}

      </div>
    </section>
  );
};

export default AboutCompany;