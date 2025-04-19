
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
          {/* Image now on the left side with updated path */}
          <div className="rounded-md overflow-hidden shadow-lg relative group">
            <img 
              src={import.meta.env.BASE_URL + "/lovable-uploads/1951df6e-38de-431b-b965-468ebadd45fc.png"} 
              alt="Industrial contractors reviewing plans" 
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c2e6b]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">Established in 1957 with the founding of Rourkela Industrial Township</p>
              </div>
            </div>
          </div>
          
          {/* Text content now on the right side */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Trusted Partner Since 1957</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in 1957 under the dynamic leadership of Mr. Chunilal D Sanghvi and Mr. Chamanlal R Sanghvi as a partnership firm, Variety Stores has grown to become one of the leading suppliers of industrial components in the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in industrial electrical, electronics, mechanical and HVAC items, providing quality solutions for all your technical requirements including current collectors, industrial fans & blowers, cable accessories, switchgear, and much more.
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
