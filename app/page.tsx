import { getSectionComponent } from '@/lib/section-registry';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Force dynamic rendering removed for static export

import configData from '@/data/config.json';
import { ConfigData } from '@/types/config';

// Force dynamic rendering removed for static export

export default function Home() {
  const config = configData as unknown as ConfigData;
  const sections = config.sections || []; // Safe access

  return (
    <div className="flex min-h-screen flex-col">
      <Header config={config.business} />
      <main className="flex-1">
        {sections.map((section, index) => {
          if (!section.enabled) return null;

          const Component = getSectionComponent(section.key);
          if (!Component) return null;

          return (
            <Component
              key={`${section.key}-${index}`}
              content={section.contentRef}
            />
          );
        })}
        {sections.length === 0 && (
          <div className="p-20 text-center">
            <h1 className="text-4xl font-bold">No Sections Enabled</h1>
            <p>Check config.json</p>
          </div>
        )}
      </main>
      <Footer config={config.business} />
    </div>
  );
}
