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
    label: 'Oitavas de Final',
    date: '10 MAR.',
    matches: [
      { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'ZywOo', avatar: av[1] }, winner: 0 },
      { p1: { name: 'S1mple', avatar: av[2] }, p2: { name: 'NiKo', avatar: av[3] }, winner: 0 },
      { p1: { name: 'TenZ', avatar: av[4] }, p2: { name: 'Shroud', avatar: av[5] }, winner: 0 },
      { p1: { name: 'Kscerato', avatar: av[6] }, p2: { name: 'Device', avatar: av[7] }, winner: 0 },
      { p1: { name: 'Mixer', avatar: av[8] }, p2: { name: 'Apex', avatar: av[9] }, winner: 1 },
      { p1: { name: 'Krimz', avatar: av[10] }, p2: { name: 'Rain', avatar: av[11] }, winner: 1 },
      { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'EliGE', avatar: av[13] }, winner: 0 },
      { p1: { name: 'Xantares', avatar: av[14] }, p2: { name: 'Twistzz', avatar: av[15] }, winner: 1 },
    ],
  },
  {
    label: 'Quartos de Final',
    date: '7 ABR.',
    matches: [
      { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'S1mple', avatar: av[2] }, winner: 0 },
      { p1: { name: 'TenZ', avatar: av[4] }, p2: { name: 'Kscerato', avatar: av[6] }, winner: 1 },
      { p1: { name: 'Apex', avatar: av[9] }, p2: { name: 'Rain', avatar: av[11] }, winner: 0 },
      { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'Twistzz', avatar: av[15] }, winner: 0 },
    ],
  },
  {
    label: 'Semifinais',
    date: '28 ABR.',
    matches: [
      { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'Kscerato', avatar: av[6] }, winner: 0 },
      { p1: { name: 'Apex', avatar: av[9] }, p2: { name: 'Coldzera', avatar: av[12] }, winner: 1 },
    ],
  },
  {
    label: 'Grande Final',
    date: '30 MAI.',
    matches: [
      { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'Coldzera', avatar: av[12] }, winner: 0 },
    ],
  },
];

function MatchCard({ match, delay = 0 }: { match: any; delay?: number }) {
  const players = [match.p1, match.p2];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-2xl overflow-hidden flex-shrink-0"
      style={{ width: 170, backgroundColor: 'var(--bg-card)' }}
    >
      {players.map((p, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3 py-2.5"
          style={{
            borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            backgroundColor: match.winner === i ? 'rgba(10,132,255,0.08)' : 'transparent',
          }}
        >
          {match.winner === i && (
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#0A84FF' }} />
          )}
          <img src={p.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
          <span
            className="text-[11px] font-semibold truncate flex-1"
            style={{ color: match.winner === i ? 'var(--text-primary)' : 'var(--text-tertiary)' }}
          >
            {p.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export function TournamentBracket() {
  const [current, setCurrent] = useState(0);
  const total = rounds.length;

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
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
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              backgroundColor: current === i ? '#0A84FF' : 'var(--bg-card)',
              color: current === i ? '#fff' : 'var(--text-secondary)',
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Round Label */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{rounds[current].label}</p>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{rounds[current].date}</p>
              </div>
              <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {current + 1} / {total}
              </div>
            </div>

            {/* Matches Grid */}
            <div className="flex flex-wrap gap-3">
              {rounds[current].matches.map((match, i) => (
                <MatchCard key={i} match={match} delay={i * 0.05} />
              ))}
            </div>

            {/* Final Winner */}
            {current === total - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 mt-6 p-5 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,214,10,0.08)' }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,214,10,0.15)' }}>
                  <Trophy className="w-6 h-6" style={{ color: '#FFD60A' }} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: '#FFD60A' }}>Campeão</p>
                  <div className="flex items-center gap-2">
                    <img src={av[0]} className="w-8 h-8 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
                    <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: current === 0 ? 'var(--bg-card)' : 'var(--bg-card)',
              color: current === 0 ? 'var(--text-tertiary)' : 'var(--text-primary)',
              opacity: current === 0 ? 0.4 : 1,
            }}
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {rounds.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all"
                style={{
                  width: current === i ? 20 : 6,
                  height: 6,
                  backgroundColor: current === i ? '#0A84FF' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent(Math.min(total - 1, current + 1))}
            disabled={current === total - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: 'var(--bg-card)',
              color: current === total - 1 ? 'var(--text-tertiary)' : 'var(--text-primary)',
              opacity: current === total - 1 ? 0.4 : 1,
            }}
          >
            Próximo <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
