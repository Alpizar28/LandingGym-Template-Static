import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeInjector from '@/lib/theme-injector';
import configData from '@/data/config.json';
import { ConfigData } from '@/types/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: configData.business.name || 'Gym Landing Page',
  description: 'Modular landing page system for gyms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = configData as unknown as ConfigData;

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          '--primary': config.business.colors.primary,
          '--secondary': config.business.colors.secondary,
          '--accent': config.business.colors.accent,
          '--muted': config.business.colors.muted,
          '--foreground': config.business.colors.text,
          '--background': config.business.colors.background,
        } as React.CSSProperties}
      >
        {/* We keep ThemeInjector if it does something useful, or remove it if replaced by inline styles */}
        {children}
      </body>
    </html>
  );
}
