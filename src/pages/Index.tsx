
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import PrincipalsSection from '../components/PrincipalsSection';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Variety Stores - Industrial Electrical & Electronic Components Supplier Since 1957";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Established in 1957, Variety Stores is a leading supplier of industrial electrical, electronic, and mechanical components including VFD drives, switchgear, cable accessories, and more. Serving industry for over 65 years.';
    document.head.appendChild(metaDescription);
    
    // Add custom font from Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
    
    // Update favicon path for GitHub Pages
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/variety-stores-showcase/lovable-uploads/fd095255-4c31-4eac-a3ef-25dded2b560f.png';
    favicon.type = 'image/png';
    document.head.appendChild(favicon);
    
    // Add custom style for flip card animation
    const style = document.createElement('style');
    style.textContent = `
      .perspective-1000 {
        perspective: 1000px;
      }
      .transform-style-3d {
        transform-style: preserve-3d;
      }
      .backface-hidden {
        backface-visibility: hidden;
      }
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
      body {
        font-family: 'Montserrat', sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      document.head.removeChild(favicon);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <PrincipalsSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
