import React from 'react';

// CategoryCard — no structural changes required
// (PMI Foam substitution is handled in Productcategories_.jsx data layer)
const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl min-w-[350px] flex-shrink-0 flex flex-col">
      <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <span className="inline-block px-3 py-1 bg-white/20 rounded-xl text-sm font-semibold mb-3">
          {category.productCount} Products
        </span>
        <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
        <p className="text-sm opacity-90">{category.subtitle}</p>
      </div>

      <div className="p-6 flex-1">
        <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
        <p className="text-sm text-gray-600 mb-6">{category.subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {category.products.map((product, idx) => (
            <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm border border-gray-300">
              {product}
            </span>
          ))}
        </div>
      </div>

      <button className="m-6 mt-0 py-3.5 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">
        View Products
      </button>
    </div>
  );
};

export default CategoryCard;