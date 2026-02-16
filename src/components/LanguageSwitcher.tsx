'use client';

import { useState } from 'react';
import { languageNames, LanguageCode } from '@/hooks/useLanguage';

interface LanguageSwitcherProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages: LanguageCode[] = ['en', 'ne', 'rn', 'bn'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 transition-colors"
      >
        🌐 {languageNames[currentLanguage]}
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onLanguageChange(lang);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${
                currentLanguage === lang ? 'bg-blue-900 text-blue-300' : 'text-gray-300'
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
