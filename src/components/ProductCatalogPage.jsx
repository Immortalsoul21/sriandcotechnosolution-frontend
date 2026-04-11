import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import { products, categories, subcategories } from "@/data/products1";

const ProductCatalogPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = categories.find(c => c.categoryId === category);
  const categoryTitle = categoryData ? categoryData.value : category;
  const initialProducts = products.filter(p => p.categoryId === category);
  const categorySubcategories = subcategories.filter(s => s.categoryId === category);

  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    setFilteredProducts(products.filter(p => p.categoryId === category));
  }, [category]);

  const handleFilterChange = (filters) => {
    let filtered = products.filter(p => p.categoryId === category);
    if (filters.subcategoryId && filters.subcategoryId !== 'all') {
      filtered = filtered.filter(p => p.subcategoryId === filters.subcategoryId);
    }
    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  const handleBackClick = () => navigate('/products');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="px-3 sm:px-6 py-3 sm:py-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-sky-600 hover:text-sky-700 font-semibold text-sm sm:text-base"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-3 sm:px-6 py-4 sm:py-8">

        {/* Title row — stays on one line, shrinks on mobile */}
        <div className="flex items-center justify-between mb-4 sm:mb-8 gap-2">
          <div className="min-w-0">
            <h1 className="text-base sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight truncate">
              {categoryTitle}
            </h1>
            <p className="text-gray-500 mt-0.5 text-xs sm:text-sm font-medium">
              {filteredProducts.length} products
            </p>
          </div>
          {/* Filter — shrinks on mobile */}
          <div className="flex-shrink-0 scale-[0.82] sm:scale-100 origin-right">
            <FilterBar
              onFilterChange={handleFilterChange}
              productCount={filteredProducts.length}
              subcategories={categorySubcategories}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleProductClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-base sm:text-xl font-medium">No products found matching your filters.</p>
              <p className="text-gray-400 mt-2 text-sm">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogPage;