import React from 'react';
import ProductCard from "./Productcard ";

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Low Noise Amplifier (LNA) 1',
      description: 'LNR50-TwinS Offers Don\'t Want To Miss. Enjoy Discounts On a Wide Range Of Products.',
      cagr: 5,
      image: null
    },
    {
      id: 2,
      name: 'Low Noise Amplifier (LNA) 2',
      description: 'LNR50-TwinS Offers Don\'t Want To Miss. Enjoy Discounts On a Wide Range Of Products.',
      cagr: 5,
      image: null
    },
    {
      id: 3,
      name: 'Low Noise Amplifier (LNA) 3',
      description: 'LNR50-TwinS Offers Don\'t Want To Miss. Enjoy Discounts On a Wide Range Of Products.',
      cagr: 5,
      image: null
    },
    {
      id: 4,
      name: 'Low Noise Amplifier (LNA) 4',
      description: 'LNR50-TwinS Offers Don\'t Want To Miss. Enjoy Discounts On a Wide Range Of Products.',
      cagr: 5,
      image: null
    },
    {
      id: 5,
      name: 'Low Noise Amplifier (LNA) 5',
      description: 'LNR50-TwinS Offers Don\'t Want To Miss. Enjoy Discounts On a Wide Range Of Products.',
      cagr: 5,
      image: null
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Top Selling Products</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our most trusted and frequently purchased products, chosen for quality and performance.
        </p>
        
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;