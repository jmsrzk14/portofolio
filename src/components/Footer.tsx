import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} James F R Tambunan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;