import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from '@/pages/Home';
import MainLayout from '@/layout/MainLayout';
import Features from '@/pages/Features';
import Products from '@/pages/Products';
import ProductCatalogPage from '@/components/ProductCatalogPage';
import ProductDetailPage from '@/components/ProductDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'features', element: <Features /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:category', element: <ProductCatalogPage /> },
      { path: 'products/:category/:productSlug', element: <ProductDetailPage /> },
    ],
  },
]);
