
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image now on the left side */}
          <div className="rounded-md overflow-hidden shadow-lg relative group">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
              alt="Industrial components warehouse" 
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c2e6b]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">Established in 1958 with the founding of Rourkela Industrial Township</p>
              </div>
            </div>
          </div>
          
          {/* Text content now on the right side */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Trusted Partner Since 1958</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in 1958 with the founding of Rourkela Industrial Township, Variety Stores has grown to become a trusted supplier for businesses across the industry for over six decades.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We pride ourselves on our technical expertise and ability to understand client requirements, ensuring you get the right components for your specific needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#1c2e6b]">
                <h4 className="font-semibold text-gray-800 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Components from certified manufacturers</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#1c2e6b]">
                <h4 className="font-semibold text-gray-800 mb-2">Competitive Pricing</h4>
                <p className="text-gray-600 text-sm">Best value for industrial solutions</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#1c2e6b]">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Support</h4>
                <p className="text-gray-600 text-sm">Expert advice for your requirements</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#1c2e6b]">
                <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Quick turnaround on all orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
