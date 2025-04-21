
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* LEFT COLUMN with white-inverted decorative background */}
          <div className="md:col-span-1 relative min-h-[220px] flex items-start">
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="flex items-center mb-6 group hover:opacity-90 transition-opacity">
                <img 
                  alt="Variety Stores Logo" 
                  className="h-16 w-16 mr-4" 
                  src="/lovable-uploads/c8838c36-38ca-41af-b524-d882dd4c6701.png" 
                />
                <h3 className="text-2xl font-bold">Variety Stores</h3>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN with CONTACT INFO */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mt-1" // Added margin-top to shift icon down slightly
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="text-gray-300">
                  12, Rosy Shopping Centre<br />
                  Main Road<br />
                  Rourkela, 769001<br />
                  Odisha
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mt-1" // Added margin-top to shift icon down slightly
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="text-gray-300">+91 661 2510934<br />+91 7978489147</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mt-1" // Added margin-top to shift icon down slightly
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="text-gray-300">storesvariety@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom copyright section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Variety Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
