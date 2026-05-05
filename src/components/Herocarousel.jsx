import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// DATA POINTS removed from all stat fields per instructions — replaced with qualitative labels
const slides = [
  {
    badge: '🌐 Trusted Worldwide',
    title: 'Connecting The Satellites (Sat-Com) Through Mission-Critical Components',
    description:
      'With a presence across global markets, we deliver RF, Microwave & Electronic Components to space, aerospace, defence, and industrial sectors — on time, every time.',
    accentColor: '#0ea5e9',
    // REMOVED numerical stat values — replaced with qualitative messaging
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=80',
    pattern: 'circuit',
  },
  {
    badge: '✅ Quality First',
    title: 'Every Component Certified. Every Delivery Guaranteed.',
    description:
      'All products are sourced exclusively from authorised manufacturers — ISO-certified, tested to spec, and ready for the most demanding environments.',
    accentColor: '#06b6d4',
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    pattern: 'grid',
  },
  {
    badge: '📡 Antenna Solutions',
    title: 'High-Performance Antenna Systems For Every Mission.',
    description:
      'From military-grade phased arrays to precision microwave antennas, our components power the most critical communication and surveillance systems worldwide. Connecting Satellites (Sat-Com) through mission-critical components.',
    accentColor: '#10b981',
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Goldstone_Deep_Space_Communications_Complex.jpg/1280px-Goldstone_Deep_Space_Communications_Complex.jpg',
    pattern: 'circuit',
  },
  {
    badge: '🚀 Defence & Missile Systems',
    title: 'Built For The Battlefield. Trusted By The Best.',
    description:
      'Our RF and electronic components meet the rigorous demands of defence systems — from missile guidance electronics to radar subsystems — engineered for zero failure in the field. Powering the defence and aerospace from ground up.',
    accentColor: '#f59e0b',
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Telecommunication_tower_Gerbrandy.jpg/800px-Telecommunication_tower_Gerbrandy.jpg',
    pattern: 'dots',
  },
  {
    badge: '🗼 Defense and Aerospace Infrastructure',
    title: 'Powering Defence and Aerospace From The Ground Up.',
    description:
      'Our passive and active RF components form the backbone of defence and aerospace technologies across continents — reliable, weatherproof, and built to last.',
    accentColor: '#8b5cf6',
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80',
    pattern: 'grid',
  },
];

const CircuitPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="cp" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <path d="M10 10h20v20h-20z" fill="none" stroke="white" strokeWidth="0.8" />
        <path d="M30 20h20" fill="none" stroke="white" strokeWidth="0.8" />
        <circle cx="50" cy="20" r="3" fill="white" opacity="0.4" />
        <path d="M50 20v20h-10" fill="none" stroke="white" strokeWidth="0.8" />
        <path d="M10 40v20h30v-10" fill="none" stroke="white" strokeWidth="0.8" />
        <circle cx="10" cy="40" r="3" fill="white" opacity="0.4" />
        <path d="M60 10v30h-20" fill="none" stroke="white" strokeWidth="0.8" />
        <circle cx="60" cy="10" r="3" fill="white" opacity="0.4" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#cp)" />
  </svg>
);

const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="gp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0L0 0 0 40" fill="none" stroke="white" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gp)" />
  </svg>
);

const DotsPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dp" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1.5" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dp)" />
  </svg>
);

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const navigate = useNavigate();

  const fallbackGradients = [
    'from-[#0a1628] via-[#0d2147] to-[#112a5c]',
    'from-[#071a2e] via-[#0c2a4a] to-[#0f3460]',
    'from-[#0a1f12] via-[#0d2e1a] to-[#0f3d22]',
    'from-[#1a1200] via-[#2e1f00] to-[#3d2a00]',
    'from-[#0f0f23] via-[#1a1a3e] to-[#1e1e5a]',
    'from-[#1a0a2e] via-[#2a0d4a] to-[#3d1169]',
  ];

  useEffect(() => {
    console.log('[HeroCarousel] setInterval started with 20000ms (20s)');
    const id = setInterval(() => setCurrent(p => (p + 1) % slides.length), 20000);
    return () => clearInterval(id);
  }, []);


  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'clamp(260px, 45vw, 480px)' }}>

      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`min-w-full flex-shrink-0 relative flex items-center overflow-hidden
                        ${imgErrors[i] ? `bg-gradient-to-br ${fallbackGradients[i]}` : 'bg-gray-900'}`}
            style={{ paddingTop: 'clamp(24px, 4vw, 56px)', paddingBottom: 'clamp(24px, 4vw, 56px)' }}
          >
            {!imgErrors[i] && (
              <>
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  onError={() => setImgErrors(e => ({ ...e, [i]: true }))}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />
              </>
            )}

            {slide.pattern === 'circuit' && <CircuitPattern />}
            {slide.pattern === 'grid' && <GridPattern />}
            {slide.pattern === 'dots' && <DotsPattern />}

            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full opacity-20 pointer-events-none"
              style={{
                width: 'clamp(160px, 30vw, 384px)',
                height: 'clamp(160px, 30vw, 384px)',
                background: slide.accentColor,
                filter: 'blur(80px)',
              }}
            />

            <div className="container mx-auto relative z-10" style={{ paddingLeft: 'clamp(16px, 5vw, 48px)', paddingRight: 'clamp(16px, 5vw, 48px)' }}>
              <div className="max-w-xl text-white">

                <span
                  className="inline-flex items-center gap-1.5 rounded-full font-semibold border border-white/20 backdrop-blur-sm"
                  style={{
                    fontSize: 'clamp(9px, 1.2vw, 12px)',
                    padding: 'clamp(2px, 0.4vw, 4px) clamp(8px, 1.2vw, 12px)',
                    marginBottom: 'clamp(8px, 1.5vw, 16px)',
                    backgroundColor: `${slide.accentColor}28`,
                    display: 'inline-flex',
                  }}
                >
                  {slide.badge}
                </span>

                <h2
                  className="font-bold leading-tight tracking-tight text-white"
                  style={{
                    fontSize: 'clamp(14px, 2.8vw, 40px)',
                    marginBottom: 'clamp(6px, 1vw, 12px)',
                  }}
                >
                  {slide.title}
                </h2>

                <p
                  className="opacity-75 max-w-lg leading-relaxed"
                  style={{
                    fontSize: 'clamp(10px, 1.3vw, 14px)',
                    marginBottom: 'clamp(12px, 2vw, 24px)',
                  }}
                >
                  {slide.description}
                </p>

                {/* STAT LABELS — no numerical data points per instructions */}
                <div className="flex items-center" style={{ gap: 'clamp(12px, 2.5vw, 24px)', marginBottom: 'clamp(12px, 2vw, 28px)' }}>
                  <div>
                    <div className="font-bold" style={{ fontSize: 'clamp(11px, 1.8vw, 20px)', color: slide.accentColor }}>
                      {slide.stat1.value}
                    </div>
                    <div className="text-white/55" style={{ fontSize: 'clamp(8px, 1vw, 11px)', marginTop: 2 }}>
                      {slide.stat1.label}
                    </div>
                  </div>
                  <div className="bg-white/20" style={{ width: 1, height: 'clamp(24px, 3vw, 40px)' }} />
                  <div>
                    <div className="font-bold" style={{ fontSize: 'clamp(11px, 1.8vw, 20px)', color: slide.accentColor }}>
                      {slide.stat2.value}
                    </div>
                    <div className="text-white/55" style={{ fontSize: 'clamp(8px, 1vw, 11px)', marginTop: 2 }}>
                      {slide.stat2.label}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap" style={{ gap: 'clamp(6px, 1vw, 10px)' }}>
                  <button
                    onClick={() => navigate('/products')}
                    className="font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    style={{
                      fontSize: 'clamp(10px, 1.2vw, 14px)',
                      padding: 'clamp(6px, 0.9vw, 10px) clamp(12px, 2vw, 20px)',
                      backgroundColor: slide.accentColor,
                    }}
                  >
                    {/* UPDATED: "Product Store" → "All Products" */}
                    Explore All Products →
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="font-semibold bg-white/10 border border-white/30 text-white backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                    style={{
                      fontSize: 'clamp(10px, 1.2vw, 14px)',
                      padding: 'clamp(6px, 0.9vw, 10px) clamp(12px, 2vw, 20px)',
                    }}
                  >
                    About Us
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full"
          style={{
            backgroundColor: slides[current].accentColor,
            animation: 'hero-progress 1s linear forwards',
          }}
        />
      </div>

      {/* Dot nav */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white' : 'bg-white/40'}`}
            style={{ width: i === current ? 20 : 7, height: 7 }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes hero-progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </section>
  );
};

export default HeroCarousel;