import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '@/data/products2';

// UPDATED: Category ID updated to match new branding
const CATEGORY_ID = 'Sri & Co Manufacture Product';

const InHouseProducts = () => {
  const navigate = useNavigate();
  const inHouseProducts = products.filter(p => p.categoryId === CATEGORY_ID);

  if (inHouseProducts.length === 0) return null;

  const handleProductClick = (product) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    navigate(`/products/${encodeURIComponent(product.categoryId)}/${slug}`, { state: { product } });
  };

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-3 sm:px-4">

        <div className="flex justify-center mb-2 sm:mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
            {/* UPDATED: "Made by Sri and Co" label */}
            Sri And Co Manufactured Products
          </span>
        </div>

        {/* UPDATED heading */}
        <h2 className="text-xl sm:text-4xl font-bold text-center mb-2 sm:mb-3 text-gray-900">
          Cable Assembly, Antenna &amp; RF Passive Components
        </h2>
        <p className="text-xs sm:text-base text-gray-500 text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          {/* UPDATED manufacturing description */}
          Precision-engineered components designed and built in-house; combining expertise with rigorous quality standards for mission-critical applications.
        </p>

        <div
          className="overflow-x-auto -mx-3 sm:-mx-4 px-3 sm:px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3 sm:gap-8 pb-3 sm:pb-4">
            {inHouseProducts.map((product, i) => (
              <div key={product.id} className="flex-shrink-0" style={{ width: 'clamp(200px, 55vw, 300px)' }}>
                {/*
                  First 2 cards are visible immediately on load — use eager loading.
                  The rest lazy-load as the user scrolls horizontally.
                */}
                <ProductCard
                  product={product}
                  onClick={handleProductClick}
                  eager={i < 2}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InHouseProducts;