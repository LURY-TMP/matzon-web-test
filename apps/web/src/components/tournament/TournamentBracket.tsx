'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

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

const C = 'rgba(255,255,255,0.15)';
const MW = 150;
const MH = 76;
const VGAP = 16;

function MatchCard({ p1, p2, w, label, date, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-xl overflow-hidden flex-shrink-0"
      style={{ width: MW, backgroundColor: 'var(--bg-card)' }}
    >
      {[p1, p2].map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 px-2.5 py-2"
          style={{
            borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            backgroundColor: w === i ? 'rgba(10,132,255,0.08)' : 'transparent',
          }}>
          <img src={p.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
          <span className="text-[10px] font-semibold truncate flex-1"
            style={{ color: w === i ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
            {p.name}
          </span>
          {w === i && <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#0A84FF' }} />}
        </div>
      ))}
      <div className="px-2.5 py-1 flex gap-1 items-center" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <span className="text-[8px] font-bold" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
        {date && <span className="text-[8px]" style={{ color: 'var(--text-tertiary)' }}>· {date}</span>}
      </div>
    </motion.div>
  );
}

// Coluna de matches com linhas de ligação
function BracketColumn({ matches, connectors = true, delay = 0 }: any) {
  const count = matches.length;
  const itemH = MH + VGAP;
  const totalH = count * itemH - VGAP;

  return (
    <div className="relative flex-shrink-0" style={{ width: MW + (connectors ? 32 : 0) }}>
      {/* Matches */}
      <div className="flex flex-col" style={{ gap: VGAP }}>
        {matches.map((m: any, i: number) => (
          <MatchCard key={i} {...m} delay={delay + i * 0.05} />
        ))}
      </div>

      {/* Connector lines to right */}
      {connectors && (
        <svg
          className="absolute top-0 right-0"
          width={32}
          height={totalH}
          style={{ overflow: 'visible' }}
        >
          {Array.from({ length: Math.floor(count / 2) }).map((_, i) => {
            const top1 = i * 2 * itemH + MH / 2;
            const top2 = (i * 2 + 1) * itemH + MH / 2;
            const mid = (top1 + top2) / 2;
            return (
              <g key={i}>
                <line x1={0} y1={top1} x2={20} y2={top1} stroke={C} strokeWidth={1.5} />
                <line x1={20} y1={top1} x2={20} y2={top2} stroke={C} strokeWidth={1.5} />
                <line x1={0} y1={top2} x2={20} y2={top2} stroke={C} strokeWidth={1.5} />
                <line x1={20} y1={mid} x2={32} y2={mid} stroke={C} strokeWidth={1.5} />
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}

export function TournamentBracket() {
  const r1top = [
    { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'ZywOo', avatar: av[1] }, w: 0, label: 'WPO1', date: '10 MAR.' },
    { p1: { name: 'S1mple', avatar: av[2] }, p2: { name: 'NiKo', avatar: av[3] }, w: 0, label: 'WPO2', date: '10 MAR.' },
    { p1: { name: 'TenZ', avatar: av[4] }, p2: { name: 'Shroud', avatar: av[5] }, w: 0, label: 'WPO3', date: '10 MAR.' },
    { p1: { name: 'Kscerato', avatar: av[6] }, p2: { name: 'Device', avatar: av[7] }, w: 0, label: 'WPO4', date: '10 MAR.' },
  ];
  const r2top = [
    { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'S1mple', avatar: av[2] }, w: 0, label: 'QF1', date: '7 ABR.' },
    { p1: { name: 'TenZ', avatar: av[4] }, p2: { name: 'Kscerato', avatar: av[6] }, w: 1, label: 'QF2', date: '7 ABR.' },
  ];
  const sf_top = [
    { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'Kscerato', avatar: av[6] }, w: 0, label: 'SF1', date: '28 ABR.' },
  ];

  const r1bot = [
    { p1: { name: 'Mixer', avatar: av[8] }, p2: { name: 'Apex', avatar: av[9] }, w: 1, label: 'WPO5', date: '10 MAR.' },
    { p1: { name: 'Krimz', avatar: av[10] }, p2: { name: 'Rain', avatar: av[11] }, w: 1, label: 'WPO6', date: '10 MAR.' },
    { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'EliGE', avatar: av[13] }, w: 0, label: 'WPO7', date: '10 MAR.' },
    { p1: { name: 'Xantares', avatar: av[14] }, p2: { name: 'Twistzz', avatar: av[15] }, w: 1, label: 'WPO8', date: '10 MAR.' },
  ];
  const r2bot = [
    { p1: { name: 'Apex', avatar: av[9] }, p2: { name: 'Rain', avatar: av[11] }, w: 0, label: 'QF3', date: '7 ABR.' },
    { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'Twistzz', avatar: av[15] }, w: 0, label: 'QF4', date: '7 ABR.' },
  ];
  const sf_bot = [
    { p1: { name: 'Apex', avatar: av[9] }, p2: { name: 'Coldzera', avatar: av[12] }, w: 1, label: 'SF2', date: '28 ABR.' },
  ];

  const final = { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'Coldzera', avatar: av[12] }, w: 0, label: 'FINAL', date: '30 MAI.' };

  const topH = r1top.length * (MH + VGAP) - VGAP;
  const botH = r1bot.length * (MH + VGAP) - VGAP;
  const totalH = topH + botH + MH + 80;

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">
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

      <div className="overflow-x-auto pb-4">
        <div className="relative" style={{ minWidth: 700 }}>

          {/* Round labels */}
          <div className="flex mb-4" style={{ gap: 0 }}>
            {['Oitavas', 'Quartos', 'Semifinais', 'Final', 'Semifinais', 'Quartos', 'Oitavas'].map((l, i) => (
              <div key={i} className="text-center text-[10px] font-black uppercase tracking-wider"
                style={{ width: i === 3 ? MW + 16 : MW + 32, color: 'var(--text-tertiary)', flexShrink: 0 }}>
                {l}
              </div>
            ))}
          </div>

          <div className="flex items-center" style={{ gap: 0 }}>

            {/* TOP LEFT: R1 */}
            <div className="flex flex-col" style={{ gap: VGAP }}>
              <BracketColumn matches={r1top} connectors={true} delay={0} />
            </div>

            {/* TOP LEFT: R2 */}
            <div style={{ marginTop: (MH + VGAP) / 2 }}>
              <BracketColumn matches={r2top} connectors={true} delay={0.1} />
            </div>

            {/* TOP LEFT: SF */}
            <div style={{ marginTop: (MH + VGAP) * 1.5 }}>
              <BracketColumn matches={sf_top} connectors={true} delay={0.2} />
            </div>

            {/* CENTER: FINAL */}
            <div style={{ marginTop: (MH + VGAP) * 3.5 - MH }}>
              <div className="flex flex-col items-center" style={{ width: MW + 16 }}>
                <MatchCard {...final} delay={0.35} />
                <div style={{ width: 1.5, height: 20, backgroundColor: C, margin: '0 auto' }} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl"
                  style={{ backgroundColor: 'rgba(255,214,10,0.08)' }}
                >
                  <Trophy className="w-5 h-5" style={{ color: '#FFD60A' }} />
                  <img src={av[0]} className="w-9 h-9 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
                  <span className="text-[10px] font-black" style={{ color: '#FFD60A' }}>Faker</span>
                </motion.div>
              </div>
            </div>

            {/* TOP RIGHT: SF */}
            <div style={{ marginTop: (MH + VGAP) * 1.5 }}>
              <BracketColumn matches={sf_bot} connectors={true} delay={0.2} />
            </div>

            {/* TOP RIGHT: R2 */}
            <div style={{ marginTop: (MH + VGAP) / 2 }}>
              <BracketColumn matches={r2bot} connectors={true} delay={0.1} />
            </div>

            {/* TOP RIGHT: R1 */}
            <div>
              <BracketColumn matches={r1bot} connectors={false} delay={0} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
