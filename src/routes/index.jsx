import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from '@/pages/Home';
import MainLayout from '@/layout/MainLayout';
import Features from '@/pages/Features';
import Products from '@/pages/Products';
import ProductCatalogPage from '@/components/ProductCatalogPage';
import ProductDetailPage from '@/components/ProductDetailPage';

/**
 * Application Router Configuration
 * Defines the main routing structure using React Router's data API.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Wraps children with Navbar/Footer
    children: [
      // Redirect root to home
      { index: true, element: <Navigate to="home" replace /> },

      // Top-level pages
      { path: 'home', element: <Home /> },
      { path: 'features', element: <Features /> },

      // Product-related routes
      { path: 'products', element: <Products /> }, // Root product page (categories overview)
      { path: 'products/:category', element: <ProductCatalogPage /> }, // Category listing
      { path: 'products/:category/:productSlug', element: <ProductDetailPage /> }, // Product details
    ],
  },
]);
