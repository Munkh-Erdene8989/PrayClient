'use client';

import { useState, useEffect } from 'react';

const slides = [
  { id: 1, title: 'Slide Show 01', image: '/api/placeholder/1200/400' },
  { id: 2, title: 'Slide Show 02', image: '/api/placeholder/1200/400' },
  { id: 3, title: 'Slide Show 03', image: '/api/placeholder/1200/400' },
  { id: 4, title: 'Slide Show 04', image: '/api/placeholder/1200/400' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-gray-200">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-r from-yellow-600 to-orange-500 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
