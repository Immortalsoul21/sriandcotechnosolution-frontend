import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      badge: '🔧 Electronic Components',
      title: 'Powering The Future Of Wireless Connectivity',
      description: 'Deliver faster, smarter, and more reliable connectivity for a connected future.',
      gradient: 'from-[#1a237e] via-[#283593] to-[#3949ab]',
    },
    {
      badge: '📡 RF & Microwave',
      title: 'Advanced RF Solutions For Modern Applications',
      description: 'High-quality RF and microwave components sourced from certified manufacturers worldwide.',
      gradient: 'from-[#0d47a1] via-[#1565c0] to-[#1976d2]',
    },
    {
      badge: '🌐 Global Reach',
      title: 'Innovation In Every Connection',
      description: 'Building the future of technology one component at a time — across 150+ countries.',
      gradient: 'from-[#4a148c] via-[#6a1b9a] to-[#7b1fa2]',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[420px] sm:min-h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full flex-shrink-0 bg-gradient-to-br ${slide.gradient} flex items-center py-14 sm:py-20`}
          >
            <div className="container mx-auto px-6 sm:px-10">
              <div className="max-w-3xl text-white">
                {slide.badge && (
                  <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold mb-5">
                    {slide.badge}
                  </span>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg mb-8 opacity-90 max-w-xl">
                  {slide.description}
                </p>

                <button
                  onClick={() => navigate('/products')}
                  className="px-8 py-3 bg-white text-blue-700 rounded-lg text-sm sm:text-base font-semibold
                             transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:-translate-y-0.5"
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-7 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;