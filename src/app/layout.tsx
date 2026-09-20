import './globals.css';
import { getSiteData } from '@/lib/db';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export const metadata = {
  title: 'Ntambag Brothers CIG | Empowering Children in Cameroon',
  description: 'Ntambag Brothers CIG is a nonprofit organization in Bamenda, Cameroon dedicated to empowering underprivileged children through education, mentorship, and community development.',
  icons: {
    icon: '/assets/logo-BBZA-lAV.png',
    shortcut: '/assets/logo-BBZA-lAV.png',
    apple: '/assets/logo-BBZA-lAV.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let siteConfig = {};
  try {
    const data = getSiteData();
    siteConfig = data.siteConfig || {};
  } catch (e) {
    console.error('Failed to load site config in layout:', e);
  }

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased min-h-screen flex flex-col justify-between">
        <Header siteConfig={siteConfig} />
        <main className="flex-1">{children}</main>
        <Footer siteConfig={siteConfig} />
        <FloatingWidgets />
      </body>
    </html>
  );
}
