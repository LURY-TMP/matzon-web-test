import { Navbar } from '@/components/layout/Navbar';
import { Leaderboard } from '@/components/gaming/Leaderboard';
import { PlayerCard } from '@/components/social/PlayerCard';
import { TournamentBracket } from '@/components/tournament/TournamentBracket';
import { SocialFeed } from '@/components/social/SocialFeed';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-2/3">
          <Leaderboard />
        </div>
        <div className="w-full lg:w-1/3 pt-12">
          <PlayerCard />
        </div>
      </div>
      <div className="bg-white/[0.02] border-y border-white/5">
        <TournamentBracket />
      </div>
      <div className="py-10">
        <SocialFeed />
      </div>
    </main>
  );
}
