'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Medal, History, Swords } from 'lucide-react';

const playerData = {
  name: 'John Doe', tag: '#MZ1', level: 84, tier: 'Elite',
  elo: 3450, winrate: '68%', matches: 1240, kda: '2.4',
  recentForm: ['W', 'W', 'L', 'W', 'W'],
};

const formColors = {
  W: { bg: 'rgba(48,209,88,0.12)', color: '#30D158', label: 'V' },
  L: { bg: 'rgba(255,69,58,0.12)', color: '#FF453A', label: 'D' },
};

export function PlayerCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-3xl overflow-hidden"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="h-24 w-full relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 60%)' }} />
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', color: 'var(--text-primary)' }}>
          <Target className="w-3 h-3" style={{ color: '#0A84FF' }} /> Lv. {playerData.level}
        </div>
      </div>

      <div className="px-5 pb-5 mt-[-28px] relative">
        <div className="flex justify-between items-end mb-4">
          <div className="relative">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
              style={{ border: '3px solid var(--bg-card)', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }} />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full"
              style={{ backgroundColor: '#30D158', border: '2px solid var(--bg-card)' }} />
          </div>
          <button className="p-2 rounded-xl" style={{ backgroundColor: 'var(--bg-card-hover)' }}>
            <Swords className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
          </button>
        </div>

        <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{playerData.name}</h3>
        <p className="text-xs mb-4" style={{ color: 'var(--text-tertiary)' }}>{playerData.tag}</p>

        <div className="flex items-center gap-3 p-3 rounded-2xl mb-4" style={{ backgroundColor: 'rgba(10,132,255,0.08)' }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(10,132,255,0.15)' }}>
            <Trophy className="w-4 h-4" style={{ color: '#0A84FF' }} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-tertiary)' }}>Tier Atual</p>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{playerData.tier}</span>
              <span className="text-sm font-black" style={{ color: '#0A84FF' }}>{playerData.elo} ELO</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: TrendingUp, label: 'Winrate', value: playerData.winrate },
            { icon: Target, label: 'KDA', value: playerData.kda },
            { icon: Medal, label: 'Partidas', value: playerData.matches },
          ].map((stat) => (
            <div key={stat.label} className="p-3 rounded-2xl flex flex-col items-center gap-1" style={{ backgroundColor: 'var(--bg-card-hover)' }}>
              <stat.icon className="w-3.5 h-3.5" style={{ color: 'var(--text-tertiary)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</span>
              <span className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
              <History className="w-3.5 h-3.5" /> Últimas 5
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-tertiary)' }}>
              Ranqueado
            </span>
          </div>
          <div className="flex gap-2">
            {playerData.recentForm.map((r, i) => {
              const f = formColors[r as 'W' | 'L'];
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex-1 h-10 rounded-xl flex flex-col items-center justify-center"
                  style={{ backgroundColor: f.bg }}
                >
                  <span className="text-[11px] font-black" style={{ color: f.color }}>{f.label}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="flex gap-2 mt-1.5">
            {playerData.recentForm.map((r, i) => (
              <div key={i} className="flex-1 text-center">
                <span className="text-[8px]" style={{ color: 'var(--text-tertiary)' }}>{r === 'W' ? '+18' : '-15'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
