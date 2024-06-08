import '@/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DataProvider } from '@/hooks/use-data';
import { getMarkdownListMetadata } from '@/utils/md-file-handlers';

import Container from '@/components/container';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider markdownListMetadata={getMarkdownListMetadata()}>
          <Container>
            {children}
          </Container>
          <Toaster />
        </DataProvider>
      </body>
    </html>
  );
}