import ProductSection from '@/components/ProductSection';
import { categories, products } from '@/data/products1';
import React from 'react'

/**
 * Products Component
 * Main landing page for all product categories.
 * Fetches categories and maps them to scrollable ProductSections.
 */
const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section: Title and Introduction */}
        <div className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">Product Store</h1>
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">Discover amazing products across diverse categories</p>
        </div>

        {/* Categories Section: Iterates through each category to create a horizontal row */}
        <div className="pb-24 space-y-12 md:space-y-16 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <ProductSection
              key={cat.categoryId}
              title={cat.value}
              products={products.filter(p => p.categoryId === cat.categoryId)}
              category={cat.categoryId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products