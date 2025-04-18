import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'K.Consulting - Криптовалютный консалтинг',
  description: 'Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса. Стейкинг, майнинг, трейдинг и безопасность криптоактивов.',
  keywords: 'криптовалюты, блокчейн, консалтинг, стейкинг, майнинг, трейдинг, криптоактивы, биткоин, инвестиции',
  authors: [{ name: 'K.Consulting' }],
  openGraph: {
    title: 'K.Consulting - Криптовалютный консалтинг',
    description: 'Профессиональные консультации и решения для успешного развития вашего криптовалютного бизнеса',
    url: 'https://kconsulting.com',
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
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
} 