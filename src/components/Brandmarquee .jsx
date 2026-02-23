import React from 'react';

const BrandMarquee = () => {
  const brands = [
    'BOSCH',
    'Qualcomm',
    'Honeywell',
    'intel',
    'SAMSUNG',
    'TEXAS INSTRUMENTS',
    'NVIDIA',
    'ARM'
  ];
  
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="relative">
        <div className="flex gap-16 animate-scroll">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div 
              key={`brand-1-${index}`} 
              className="text-2xl font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              {brand}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <div 
              key={`brand-2-${index}`} 
              className="text-2xl font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;