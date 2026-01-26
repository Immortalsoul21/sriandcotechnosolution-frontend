import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products, category }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(`/products/${category}`);
  };

  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={handleViewAll}
          className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-hide py-2">
        <div className="flex lg:grid lg:grid-cols-6 gap-4 py-6 px-1">
          {products.slice(0, 6).map(product => (
            <div key={product.id} className="flex-shrink-0 w-64 lg:w-full">
              <ProductCard product={product} onClick={handleProductClick} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductSection;