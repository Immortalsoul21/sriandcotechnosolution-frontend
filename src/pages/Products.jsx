// src/pages/Products.jsx
import { useMemo, useEffect, useRef, useState } from 'react';
import ProductSection from '@/components/ProductSection';
import { categories, products } from '@/data/products2';

function useInView(rootMargin = '300px') {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}

const LazySection = ({ cat, filteredProducts }) => {
  const [ref, inView] = useInView('300px');

  return (
    <div ref={ref} style={{ minHeight: '220px' }}>
      {inView && (
        <ProductSection
          title={cat.value}
          products={filteredProducts}
          category={cat.categoryId}
        />
      )}
    </div>
  );
};

const Products = () => {
  const productsByCategory = useMemo(() => {
    const map = {};
    for (const p of products) {
      if (!map[p.categoryId]) map[p.categoryId] = [];
      map[p.categoryId].push(p);
    }
    return map;
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
            Product Store
          </h1>
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
            Discover amazing products across diverse categories
          </p>
        </div>

        <div className="pb-24 space-y-12 md:space-y-16 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <LazySection
              key={cat.categoryId}
              cat={cat}
              filteredProducts={productsByCategory[cat.categoryId] ?? []}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;