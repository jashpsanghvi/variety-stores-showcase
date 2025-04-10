
import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Quality Industrial Components",
    subtitle: "From trusted manufacturers at competitive prices",
    image: "https://images.unsplash.com/photo-1581093458791-9aba4fb463c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Technical Expertise",
    subtitle: "Understanding your unique requirements",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Complete Solutions",
    subtitle: "Electrical, electronic and mechanical components",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">{slide.subtitle}</p>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
