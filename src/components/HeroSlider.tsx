import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Industrial Electrical & Electronics Solutions",
    subtitle: "Serving industry since 1957",
    description: "A leading supplier of industrial electrical, electronics, mechanical and HVAC components with over six decades of trusted service.",
    image: "/assets/images/hero/pexels-kateryna-babaieva-1423213-3736102.jpg"
  },
  {
    title: "Quality Industrial Components",
    subtitle: "Established partnerships with leading manufacturers",
    description: "Providing high-quality current collectors, industrial fans, cable accessories, switchgear, and more to meet your industrial requirements.",
    image: "/assets/images/hero/pexels-pixabay-247763.jpg"
  },
  {
    title: "Complete Industrial Solutions",
    subtitle: "Electrical, Electronic and Mechanical Components",
    description: "From distribution boards to motor protection relays, we offer comprehensive solutions for industrial automation and control systems.",
    image: "/assets/images/hero/pexels-rezwan-1087083.jpg"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      }, 1000); // Delay the actual slide change for smoother transition

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2000);
      
    }, 5000); // 5 second interval between slides
    
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
            index === currentSlide 
              ? isTransitioning 
                ? 'opacity-100 transform scale-100 blur-none' 
                : 'opacity-100 transform scale-100'
              : 'opacity-0 transform scale-105 blur-sm'
          }`}
          style={{ 
            transitionDuration: '2000ms'
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-2xl ml-10 md:ml-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{slide.title}</h2>
              <p className="text-xl md:text-2xl text-white mb-4 font-medium">{slide.subtitle}</p>
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
            className={`w-3 h-3 rounded-none transition-colors duration-300 ${
              index === currentSlide ? 'bg-[#1c2e6b]' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Fixed floating Learn More button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-24 right-10 bg-[#1c2e6b] hover:bg-[#243a85] text-white py-3 px-8 rounded-none text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Learn More
      </button>
    </div>
  );
};

export default HeroSlider;
