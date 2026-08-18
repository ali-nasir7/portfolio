import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/lib/app-context';
import { MotionProvider } from '@/components/MotionProvider';
import { GlobalChrome } from '@/components/GlobalChrome';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s — ${site.name}`,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.fullName,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#efe9df',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${instrument.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: site.fullName,
              alternateName: site.name,
              jobTitle: site.role,
              email: site.email,
              url: site.url,
              sameAs: [site.socials.github, site.socials.linkedin, site.socials.twitter],
              knowsAbout: [
                'Software Engineering',
                'Java',
                'Spring Boot',
                'REST APIs',
                'Distributed Systems',
                'PostgreSQL',
                'Apache Kafka',
                'AI Systems',
                'AI Agents',
              ],
            }),
          }}
        />
      </head>
      <body>
        <AppProvider>
          <MotionProvider>
            <GlobalChrome />
            {children}
            <Footer />
          </MotionProvider>
        </AppProvider>
      </body>
    </html>
  );
}
