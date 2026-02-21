import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-[300px] flex-shrink-0 flex flex-col">
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-6xl">📦</div>
        )}
        <span className="absolute top-4 right-4 px-4 py-2 bg-yellow-500 text-white rounded-md text-xs font-bold uppercase">
          CARD PRODUCT
        </span>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        
        <div className="mb-4">
          <span className="text-yellow-500 text-base">★ ★ ★ ★ ★</span>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
            CAGR ~ {product.cagr}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;