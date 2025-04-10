
import React from 'react';

const clients = [
  {
    name: "Manufacturing Co.",
    testimonial: "Variety Stores has been our go-to supplier for industrial components for over 5 years. Their technical expertise and reliable service are unmatched.",
    person: "John Smith, Procurement Manager"
  },
  {
    name: "Engineering Solutions Ltd.",
    testimonial: "The team at Variety Stores understands our specific requirements and consistently delivers quality components on time and at competitive prices.",
    person: "Emily Johnson, Chief Engineer"
  },
  {
    name: "Industrial Systems Inc.",
    testimonial: "We've been impressed with the range of products and technical knowledge provided by Variety Stores. A trusted partner for our automation needs.",
    person: "Michael Chen, Operations Director"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're proud to work with businesses across various industries, providing them with the components they need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{client.testimonial}"</p>
              <div>
                <p className="font-semibold text-gray-800">{client.person}</p>
                <p className="text-blue-600">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-8">Trusted by Companies Across Industries</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-gray-500 font-bold text-lg">COMPANY A</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-gray-500 font-bold text-lg">COMPANY B</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-gray-500 font-bold text-lg">COMPANY C</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-gray-500 font-bold text-lg">COMPANY D</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-gray-500 font-bold text-lg">COMPANY E</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
