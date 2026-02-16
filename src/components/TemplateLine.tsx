'use client';

import CopyButton from './CopyButton';

interface TemplateLineProps {
  text: string;
}

export default function TemplateLine({ text }: TemplateLineProps) {
  return (
    <div className="bg-gray-700 p-3 rounded border border-gray-600 flex justify-between items-start gap-3 hover:border-gray-500 transition-colors">
      <p className="text-gray-100 text-sm flex-1 leading-relaxed">{text}</p>
      <CopyButton text={text} />
    </div>
  );
}
