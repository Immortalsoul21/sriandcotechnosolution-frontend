import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products, category }) => {
  const navigate = useNavigate();

  const handleViewAll = () => navigate(`/products/${category}`);

  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  return (
    <div>
      {/* Section header */}
      <div className="flex items-center justify-between mb-3 sm:mb-6">
        <h2 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={handleViewAll}
          className="flex items-center gap-0.5 sm:gap-1 text-[11px] sm:text-sm font-semibold text-gray-800 hover:text-sky-600 transition-colors"
        >
          View All
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Horizontal scroll row */}
      <div className="overflow-x-auto -mx-3 sm:-mx-4 px-3 sm:px-4 py-1 sm:py-2"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-2.5 sm:gap-4 md:gap-6 pb-2 sm:pb-4">
          {products.slice(0, 10).map(product => (
            <div key={product.id} className="flex-shrink-0" style={{ width: 'clamp(140px, 38vw, 320px)' }}>
              <ProductCard product={product} onClick={handleProductClick} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ProductSection;