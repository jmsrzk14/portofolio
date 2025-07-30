import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Section id="contact" className="bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Let's Connect</h2>
        </motion.div>   
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 sm:mt-[3em]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex flex-col md:flex-column justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-100">Portfolio</h3>
                  <p className="text-gray-400 mt-2">Connect with me and feel free to reach out</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex space-x-6 mt-[7em]">
                    <a 
                      href="https://github.com/jmsrzk14"
                      className="text-white hover:bg-black hover:scale-110 duration-300 transition-colors p-2 rounded-full" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/james-frans-rizky-tambunan"
                      className="text-white hover:bg-blue-700 hover:scale-110 duration-300 transition-colors p-2 rounded-full" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a 
                      href="mailto:jmsrizky@gmail.com"
                      className="text-white hover:bg-red-500 hover:scale-110 duration-300 transition-colors p-2 rounded-full" 
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="lg:ml-[10em] sm:ml-[10em] ml-[2em]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-100">Contact Information</h3>
            </motion.div>  
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div> 
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;