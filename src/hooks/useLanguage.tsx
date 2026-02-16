'use client';

import React, { createContext, useContext, useState } from 'react';
import { EN } from '@/data/languages/en';
import { NE } from '@/data/languages/ne';
import { RN } from '@/data/languages/rn';
import { BN } from '@/data/languages/bn';

type LanguageCode = 'en' | 'ne' | 'rn' | 'bn';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  data: typeof EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Record<LanguageCode, typeof EN> = {
  en: EN,
  ne: NE,
  rn: RN,
  bn: BN,
};

const languageNames: Record<LanguageCode, string> = {
  en: 'English',
  ne: 'नेपली',
  rn: 'Roman Nepali',
  bn: 'বাংলা',
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data: languages[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export { languageNames };
export type { LanguageCode };
