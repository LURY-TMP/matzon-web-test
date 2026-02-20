'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Minus, Medal, Search, X, Trophy } from 'lucide-react';

const allPlayers = [
  { id: '1', rank: 1, name: 'Faker_MZ', tag: '#KR1', tier: 'Elite', elo: 3450, winrate: '68%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: '2', rank: 2, name: 'S1mple', tag: '#EUW', tier: 'Elite', elo: 3410, winrate: '65%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
  { id: '3', rank: 3, name: 'TenZ', tag: '#NA1', tier: 'Pro', elo: 3380, winrate: '62%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { id: '4', rank: 4, name: 'ZywOo', tag: '#EUW', tier: 'Pro', elo: 3350, winrate: '60%', trend: 'same', avatar: 'https://randomuser.me/api/portraits/men/62.jpg' },
  { id: '5', rank: 5, name: 'NiKo', tag: '#EUW', tier: 'Challenger', elo: 3320, winrate: '59%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/71.jpg' },
  { id: '6', rank: 6, name: 'Kscerato', tag: '#BR1', tier: 'Challenger', elo: 3290, winrate: '58%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' },
  { id: '7', rank: 7, name: 'Coldzera', tag: '#BR1', tier: 'Challenger', elo: 3260, winrate: '57%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { id: '8', rank: 8, name: 'Rain', tag: '#EUW', tier: 'Challenger', elo: 3240, winrate: '56%', trend: 'same', avatar: 'https://randomuser.me/api/portraits/men/48.jpg' },
  { id: '9', rank: 9, name: 'Device', tag: '#EUW', tier: 'Challenger', elo: 3210, winrate: '55%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/57.jpg' },
  { id: '10', rank: 10, name: 'Shroud', tag: '#NA1', tier: 'Diamond', elo: 3190, winrate: '54%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/68.jpg' },
  { id: '11', rank: 11, name: 'Twistzz', tag: '#NA1', tier: 'Diamond', elo: 3170, winrate: '53%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/77.jpg' },
  { id: '12', rank: 12, name: 'EliGE', tag: '#NA1', tier: 'Diamond', elo: 3150, winrate: '52%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/88.jpg' },
  { id: '13', rank: 13, name: 'Xantares', tag: '#TR1', tier: 'Diamond', elo: 3130, winrate: '51%', trend: 'same', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: '14', rank: 14, name: 'Krimz', tag: '#EUW', tier: 'Diamond', elo: 3110, winrate: '51%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
  { id: '15', rank: 15, name: 'Apex', tag: '#EUW', tier: 'Diamond', elo: 3090, winrate: '50%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/91.jpg' },
  { id: '16', rank: 16, name: 'Mixer', tag: '#NA1', tier: 'Platinum', elo: 3070, winrate: '49%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: '17', rank: 17, name: 'Blaze_X', tag: '#BR1', tier: 'Platinum', elo: 3050, winrate: '49%', trend: 'same', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { id: '18', rank: 18, name: 'StrikerZ', tag: '#NA1', tier: 'Platinum', elo: 3030, winrate: '48%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: '19', rank: 19, name: 'PhantomK', tag: '#KR1', tier: 'Platinum', elo: 3010, winrate: '48%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/56.jpg' },
  { id: '20', rank: 20, name: 'VortexX', tag: '#EUW', tier: 'Platinum', elo: 2990, winrate: '47%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
];

const tierColors: Record<string, { bg: string; color: string }> = {
  Elite: { bg: 'rgba(255,214,10,0.12)', color: '#FFD60A' },
  Pro: { bg: 'rgba(10,132,255,0.12)', color: '#0A84FF' },
  Challenger: { bg: 'rgba(191,90,242,0.12)', color: '#BF5AF2' },
  Diamond: { bg: 'rgba(48,209,88,0.12)', color: '#30D158' },
  Platinum: { bg: 'rgba(255,159,10,0.12)', color: '#FF9F0A' },
};

function PlayerRow({ player, delay = 0 }: { player: any; delay?: number }) {
  const getRankIcon = (rank: number) => {
    const colors: Record<number, string> = { 1: '#FFD60A', 2: '#98989E', 3: '#FF9F0A' };
    if (rank <= 3) return <Medal className="w-4 h-4" style={{ color: colors[rank] }} />;
    return <span className="text-sm font-medium w-4 text-center" style={{ color: 'var(--text-tertiary)' }}>{rank}</span>;
  };

  const tier = tierColors[player.tier] || tierColors.Platinum;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="grid grid-cols-12 gap-4 px-5 py-3.5 items-center cursor-pointer transition-colors rounded-xl mx-2"
      style={{ backgroundColor: 'transparent' }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <div className="col-span-1 flex justify-center">{getRankIcon(player.rank)}</div>
      <div className="col-span-5 flex items-center gap-3">
        <img src={player.avatar} alt={player.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{player.name}</p>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{player.tag}</p>
        </div>
      </div>
      <div className="col-span-2 hidden sm:flex justify-center">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: tier.bg, color: tier.color }}>{player.tier}</span>
      </div>
      <div className="col-span-2 flex justify-center items-center gap-1">
        <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{player.winrate}</span>
        {player.trend === 'up' && <ChevronUp className="w-3.5 h-3.5" style={{ color: '#30D158' }} />}
        {player.trend === 'down' && <ChevronDown className="w-3.5 h-3.5" style={{ color: '#FF453A' }} />}
        {player.trend === 'same' && <Minus className="w-3.5 h-3.5" style={{ color: 'var(--text-tertiary)' }} />}
      </div>
      <div className="col-span-2 flex justify-end">
        <span className="text-sm font-bold" style={{ color: '#0A84FF' }}>{player.elo}</span>
      </div>
    </motion.div>
  );
}

export function Leaderboard() {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = allPlayers.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.tag.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className="w-full py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Ranking Global</h2>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>Temporada 5 · Top {allPlayers.length}</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl w-full sm:w-auto" style={{ backgroundColor: 'var(--bg-card)' }}>
          <Search className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }} />
          <input
            type="text"
            placeholder="Buscar jogador..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent text-sm w-full sm:w-44"
            style={{ color: 'var(--text-primary)' }}
          />
          {search && (
            <button onClick={() => setSearch('')}>
              <X className="w-3.5 h-3.5" style={{ color: 'var(--text-tertiary)' }} />
            </button>
          )}
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-5 py-3 text-xs font-semibold uppercase tracking-wider mx-2"
          style={{ color: 'var(--text-tertiary)', borderBottom: '1px solid var(--separator)' }}>
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">Jogador</div>
          <div className="col-span-2 hidden sm:block text-center" suppressHydrationWarning>Tier</div>
          <div className="col-span-2 text-center">Winrate</div>
          <div className="col-span-2 text-right">ELO</div>
        </div>

        {/* Rows */}
        <div className="py-2">
          <AnimatePresence>
            {displayed.length > 0 ? (
              displayed.map((p, i) => <PlayerRow key={p.id} player={p} delay={i * 0.04} />)
            ) : (
              <div className="flex flex-col items-center py-10 gap-2">
                <Trophy className="w-8 h-8" style={{ color: 'var(--text-tertiary)' }} />
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Nenhum jogador encontrado</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!search && (
          <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: '1px solid var(--separator)' }}>
            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
              {showAll ? `${allPlayers.length} jogadores` : `6 de ${allPlayers.length}`}
            </span>
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#0A84FF' }}
            >
              {showAll ? 'Ver menos' : 'Ver todos'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
