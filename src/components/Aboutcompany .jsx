import React from 'react';

const AboutCompany = () => {
  const features = [
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Serving customers worldwide with reliable shipping and logistics.'
    },
    {
      icon: '👥',
      title: 'Quality Assured',
      description: 'All components are sourced from authorized manufacturers and certified suppliers.'
    },
    {
      icon: '⏱️',
      title: 'Fast Delivery',
      description: 'Quick turnaround times with same-day shipping on in-stock items.'
    },
    {
      icon: '👨‍💼',
      title: 'Expert Support',
      description: 'Dedicated technical team ready to assist with product selection and specifications.'
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">About Our Company</h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          [Company Name] has been a leading distributor of electronics and electrical 
          components for over [XX] years. We specialize in providing high-quality 
          components to manufacturers, engineers, and businesses across various industries. 
          Our extensive inventory and commitment to excellence make us your reliable 
          partner for all electronic component needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-200 hover:border-blue-500"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;