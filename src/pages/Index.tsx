
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import PrincipalsSection from '../components/PrincipalsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <PrincipalsSection />
      <Footer />
    </div>
  );
};

export default Index;
