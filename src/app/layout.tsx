import type { Metadata, Viewport } from 'next';
import {
  Bodoni_Moda,
  Libre_Franklin,
  Stint_Ultra_Condensed,
} from 'next/font/google';
import './globals.css';

const sans = Libre_Franklin({ subsets: ['latin'], variable: '--font-sans' });
const serif = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});
// Condensed slab-serif headline face, in the spirit of period wood type.
const display = Stint_Ultra_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

const title = 'Mkhanyisi Gamedze, Software Engineer';
const description =
  'Full stack software engineer working across web apps, backend systems, data, machine learning and enterprise integrations.';

export const metadata: Metadata = {
  metadataBase: new URL('https://mkhanyisi.xyz'),
  title: { default: title, template: '%s · Mkhanyisi Gamedze' },
  description,
  authors: [{ name: 'Mkhanyisi Gamedze' }],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Mkhanyisi Gamedze',
    title,
    description,
    images: [{ url: '/images/mk3.png', width: 502, height: 497 }],
  },
  twitter: { card: 'summary', title, description },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
};

// Runs before first paint: applies the saved theme (noir by default, so no
// flash) and marks JS as available so scroll-reveal never hides content without it.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme')||'dark';d.classList.toggle('dark',t==='dark')}catch(e){d.classList.add('dark')}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${sans.variable} ${serif.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
