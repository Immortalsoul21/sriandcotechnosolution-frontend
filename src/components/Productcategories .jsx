import React from 'react';
import CategoryCard from "./Categorycard ";

const ProductCategories = () => {
  const categories = [
    {
      title: 'Electronic Components',
      subtitle: 'Powering progress with precision-engineered solutions for tomorrow',
      products: ['ICs', 'Capacitors', 'Resistors', 'Transistors', 'Resistors', 'Capacitors'],
      productCount: '5000+',
      description: 'Deliver faster, smarter, and more reliable'
    },
    {
      title: 'Rapid Control Prototyping',
      subtitle: 'Advanced control systems for modern applications',
      products: ['Controllers', 'Sensors', 'Actuators', 'Modules', 'Interfaces', 'Software'],
      productCount: '3000+',
      description: ''
    },
    {
      title: 'Antenna Components',
      subtitle: 'High-performance signal transmission solutions',
      products: ['RF Modules', 'Antennas', 'Amplifiers', 'Filters', 'Connectors', 'Cables'],
      productCount: '2500+',
      description: ''
    },
    {
      title: 'AI & Machine Learning',
      subtitle: 'Next-generation intelligent technology',
      products: ['AI Chips', 'GPUs', 'TPUs', 'Processors', 'Memory', 'Accelerators'],
      productCount: '1800+',
      description: ''
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600">Deliver faster, smarter, and more reliable</p>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;