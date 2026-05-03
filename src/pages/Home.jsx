import React from 'react';
import HeroCarousel from "../components/Herocarousel";
import AboutCompany from "../components/Aboutcompany ";
import ProductCategories from "../components/Productcategories ";
import TopSellingProducts from "../components/Topsellingproducts ";

import BrandMarquee from "../components/Brandmarquee "
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <AboutCompany />
      <ProductCategories />
      <TopSellingProducts />
 
      <BrandMarquee />
    </div>
  );
};

export default Home;