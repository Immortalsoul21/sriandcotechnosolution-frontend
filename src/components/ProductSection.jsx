import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

/**
 * ProductSection Component
 * Renders a horizontal scrolling row of products for a given category.
 */
const ProductSection = ({ title, products, category }) => {
  const navigate = useNavigate();

  /**
   * handleViewAll
   * Navigates to the full catalog page for this specific category.
   */
  const handleViewAll = () => {
    navigate(`/products/${category}`);
  };

  /**
   * handleProductClick
   * Navigates to the individual product detail page.
   */
  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={handleViewAll}
          className="flex items-center gap-1 text-xs md:text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          View All
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 py-2">
        <div className="flex gap-4 md:gap-6 py-4">
          {products.slice(0, 10).map(product => (
            <div key={product.id} className="flex-shrink-0 w-64 md:w-80">
              <ProductCard product={product} onClick={handleProductClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Utility styles to hide native scrollbars while keeping functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ProductSection;