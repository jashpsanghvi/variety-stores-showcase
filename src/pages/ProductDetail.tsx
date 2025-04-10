
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const productData = {
  'sensors': {
    name: 'Sensors',
    description: 'Our range of high-quality industrial sensors includes proximity sensors, photoelectric sensors, temperature sensors, pressure sensors, and more. These sensors are designed to provide accurate and reliable detection in various industrial applications.',
    features: [
      'High accuracy and reliability',
      'Wide operating temperature range',
      'Fast response time',
      'Long operational life',
      'Compact designs for easy installation'
    ],
    applications: [
      'Machine automation',
      'Process control',
      'Quality inspection',
      'Safety systems',
      'Industrial IoT'
    ],
    image: 'https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  'encoders': {
    name: 'Encoders',
    description: 'We offer a comprehensive range of rotary and linear encoders that provide precise position feedback for motion control applications. Our encoders are available in incremental and absolute versions to suit different requirements.',
    features: [
      'High resolution and accuracy',
      'Robust mechanical design',
      'Various output interfaces (analog, digital, fieldbus)',
      'Compact and versatile mounting options',
      'Protection against harsh environments'
    ],
    applications: [
      'Robotics',
      'CNC machines',
      'Elevator systems',
      'Packaging machinery',
      'Material handling equipment'
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9aba4fb463c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  'limit-switches': {
    name: 'Limit Switches',
    description: 'Our limit switches are designed to reliably detect the presence or absence of objects and provide position feedback in industrial automation systems. We offer a wide variety of actuator types, contact configurations, and housing materials.',
    features: [
      'Precise operating points',
      'Multiple contact configurations',
      'Various actuator styles',
      'High electrical ratings',
      'Durable construction for harsh environments'
    ],
    applications: [
      'End-of-travel detection',
      'Safety interlocks',
      'Material handling systems',
      'Conveyor systems',
      'Machine tools'
    ],
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  'cables': {
    name: 'Cables',
    description: 'We supply a wide selection of industrial cables for power, data, and signal transmission. Our cables are designed to withstand harsh industrial environments and provide reliable performance in various applications.',
    features: [
      'High flexibility',
      'Oil and chemical resistance',
      'Flame retardant properties',
      'Wide temperature range',
      'EMI/RFI shielding options'
    ],
    applications: [
      'Factory automation',
      'Machine tools',
      'Robotic systems',
      'Control panels',
      'Data communication networks'
    ],
    image: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  'ups': {
    name: 'UPS',
    description: 'Our uninterruptible power supply (UPS) systems provide reliable backup power for critical industrial applications. We offer a range of UPS solutions, from small units for individual equipment to large systems for entire facilities.',
    features: [
      'Online double conversion technology',
      'Scalable power capacity',
      'Advanced battery management',
      'Comprehensive monitoring and diagnostics',
      'Hot-swappable components for easy maintenance'
    ],
    applications: [
      'Industrial computers and controllers',
      'Process control systems',
      'Communication networks',
      'Security systems',
      'Critical manufacturing equipment'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  }
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug as keyof typeof productData] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-8">The product you are looking for does not exist.</p>
            <Link to="/">
              <Button className="bg-[#1c2e6b] hover:bg-[#243a85]">Return to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Link to="/#products" className="text-[#1c2e6b] hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Products
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold text-[#1c2e6b] mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Applications</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {product.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in our {product.name}?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us for detailed specifications, pricing, and availability. Our technical team is ready to assist you in finding the right solution for your application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#1c2e6b] hover:bg-[#243a85] px-6">Request a Quote</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-[#1c2e6b] text-[#1c2e6b] hover:bg-[#1c2e6b] hover:text-white px-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
