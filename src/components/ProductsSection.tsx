
import React from 'react';

const products = [
  {
    name: "Electric Motors",
    description: "AC, DC, and servo motors from leading manufacturers for various industrial applications.",
    image: "https://images.unsplash.com/photo-1518783211485-10fd3bfb2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Sensors & Switches",
    description: "Precision sensors and reliable switches for automation and control systems.",
    image: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Mechanical Components",
    description: "Gears, bearings, couplings, and other mechanical parts for power transmission.",
    image: "https://images.unsplash.com/photo-1537724841875-c0954f0de9f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Fans & Cooling Systems",
    description: "Industrial fans, blowers, and cooling solutions for temperature management.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Control Systems",
    description: "PLCs, drives, and control panels for industrial automation.",
    image: "https://images.unsplash.com/photo-1581094255772-eac363bc53a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Electrical Components",
    description: "Cables, connectors, relays, and other electrical components for power distribution.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of industrial components from trusted manufacturers, providing quality solutions for all your technical requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Our extensive network of suppliers allows us to source virtually any industrial component you need.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
