import React from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { value: '20+',  label: 'Years Experience' },
  { value: '150+', label: 'Countries Served' },
  { value: '5000+',label: 'Products Available' },
  { value: '98%',  label: 'Customer Satisfaction' },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l.75 12H3.75L4.5 3zM9 21V9m6 12V9" />
      </svg>
    ),
    title: 'Manufacturing',
    description: 'Own manufactured line of electronic & RF components with full in-house quality control.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
      </svg>
    ),
    title: 'Global Reach',
    description: 'Reliable shipping and logistics across 150+ countries with trusted freight partners.',
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
];

const images = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
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
            {/* Main large image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={images[0]}
                alt="RF lab equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating top-right thumbnail */}
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6
                            w-28 h-28 sm:w-40 sm:h-40
                            rounded-xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img
                src={images[1]}
                alt="Electronic components"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating bottom-left thumbnail */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6
                            w-28 h-28 sm:w-36 sm:h-36
                            rounded-xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img
                src={images[2]}
                alt="Industrial manufacturing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 z-20
                            bg-sky-600 text-white rounded-xl px-3 py-2 sm:px-4 sm:py-3
                            shadow-lg text-center">
              <p className="text-xl sm:text-3xl font-bold leading-none">20+</p>
              <p className="text-[9px] sm:text-xs font-medium mt-0.5 opacity-90 whitespace-nowrap">Years of Excellence</p>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-widest mb-2">
              Who we are
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              India's Trusted Partner for RF & Electronic Components
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-5">
              Sri and Co Techno Solutions has been a leading distributor of electronics and RF
              components for over two decades. We specialise in delivering high-quality, precision
              components to manufacturers, engineers, and enterprises across aerospace, defence,
              and industrial sectors.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Our sourcing network spans globally certified manufacturers, ensuring every component
              we supply meets the strictest performance and reliability standards.
            </p>

            {/* Inline trust points */}
            <ul className="space-y-2 sm:space-y-3 mb-7 sm:mb-9">
              {[
                'ISO-certified supply chain with traceability',
                'Authorised distributor for 30+ global brands',
                'Serving aerospace, defence & industrial sectors',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-sky-100
                                   flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/about')}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-600 text-white rounded-lg font-semibold
                         text-sm transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn More About Us →
            </button>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {stats.map((s, i) => (
            <div key={i}
                 className="rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100
                            px-4 py-5 sm:px-6 sm:py-7 text-center">
              <p className="text-2xl sm:text-4xl font-bold text-sky-600 leading-none mb-1 sm:mb-2">
                {s.value}
              </p>
              <p className="text-gray-500 text-[10px] sm:text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── FEATURE CARDS ── */}
        <div className="text-center mb-7 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-widest mb-1">
            Why choose us
          </p>
          <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
            Built on Trust. Backed by Expertise.
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate('/about')}
              className="group p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl cursor-pointer
                         border border-transparent
                         transition-all duration-300
                         hover:-translate-y-1 sm:hover:-translate-y-2
                         hover:bg-sky-50 hover:border-sky-200 hover:shadow-lg
                         flex flex-col items-start gap-3 sm:gap-4"
            >
              {/* Icon circle */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white border border-gray-200
                              flex items-center justify-center text-sky-600
                              group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600
                              transition-all duration-300 shadow-sm flex-shrink-0">
                {feature.icon}
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 sm:mb-1.5
                               group-hover:text-sky-700 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-[9px] sm:text-xs leading-relaxed hidden sm:block">
                  {feature.description}
                </p>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold
                               text-sky-500 opacity-0 group-hover:opacity-100
                               transition-opacity duration-300 mt-auto">
                Learn more →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;