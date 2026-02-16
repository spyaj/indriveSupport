'use client';

import { useState, useMemo } from 'react';
import { useLanguage, languageNames } from '@/hooks/useLanguage';
import TemplateLine from '@/components/TemplateLine';
import SolutionCard from '@/components/SolutionCard';
import SearchBar from '@/components/SearchBar';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { language, setLanguage, data } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter solutions
  const filteredSolutions = useMemo(() => {
    if (!searchQuery) return data.solutions;

    const searchLower = searchQuery.toLowerCase();
    return data.solutions.filter(
      (sol) =>
        sol.title.toLowerCase().includes(searchLower) ||
        sol.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
        sol.opening.toLowerCase().includes(searchLower) ||
        sol.solution.toLowerCase().includes(searchLower)
    );
  }, [searchQuery, data]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1600px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🚗</span>
              <div>
                <h1 className="text-3xl font-bold text-white">inDrive Support</h1>
                <p className="text-gray-400 text-sm">Quick Response Portal</p>
              </div>
            </div>
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </header>

      {/* Two-Column Layout */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN: Standard Templates */}
          <div className="space-y-4">
            <div className="sticky top-24 z-40">
              <h2 className="text-2xl font-bold text-white mb-4">
                📋 {data.nav.standardTemplates}
              </h2>
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 space-y-6 max-h-[calc(100vh-180px)] overflow-y-auto">
                {/* Template 1 */}
                <TemplateBlock template={data.templates.opening} data={data} />

                {/* Template 2 */}
                <TemplateBlock template={data.templates.empathy} data={data} />

                {/* Template 3 */}
                <TemplateBlock template={data.templates.requestInfo} data={data} />

                {/* Template 4 */}
                <TemplateBlock template={data.templates.checking} data={data} />

                {/* Template 5 */}
                <TemplateBlock template={data.templates.resolution} data={data} />

                {/* Template 6 */}
                <TemplateBlock template={data.templates.anythingElse} data={data} />

                {/* Template 7 */}
                <TemplateBlock template={data.templates.closing} data={data} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Solutions with Search */}
          <div className="space-y-4">
            <div className="sticky top-24 z-40">
              <h2 className="text-2xl font-bold text-white mb-4">
                🔍 {data.nav.searchSolutions}
              </h2>

              {/* Search Bar */}
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search solutions..."
              />

              {/* Results Count */}
              {searchQuery && (
                <p className="text-gray-400 text-sm mt-2">
                  Found {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Solutions Grid */}
            <div className="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto">
              {filteredSolutions.length > 0 ? (
                filteredSolutions.map((solution) => (
                  <SolutionCard key={solution.id} solution={solution} data={data} />
                ))
              ) : (
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 text-center">
                  <p className="text-gray-400">No solutions found</p>
                  <p className="text-gray-500 text-sm mt-1">Try a different search term</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-12">
        <div className="max-w-[1600px] mx-auto px-6 py-6 text-center">
          <p className="text-gray-400 text-sm">
            inDrive Support Portal v3.1 | {languageNames[language as any]} | {data.solutions.length} Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}

// Template Block Component
function TemplateBlock({ template, data }: any) {
  return (
    <div className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
        {template.number} {template.title}
      </h3>
      <div className="space-y-2">
        {template.lines.map((line: string, idx: number) => (
          <TemplateLine key={idx} text={line} />
        ))}
      </div>
    </div>
  );
}
