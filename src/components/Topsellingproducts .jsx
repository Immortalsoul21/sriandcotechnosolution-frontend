import React from 'react';
import ProductCard from "./Productcard";

const InHouseProducts = () => {
  const products = [
    { id: 1, name: 'Low Noise Amplifier (LNA) 1', description: "LNR50-TwinS Offers Don't Want To Miss. Enjoy Discounts On a Wide Range Of Products.", cagr: 5, image: null },
    { id: 2, name: 'Low Noise Amplifier (LNA) 2', description: "LNR50-TwinS Offers Don't Want To Miss. Enjoy Discounts On a Wide Range Of Products.", cagr: 5, image: null },
    { id: 3, name: 'Low Noise Amplifier (LNA) 3', description: "LNR50-TwinS Offers Don't Want To Miss. Enjoy Discounts On a Wide Range Of Products.", cagr: 5, image: null },
    { id: 4, name: 'Low Noise Amplifier (LNA) 4', description: "LNR50-TwinS Offers Don't Want To Miss. Enjoy Discounts On a Wide Range Of Products.", cagr: 5, image: null },
    { id: 5, name: 'Low Noise Amplifier (LNA) 5', description: "LNR50-TwinS Offers Don't Want To Miss. Enjoy Discounts On a Wide Range Of Products.", cagr: 5, image: null },
  ];

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-3 sm:px-4">

        <div className="flex justify-center mb-2 sm:mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
            Made by Sri and Co
          </span>
        </div>

        <h2 className="text-xl sm:text-4xl font-bold text-center mb-2 sm:mb-3 text-gray-900">
          Our Manufactured Products
        </h2>
        <p className="text-xs sm:text-base text-gray-500 text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          Precision-engineered components designed and built in-house — combining decades of expertise
          with rigorous quality standards for mission-critical applications.
        </p>

        <div className="overflow-x-auto -mx-3 sm:-mx-4 px-3 sm:px-4"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-3 sm:gap-8 pb-3 sm:pb-4">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0" style={{ width: 'clamp(200px, 55vw, 300px)' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InHouseProducts;