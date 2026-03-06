import type { Metadata } from 'next';
import { Shippori_Mincho, DM_Sans, Work_Sans } from 'next/font/google';
import './globals.css';

const shippori = Shippori_Mincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-shippori',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const workSans = Work_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ARTERRA International',
  description: 'Exquisite Japanese Matcha — Global Luxury Matcha Solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${shippori.variable} ${dmSans.variable} ${workSans.variable}`}>
      <body className="antialiased font-sans text-arterra-ink bg-arterra-cream">{children}</body>
    </html>
  );
}
