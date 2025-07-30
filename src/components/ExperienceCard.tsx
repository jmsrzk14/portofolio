import React from 'react';
import {motion} from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  imageUrl: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="group relative p-[2px] rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient transition-opacity duration-300" />
        
        {/* Card content */}
        <div className="relative bg-gray-800 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <img
              src={imageUrl}
              alt={company}
              className="w-12 h-12 md:w-16 md:h-16 object-cover"
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                {title}, {company}
              </h3>
              <p className="text-sm text-gray-400">{period}</p>
              <ul className="text-sm text-gray-200 mt-2 list-disc list-inside">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};