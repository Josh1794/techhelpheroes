import { Inter } from 'next/font/google';
import './globals.css';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Tech Help Heroes',
  description: 'Think of us as your high-tech handyman and gadget guru',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <script
          // strategy='beforeInteractive'
          src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
