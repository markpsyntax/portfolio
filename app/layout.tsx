import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mark Phillips | Software Developer',
  description: 'My personal portfolio for my work. Contact me to learn more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
