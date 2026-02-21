import { Navbar } from '@/components/layout/Navbar';
import { Leaderboard } from '@/components/gaming/Leaderboard';
import { PlayerCard } from '@/components/social/PlayerCard';
import { TournamentBracket } from '@/components/tournament/TournamentBracket';
import { Footer } from '@/components/layout/Footer';

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start mb-6">
          <div className="w-full lg:w-2/3"><Leaderboard /></div>
          <div className="w-full lg:w-1/3"><PlayerCard /></div>
        </div>
        <TournamentBracket />
      </div>
      <Footer />
    </main>
  );
}
