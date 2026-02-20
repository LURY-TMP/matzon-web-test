'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronUp, ChevronDown, Minus, Medal, Search } from 'lucide-react';

const leaderboardData = [
  { id: '1', rank: 1, name: 'Faker_MZ', tag: '#KR1', tier: 'Elite', elo: 3450, winrate: '68%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: '2', rank: 2, name: 'S1mple', tag: '#EUW', tier: 'Elite', elo: 3410, winrate: '65%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
  { id: '3', rank: 3, name: 'TenZ', tag: '#NA1', tier: 'Pro', elo: 3380, winrate: '62%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { id: '4', rank: 4, name: 'ZywOo', tag: '#EUW', tier: 'Pro', elo: 3350, winrate: '60%', trend: 'same', avatar: 'https://randomuser.me/api/portraits/men/62.jpg' },
  { id: '5', rank: 5, name: 'NiKo', tag: '#EUW', tier: 'Challenger', elo: 3320, winrate: '59%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/71.jpg' },
  { id: '6', rank: 6, name: 'Kscerato', tag: '#BR1', tier: 'Challenger', elo: 3290, winrate: '58%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' },
];

export function Leaderboard() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const rowVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  const getRankColor = (rank: number) => {
    if (rank === 1) return '#FFD60A';
    if (rank === 2) return '#98989E';
    if (rank === 3) return '#FF9F0A';
    return 'rgba(245,245,247,0.3)';
  };

  return (
    <section className="w-full py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Ranking Global</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Temporada 5 · Top 100</p>
        </div>
        <div className="flex items-center rounded-2xl px-4 py-2.5 w-full sm:w-auto" style={{ backgroundColor: 'var(--bg-card)' }}>
          <Search className="w-4 h-4 mr-2" style={{ color: 'var(--text-tertiary)' }} />
          <input type="text" placeholder="Buscar jogador..." className="bg-transparent text-sm focus:outline-none w-full sm:w-48" style={{ color: 'var(--text-primary)' }} />
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--bg-card)' }}>
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">Jogador</div>
          <div className="col-span-2 hidden sm:block text-center">Tier</div>
          <div className="col-span-2 text-center">Winrate</div>
          <div className="col-span-2 text-right">ELO</div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {leaderboardData.map((player) => (
            <motion.div
              key={player.id}
              variants={rowVariants}
              className="grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer transition-all duration-200"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div className="col-span-1 flex justify-center">
                {player.rank <= 3
                  ? <Medal className="w-4 h-4" style={{ color: getRankColor(player.rank) }} />
                  : <span className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>{player.rank}</span>
                }
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <img src={player.avatar} alt={player.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{player.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{player.tag}</p>
                </div>
              </div>
              <div className="col-span-2 hidden sm:flex justify-center">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(10,132,255,0.12)', color: '#0A84FF' }}>{player.tier}</span>
              </div>
              <div className="col-span-2 flex justify-center items-center gap-1">
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{player.winrate}</span>
                {player.trend === 'up' && <ChevronUp className="w-3.5 h-3.5" style={{ color: '#30D158' }} />}
                {player.trend === 'down' && <ChevronDown className="w-3.5 h-3.5" style={{ color: '#FF453A' }} />}
                {player.trend === 'same' && <Minus className="w-3.5 h-3.5" style={{ color: 'var(--text-tertiary)' }} />}
              </div>
              <div className="col-span-2 flex justify-end">
                <span className="text-sm font-bold" style={{ color: '#0A84FF' }}>{player.elo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="px-6 py-4 text-center">
          <button className="text-sm font-medium transition-colors" style={{ color: '#0A84FF' }}>Ver todos os jogadores</button>
        </div>
      </div>
    </section>
  );
}
