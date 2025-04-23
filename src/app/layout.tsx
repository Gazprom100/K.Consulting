import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Подключаем Bootstrap и Bootstrap Icons CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" 
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
} 