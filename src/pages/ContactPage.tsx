
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you soon.");
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
              <div className="w-20 h-1 bg-[#1c2e6b] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a question or need a quote? Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Your Company Ltd." 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 9876543210" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    required 
                    placeholder="Product Inquiry" 
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    required 
                    placeholder="Please provide details about your inquiry..." 
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    onClick={handleGoBack}
                    variant="outline"
                    className="border-[#1c2e6b] text-[#1c2e6b] hover:bg-[#1c2e6b] hover:text-white px-6 py-2 rounded-none text-lg font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Go Back
                  </Button>
                  
                  <Button 
                    type="submit" 
                    className="bg-[#1c2e6b] hover:bg-[#243a85] text-white px-8 py-3 rounded-none text-lg font-medium"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
