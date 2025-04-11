
import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: "Sensors",
    description: "Precision sensors for industrial automation and control systems.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "sensors"
  },
  {
    name: "Encoders",
    description: "High-quality rotary and linear encoders for position feedback.",
    image: "https://images.unsplash.com/photo-1581093198937-dfce492977ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "encoders"
  },
  {
    name: "Limit Switches",
    description: "Reliable limit switches for safety and position detection.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "limit-switches"
  },
  {
    name: "Cables",
    description: "Industrial cables and connectors for reliable data and power transmission.",
    image: "https://images.unsplash.com/photo-1589384256650-2261e3136bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "cables"
  },
  {
    name: "UPS",
    description: "Uninterruptible power supplies for critical industrial applications.",
    image: "https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "ups"
  }
];

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of industrial components from trusted manufacturers, providing quality solutions for all your technical requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="h-52 perspective-1000 cursor-pointer group"
              onClick={() => handleProductClick(product.slug)}
            >
              <div className="relative h-full w-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full w-full overflow-hidden rounded-md shadow-md">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white text-lg font-bold p-3">{product.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1c2e6b] rounded-md text-white p-4 flex flex-col justify-center items-center text-center shadow-md">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm">{product.description}</p>
                  <span className="mt-3 inline-block border-b-2 border-white text-sm">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Our extensive network of suppliers allows us to source virtually any industrial component you need.
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-[#1c2e6b] hover:bg-[#243a85] text-white py-3 px-8 rounded-none text-lg font-medium transition-colors duration-300"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
