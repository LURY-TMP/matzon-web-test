import { AuthProvider } from '@/context/AuthContext';
import { AuthModal } from '@/components/auth/AuthModal';
import type { Metadata, Viewport } from 'next';
import './globals.css';
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };
export const metadata: Metadata = { title: 'MATZON', description: 'A nova era da competicao' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <AuthModal />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
