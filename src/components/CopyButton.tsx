'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 whitespace-nowrap ${
        copied
          ? 'bg-green-900 text-green-300 border border-green-700'
          : 'bg-blue-900 text-blue-300 hover:bg-blue-800 border border-blue-700 hover:border-blue-600'
      }`}
    >
      {copied ? '✓ Copied' : label || 'Copy'}
    </button>
  );
}
