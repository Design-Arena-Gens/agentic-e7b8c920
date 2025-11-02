import './globals.css';
import { Special_Elite } from 'next/font/google';

const Typewriter = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-typewriter',
});

export const metadata = {
  title: 'Leaving the Old Gods ? A Quiet Reckoning',
  description:
    'A reflective, historically grounded essay on why ancient people left the old gods for a new God.',
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Typewriter.variable}>
      <body>{children}</body>
    </html>
  );
}
