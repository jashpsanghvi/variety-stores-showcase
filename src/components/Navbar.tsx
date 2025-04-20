import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      const offset = 100; // Increase offset to prevent section titles from being cut off
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 mx-4 md:mx-8 mt-4 rounded-lg",
      scrolled 
        ? "bg-white bg-opacity-85 shadow-lg py-2 backdrop-blur-sm" 
        : "bg-white bg-opacity-70 py-3 shadow-md backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group">
          <img 
            src="/lovable-uploads/fd095255-4c31-4eac-a3ef-25dded2b560f.png" 
            alt="Variety Stores Logo" 
            className="h-16 w-16 mr-3 transition-transform group-hover:scale-105" 
          />
          <h1 className="text-3xl font-extrabold transition-colors group-hover:text-[#243a85] tracking-tight" style={{ color: '#1c2e6b', fontFamily: "'Montserrat', sans-serif" }}>Variety Stores</h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('principals')}
            className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Principals
          </button>
          <button 
            onClick={() => scrollToSection('clients')}
            className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Clients
          </button>
          <button 
            onClick={() => scrollToSection('footer')}
            className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors"
          >
            Contact
          </button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors py-2"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors py-2"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('principals')}
              className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors py-2"
            >
              Principals
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors py-2"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-gray-800 hover:text-[#1c2e6b] font-medium transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
