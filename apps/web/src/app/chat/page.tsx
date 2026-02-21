import { ChatOfficial } from '@/components/chat/ChatOfficial';

export const metadata = {
  title: 'MatchZone | MATZON',
  description: 'O seu portal de comunicações MATZON.',
};

export default function ChatPage() {
  return (
    <main className="bg-black min-h-screen">
      <ChatOfficial />
    </main>
  );
}
