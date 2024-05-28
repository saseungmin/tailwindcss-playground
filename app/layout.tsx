import { Inter as FontSans } from 'next/font/google';

import './globals.css';
import { cn } from '../src/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
      )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
