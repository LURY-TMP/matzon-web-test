import { Navbar } from '@/components/layout/Navbar';
import { Leaderboard } from '@/components/gaming/Leaderboard';
import { PlayerCard } from '@/components/social/PlayerCard';
import { TournamentBracket } from '@/components/tournament/TournamentBracket';
import { SocialFeed } from '@/components/social/SocialFeed';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }} className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-2/3">
          <Leaderboard />
        </div>
        <div className="w-full lg:w-1/3 pt-0 lg:pt-12">
          <PlayerCard />
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--bg-secondary)' }} className="rounded-[30px] mx-4 sm:mx-6 lg:mx-8 my-4">
        <TournamentBracket />
      </div>
      <div className="py-6">
        <SocialFeed />
      </div>
    </main>
  );
}
