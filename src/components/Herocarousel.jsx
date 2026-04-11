import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// All images: Unsplash License — free for commercial use, no attribution required
const slides = [
  {
    badge: '🌐 Trusted Worldwide',
    title: 'Connecting The World Through Precision Components',
    description:
      'With a presence in 150+ countries, we deliver RF, Microwave & Electronic Components to aerospace, defence, and industrial sectors — on time, every time.',
    accentColor: '#3b82f6',
    stat1: { value: '150+', label: 'Countries Served' },
    stat2: { value: '25+', label: 'Years of Excellence' },
    // Earth from space — NASA on Unsplash
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=80',
    pattern: 'circuit',
  },
  {
    badge: '✅ Quality First',
    title: 'Every Component Certified. Every Delivery Guaranteed.',
    description:
      'All products are sourced exclusively from authorised manufacturers — ISO-certified, tested to spec, and ready for the most demanding environments.',
    accentColor: '#06b6d4',
    stat1: { value: '100%', label: 'Certified Supply Chain' },
    stat2: { value: '50K+', label: 'Components in Stock' },
    // Blue PCB circuit board — Umberto on Unsplash
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    pattern: 'grid',
  },
  {
    badge: '⚡ Same-Day Dispatch',
    title: 'Speed Without Compromise. Delivered To Your Doorstep.',
    description:
      'In-stock items ship the same day. Our logistics network ensures your critical components arrive on schedule, so your production line never stops.',
    accentColor: '#8b5cf6',
    stat1: { value: 'Same Day', label: 'Shipping on Stock Items' },
    stat2: { value: '99.8%', label: 'On-Time Delivery Rate' },
    // Warehouse / logistics — Timelab on Unsplash
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80',
    pattern: 'dots',
  },
];

// ── Subtle SVG overlays ────────────────────────────────────────────────────────
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

// ── Main component ─────────────────────────────────────────────────────────────
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const navigate = useNavigate();

  // Fallback gradients if images fail
  const fallbackGradients = [
    'from-[#0a1628] via-[#0d2147] to-[#112a5c]',
    'from-[#071a2e] via-[#0c2a4a] to-[#0f3460]',
    'from-[#0f0f23] via-[#1a1a3e] to-[#1e1e5a]',
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] overflow-hidden">

      {/* ── Slide track ── */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`min-w-full flex-shrink-0 relative flex items-center py-10 sm:py-14 overflow-hidden
                        ${imgErrors[i] ? `bg-gradient-to-br ${fallbackGradients[i]}` : 'bg-gray-900'}`}
          >
            {/* Real photo background */}
            {!imgErrors[i] && (
              <>
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  onError={() => setImgErrors(e => ({ ...e, [i]: true }))}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
              </>
            )}

            {/* SVG texture on top of photo */}
            {slide.pattern === 'circuit' && <CircuitPattern />}
            {slide.pattern === 'grid'    && <GridPattern />}
            {slide.pattern === 'dots'    && <DotsPattern />}

            {/* Accent glow — right side */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none"
              style={{ background: slide.accentColor, filter: 'blur(100px)' }}
            />

            {/* ── Content ── */}
            <div className="container mx-auto px-6 sm:px-12 relative z-10">
              <div className="max-w-xl text-white">

                {/* Badge */}
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
                             mb-4 border border-white/20 backdrop-blur-sm"
                  style={{ backgroundColor: `${slide.accentColor}28` }}
                >
                  {slide.badge}
                </span>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight tracking-tight">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm mb-6 opacity-75 max-w-lg leading-relaxed">
                  {slide.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-7">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: slide.accentColor }}>
                      {slide.stat1.value}
                    </div>
                    <div className="text-[10px] text-white/55 mt-0.5">{slide.stat1.label}</div>
                  </div>
                  <div className="w-px bg-white/20" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: slide.accentColor }}>
                      {slide.stat2.value}
                    </div>
                    <div className="text-[10px] text-white/55 mt-0.5">{slide.stat2.label}</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => navigate('/products')}
                    className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white
                               transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    style={{ backgroundColor: slide.accentColor }}
                  >
                    Explore Products →
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold
                               bg-white/10 border border-white/30 text-white backdrop-blur-sm
                               transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                  >
                    About Us
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full"
          style={{
            backgroundColor: slides[current].accentColor,
            animation: 'hero-progress 6s linear forwards',
          }}
        />
      </div>

      {/* ── Dot navigation ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes hero-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;