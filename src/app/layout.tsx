import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ntambagbrothers.com'),
  title: 'Ntambag Brothers CIG | Empowering Children in Cameroon',
  description:
    'Ntambag Brothers CIG is a nonprofit organization in Bamenda, Cameroon dedicated to empowering underprivileged children through education, mentorship, and community development.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Ntambag Brothers CIG | Empowering Children in Cameroon',
    description:
      'Supporting underprivileged children through education, mentorship, and community development in Bamenda, Cameroon.',
    images: ['/assets/logo-BBZA-lAV.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <FloatingWidgets />
        <Footer />
      </body>
    </html>
  );
}
