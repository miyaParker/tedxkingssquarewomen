import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TEDxKings Square Women 2026 — Unscripted',
  description: 'TEDxKings Square Women is an independently organised TED event celebrating bold women who chart their own paths — unfiltered, unbound, and unapologetically themselves. August 29th, 2026 · Benin City, Edo State.',
  openGraph: {
    type: 'website',
    title: 'TEDxKings Square Women 2026 — Unscripted',
    description: 'A day of ideas worth spreading. Join us August 29th, 2026 in Benin City for TEDxKings Square Women — where bold voices meet world-changing ideas.',
    images: ['/og-image.png'],
    url: 'https://tedxkingssquarewomen.com',
    siteName: 'TEDxKings Square Women',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxKings Square Women 2026 — Unscripted',
    description: 'A day of ideas worth spreading. Join us August 29th, 2026 in Benin City for TEDxKings Square Women.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
