import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '@/components/Header';
import AnimationWrapper from '@/components/AnimationWrapper';

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
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Header />
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
        
        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  );
} 