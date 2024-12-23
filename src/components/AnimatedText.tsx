import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  interval?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  words, 
  interval = 3000 
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let wordIndex = 0;
    
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        setCurrentWord(words[wordIndex]);
        setIsVisible(true);
      }, 500); // Half of transition duration
      
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <span 
      className={`
        inline-block 
        transition-opacity 
        duration-1000 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {currentWord}
    </span>
  );
};