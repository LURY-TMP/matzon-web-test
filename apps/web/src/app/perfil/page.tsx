import { Navbar } from '@/components/layout/Navbar';
import { PlayerCard } from '@/components/social/PlayerCard';
import { SocialFeed } from '@/components/social/SocialFeed';
import { Footer } from '@/components/layout/Footer';

export default function PerfilPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/3"><PlayerCard /></div>
        <div className="w-full lg:w-2/3"><SocialFeed /></div>
      </div>
      <Footer />
    </main>
  );
}
