import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    categoryId: 'RF & Microwave Components and Solutions',
    title: 'RF & Microwave Components And Solutions',
    description: 'Connectors, cables, amplifiers, filters, waveguides, antennas and thin-film components for high-frequency RF applications.',
    subcategories: ['RF Connectors & Adapters', 'RF Amplifiers', 'Antenna Solutions', 'Waveguide & High-Frequency Components'],
    gradientFrom: '#0284c7', gradientTo: '#0369a1',
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/TNC - SMB - SMC - MCX - MMCX.jpeg",
  },
  {
    categoryId: 'Test & Measurement',
    title: 'Test & Measurement',
    description: 'Anechoic chambers, RF absorbers, shielded enclosures, scanner systems and EMC solutions for compliance testing.',
    subcategories: ['EMC / EMI Test Chambers', 'RF Shielded Enclosures & Boxes', 'RF Scanner Systems', 'Microwave Absorbers'],
    gradientFrom: '#0891b2', gradientTo: '#0e7490',
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Anechoic Chambers.png",
  },
  {
    categoryId: 'Electronics Sensors',
    title: 'Electronics Sensors',
    description: 'Precision sensing solutions for pressure, load, temperature, position, vibration and environmental measurement.',
    subcategories: ['Pressure Sensors', 'Load Cells', 'Temperature Sensors', 'Accelerometers'],
    gradientFrom: '#059669', gradientTo: '#0f766e',
    image: "/images/product/Electronics Sensors/Additional Sensor Solutions/Displacement Sensors.png",
  },
  {
    categoryId: 'Special Materials',
    title: 'Special Materials',
    description: 'Advanced lightweight and thermal materials including carbon fibre, PMI Foam, Solimide and thermal shielding solutions.',
    subcategories: ['Carbon Fiber Sheet', 'PMI Foam', 'Solimide', 'Thermal Shielding Solution'],
    gradientFrom: '#7c3aed', gradientTo: '#6d28d9',
    image: "/images/product/Special Materials/Materials/Rohacell.png",
  },
  {
    categoryId: 'RCP & HIL',
    title: 'RCP & HIL',
    description: 'Rapid Control Prototyping and Hardware-in-the-Loop systems for real-time simulation and embedded control validation.',
    subcategories: ['Rapid Control Prototyping System', 'Hardware-in-the-Loop System'],
    gradientFrom: '#475569', gradientTo: '#1e293b',
    image: "/images/product/RCP and HIL/Hardware-in-the-Loop (HIL)/Hardware-in-the-Loop (HIL).png",
  },
];

const CategoryCard = ({ cat, onClick, eager = false }) => {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const MAX_SUBS = 3;
  const shown = cat.subcategories.slice(0, MAX_SUBS);
  const extra = cat.subcategories.length - MAX_SUBS;

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        aspectRatio: 'var(--card-ratio, 16/9)',
        width: '100%',
      }}
    >
      {/* Skeleton shimmer — shown until image loads (only when not errored) */}
      {!loaded && !imgError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}

      {!imgError ? (
        <img
          src={cat.image}
          alt={cat.title}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setImgError(true)}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          draggable={false}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
        />
      )}

      <div
        className="absolute inset-0 opacity-30"
        style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.15) 100%)' }}
      />

      {/* ── Base state (always visible on mobile, hidden on hover on desktop) ── */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-4 transition-opacity duration-300 md:group-hover:opacity-0">
        <span className="mb-1.5 self-start text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/25 text-white/60">
          {cat.subcategories.length} subcategories
        </span>
        <h3 className="text-white font-bold leading-tight drop-shadow text-sm sm:text-base">
          {cat.title}
        </h3>
        <p className="mt-1 text-white/60 leading-relaxed line-clamp-2 text-[11px] sm:text-xs">
          {cat.description}
        </p>
        <span className="mt-2 self-start text-[10px] font-semibold text-white/50 border border-white/20 rounded-md px-2 py-0.5 md:hidden">
          Tap to explore →
        </span>
      </div>

      {/* ── Hover state (desktop only) ── */}
      <div
        className="absolute inset-0 flex-col justify-between p-4 opacity-0 translate-y-2
                   group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out
                   hidden md:flex"
        style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
      >
        <div
          className="h-0.5 w-8 rounded-full mb-3"
          style={{ background: `linear-gradient(90deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
        />
        <div className="flex-1 flex flex-col">
          <h3 className="text-white font-bold leading-tight mb-3 text-base">
            {cat.title}
          </h3>
          <ul className="space-y-2 flex-1">
            {shown.map((sub, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="flex-shrink-0 mt-1.5 rounded-full"
                  style={{ width: 3, height: 3, background: cat.gradientFrom, boxShadow: `0 0 4px ${cat.gradientFrom}` }}
                />
                <span className="text-white/80 leading-snug text-[11px]">{sub}</span>
              </li>
            ))}
            {extra > 0 && (
              <li className="text-white/35 pl-3.5 text-[10px]">+{extra} more</li>
            )}
          </ul>
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 self-start font-semibold text-white border border-white/25 rounded-lg px-2.5 py-1 hover:bg-white/10 transition-colors text-[11px]">
          Explore →
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .category-card-wrapper { --card-ratio: 16/9; }
        }
        @media (min-width: 768px) {
          .category-card-wrapper { --card-ratio: 3/4; }
        }
      `}</style>
    </div>
  );
};

const ProductCategories = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / categories.length;
      setActiveIndex(Math.min(Math.round(el.scrollLeft / cardWidth), categories.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: (el.scrollWidth / categories.length) * i, behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-14 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-5 sm:mb-10">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-1 sm:mb-2">
            What We Offer
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Specialised components and solutions across RF, Microwave, Sensors, Test and Measurement Chambers, and
            Advanced Materials — engineered for performance-critical applications.
          </p>
        </div>

        {/*
          ── MOBILE: vertical stacked list (full-width landscape cards) ──
          ── DESKTOP (md+): horizontal row of 3/4 portrait cards ──
        */}
        <div className="block md:hidden space-y-3">
          {categories.map((cat, i) => (
            <div
              key={cat.categoryId}
              className="category-card-wrapper"
              style={{ '--card-ratio': '16/9' }}
            >
              <CategoryCard
                cat={cat}
                eager={i === 0} /* first card is above the fold — load eagerly */
                onClick={() => navigate(`/products/${encodeURIComponent(cat.categoryId)}`)}
              />
            </div>
          ))}
        </div>

        {/* Desktop horizontal scroll / flex row */}
        <div
          ref={scrollRef}
          className="hidden md:flex gap-4 overflow-x-auto pb-0 snap-x snap-mandatory md:snap-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {categories.map((cat, i) => (
            <div
              key={cat.categoryId}
              className="category-card-wrapper snap-start flex-1 min-w-0"
              style={{ '--card-ratio': '3/4', aspectRatio: '3/4' }}
            >
              <CategoryCard
                cat={cat}
                eager={i < 3} /* first 3 desktop cards visible immediately — load eagerly */
                onClick={() => navigate(`/products/${encodeURIComponent(cat.categoryId)}`)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-10">
          <button
            onClick={() => navigate('/products')}
            className="px-7 sm:px-9 py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
          >
            Browse All Products →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;