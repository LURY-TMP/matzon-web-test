import { Navbar } from '@/components/layout/Navbar';
import { DashboardOfficial } from '@/components/dashboard/DashboardOfficial';
import { Footer } from '@/components/layout/Footer';

export const metadata = { title: 'Dashboard | MATZON' };

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <DashboardOfficial />
      <Footer />
    </main>
  );
}
