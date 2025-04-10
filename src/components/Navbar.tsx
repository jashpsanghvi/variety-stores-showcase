
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] rounded-xl transition-all duration-500",
      scrolled 
        ? "bg-white bg-opacity-95 shadow-lg py-3 backdrop-blur-sm" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/7aa83911-44d0-49ba-955e-1962bbce130b.png" 
            alt="Variety Stores Logo" 
            className="h-10 w-10 mr-3" 
          />
          <h1 className="text-2xl font-bold" style={{ color: '#1c2e6b' }}>Variety Stores</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-gray-700 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('principals')}
            className="text-gray-700 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Our Principals
          </button>
          <Link 
            to="/contact"
            className="text-gray-700 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
        
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
