import ProductSection from '@/components/ProductSection';
import { productsData, getCategoryTitle } from '@/data/products';
import React from 'react'

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="pt-20 pb-8 pl-12 sm:pl-20 lg:pl-32 pr-6">
        <h1 className="text-4xl font-bold text-gray-900">Product Store</h1>
        <p className="text-sm text-gray-500 mt-2">Discover amazing products</p>
      </div>

      {/* Categories Section */}
      <div className="pb-24 space-y-16 pl-12 sm:pl-20 lg:pl-32 pr-6">
        {Object.keys(productsData).map((categoryKey) => (
          <ProductSection
            key={categoryKey}
            title={getCategoryTitle(categoryKey)}
            products={productsData[categoryKey]}
            category={categoryKey}
          />
        ))}
      </div>
    </div>
  )
}

export default Products