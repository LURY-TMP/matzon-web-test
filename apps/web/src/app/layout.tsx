import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MATZON',
  description: 'A nova era da competição',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
