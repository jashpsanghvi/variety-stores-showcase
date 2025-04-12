
import React from 'react';

// Using images from the src/assets/images/principals folder
const principals = [
  {
    name: "Hensel",
    logo: "/src/assets/images/principals/hensel_logo.png"
  },
  {
    name: "Phoenix Contact",
    logo: "/src/assets/images/principals/csm_Phoenix_Contact_767777eeeb.png"
  },
  {
    name: "Pepperl + Fuchs",
    logo: "/src/assets/images/principals/pepperl-fuchs.png"
  },
  {
    name: "Rotex",
    logo: "/src/assets/images/principals/rotex-1.png"
  },
  {
    name: "Hitachi",
    logo: "/src/assets/images/principals/png-transparent-hitachi-construction-machinery-hitachi-chemical-company-ltd-otcmkts-hchmy-industry-hitachi-text-trademark-logo.png"
  },
  {
    name: "Jaibalaji",
    logo: "/src/assets/images/principals/Jaibalaji-Dealer-Supplier.png"
  },
  {
    name: "Nangalwala",
    logo: "/src/assets/images/principals/nangalwala-industries-1672488386.png"
  },
  {
    name: "Schneider",
    logo: "/src/assets/images/principals/Historie-600x450-3-2007-v2.jpg"
  },
  {
    name: "Legrand",
    logo: "/src/assets/images/principals/cropped-logo-removebg-preview-1.png"
  }
];

const PrincipalsSection = () => {
  return (
    <section id="principals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Principals</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We partner with world-renowned manufacturers to bring you the highest quality industrial components and solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {principals.map((principal, index) => (
            <div key={index} className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <img 
                src={principal.logo} 
                alt={`${principal.name} logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;
