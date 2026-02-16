'use client';

import { useState } from 'react';
import CopyButton from './CopyButton';

interface SolutionCardProps {
  solution: any;
  data: any;
}

export default function SolutionCard({ solution, data }: SolutionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
      {/* Title */}
      <h3 className="text-base font-bold text-white mb-3">{solution.title}</h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {solution.tags.map((tag: string, idx: number) => (
          <span key={idx} className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded border border-blue-800">
            {tag}
          </span>
        ))}
      </div>

      {/* Opening */}
      <div className="mb-3">
        <p className="text-gray-300 text-sm mb-2">{solution.opening}</p>
        <CopyButton text={solution.opening} label="Copy opening" />
      </div>

      {/* Empathy */}
      <div className="mb-3">
        <p className="text-gray-300 text-sm mb-2">{solution.empathy}</p>
        <CopyButton text={solution.empathy} label="Copy empathy" />
      </div>

      {/* Solution */}
      <div className="bg-gray-700 p-3 rounded border border-gray-600 mb-3">
        <p className="text-gray-200 text-sm whitespace-pre-wrap mb-2">{solution.solution}</p>
        <CopyButton text={solution.solution} label="Copy solution" />
      </div>

      {/* Expandable Conditions & Prevention */}
      {(solution.conditions || solution.prevention) && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-2 mb-3"
          >
            {expanded ? '▼' : '▶'} {data.nav.additionalInfo}
          </button>

          {expanded && (
            <div className="space-y-3 mt-3 border-t border-gray-700 pt-3">
              {solution.conditions && (
                <div>
                  <p className="text-xs font-semibold text-yellow-400 mb-2">⚙️ {data.nav.conditions}</p>
                  <div className="bg-gray-700 p-3 rounded border border-gray-600">
                    <p className="text-gray-300 text-sm mb-2">{solution.conditions}</p>
                    <CopyButton text={solution.conditions} label="Copy" />
                  </div>
                </div>
              )}

              {solution.prevention && (
                <div>
                  <p className="text-xs font-semibold text-green-400 mb-2">🛡️ {data.nav.prevention}</p>
                  <div className="bg-gray-700 p-3 rounded border border-gray-600">
                    <p className="text-gray-300 text-sm mb-2">{solution.prevention}</p>
                    <CopyButton text={solution.prevention} label="Copy" />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
