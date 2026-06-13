import type { Metadata } from 'next';
import { Readex_Pro } from 'next/font/google';
import './globals.css';

const readexPro = Readex_Pro({
  variable: '--font-readex-pro',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mandelbrot — Automate Everything',
  description:
    'We build hyper-intelligent, agentic workflows that replace manual bottlenecks with flawless machine precision. Stealth AI startup.',
  keywords: ['AI', 'automation', 'agents', 'workflows', 'agentic AI', 'mandelbrot'],
  openGraph: {
    title: 'Mandelbrot — Automate Everything',
    description:
      'Hyper-intelligent agentic workflows that replace manual bottlenecks with machine precision.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${readexPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
