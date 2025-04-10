
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Trusted Partner for Industrial Components</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established with a vision to provide quality industrial components, Variety Stores has grown to become a trusted supplier for businesses across the industry.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We pride ourselves on our technical expertise and ability to understand client requirements, ensuring you get the right components for your specific needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Components from certified manufacturers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Competitive Pricing</h4>
                <p className="text-gray-600 text-sm">Best value for industrial solutions</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Support</h4>
                <p className="text-gray-600 text-sm">Expert advice for your requirements</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Quick turnaround on all orders</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
              alt="Industrial components warehouse" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
