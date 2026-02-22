import { Navbar } from '@/components/layout/Navbar';
import { LandingPage } from '@/components/landing/LandingPage';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <LandingPage />
      <Footer />
    </main>
  );
}
