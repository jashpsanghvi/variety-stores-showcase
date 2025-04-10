
import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: "Sensors",
    description: "Precision sensors for industrial automation and control systems.",
    image: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "sensors"
  },
  {
    name: "Encoders",
    description: "High-quality rotary and linear encoders for position feedback.",
    image: "https://images.unsplash.com/photo-1581093458791-9aba4fb463c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "encoders"
  },
  {
    name: "Limit Switches",
    description: "Reliable limit switches for safety and position detection.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "limit-switches"
  },
  {
    name: "Cables",
    description: "Industrial cables and connectors for reliable data and power transmission.",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "cables"
  },
  {
    name: "UPS",
    description: "Uninterruptible power supplies for critical industrial applications.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    slug: "ups"
  }
];

const ProductsSection = () => {
  const navigate = useNavigate();

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/products/${product.slug}`)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1c2e6b] mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
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
            className="bg-[#1c2e6b] hover:bg-[#243a85] text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
