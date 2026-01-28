import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import { getCategoryProducts, getCategoryTitle } from "@/data/products";

const ProductCatalogPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const products = getCategoryProducts(category);
  const categoryTitle = getCategoryTitle(category);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [category]);

  const handleFilterChange = (filters) => {
    let filtered = [...products];

    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    if (filters.badge !== 'all') {
      filtered = filtered.filter(p => p.badge === filters.badge);
    }

    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  const handleBackClick = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="px-6 py-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{categoryTitle}</h1>
            <p className="text-gray-500 mt-1 font-medium">{filteredProducts.length} products</p>
          </div>
          <div className="flex-shrink-0">
            <FilterBar
              onFilterChange={handleFilterChange}
              productCount={filteredProducts.length}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleProductClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl font-medium">No products found matching your filters.</p>
              <p className="text-gray-400 mt-2">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogPage;
