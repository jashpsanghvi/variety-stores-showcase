
import React from 'react';

const principals = [
  {
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png"
  },
  {
    name: "ABB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png"
  },
  {
    name: "Schneider Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/1280px-Schneider_Electric_2007.svg.png"
  },
  {
    name: "Phoenix Contact",
    logo: "https://seeklogo.com/images/P/phoenix-contact-logo-9D76E02C48-seeklogo.com.png"
  },
  {
    name: "Honeywell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Honeywell_Logo.svg/2560px-Honeywell_Logo.svg.png"
  },
  {
    name: "Omron",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/OMRON_Logo.svg/2560px-OMRON_Logo.svg.png"
  }
];

const PrincipalsSection = () => {
  return (
    <section id="principals" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Principals</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We partner with world-renowned manufacturers to bring you the highest quality industrial components and solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
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
