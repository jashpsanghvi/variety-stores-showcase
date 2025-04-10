
import React from 'react';

const principals = [
  {
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png",
    description: "Global technology powerhouse focusing on electrification, automation and digitalization."
  },
  {
    name: "ABB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png",
    description: "Leading supplier of industrial robots, machine automation and electrification solutions."
  },
  {
    name: "Schneider Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/1280px-Schneider_Electric_2007.svg.png",
    description: "Global specialist in energy management and industrial automation."
  },
  {
    name: "Phoenix Contact",
    logo: "https://seeklogo.com/images/P/phoenix-contact-logo-9D76E02C48-seeklogo.com.png",
    description: "Manufacturer of industrial electrical and electronic technology."
  },
  {
    name: "Honeywell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Honeywell_Logo.svg/2560px-Honeywell_Logo.svg.png",
    description: "Provider of commercial and consumer products, engineering services and aerospace systems."
  },
  {
    name: "Omron",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/OMRON_Logo.svg/2560px-OMRON_Logo.svg.png",
    description: "Manufacturer of automation components, sensing and control technologies."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principals.map((principal, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm p-6 transition-all duration-300 hover:shadow-md flex flex-col items-center text-center">
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src={principal.logo} 
                  alt={`${principal.name} logo`} 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1c2e6b] mb-2">{principal.name}</h3>
              <p className="text-gray-600">{principal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;
