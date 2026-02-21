import { Navbar } from '@/components/layout/Navbar';
import { Leaderboard } from '@/components/gaming/Leaderboard';
import { Footer } from '@/components/layout/Footer';

export default function RankingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10">
        <Leaderboard />
      </div>
      <Footer />
    </main>
  );
}
