import React from 'react';
import { createBrowserRouter, Navigate, Link } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';

// Pages
import Home        from '@/pages/Home';
import Features    from '@/pages/Features';
import Services    from '@/pages/Services';
import AboutUs     from '@/pages/aboutus';
import Products    from '@/pages/Products';
import ContactPage from '@/pages/ContactUs';

// Product sub-pages
import ProductCatalogPage from '@/components/ProductCatalogPage';
import ProductDetailPage  from '@/components/ProductDetailPage';

// ─── Inline placeholder pages ────────────────────────────────────────────────

const CareersPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="text-center">
      <div className="text-6xl mb-4">🚀</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Careers</h1>
      <p className="text-gray-500 text-lg mb-6">
        We&apos;re growing! Check back soon for open positions.
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        &larr; Back to Home
      </Link>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="text-center">
      <div className="text-8xl font-black text-gray-200 mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        &larr; Back to Home
      </Link>
    </div>
  </div>
);

// ─── Router definition ────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },

      // Core pages
      { path: 'home',     element: <Home /> },
      { path: 'about',    element: <AboutUs /> },
      { path: 'features', element: <Features /> },
      { path: 'services', element: <Services /> },
      { path: 'contact',  element: <ContactPage /> },

      // Products hierarchy
      { path: 'products',                        element: <Products /> },
      { path: 'products/:category',              element: <ProductCatalogPage /> },
      { path: 'products/:category/:productSlug', element: <ProductDetailPage /> },

      // Careers placeholder
      { path: 'careers', element: <CareersPage /> },

      // 404 catch-all
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);