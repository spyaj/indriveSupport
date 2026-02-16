import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/hooks/useLanguage';

export const metadata: Metadata = {
  title: 'inDrive Support - Multilingual Portal',
  description: 'Fast response templates for inDrive customer support',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
