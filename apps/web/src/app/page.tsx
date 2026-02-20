import { Navbar } from '@/components/layout/Navbar';
import { Leaderboard } from '@/components/gaming/Leaderboard';
import { PlayerCard } from '@/components/social/PlayerCard';
import { TournamentBracket } from '@/components/tournament/TournamentBracket';
import { SocialFeed } from '@/components/social/SocialFeed';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-2/3">
          <Leaderboard />
        </div>
        <div className="w-full lg:w-1/3">
          <PlayerCard />
        </div>
      </div>

      {/* Tournament */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="rounded-[24px] overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
          <TournamentBracket />
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <SocialFeed />
      </div>

      <Footer />
    </main>
  );
}
