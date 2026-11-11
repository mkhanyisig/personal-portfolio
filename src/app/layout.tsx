import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const title = 'Mkhanyisi Gamedze, Full Stack Software Engineer';
const description =
  'Software engineer building scalable applications, data-driven systems and machine learning solutions across the stack.';

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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0e' },
  ],
};

// Runs before first paint: applies the saved/system theme (no flash) and
// marks JS as available, so scroll-reveal styles never hide content without it.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.classList.toggle('dark',t==='dark')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
