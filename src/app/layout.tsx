import '@/globals.scss';
import 'highlight.js/styles/atom-one-dark.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { getMarkdowns } from '@/utils/get-markdown';
import { DataProvider } from '@/hooks/use-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markdowns = await getMarkdowns();
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider markdowns={markdowns}>
          {children}
          <Toaster />
        </DataProvider>
      </body>
    </html>
  );
}
