'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronUp, ChevronDown, Minus, Medal, Search, Filter } from 'lucide-react';

const leaderboardData = [
  { id: '1', rank: 1, name: 'Faker_MZ', tag: '#KR1', tier: 'Elite', elo: 3450, winrate: '68%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: '2', rank: 2, name: 'S1mple', tag: '#EUW', tier: 'Elite', elo: 3410, winrate: '65%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
  { id: '3', rank: 3, name: 'TenZ', tag: '#NA1', tier: 'Pro', elo: 3380, winrate: '62%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { id: '4', rank: 4, name: 'ZywOo', tag: '#EUW', tier: 'Pro', elo: 3350, winrate: '60%', trend: 'same', avatar: 'https://randomuser.me/api/portraits/men/62.jpg' },
  { id: '5', rank: 5, name: 'NiKo', tag: '#EUW', tier: 'Challenger', elo: 3320, winrate: '59%', trend: 'up', avatar: 'https://randomuser.me/api/portraits/men/71.jpg' },
  { id: '6', rank: 6, name: 'Kscerato', tag: '#BR1', tier: 'Challenger', elo: 3290, winrate: '58%', trend: 'down', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' },
];

export function Leaderboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };
  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30 shadow-[0_0_15px_rgba(250,204,21,0.2)]';
      case 2: return 'text-gray-300 bg-gray-300/10 border-gray-300/30';
      case 3: return 'text-amber-600 bg-amber-600/10 border-amber-600/30';
      default: return 'text-white/50 bg-white/5 border-white/5';
    }
  };
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <Trophy className="w-8 h-8 text-cyan-400" />
            Ranking Global
          </h2>
          <p className="text-white/50 text-sm mt-1 font-semibold tracking-wide">Temporada 5 • Top 100 Melhores Jogadores</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-colors">
            <Search className="w-4 h-4 text-white/50 mr-2" />
            <input type="text" placeholder="Buscar jogador..." className="bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-white/30 w-32 sm:w-48" />
          </div>
          <button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 bg-white/5 text-xs font-bold text-white/40 uppercase tracking-wider">
          <div className="col-span-2 sm:col-span-1 text-center">Rank</div>
          <div className="col-span-6 sm:col-span-5">Jogador</div>
          <div className="col-span-2 hidden sm:block text-center">Tier</div>
          <div className="col-span-2 text-center">Winrate</div>
          <div className="col-span-2 text-right pr-4">ELO</div>
        </div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col">
          {leaderboardData.map((player) => (
            <motion.div key={player.id} variants={rowVariants} className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
              <div className="col-span-2 sm:col-span-1 flex justify-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm border ${getRankStyle(player.rank)}`}>
                  {player.rank <= 3 ? <Medal className="w-4 h-4" /> : player.rank}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-5 flex items-center gap-3">
                <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full flex-shrink-0 border border-white/10 group-hover:border-white/30 transition-colors overflow-hidden object-cover" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm sm:text-base">{player.name}</span>
                  <span className="text-white/40 text-xs font-semibold">{player.tag}</span>
                </div>
              </div>
              <div className="col-span-2 hidden sm:flex justify-center items-center">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-400">{player.tier}</span>
              </div>
              <div className="col-span-2 flex justify-center items-center gap-1 sm:gap-2">
                <span className="text-white/80 font-bold text-sm">{player.winrate}</span>
                {player.trend === 'up' && <ChevronUp className="w-4 h-4 text-green-400" />}
                {player.trend === 'down' && <ChevronDown className="w-4 h-4 text-red-400" />}
                {player.trend === 'same' && <Minus className="w-4 h-4 text-gray-500" />}
              </div>
              <div className="col-span-2 flex justify-end items-center pr-2 sm:pr-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black text-lg">{player.elo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="p-4 bg-white/[0.02] flex justify-center">
          <button className="text-sm font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2">
            Carregar mais jogadores <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
