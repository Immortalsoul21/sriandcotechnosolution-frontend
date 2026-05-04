import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// These match the categoryIds in products2.js exactly
const categories = [
  {
    categoryId: 'RF & Microwave Components and Solutions',
    title: 'RF & Microwave Components And Solutions',
    description: 'Connectors, cables, amplifiers, filters, waveguides, antennas and thin-film components for high-frequency RF applications.',
    subcategories: ['RF Connectors & Adapters', 'RF Amplifiers', 'Antenna Solutions', 'Waveguide & High-Frequency Components'],
    gradientFrom: '#0284c7', gradientTo: '#0369a1',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'Test & Measurement',
    title: 'Test & Measurement',
    description: 'Anechoic chambers, RF absorbers, shielded enclosures, scanner systems and EMC solutions for compliance testing.',
    subcategories: ['EMC / EMI Test Chambers', 'RF Shielded Enclosures & Boxes', 'RF Scanner Systems', 'Microwave Absorbers'],
    gradientFrom: '#0891b2', gradientTo: '#0e7490',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'Electronics Sensors',
    title: 'Electronics Sensors',
    description: 'Precision sensing solutions for pressure, load, temperature, position, vibration and environmental measurement.',
    subcategories: ['Pressure Sensors', 'Load Cells', 'Temperature Sensors', 'Accelerometers'],
    gradientFrom: '#059669', gradientTo: '#0f766e',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'Special Materials',
    title: 'Special Materials',
    description:
      // UPDATED: "Rohacell" → "PMI Foam" everywhere
      'Advanced lightweight and thermal materials including carbon fibre, PMI Foam, Solimide and thermal shielding solutions.',
    // UPDATED: subcategory name Rohacell → PMI Foam
    subcategories: ['Carbon Fiber Sheet', 'PMI Foam', 'Solimide', 'Thermal Shielding Solution'],
    gradientFrom: '#7c3aed', gradientTo: '#6d28d9',
    // UPDATED: Special Materials card image (changed from abstract to materials-relevant image)
    image: 'https://images.unsplash.com/photo-1562114808-b4b33cf4d38a?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'RCP & HIL',
    title: 'RCP & HIL',
    description: 'Rapid Control Prototyping and Hardware-in-the-Loop systems for real-time simulation and embedded control validation.',
    subcategories: ['Rapid Control Prototyping System', 'Hardware-in-the-Loop System'],
    gradientFrom: '#475569', gradientTo: '#1e293b',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
];

const CategoryCard = ({ cat, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const MAX_SUBS = 3;
  const shown = cat.subcategories.slice(0, MAX_SUBS);
  const extra = cat.subcategories.length - MAX_SUBS;

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none flex-shrink-0 w-[72vw] sm:w-[44vw] md:w-auto md:flex-1"
      style={{ minWidth: 0, aspectRatio: '3/4' }}
    >
      {!imgError ? (
        <img
          src={cat.image}
          alt={cat.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          draggable={false}
        />
      ) : (
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }} />
      )}

      <div className="absolute inset-0 opacity-30" style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 40%, rgba(0,0,0,0.10) 100%)' }} />

      {/* Base state */}
      <div className="absolute inset-0 flex flex-col justify-end p-3.5 sm:p-4 transition-opacity duration-300 group-hover:opacity-0">
        <span className="mb-2 self-start text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/25 text-white/60">
          {cat.subcategories.length} subcategories
        </span>
        <h3 className="text-white font-bold leading-tight drop-shadow" style={{ fontSize: 'clamp(13px, 2.2vw, 18px)', letterSpacing: '-0.01em' }}>
          {cat.title}
        </h3>
        <p className="mt-1 text-white/60 leading-relaxed line-clamp-2 hidden sm:block" style={{ fontSize: 'clamp(9px, 1vw, 11px)' }}>
          {cat.description}
        </p>
      </div>

      {/* Hover state */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-3.5 sm:p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
        style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
      >
        <div className="h-0.5 w-8 rounded-full mb-3" style={{ background: `linear-gradient(90deg, ${cat.gradientFrom}, ${cat.gradientTo})` }} />

        <div className="flex-1 flex flex-col">
          <h3 className="text-white font-bold leading-tight mb-3" style={{ fontSize: 'clamp(13px, 2.2vw, 18px)', letterSpacing: '-0.01em' }}>
            {cat.title}
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 flex-1">
            {shown.map((sub, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-1.5 rounded-full" style={{ width: 3, height: 3, background: cat.gradientFrom, boxShadow: `0 0 4px ${cat.gradientFrom}` }} />
                <span className="text-white/80 leading-snug" style={{ fontSize: 'clamp(8px, 1vw, 11px)' }}>
                  {sub}
                </span>
              </li>
            ))}
            {extra > 0 && (
              <li className="text-white/35 pl-3.5" style={{ fontSize: 'clamp(8px, 0.9vw, 10px)' }}>
                +{extra} more
              </li>
            )}
          </ul>
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 self-start font-semibold text-white border border-white/25 rounded-lg px-2.5 py-1 hover:bg-white/10 transition-colors" style={{ fontSize: 'clamp(9px, 1vw, 11px)' }}>
          Explore →
        </div>
      </div>
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
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-widest mb-1 sm:mb-2">
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

        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 snap-x snap-mandatory md:snap-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {categories.map((cat) => (
            <div key={cat.categoryId} className="snap-start md:flex-1 min-w-0">
              <CategoryCard
                cat={cat}
                onClick={() => navigate(`/products/${encodeURIComponent(cat.categoryId)}`)}
              />
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-1.5 mt-4">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to ${categories[i].title}`}
              className="transition-all duration-300 rounded-full"
              style={{ width: i === activeIndex ? 20 : 6, height: 6, background: i === activeIndex ? '#0284c7' : '#cbd5e1' }}
            />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-10">
          <button
            onClick={() => navigate('/products')}
            className="px-7 sm:px-9 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* UPDATED: "Product Store" → "All Products" */}
            Browse All Products →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;