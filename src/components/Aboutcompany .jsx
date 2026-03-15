import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: '🌐',
    title: 'Global Reach',
    description: 'Serving customers worldwide with reliable shipping and logistics across 150+ countries.',
  },
  {
    icon: '✅',
    title: 'Quality Assured',
    description: 'All components are sourced from authorized manufacturers and certified suppliers.',
  },
  {
    icon: '⏱️',
    title: 'Fast Delivery',
    description: 'Quick turnaround times with same-day shipping on all in-stock items.',
  },
  {
    icon: '👨‍💼',
    title: 'Expert Support',
    description: 'Dedicated technical team ready to assist with product selection and specifications.',
  },
];

const AboutCompany = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          About Our Company
        </h2>
        <p className="text-base sm:text-lg text-gray-500 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Sri and Co Techno Solutions has been a leading distributor of electronics and RF components
          for over two decades. We specialise in providing high-quality components to manufacturers,
          engineers, and businesses across various industries. Our extensive inventory and commitment
          to excellence make us your reliable partner for all electronic component needs.
        </p>

        {/* Feature Cards — each card navigates to /about on click */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate('/about')}
              className="p-6 sm:p-8 bg-gray-50 rounded-2xl text-center cursor-pointer
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                         hover:bg-blue-50 border border-transparent hover:border-blue-200
                         group"
            >
              <div className="text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
              <span className="inline-block mt-3 text-xs font-semibold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base
                       transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;