import ProductSection from '@/components/ProductSection';
import { categories, products } from '@/data/products1';
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
  )
}

export default Products