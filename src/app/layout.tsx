'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://kconsulting.netlify.app'),
  title: 'K.Consulting - Криптовалютный консалтинг',
  description: 'Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса. Стейкинг, майнинг, трейдинг и безопасность криптоактивов.',
  keywords: 'криптовалюты, блокчейн, консалтинг, стейкинг, майнинг, трейдинг, криптоактивы, биткоин, инвестиции',
  authors: [{ name: 'K.Consulting' }],
  openGraph: {
    title: 'K.Consulting - Криптовалютный консалтинг',
    description: 'Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса',
    url: '/',
    siteName: 'K.Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'K.Consulting - Криптовалютный консалтинг',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.Consulting - Криптовалютный консалтинг',
    description: 'Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images and fonts
    const preloadImages = async () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Handle error case as well
        });
      });
      await Promise.all(imagePromises);
    };

    Promise.all([
      // Wait for fonts to load
      document.fonts.ready,
      // Wait for images to load
      preloadImages(),
      // Minimum loading time
      new Promise(resolve => setTimeout(resolve, 2000))
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <LoadingScreen />
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
} 