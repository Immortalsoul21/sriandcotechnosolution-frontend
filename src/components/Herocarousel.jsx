import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      badge: '🔧 BOSCH',
      title: 'Powering The Future Of Wireless Connectivity',
      description: 'Deliver faster, smarter, and more reliable connectivity for a connected future',
      cta: 'Explore Now'
    },
    {
      badge: '🍎 Apple',
      title: 'Advanced Electronics For Modern Solutions',
      description: 'High-quality components for all your technological needs',
      cta: 'Learn More'
    },
    {
      badge: '',
      title: 'Innovation In Every Connection',
      description: 'Building the future of technology one component at a time',
      cta: 'Get Started'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-[#667eea] to-[#764ba2] overflow-hidden">
      <div 
        className="flex transition-transform duration-800 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="min-w-full flex-shrink-0 flex items-center py-16"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white animate-fadeInUp">
                {slide.badge && (
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-6">
                    {slide.badge}
                  </span>
                )}
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  {slide.description}
                </p>
                <button className="px-10 py-4 bg-white text-blue-600 rounded-lg text-base font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-3 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;