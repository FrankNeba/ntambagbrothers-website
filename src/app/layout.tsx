import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export const metadata = {
  title: 'Ntambag Brothers CIG | Empowering Children in Cameroon',
  description:
    'Ntambag Brothers CIG is a nonprofit organization in Bamenda, Cameroon dedicated to empowering underprivileged children through education, mentorship, and community development.',
  icons: {
    icon: '/assets/logo-BBZA-lAV.png',
    shortcut: '/assets/logo-BBZA-lAV.png',
    apple: '/assets/logo-BBZA-lAV.png',
  },
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
