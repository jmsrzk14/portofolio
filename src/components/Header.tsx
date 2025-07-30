import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './ui/Container';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative top-0 right-0 z-50 transition-all duration-300`}
    >
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <Container>
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="text-2xl font-bold text-gray-100">James F R Tambunan</a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </nav>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/jmsrzk14" className="text-gray-300 hover:text-white-600 hover:bg-black hover:scale-110 duration-300 transition-colors p-2 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/james-frans-rizky-tambunan" className="text-gray-300 hover:text-white-600 hover:bg-blue-700 hover:scale-110 duration-300 transition-colors p-2 rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jmsrizky@gmail.com" className="text-gray-300 hover:text-white-600 hover:bg-red-500 hover:scale-110 duration-300 transition-colors p-2 rounded-full">
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800">
              <nav className="flex flex-col p-4">
                <a href="#home" className="py-2 text-gray-300 hover:text-blue-400">Home</a>
                <a href="#about" className="py-2 text-gray-300 hover:text-blue-400">About</a>
                <a href="#experience" className="py-2 text-gray-300 hover:text-blue-400">Experience</a>
                <a href="#projects" className="py-2 text-gray-300 hover:text-blue-400">Projects</a>
                <a href="#contact" className="py-2 text-gray-300 hover:text-blue-400">Contact</a>
              </nav>
            </div>
          )}
        </Container>
      </header>
    </motion.nav>
  );
};

export default Header;