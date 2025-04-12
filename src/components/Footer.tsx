
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6 group hover:opacity-90 transition-opacity">
              {/* Use white colored logo */}
              <img 
                src="/lovable-uploads/7aa83911-44d0-49ba-955e-1962bbce130b.png" 
                alt="Variety Stores Logo" 
                className="h-16 w-16 mr-4 filter brightness-0 invert" 
              />
              <h3 className="text-2xl font-bold">Variety Stores</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for quality industrial components. We provide electrical, electronic, and mechanical parts from leading manufacturers.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p className="text-gray-300">
                  123 Industrial Avenue<br />
                  Business District<br />
                  Mumbai, 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <p className="text-gray-300">info@varietystores.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Variety Stores. All rights reserved. <span className="text-gray-500">Serving industry since 1958</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
