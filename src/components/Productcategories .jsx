import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// ─── Unsplash free-to-use images (Unsplash License — no attribution required) ───
// Format: https://images.unsplash.com/photo-{id}?auto=format&fit=crop&w=600&q=80
const categories = [
  {
    categoryId: 'rf-microwave',
    title: 'RF & Microwave Components',
    description: 'High-frequency solutions from 1 GHz to 40 GHz for aerospace, defence & telecom.',
    subcategories: [
      'RF Connectors', 'RF Cable Assemblies', 'Amplifiers (LNA / PA)',
      'RF Filters', 'Attenuators', 'RF Switches',
      'Waveguide Components', 'Power Dividers', 'Directional Couplers',
    ],
    gradientFrom: '#2563eb',
    gradientTo: '#1e40af',
    // PCB / electronic circuitry — Umberto on Unsplash
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'test-measurement',
    title: 'Test & Measurement',
    description: 'EMC chambers, shielded enclosures, and RF scanner systems for compliance testing.',
    subcategories: [
      'Anechoic Chambers', 'Semi-Anechoic Chambers', 'RF Shield Boxes',
      'Shielded Test Enclosures', 'RF Scanners', 'Desktop EMC Systems',
      'Microwave Absorbers', 'Honeycomb Panels',
    ],
    gradientFrom: '#4f46e5',
    gradientTo: '#3730a3',
    // Lab / measurement equipment — Louis Reed on Unsplash
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'sensors',
    title: 'Sensors & Measurement',
    description: 'Precision sensors for pressure, temperature, position, and vibration measurement.',
    subcategories: [
      'Pressure Sensors', 'Load Cells', 'Temperature Sensors',
      'RTD Sensors (PT100/PT1000)', 'Accelerometers (IEPE)',
      'Position & LVDT Sensors', 'Torque Sensors', 'Strain Gauges',
    ],
    gradientFrom: '#059669',
    gradientTo: '#0f766e',
    // Analytics / data dashboard — Nicolas Thomas on Unsplash
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'thin-film',
    title: 'Thin Film & Electronic',
    description: 'Microwave ICs, capacitors, resistors, diodes, and transistors for high-frequency designs.',
    subcategories: [
      'Thin Film Circuits', 'Silicon / Ceramic Capacitors',
      'Chip Resistors', 'Power Resistors (AlN / BeO)',
      'RF Switching Diodes', 'Detector Diodes',
      'RF Power Transistors', 'Analog ICs / Known Good Die',
    ],
    gradientFrom: '#7c3aed',
    gradientTo: '#6d28d9',
    // Microchip / semiconductor close-up — Michael Dziedzic on Unsplash
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'antennas',
    title: 'Antennas',
    description: 'Full-spectrum antenna solutions from omnidirectional to phased arrays and mmWave.',
    subcategories: [
      'Horn Antennas', 'Patch / Microstrip Antennas',
      'Parabolic Dish Antennas', 'Yagi-Uda / Log Periodic',
      'GPS / GNSS Antennas', '5G / 4G / LTE Antennas',
      'EMC Test Antennas', 'Phased Array Antennas',
    ],
    gradientFrom: '#ea580c',
    gradientTo: '#dc2626',
    // Satellite dish / antenna tower — Gilles Rolland-Monnet on Unsplash
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'capabilities',
    title: 'Capabilities & Support',
    description: 'Custom RF cable assembly, prototype production, and sourcing from authorised partners.',
    subcategories: [
      'Custom RF Cable Assembly', 'Prototype Production',
      'Small Batch Manufacturing', 'RF System Integration',
      'Antenna System Design', 'Radar & Satellite Comm',
      'Authorised Sourcing — Mouser / Digi-Key',
    ],
    gradientFrom: '#475569',
    gradientTo: '#1e293b',
    // Electronics assembly / soldering iron — 𝓴𝓘𝓡𝓚 𝕝𝔸𝕀 on Unsplash
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
  },
];

const CARD_SIZE = 220;  // px — width & height (square)
const CARD_GAP  = 16;   // px

function getVisibleCount(containerWidth) {
  if (containerWidth < 320) return 1;
  if (containerWidth < 520) return 2;
  if (containerWidth < 740) return 3;
  if (containerWidth < 960) return 4;
  return Math.min(5, categories.length);
}

// ─── Single card ──────────────────────────────────────────────────────────────
const CategoryCard = ({ cat, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const MAX_SUBS = 5;
  const shown = cat.subcategories.slice(0, MAX_SUBS);
  const extra = cat.subcategories.length - MAX_SUBS;

  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{ width: CARD_SIZE, height: CARD_SIZE }}
    >
      {/* Background photo — falls back to gradient if image fails */}
      {!imgError ? (
        <img
          src={cat.image}
          alt={cat.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
        />
      )}

      {/* Dark scrim — readable text at rest */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.80) 50%, rgba(0,0,0,0.20) 100%)',
        }}
      />

      {/* ── Base layer: shown by default, fades on hover ── */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4
                   transition-opacity duration-300 group-hover:opacity-0"
      >
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 drop-shadow">
          {cat.title}
        </h3>
        <p className="text-white/75 text-[11px] leading-relaxed line-clamp-2 drop-shadow">
          {cat.description}
        </p>
      </div>

      {/* ── Hover overlay: frosted glass panel with subcategory list ── */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-4
                   opacity-0 translate-y-2
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300 ease-out rounded-2xl"
        style={{
          background: 'rgba(0,0,0,0.70)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <h3 className="text-white font-semibold text-sm leading-snug">
          {cat.title}
        </h3>

        <ul className="flex-1 mt-3 space-y-1.5 overflow-hidden">
          {shown.map((sub, i) => (
            <li key={i} className="flex items-center gap-2">
              <span
                className="flex-shrink-0 rounded-full"
                style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.55)' }}
              />
              <span className="text-white/90 text-[10.5px] leading-tight">{sub}</span>
            </li>
          ))}
          {extra > 0 && (
            <li className="text-white/40 text-[10px] pl-3.5">+{extra} more</li>
          )}
        </ul>

        <span
          className="inline-flex items-center gap-1 mt-2 self-start
                     text-[10px] font-semibold text-white
                     border border-white/35 rounded-lg px-2.5 py-1
                     hover:bg-white/15 transition-colors"
        >
          View all →
        </span>
      </div>
    </div>
  );
};

// ─── Main section ─────────────────────────────────────────────────────────────
const ProductCategories = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(4);
  const containerRef = useRef(null);

  const maxIndex = Math.max(0, categories.length - visible);

  const updateVisible = useCallback(() => {
    if (containerRef.current) {
      setVisible(getVisibleCount(containerRef.current.offsetWidth));
    }
  }, []);

  useEffect(() => {
    updateVisible();
    const ro = new ResizeObserver(updateVisible);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [updateVisible]);

  // Clamp current index when visible count changes
  useEffect(() => {
    setCurrent(c => Math.min(c, Math.max(0, categories.length - visible)));
  }, [visible]);

  const goTo = (idx) => setCurrent(Math.max(0, Math.min(idx, maxIndex)));

  const trackOffset = current * (CARD_SIZE + CARD_GAP);

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Specialised components and solutions across RF, microwave, sensors, and antenna
            systems — engineered for performance-critical applications.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative" ref={containerRef}>

          {/* Left arrow */}
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                       z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm
                       flex items-center justify-center text-gray-700 text-base
                       hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed
                       transition-all duration-200"
            aria-label="Previous"
          >
            ←
          </button>

          {/* Sliding track */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex"
              style={{
                gap: CARD_GAP,
                transform: `translateX(-${trackOffset}px)`,
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.categoryId}
                  cat={cat}
                  onClick={() => navigate('/products')}
                />
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => goTo(current + 1)}
            disabled={current >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                       z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm
                       flex items-center justify-center text-gray-700 text-base
                       hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed
                       transition-all duration-200"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-4 h-2 bg-gray-800'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm
                       transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5"
          >
            Browse All Products →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;