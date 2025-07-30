import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './ui/Container';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
       <motion.div
          initial={{ zoom: 0 }}
          whileInView={{ zoom: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        <Container>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} James F R Tambunan. All rights reserved.</p>
          </div>
        </Container>
      </motion.div>
    </footer>
  );
};

export default Footer;