import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  { icon: '🏭', title: 'Manufacturing',  description: 'Own manufactured line of electronic & RF components with full quality control.' },
  { icon: '🌐', title: 'Global Reach',   description: 'Reliable shipping and logistics across 150+ countries worldwide.' },
  { icon: '✅', title: 'Quality Assured', description: 'Sourced from authorized manufacturers and certified suppliers.' },
  { icon: '⏱️', title: 'Fast Delivery',  description: 'Same-day shipping on all in-stock items with quick turnaround.' },
  { icon: '👨‍💼', title: 'Expert Support', description: 'Technical team ready to assist with product selection and specs.' },
];

const AboutCompany = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-3 sm:px-6">

        <h2 className="text-xl sm:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">
          About Our Company
        </h2>
        <p className="text-xs sm:text-lg text-gray-500 text-center max-w-4xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          Sri and Co Techno Solutions has been a leading distributor of electronics and RF components
          for over two decades. We specialise in providing high-quality components to manufacturers,
          engineers, and businesses across various industries.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-6 mb-6 sm:mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate('/about')}
              className="aspect-square p-2 sm:p-5 bg-gray-50 rounded-xl sm:rounded-2xl text-center cursor-pointer
                         transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl
                         hover:bg-sky-50 border border-transparent hover:border-sky-200
                         group flex flex-col items-center justify-center"
            >
              <div className="text-xl sm:text-4xl mb-1 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-[10px] sm:text-sm font-bold text-gray-900 mb-0.5 sm:mb-2 group-hover:text-sky-700 transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-[9px] sm:text-xs leading-relaxed hidden sm:block">
                {feature.description}
              </p>
              <span className="hidden sm:inline-block mt-3 text-xs font-semibold text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/about')}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-600 text-white rounded-lg font-semibold
                       text-sm transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;