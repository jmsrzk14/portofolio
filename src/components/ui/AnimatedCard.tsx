import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import {motion} from 'framer-motion';

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="group relative rounded-lg p-[2px] transition-all duration-300 hover:scale-[1.02] overflow-hidden">
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-border rounded-lg" />
        
        {/* Card content */}
        <div className="relative bg-gray-900 rounded-lg overflow-hidden h-full">
          <div className="relative w-full">
            <img 
              src={image}
              alt={title}
              className="w-full h-36 sm:h-42 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/10"></div>
          </div>
          
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100 line-clamp-1">{title}</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-2">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href={githubLink}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-1" />
                Code
              </a>
              {liveLink ? (
                <a 
                  href={liveLink}
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center text-gray-500 cursor-not-allowed text-sm sm:text-base">
                  <ExternalLink size={16} className="mr-1" />
                  Demo tidak tersedia
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};