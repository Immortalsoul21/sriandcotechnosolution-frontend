import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from '@/pages/Home';
import MainLayout from '@/layout/MainLayout';
import Features from '@/pages/Features';


import AboutUs from '@/pages/aboutus';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'features', element: <Features /> },


      { path: 'about', element: <AboutUs /> },
    ],
  },
]);