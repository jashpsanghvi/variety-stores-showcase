
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// SEO-optimized product list data
const productCategories = [
  'VFD Drives',
  'Sensors, Encoder & Allied Products',
  'Materials Handling Safety Switches',
  'Industrial Fans & Blowers',
  'Plug & Socket',
  'Cable Lugs',
  'Limit Switch, Control & Signalling Switches',
  'LT Switchgear',
  'ESP Controllers',
  'Cables & Aluminium Conductors',
  'Junction Box & Panels',
  'UPS',
  'Industrial Battery',
  'Motor Protection Device',
  'Cable Jointing Kits',
  'Insulating Materials',
  'Vibration Motors',
  'Crane Spares',
  'Industrials Air Conditioning Spares',
  'Other Elec. Items as per Drawings & Client\'s Requirements',
  'Connectors',
  'Thyristors, Diodes & Stacks',
  'Clutches, Brakes & Thrustors',
  'Bronze Industrial Valves & Cocks, Cast Iron Industrial Valves',
  'Submersible & Centrifugal Pumps',
  'Aloxide Paper Disc',
  'Emery Paper'
];

// Product carousel images
const productImages = [
  '/src/assets/images/products/image2.jpg',
  '/src/assets/images/products/dcb.jpg',
  '/src/assets/images/products/conveyor-belt-sway-switch-500x500.jpg',
  '/src/assets/images/products/dedicated-inverter.jpg',
  '/src/assets/images/products/heavy-duty-counter-weight-operated-limit-switch.jpg',
  '/src/assets/images/products/dual-master-controller-500x500.webp',
  '/src/assets/images/products/electric-inverters-500x500.webp',
  '/src/assets/images/products/hensel-de-9345-500x500.webp',
  '/src/assets/images/products/hind-rectifiers-make-ace-4-controller-for-esp.jpg',
  '/src/assets/images/products/industrial-plugs-500x500.webp',
  '/src/assets/images/products/jai-balaji-limit-switch-500x500.webp',
  '/src/assets/images/products/josts-2-ton-jotruk-four-wheel-industrial-platform-truck.jpg',
  '/src/assets/images/products/mamfile_1883209_720Wx540H_c.png',
  '/src/assets/images/products/phoenix-power-supply-500x500.webp',
  '/src/assets/images/products/ring_type_lugs13.jpg'
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % productImages.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + productImages.length) % productImages.length);
  };

  // Function to get the index for the visible slides with wrap-around
  const getVisibleIndex = (relativePosition: number) => {
    return (activeIndex + relativePosition + productImages.length) % productImages.length;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of industrial electrical, electronic and mechanical components from trusted manufacturers, providing quality solutions for all your technical requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Product List - 65% width (8/12 columns) */}
          <div className="md:col-span-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#1c2e6b] mb-6">Our Product Range</h3>
            <div className="columns-1 sm:columns-2 gap-6 text-gray-700">
              <ul className="space-y-2 list-inside list-disc mb-4">
                {productCategories.map((product, index) => (
                  <li key={index} className="text-sm md:text-base">{product}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Product Carousel - 35% width (4/12 columns) */}
          <div className="md:col-span-4 relative">
            <div className="overflow-hidden relative h-[350px] rounded-lg">
              <div className="relative h-full">
                {/* Previous Slide (Visible partially) */}
                <div 
                  className="absolute top-0 left-[-15%] w-[30%] h-full flex items-center justify-center opacity-50 transform scale-90 z-10"
                >
                  <img 
                    src={productImages[getVisibleIndex(-1)]} 
                    alt="Previous product" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                {/* Current Slide (Center, fully visible) */}
                <div 
                  className="absolute top-0 left-[15%] w-[70%] h-full flex items-center justify-center z-20 transition-all duration-500 ease-in-out"
                >
                  <img 
                    src={productImages[activeIndex]} 
                    alt="Current product" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                {/* Next Slide (Visible partially) */}
                <div 
                  className="absolute top-0 right-[-15%] w-[30%] h-full flex items-center justify-center opacity-50 transform scale-90 z-10"
                >
                  <img 
                    src={productImages[getVisibleIndex(1)]} 
                    alt="Next product" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide} 
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#1c2e6b] text-white rounded-full p-2 shadow-lg z-30 hover:bg-[#243a85] transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#1c2e6b] text-white rounded-full p-2 shadow-lg z-30 hover:bg-[#243a85] transition-colors"
              aria-label="Next product"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
