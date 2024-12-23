import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

const Contact = () => {
  return (
    <Section id="contact" className="bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-100">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-gray-100">Email</h4>
                  <p className="text-gray-400">jmsrizky@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-gray-100">Phone</h4>
                  <p className="text-gray-400">+62-822-8307-0231</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-4" size={24} />
                <div>
                  <h4 className="font-medium text-gray-100">Location</h4>
                  <p className="text-gray-400">Kisaran, Sumatera Utara, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                placeholder="Your message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;