import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'K.Consulting - Криптовалютный и блокчейн консалтинг',
  description: 'Профессиональный консалтинг в сфере криптовалют и блокчейн технологий. Стейкинг, фарминг, майнинг, трейдинг, арбитраж, токенизация, NFT.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 