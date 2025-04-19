
import React from 'react';
import { getImagePath } from '@/lib/imagePath';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left half - Company info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={getImagePath("/lovable-uploads/fd095255-4c31-4eac-a3ef-25dded2b560f.png")} 
                alt="Variety Stores Logo" 
                className="h-16 w-16 mr-4"
              />
              <h3 className="text-2xl font-bold text-[#1c2e6b]">Variety Stores</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Established in 1957 with the founding of Rourkela Industrial Township, Variety Stores 
              has been a trusted supplier of industrial components for over 65 years. We specialize 
              in electrical, electronic, and mechanical components for industries across India.
            </p>
            <p className="text-gray-600 mb-2">
              © {new Date().getFullYear()} Variety Stores. All rights reserved.
            </p>
          </div>
          
          {/* Right half - Contact info */}
          <div>
            <h3 className="text-2xl font-bold text-[#1c2e6b] mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                <p className="text-gray-600">
                  Bisra Road, Rourkela - 769001<br />
                  Sundargarh, Odisha, India
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                <p className="text-gray-600">+91 661 2500 444</p>
                <p className="text-gray-600">+91 94370 44888</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                <p className="text-gray-600">info@varietystores.in</p>
                <p className="text-gray-600">sales@varietystores.in</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
