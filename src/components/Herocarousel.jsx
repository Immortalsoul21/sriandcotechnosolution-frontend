import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    badge: '📡 Antenna Solutions',
    title: 'High-Performance Antenna Systems For Every Mission.',
    description:
      'From military-grade phased arrays to precision microwave antennas, our components power the most critical communication and surveillance systems worldwide.',
    accentColor: '#10b981',
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: '/images/ChatGPT Image May 9, 2026, 10_43_56 AM.png',
    pattern: 'circuit',
  },
  {
    badge: '🌐 Trusted Worldwide',
    title: 'Connecting The Satellites Through Mission-Critical Components',
    description:
      'With a presence across global markets, we deliver RF, Microwave & Electronic Components to space, aerospace, defence, and industrial sectors — on time, every time.',
    accentColor: '#0ea5e9',
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
    badge: '🚀 Defence & Missile Systems',
    title: 'Built For The Battlefield. Trusted By The Best.',
    description:
      'Our RF and electronic components meet the rigorous demands of defence systems — from missile guidance electronics to radar subsystems — engineered for zero failure.',
    accentColor: '#f59e0b',
    stat1: { value: '', label: '' },
    stat2: { value: '', label: '' },
    image: '/images/product/RF & Microwave Components and Solutions/Antenna Solutions/Millimeter Wave Antennas/77 GHz Radar Antennas.png',
    pattern: 'dots',
  },
  {
    badge: '🗼 Defence & Aerospace Infrastructure',
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();

  const fallbackGradients = [
    'from-[#0a1628] via-[#0d2147] to-[#112a5c]',
    'from-[#071a2e] via-[#0c2a4a] to-[#0f3460]',
    'from-[#0a1f12] via-[#0d2e1a] to-[#0f3d22]',
    'from-[#1a1200] via-[#2e1f00] to-[#3d2a00]',
    'from-[#0f0f23] via-[#1a1a3e] to-[#1e1e5a]',
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent(p => (p + 1) % slides.length), 20000);
    return () => clearInterval(id);
  }, []);

  // Swipe support for mobile
  const minSwipeDistance = 50;
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (Math.abs(dist) >= minSwipeDistance) {
      if (dist > 0) setCurrent(p => (p + 1) % slides.length);
      else setCurrent(p => (p - 1 + slides.length) % slides.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: 'clamp(340px, 55vw, 520px)' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Track stretched to (slides.length * 100%) width; each slide gets 1/n of that */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(current * 100) / slides.length}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`relative flex items-center overflow-hidden flex-shrink-0
              ${imgErrors[i] ? `bg-gradient-to-br ${fallbackGradients[i]}` : 'bg-gray-900'}`}
            style={{
              width: `${100 / slides.length}%`,
              height: '100%',
              paddingTop: 'clamp(40px, 8vw, 64px)',
              paddingBottom: 'clamp(52px, 8vw, 64px)',
            }}
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
                {/* Stronger overlay on mobile so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 sm:from-black/85 sm:via-black/60 sm:to-black/10" />
              </>
            )}

            {slide.pattern === 'circuit' && <CircuitPattern />}
            {slide.pattern === 'grid' && <GridPattern />}
            {slide.pattern === 'dots' && <DotsPattern />}

            {/* Glow orb — hidden on very small screens to reduce clutter */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full opacity-20 pointer-events-none hidden sm:block"
              style={{
                width: 'clamp(160px, 30vw, 384px)',
                height: 'clamp(160px, 30vw, 384px)',
                background: slide.accentColor,
                filter: 'blur(80px)',
              }}
            />

            <div
              className="container mx-auto relative z-10"
              style={{
                paddingLeft: 'clamp(20px, 5vw, 48px)',
                paddingRight: 'clamp(20px, 5vw, 48px)',
              }}
            >
              <div className="max-w-xl text-white">

                {/* Badge */}
                <span
                  className="inline-flex items-center gap-1.5 rounded-full font-semibold border border-white/20 backdrop-blur-sm"
                  style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    padding: '4px 12px',
                    marginBottom: 'clamp(10px, 2vw, 16px)',
                    backgroundColor: `${slide.accentColor}28`,
                    display: 'inline-flex',
                  }}
                >
                  {slide.badge}
                </span>

                {/* Title — larger floor on mobile */}
                <h2
                  className="font-bold leading-tight tracking-tight text-white"
                  style={{
                    fontSize: 'clamp(18px, 4.5vw, 40px)',
                    marginBottom: 'clamp(8px, 1.5vw, 14px)',
                  }}
                >
                  {slide.title}
                </h2>

                {/* Description — readable on mobile */}
                <p
                  className="opacity-80 max-w-lg leading-relaxed"
                  style={{
                    fontSize: 'clamp(12px, 1.6vw, 15px)',
                    marginBottom: 'clamp(18px, 3vw, 28px)',
                  }}
                >
                  {slide.description}
                </p>

                {/* CTA buttons — stack on very small screens */}
                <div
                  className="flex flex-wrap"
                  style={{ gap: 'clamp(8px, 1.5vw, 12px)' }}
                >
                  <button
                    onClick={() => navigate('/products')}
                    className="font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                    style={{
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      padding: 'clamp(9px, 1.2vw, 11px) clamp(16px, 2.5vw, 22px)',
                      backgroundColor: slide.accentColor,
                      /* Full-width on tiny screens, auto otherwise */
                      width: 'auto',
                      minWidth: 'clamp(130px, 30vw, 160px)',
                    }}
                  >
                    Explore All Products →
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="font-semibold bg-white/10 border border-white/30 text-white backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 active:scale-95"
                    style={{
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      padding: 'clamp(9px, 1.2vw, 11px) clamp(16px, 2.5vw, 22px)',
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
            animation: 'hero-progress 20s linear forwards',
          }}
        />
      </div>

      {/* Dot nav — slightly larger tap targets on mobile */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white' : 'bg-white/40'}`}
            style={{ width: i === current ? 20 : 8, height: 8 }}
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