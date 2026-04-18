import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import { products, categories, subcategories, subSubcategories } from "@/data/products2";

/**
 * ProductCatalogPage Component
 * Displays a list of products for a specific category with filtering capabilities.
 */
const ProductCatalogPage = () => {
  // Get category from URL parameters
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

  /**
   * handleProductClick
   * Navigates to the individual product detail page.
   */
  const handleProductClick = (product) => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${category}/${productSlug}`, { state: { product } });
  };

  /**
   * handleBackClick
   * Navigates back to the main products listing page.
   */
  const handleBackClick = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Sticky Header */}
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

      {/* Main Catalog Content */}
      <div className="w-full px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{categoryTitle}</h1>
            <p className="text-gray-500 mt-1 font-medium">{filteredProducts.length} products</p>
          </div>
          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4 items-center flex-shrink-0">
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

        {/* Dynamic Products Grid */}
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
            /* Empty State */
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
