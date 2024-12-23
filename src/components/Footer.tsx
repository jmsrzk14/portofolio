import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-100">Portfolio</h3>
            <p className="text-gray-400 mt-2">Connect with me and feel free to reach out</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com"
              className="hover:text-white-600 hover:bg-black hover:scale-110 duration-300 transition-colors p-2 rounded-full" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com"
              className="hover:text-white-600 hover:bg-blue-700 hover:scale-110 duration-300 transition-colors p-2 rounded-full" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jmsrizky@gmail.com"
              className="hover:text-white-600 hover:bg-red-500 hover:scale-110 duration-300 transition-colors p-2 rounded-full" 
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} James F R Tambunan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;