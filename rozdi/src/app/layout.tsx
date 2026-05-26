import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { UnifiedLayout } from '@/components/layout/UnifiedLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Rozdi — Research-Driven BPO Solutions for Bangladesh',
  description: 'We help Bangladeshi companies integrate intelligent systems, automate operations, and scale.',
  openGraph: {
    images: [{ url: '/og-image.jpg' }]
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <UnifiedLayout>
          {children}
        </UnifiedLayout>
      </body>
    </html>
  );
}
