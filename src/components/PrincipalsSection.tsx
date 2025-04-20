import React from 'react';

const principals = [
  {
    name: "Hensel",
    logo: "/assets/images/principals/hensel_logo.png",
    size: "w-32 h-24"
  },
  {
    name: "Phoenix Contact",
    logo: "/assets/images/principals/csm_Phoenix_Contact_767777eeeb.png",
    size: "w-32 h-24"
  },
  {
    name: "Pepperl + Fuchs",
    logo: "/assets/images/principals/pepperl-fuchs.png",
    size: "w-32 h-24"
  },
  {
    name: "Rotex",
    logo: "/assets/images/principals/rotex-1.png",
    size: "w-32 h-24"
  },
  {
    name: "Hitachi",
    logo: "/assets/images/principals/png-transparent-hitachi-construction-machinery-hitachi-chemical-company-ltd-otcmkts-hchmy-industry-hitachi-text-trademark-logo.png",
    size: "w-36 h-24"
  },
  {
    name: "Jaibalaji",
    logo: "/assets/images/principals/Jaibalaji-Dealer-Supplier.png",
    size: "w-32 h-24"
  },
  {
    name: "Nangalwala",
    logo: "/assets/images/principals/nangalwala-industries-1672488386.png",
    size: "w-36 h-24"
  },
  {
    name: "Schneider",
    logo: "/assets/images/principals/Historie-600x450-3-2007-v2.jpg",
    size: "w-32 h-24"
  },
  {
    name: "Legrand",
    logo: "/assets/images/principals/cropped-logo-removebg-preview-1.png",
    size: "w-32 h-24"
  },
  {
    name: "Voith",
    logo: "/assets/images/principals/voi1s4xe5hgfhqqpullm.webp",
    size: "w-36 h-24"
  },
  {
    name: "Generic1",
    logo: "/assets/images/principals/images.jpg",
    size: "w-32 h-24"
  },
  {
    name: "Generic2",
    logo: "/assets/images/principals/images.png",
    size: "w-32 h-24"
  }
];

const PrincipalsSection = () => {
  return (
    <section id="principals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Principals</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We partner with world-renowned manufacturers to bring you the highest quality industrial components and solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {principals.map((principal, index) => (
            <div key={index} className={`${principal.size} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
              <img 
                src={principal.logo} 
                alt={`${principal.name} logo`} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;
