'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Swords, Target, TrendingUp, Medal, History } from 'lucide-react';

const playerData = {
  name: 'John Doe',
  tag: '#MZ1',
  level: 84,
  tier: 'Elite',
  elo: 3450,
  winrate: '68%',
  matches: 1240,
  kda: '2.4',
  recentForm: ['W', 'W', 'L', 'W', 'W'],
};

export function PlayerCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl border border-[#19222D] rounded-[30px] overflow-hidden shadow-2xl relative group"
    >
      <div className="h-32 w-full relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1">
          <Target className="w-3 h-3 text-cyan-400" />
          <span className="text-white text-xs font-black">Lv. {playerData.level}</span>
        </div>
      </div>
      <div className="absolute top-20 left-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-[20px] bg-gradient-to-tr from-blue-600 to-purple-600 border-4 border-[#0a0a0a] flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Player" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-[#0a0a0a] rounded-full" />
        </div>
      </div>
      <div className="pt-12 pb-6 px-6">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black text-white leading-none">{playerData.name}</h3>
            <p className="text-white/40 text-sm font-bold mt-1">{playerData.tag}</p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border border-white/10 transition-colors">
            <Swords className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 p-4 rounded-2xl mb-6">
          <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Trophy className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Tier Atual</p>
            <div className="flex items-baseline gap-2">
              <span className="text-white font-black text-xl">{playerData.tier}</span>
              <span className="text-cyan-400 font-black text-sm">{playerData.elo} ELO</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white/40 mb-1" />
            <span className="text-white font-black text-lg">{playerData.winrate}</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Winrate</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center">
            <Target className="w-4 h-4 text-white/40 mb-1" />
            <span className="text-white font-black text-lg">{playerData.kda}</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">KDA Ratio</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center">
            <Medal className="w-4 h-4 text-white/40 mb-1" />
            <span className="text-white font-black text-lg">{playerData.matches}</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Partidas</span>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/50 text-xs font-bold uppercase flex items-center gap-1">
              <History className="w-3 h-3" /> Últimas 5
            </span>
            <span className="text-white/40 text-xs font-bold">Modo Ranqueado</span>
          </div>
          <div className="flex gap-2 w-full justify-between">
            {playerData.recentForm.map((result, index) => (
              <div key={index} className={`flex-1 h-8 rounded-lg flex items-center justify-center font-black text-xs ${result === 'W' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                {result}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
