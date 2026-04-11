import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    categoryId: 'rf-microwave',
    title: 'RF & Microwave',
    description: 'Connectors, cables, passive and microwave components for high-frequency RF applications.',
    subcategories: ['RF Connectors & Adapters', 'RF Cables & Assemblies', 'Passive Components', 'Microwave Components'],
    gradientFrom: '#0284c7', gradientTo: '#0369a1',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'electronics-sensors',
    title: 'Electronics — Sensors',
    description: 'Precision sensing solutions for temperature, pressure, RF, and environmental measurement.',
    subcategories: ['Temperature Sensors', 'Pressure Sensors', 'RF Sensors', 'Environmental Sensors'],
    gradientFrom: '#059669', gradientTo: '#0f766e',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'emi-emc',
    title: 'EMI & EMC',
    description: 'Anechoic chambers, RF absorbers, shield boxes, and thermal test enclosures for compliance testing.',
    subcategories: ['EMI & EMC Anechoic Chambers', 'Semi-Anechoic Chambers', 'RF Absorbers', 'RF Shield Boxes', 'RF Thermal Test Boxes'],
    gradientFrom: '#4f46e5', gradientTo: '#3730a3',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'environmental-chambers',
    title: 'Environmental Chambers',
    description: 'Full range of climatic, thermal shock, altitude, vibration, and specialty test chambers.',
    subcategories: ['Temperature Chambers', 'Humidity Chambers', 'Thermal Shock Chambers', 'Altitude Chambers', 'Vibration Chambers', 'Salt Spray Chambers'],
    gradientFrom: '#0891b2', gradientTo: '#0e7490',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'special-materials',
    title: 'Special Materials',
    description: 'Advanced lightweight and thermal materials including PMI foam, carbon fibre, and thermal shielding.',
    subcategories: ['PMI Foam', 'Carbon Fiber Materials', 'Solimide Materials', 'Thermal Shielding Solutions'],
    gradientFrom: '#7c3aed', gradientTo: '#6d28d9',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80',
  },
  {
    categoryId: 'rcp-hil',
    title: 'RCP & HIL',
    description: 'Rapid Control Prototyping and Hardware-in-the-Loop systems for real-time simulation.',
    subcategories: ['Rapid Control Prototyping (RCP)', 'Hardware-in-the-Loop (HIL)'],
    gradientFrom: '#475569', gradientTo: '#1e293b',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
];

// Card size scales with viewport
const CategoryCard = ({ cat, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const MAX_SUBS = 4;
  const shown = cat.subcategories.slice(0, MAX_SUBS);
  const extra = cat.subcategories.length - MAX_SUBS;

  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{ width: 'clamp(140px, 38vw, 220px)', height: 'clamp(140px, 38vw, 220px)' }}
    >
      {!imgError ? (
        <img
          src={cat.image}
          alt={cat.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
      ) : (
        <div className="absolute inset-0"
             style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }} />
      )}

      {/* Scrim */}
      <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
           style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 50%, rgba(0,0,0,0.20) 100%)' }} />

      {/* Base */}
      <div className="absolute inset-0 flex flex-col justify-end p-2.5 sm:p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white font-semibold text-[10px] sm:text-sm leading-snug mb-0.5 sm:mb-1 drop-shadow">
          {cat.title}
        </h3>
        <p className="text-white/75 text-[9px] sm:text-[11px] leading-relaxed line-clamp-2 drop-shadow hidden sm:block">
          {cat.description}
        </p>
      </div>

      {/* Hover */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-2.5 sm:p-4
                   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300 ease-out rounded-xl sm:rounded-2xl"
        style={{ background: 'rgba(0,0,0,0.70)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <h3 className="text-white font-semibold text-[10px] sm:text-sm leading-snug">{cat.title}</h3>

        <ul className="flex-1 mt-1.5 sm:mt-3 space-y-1 sm:space-y-1.5 overflow-hidden">
          {shown.map((sub, i) => (
            <li key={i} className="flex items-center gap-1.5 sm:gap-2">
              <span className="flex-shrink-0 rounded-full" style={{ width: 3, height: 3, background: 'rgba(255,255,255,0.55)' }} />
              <span className="text-white/90 text-[8px] sm:text-[10.5px] leading-tight">{sub}</span>
            </li>
          ))}
          {extra > 0 && <li className="text-white/40 text-[8px] sm:text-[10px] pl-3">+{extra} more</li>}
        </ul>

        <span className="inline-flex items-center gap-1 mt-1.5 sm:mt-2 self-start text-[9px] sm:text-[10px] font-semibold text-white
                         border border-white/35 rounded-lg px-2 py-0.5 hover:bg-white/15 transition-colors">
          View all →
        </span>
      </div>
    </div>
  );
};

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-6">

        <div className="text-center mb-5 sm:mb-8">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Specialised components and solutions across RF, microwave, sensors, chambers, and
            advanced materials — engineered for performance-critical applications.
          </p>
        </div>

        <div className="flex gap-2.5 sm:gap-4 overflow-x-auto pb-3 sm:pb-4"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat) => (
            <CategoryCard key={cat.categoryId} cat={cat} onClick={() => navigate('/products')} />
          ))}
        </div>

        <div className="text-center mt-5 sm:mt-8">
          <button
            onClick={() => navigate('/products')}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm
                       transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:-translate-y-0.5"
          >
            Browse All Products →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;