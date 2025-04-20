import React from 'react';

// Using all images from the src/assets/images/clients folder with updated paths
const clients = [
  {
    name: "NTPC",
    logo: "/assets/images/clients/National_Thermal_Power_logo.svg",
    size: "w-32 h-24" // Enlarged
  },
  {
    name: "NSPCL",
    logo: "/assets/images/clients/NSPCL_logo.jpg",
    size: "w-36 h-24" // Larger for better visibility
  },
  {
    name: "SAIL",
    logo: "/assets/images/clients/Steel_Authority_of_India_logo.svg.png",
    size: "w-32 h-24" // Enlarged
  },
  {
    name: "Hindalco",
    logo: "/assets/images/clients/Hindalco_Logo.svg.png",
    size: "w-32 h-24" // Enlarged
  },
  {
    name: "Powergrid",
    logo: "/assets/images/clients/powergrid-logo-png_seeklogo-386972.png",
    size: "w-36 h-24" // Larger for better visibility
  },
  {
    name: "Dalmia",
    logo: "/assets/images/clients/Dalmia-logo_Bharat-Limited-Colour.webp",
    size: "w-36 h-24" // Larger for better visibility
  },
  {
    name: "Generic1",
    logo: "/assets/images/clients/1295545862838092b9854e092f7a8e6187af94087.webp",
    size: "w-32 h-24" // Enlarged
  },
  {
    name: "Generic2",
    logo: "/assets/images/clients/unnamed.png",
    size: "w-32 h-24" // Enlarged
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
            <div key={index} className={`${client.size} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
