import { Navbar } from '@/components/layout/Navbar';
import { LandingHero } from '@/components/layout/LandingHero';
import { Leaderboard } from '@/components/gaming/Leaderboard';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <LandingHero />
      <Leaderboard />
    </main>
  );
}
