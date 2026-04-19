import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import { products, categories, subcategories, subSubcategories } from "@/data/products2";

const ProductCatalogPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Find category metadata
  const categoryData = categories.find(c => c.categoryId === category);
  const categoryTitle = categoryData ? categoryData.value : category;

  // Filter options for the current category
  const categorySubcategories = subcategories.filter(s => s.categoryId === category);
  const categorySubSubcategories = subSubcategories ? subSubcategories.filter(ss => ss.categoryId === category) : [];

  // State for filters
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState('all');

  // Identify if currently selected subcategory has 3 levels
  const selectedSubObj = categorySubcategories.find(s => s.subcategoryId === selectedSubcategory);
  const hasLevel3 = selectedSubObj?.hasSubSubcategories || false;

  // Available SubSubcategories based on selection
  const availableSubSubcategories = hasLevel3 
    ? categorySubSubcategories.filter(ss => ss.subcategoryId === selectedSubcategory)
    : [];

  // Reset filters when category changes
  useEffect(() => {
    setSelectedSubcategory('all');
    setSelectedSubSubcategory('all');
  }, [category]);

  // If subcategory changes, reset the subSubcategory
  useEffect(() => {
    setSelectedSubSubcategory('all');
  }, [selectedSubcategory]);

  // Derived filtered products
  const filteredProducts = products.filter(p => {
    if (p.categoryId !== category) return false;
    if (selectedSubcategory !== 'all') {
      if (p.subcategoryId !== selectedSubcategory) return false;
      if (hasLevel3 && selectedSubSubcategory !== 'all') {
        if (p.subSubcategoryId !== selectedSubSubcategory) return false;
      }
    }
    return true;
  });

  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  const handleBackClick = () => navigate('/products');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Main Catalog Content */}
      <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 gap-4 lg:gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{categoryTitle}</h1>
            <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base font-medium">{filteredProducts.length} products</p>
          </div>
          {/* Filter Dropdowns */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center flex-shrink-0 w-full lg:w-auto">
            <FilterBar
              value={selectedSubcategory}
              onChange={setSelectedSubcategory}
              options={categorySubcategories}
              defaultLabel="All Categories"
              idKey="subcategoryId"
              labelKey="value"
            />

            {hasLevel3 && (
              <FilterBar
                value={selectedSubSubcategory}
                onChange={setSelectedSubSubcategory}
                options={availableSubSubcategories}
                defaultLabel="All Types"
                idKey="subSubcategoryId"
                labelKey="value"
              />
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
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