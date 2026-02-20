import { Navbar } from '@/components/layout/Navbar';
import { LandingHero } from '@/components/layout/LandingHero';
import { Leaderboard } from '@/components/gaming/Leaderboard';
import { PlayerCard } from '@/components/social/PlayerCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <LandingHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-2/3">
          <Leaderboard />
        </div>
        <div className="w-full lg:w-1/3 pt-12">
          <PlayerCard />
        </div>
      </div>
    </main>
  );
}
