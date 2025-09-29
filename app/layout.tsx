import './globals.css';
import type { Metadata } from 'next/metadata';
import { Inter, Playfair_Display } from 'next/font/google';
import { AnimatedCursor } from '@/components/AnimatedCursor';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Toaster } from 'sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Architect Portfolio - Innovative Design Solutions',
  description: 'Professional architect portfolio showcasing innovative design solutions, sustainable architecture, and award-winning projects.',
  keywords: 'architect, architecture, design, sustainable design, residential, commercial, interior design',
  authors: [{ name: 'Architect Portfolio' }],
  openGraph: {
    title: 'Architect Portfolio - Innovative Design Solutions',
    description: 'Professional architect portfolio showcasing innovative design solutions, sustainable architecture, and award-winning projects.',
    type: 'website',
    siteName: 'Architect Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Portfolio - Innovative Design Solutions',
    description: 'Professional architect portfolio showcasing innovative design solutions, sustainable architecture, and award-winning projects.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 overflow-x-hidden`}>
        <AnimatedCursor />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="bottom-right" 
          richColors 
          closeButton
          duration={5000}
        />
      </body>
    </html>
  );
}