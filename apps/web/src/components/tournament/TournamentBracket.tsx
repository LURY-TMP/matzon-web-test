'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const av = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/men/44.jpg',
  'https://randomuser.me/api/portraits/men/55.jpg',
  'https://randomuser.me/api/portraits/men/62.jpg',
  'https://randomuser.me/api/portraits/men/71.jpg',
  'https://randomuser.me/api/portraits/men/83.jpg',
  'https://randomuser.me/api/portraits/men/91.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/men/36.jpg',
  'https://randomuser.me/api/portraits/men/48.jpg',
  'https://randomuser.me/api/portraits/men/57.jpg',
  'https://randomuser.me/api/portraits/men/68.jpg',
  'https://randomuser.me/api/portraits/men/77.jpg',
  'https://randomuser.me/api/portraits/men/88.jpg',
  'https://randomuser.me/api/portraits/men/12.jpg',
  'https://randomuser.me/api/portraits/men/19.jpg',
];

const rounds = [
  {
    label: 'Oitavas de Final', date: '10 MAR.',
    matches: [
      { w: { name: 'Faker', avatar: av[0] }, l: { name: 'ZywOo', avatar: av[1] }, sw: 3, sl: 1 },
      { w: { name: 'S1mple', avatar: av[2] }, l: { name: 'NiKo', avatar: av[3] }, sw: 3, sl: 2 },
      { w: { name: 'TenZ', avatar: av[4] }, l: { name: 'Shroud', avatar: av[5] }, sw: 3, sl: 0 },
      { w: { name: 'Kscerato', avatar: av[6] }, l: { name: 'Device', avatar: av[7] }, sw: 3, sl: 1 },
      { w: { name: 'Apex', avatar: av[9] }, l: { name: 'Mixer', avatar: av[8] }, sw: 3, sl: 1 },
      { w: { name: 'Rain', avatar: av[11] }, l: { name: 'Krimz', avatar: av[10] }, sw: 3, sl: 2 },
      { w: { name: 'Coldzera', avatar: av[12] }, l: { name: 'EliGE', avatar: av[13] }, sw: 3, sl: 0 },
      { w: { name: 'Twistzz', avatar: av[15] }, l: { name: 'Xantares', avatar: av[14] }, sw: 3, sl: 2 },
    ],
  },
  {
    label: 'Quartos de Final', date: '7 ABR.',
    matches: [
      { w: { name: 'Faker', avatar: av[0] }, l: { name: 'S1mple', avatar: av[2] }, sw: 3, sl: 2 },
      { w: { name: 'Kscerato', avatar: av[6] }, l: { name: 'TenZ', avatar: av[4] }, sw: 3, sl: 1 },
      { w: { name: 'Apex', avatar: av[9] }, l: { name: 'Rain', avatar: av[11] }, sw: 3, sl: 1 },
      { w: { name: 'Coldzera', avatar: av[12] }, l: { name: 'Twistzz', avatar: av[15] }, sw: 3, sl: 2 },
    ],
  },
  {
    label: 'Semifinais', date: '28 ABR.',
    matches: [
      { w: { name: 'Faker', avatar: av[0] }, l: { name: 'Kscerato', avatar: av[6] }, sw: 3, sl: 2 },
      { w: { name: 'Coldzera', avatar: av[12] }, l: { name: 'Apex', avatar: av[9] }, sw: 3, sl: 1 },
    ],
  },
  {
    label: 'Grande Final', date: '30 MAI.',
    matches: [
      { w: { name: 'Faker', avatar: av[0] }, l: { name: 'Coldzera', avatar: av[12] }, sw: 3, sl: 2 },
    ],
  },
];

function MatchCard({ m, delay = 0 }: { m: any; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: 'var(--bg-card)', minWidth: 180 }}
    >
      <div className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', backgroundColor: 'rgba(10,132,255,0.08)' }}>
        <img src={m.w.avatar} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
        <span className="text-[12px] font-bold flex-1 truncate" style={{ color: 'var(--text-primary)' }}>{m.w.name}</span>
        <span className="text-[12px] font-black flex-shrink-0" style={{ color: '#0A84FF' }}>{m.sw}</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-3">
        <img src={m.l.avatar} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
        <span className="text-[12px] flex-1 truncate" style={{ color: 'var(--text-tertiary)' }}>{m.l.name}</span>
        <span className="text-[12px] flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{m.sl}</span>
      </div>
    </motion.div>
  );
}

export function TournamentBracket() {
  const [current, setCurrent] = useState(0);
  const total = rounds.length;
  const round = rounds[current];

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Invitational MATZON 2026</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Fase Eliminatória</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ backgroundColor: 'rgba(255,214,10,0.12)', color: '#FFD60A' }}>
          <Trophy className="w-4 h-4" /> $50,000
        </div>
      </div>

      {/* Round Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {rounds.map((r, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              backgroundColor: current === i ? '#0A84FF' : 'var(--bg-card)',
              color: current === i ? '#fff' : 'var(--text-secondary)',
            }}>
            {r.label}
          </button>
        ))}
      </div>

      {/* Matches */}
      <AnimatePresence mode="wait">
        <motion.div key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{round.label}</p>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{round.date} · {round.matches.length} jogos</p>
            </div>
            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{current + 1} / {total}</span>
          </div>

          <div className="grid gap-3" style={{
            gridTemplateColumns: `repeat(${Math.min(round.matches.length, 4)}, minmax(180px, 1fr))`
          }}>
            {round.matches.map((m, i) => (
              <MatchCard key={i} m={m} delay={i * 0.05} />
            ))}
          </div>

          {/* Final winner */}
          {current === total - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mt-5 p-5 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,214,10,0.08)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,214,10,0.15)' }}>
                <Trophy className="w-6 h-6" style={{ color: '#FFD60A' }} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider mb-1" style={{ color: '#FFD60A' }}>Campeão</p>
                <div className="flex items-center gap-2">
                  <img src={av[0]} className="w-9 h-9 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
                  <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{ backgroundColor: 'var(--bg-card)', color: current === 0 ? 'var(--text-tertiary)' : 'var(--text-primary)', opacity: current === 0 ? 0.4 : 1 }}>
          <ChevronLeft className="w-4 h-4" /> Anterior
        </button>

        <div className="flex gap-2">
          {rounds.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{ width: current === i ? 20 : 6, height: 6, backgroundColor: current === i ? '#0A84FF' : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>

        <button onClick={() => setCurrent(Math.min(total - 1, current + 1))} disabled={current === total - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{ backgroundColor: 'var(--bg-card)', color: current === total - 1 ? 'var(--text-tertiary)' : 'var(--text-primary)', opacity: current === total - 1 ? 0.4 : 1 }}>
          Próximo <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
