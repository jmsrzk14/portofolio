import React from 'react';

interface TechLogoProps {
  src: string;
  label: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ src, label }) => {
  return (
    <div className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-700 rounded-full flex items-center justify-center">
        <img
          src={src}
          alt={label}
          className="w-12 h-12 md:w-16 md:h-16 object-cover"
        />
      </div>
      <p className="text-sm md:text-base font-['Arial'] text-gray-200 mt-2">{label}</p>
    </div>
  );
};