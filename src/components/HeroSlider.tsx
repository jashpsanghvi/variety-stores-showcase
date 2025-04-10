
import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Industrial Automation Solutions",
    subtitle: "High-quality components from trusted global manufacturers",
    description: "We provide cutting-edge industrial components that help streamline your operations and increase efficiency.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Technical Expertise & Support",
    subtitle: "Tailored solutions for your industry needs",
    description: "Our team of experts understands the unique requirements of your industry and provides personalized support.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Complete Industrial Solutions",
    subtitle: "Electrical, electronic and mechanical components",
    description: "From sensors to UPS systems, we offer a comprehensive range of components to meet all your industrial needs.",
    image: "https://images.unsplash.com/photo-1519501487584-6c1c89accce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
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
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-8">
            <div className="max-w-2xl ml-10 md:ml-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl text-white mb-4">{slide.subtitle}</p>
              <p className="text-lg text-gray-100 mb-8 max-w-xl">{slide.description}</p>
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
              index === currentSlide ? 'bg-[#1c2e6b]' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Fixed floating Learn More button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-24 right-10 bg-[#1c2e6b] hover:bg-[#243a85] text-white py-3 px-8 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Learn More
      </button>
    </div>
  );
};

export default HeroSlider;
