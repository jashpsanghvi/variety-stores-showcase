
import React from 'react';

const clients = [
  {
    name: "TechCorp Industries",
    logo: "https://placehold.co/200x100/ffffff/1c2e6b?text=TechCorp"
  },
  {
    name: "Global Manufacturing",
    logo: "https://placehold.co/200x100/ffffff/1c2e6b?text=GMC"
  },
  {
    name: "IndusTech Solutions",
    logo: "https://placehold.co/200x100/ffffff/1c2e6b?text=IndusTech"
  },
  {
    name: "Power Systems Ltd",
    logo: "https://placehold.co/200x100/ffffff/1c2e6b?text=PowerSys"
  },
  {
    name: "AutoMechanics Inc",
    logo: "https://placehold.co/200x100/ffffff/1c2e6b?text=AMI"
  },
  {
    name: "Precision Engineering",
    logo: "https://placehold.co/200x100/ffffff/1c2e6b?text=PE Group"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
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
