
import React from 'react';

// Using images from the src/assets/images/clients folder
const clients = [
  {
    name: "NTPC",
    logo: "/src/assets/images/clients/National_Thermal_Power_logo.svg"
  },
  {
    name: "NSPCL",
    logo: "/src/assets/images/clients/NSPCL_logo.jpg"
  },
  {
    name: "SAIL",
    logo: "/src/assets/images/clients/Steel_Authority_of_India_logo.svg.png"
  },
  {
    name: "Hindalco",
    logo: "/src/assets/images/clients/Hindalco_Logo.svg.png"
  },
  {
    name: "Powergrid",
    logo: "/src/assets/images/clients/powergrid-logo-png_seeklogo-386972.png"
  },
  {
    name: "Dalmia",
    logo: "/src/assets/images/clients/Dalmia-logo_Bharat-Limited-Colour.webp"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're proud to work with leading companies across various industrial sectors.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
