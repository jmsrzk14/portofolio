import React from 'react';
import { ProgrammingLanguageLogos } from '../../utils/programmingLanguageLogos';

interface LanguageBadgeProps {
  language: string;
}

export const LanguageBadge: React.FC<LanguageBadgeProps> = ({ language }) => {
  const Logo = ProgrammingLanguageLogos[language.toLowerCase()] || null;
  
  if (!Logo) return null;

  return (
    <div className="group relative inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full hover:bg-gray-800 transition-colors">
      <Logo className="w-4 h-4" />
      <span className="text-sm text-gray-300">{language}</span>
    </div>
  );
};