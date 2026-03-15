import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    categoryId: 'electronics',
    title: 'Electronic Components',
    subtitle: 'Powering progress with precision-engineered solutions for tomorrow',
    products: ['ICs', 'Capacitors', 'Resistors', 'Transistors', 'Capacitors'],
    productCount: '5,000+',
    gradient: 'from-blue-600 to-blue-800',
    icon: '⚡',
  },
  {
    categoryId: 'fitness',
    title: 'Rapid Control Prototyping',
    subtitle: 'Advanced control systems for modern applications',
    products: ['Controllers', 'Sensors', 'Actuators', 'Modules', 'Interfaces'],
    productCount: '3,000+',
    gradient: 'from-purple-600 to-purple-800',
    icon: '🔧',
  },
  {
    categoryId: 'home',
    title: 'Antenna Components',
    subtitle: 'High-performance signal transmission solutions',
    products: ['RF Modules', 'Antennas', 'Amplifiers', 'Filters', 'Connectors'],
    productCount: '2,500+',
    gradient: 'from-green-600 to-teal-700',
    icon: '📡',
  },
  {
    categoryId: 'books',
    title: 'AI & Machine Learning',
    subtitle: 'Next-generation intelligent technology components',
    products: ['AI Chips', 'GPUs', 'TPUs', 'Processors', 'Accelerators'],
    productCount: '1,800+',
    gradient: 'from-orange-500 to-red-600',
    icon: '🤖',
  },
];

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Product Range</h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Delivering smarter, faster, and more reliable solutions across categories.
          </p>
        </div>

        {/* Scrollable row on mobile, grid on lg+ */}
        <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible
                        scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl
                         transition-all duration-300 hover:-translate-y-1
                         flex-shrink-0 w-72 sm:w-80 lg:w-auto flex flex-col"
            >
              {/* Gradient Header */}
              <div className={`p-6 bg-gradient-to-br ${cat.gradient} text-white`}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3">
                  {cat.productCount} Products
                </span>
                <h3 className="text-lg font-bold leading-snug">{cat.title}</h3>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{cat.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.products.map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 border border-gray-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* View Products → always goes to /products */}
                <button
                  onClick={() => navigate('/products')}
                  className={`mt-auto w-full py-2.5 bg-gradient-to-r ${cat.gradient} text-white
                              rounded-lg text-sm font-semibold transition-all duration-300
                              hover:opacity-80 hover:shadow-md hover:-translate-y-0.5`}
                >
                  View Products →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;