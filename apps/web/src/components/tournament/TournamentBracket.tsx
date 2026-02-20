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

const C = 'rgba(255,255,255,0.18)';
const MW = 155;
const MH = 90;
const VGAP = 12;

function MatchCard({ p1, p2, s1, s2, label, date, delay = 0 }: any) {
  // winner always on top (p1)
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-xl overflow-hidden flex-shrink-0"
      style={{ width: MW, backgroundColor: 'var(--bg-card)' }}
    >
      {/* Winner — top */}
      <div className="flex items-center gap-2 px-2.5 py-2.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', backgroundColor: 'rgba(10,132,255,0.08)' }}>
        <img src={p1.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-bold truncate flex-1" style={{ color: 'var(--text-primary)' }}>{p1.name}</span>
        <span className="text-[11px] font-black flex-shrink-0" style={{ color: '#0A84FF' }}>{s1}</span>
      </div>
      {/* Loser — bottom */}
      <div className="flex items-center gap-2 px-2.5 py-2.5">
        <img src={p2.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-medium truncate flex-1" style={{ color: 'var(--text-tertiary)' }}>{p2.name}</span>
        <span className="text-[11px] font-bold flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{s2}</span>
      </div>
      {/* Label */}
      <div className="px-2.5 py-1 flex gap-1" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <span className="text-[8px] font-bold" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
        {date && <span className="text-[8px]" style={{ color: 'var(--text-tertiary)' }}>· {date}</span>}
      </div>
    </motion.div>
  );
}

// Draws vertical connector lines between pairs
function Connectors({ count, right }: { count: number; right?: boolean }) {
  const itemH = MH + VGAP;
  const pairs = Math.floor(count / 2);
  const totalH = count * itemH - VGAP;
  const lw = 24;

  return (
    <svg width={lw} height={totalH} style={{ flexShrink: 0, overflow: 'visible' }}>
      {Array.from({ length: pairs }).map((_, i) => {
        const y1 = i * 2 * itemH + MH / 2;
        const y2 = (i * 2 + 1) * itemH + MH / 2;
        const mid = (y1 + y2) / 2;
        return right ? (
          <g key={i}>
            <line x1={lw} y1={y1} x2={lw - 12} y2={y1} stroke={C} strokeWidth={1.5} />
            <line x1={lw - 12} y1={y1} x2={lw - 12} y2={y2} stroke={C} strokeWidth={1.5} />
            <line x1={lw} y1={y2} x2={lw - 12} y2={y2} stroke={C} strokeWidth={1.5} />
            <line x1={lw - 12} y1={mid} x2={0} y2={mid} stroke={C} strokeWidth={1.5} />
          </g>
        ) : (
          <g key={i}>
            <line x1={0} y1={y1} x2={12} y2={y1} stroke={C} strokeWidth={1.5} />
            <line x1={12} y1={y1} x2={12} y2={y2} stroke={C} strokeWidth={1.5} />
            <line x1={0} y1={y2} x2={12} y2={y2} stroke={C} strokeWidth={1.5} />
            <line x1={12} y1={mid} x2={lw} y2={mid} stroke={C} strokeWidth={1.5} />
          </g>
        );
      })}
    </svg>
  );
}

// Vertical offset for centering columns
function vOffset(prevCount: number) {
  return ((prevCount / 2 - 1) * (MH + VGAP)) / 2 + (MH + VGAP) / 4;
}

export function TournamentBracket() {
  const r1L = [
    { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'ZywOo', avatar: av[1] }, s1: 3, s2: 1, label: 'WPO1', date: '10 MAR.' },
    { p1: { name: 'S1mple', avatar: av[2] }, p2: { name: 'NiKo', avatar: av[3] }, s1: 3, s2: 2, label: 'WPO2', date: '10 MAR.' },
    { p1: { name: 'TenZ', avatar: av[4] }, p2: { name: 'Shroud', avatar: av[5] }, s1: 3, s2: 0, label: 'WPO3', date: '10 MAR.' },
    { p1: { name: 'Kscerato', avatar: av[6] }, p2: { name: 'Device', avatar: av[7] }, s1: 3, s2: 1, label: 'WPO4', date: '10 MAR.' },
  ];
  const r2L = [
    { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'S1mple', avatar: av[2] }, s1: 3, s2: 2, label: 'QF1', date: '7 ABR.' },
    { p1: { name: 'Kscerato', avatar: av[6] }, p2: { name: 'TenZ', avatar: av[4] }, s1: 3, s2: 1, label: 'QF2', date: '7 ABR.' },
  ];
  const sfL = [
    { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'Kscerato', avatar: av[6] }, s1: 3, s2: 2, label: 'SF1', date: '28 ABR.' },
  ];

  const r1R = [
    { p1: { name: 'Apex', avatar: av[9] }, p2: { name: 'Mixer', avatar: av[8] }, s1: 3, s2: 1, label: 'WPO5', date: '10 MAR.' },
    { p1: { name: 'Rain', avatar: av[11] }, p2: { name: 'Krimz', avatar: av[10] }, s1: 3, s2: 2, label: 'WPO6', date: '10 MAR.' },
    { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'EliGE', avatar: av[13] }, s1: 3, s2: 0, label: 'WPO7', date: '10 MAR.' },
    { p1: { name: 'Twistzz', avatar: av[15] }, p2: { name: 'Xantares', avatar: av[14] }, s1: 3, s2: 2, label: 'WPO8', date: '10 MAR.' },
  ];
  const r2R = [
    { p1: { name: 'Apex', avatar: av[9] }, p2: { name: 'Rain', avatar: av[11] }, s1: 3, s2: 1, label: 'QF3', date: '7 ABR.' },
    { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'Twistzz', avatar: av[15] }, s1: 3, s2: 2, label: 'QF4', date: '7 ABR.' },
  ];
  const sfR = [
    { p1: { name: 'Coldzera', avatar: av[12] }, p2: { name: 'Apex', avatar: av[9] }, s1: 3, s2: 1, label: 'SF2', date: '28 ABR.' },
  ];

  const final = { p1: { name: 'Faker', avatar: av[0] }, p2: { name: 'Coldzera', avatar: av[12] }, s1: 3, s2: 2, label: 'FINAL', date: '30 MAI.' };

  const off2 = vOffset(4);
  const off3 = vOffset(2) + off2;

  const roundLabels = ['Oitavas', 'Quartos', 'Semi', 'Final', 'Semi', 'Quartos', 'Oitavas'];

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">
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

      <div className="overflow-x-auto pb-4">
        <div style={{ minWidth: 900 }}>

          {/* Round Labels */}
          <div className="flex items-center mb-3" style={{ gap: 0 }}>
            {roundLabels.map((l, i) => {
              const w = i === 3 ? MW + 16 : MW + 24;
              return (
                <div key={i} className="text-center text-[9px] font-black uppercase tracking-widest flex-shrink-0"
                  style={{ width: w, color: i === 3 ? '#0A84FF' : 'var(--text-tertiary)' }}>
                  {l}
                </div>
              );
            })}
          </div>

          {/* Bracket */}
          <div className="flex items-start" style={{ gap: 0 }}>

            {/* LEFT R1 */}
            <div className="flex flex-col" style={{ gap: VGAP }}>
              {r1L.map((m, i) => <MatchCard key={i} {...m} delay={i * 0.04} />)}
            </div>
            <Connectors count={4} />

            {/* LEFT R2 */}
            <div className="flex flex-col" style={{ gap: VGAP, marginTop: off2 }}>
              {r2L.map((m, i) => <MatchCard key={i} {...m} delay={0.15 + i * 0.04} />)}
            </div>
            <Connectors count={2} />

            {/* LEFT SF */}
            <div style={{ marginTop: off3 }}>
              {sfL.map((m, i) => <MatchCard key={i} {...m} delay={0.28} />)}
            </div>

            {/* SF → FINAL connector left */}
            <svg width={24} height={MH} style={{ flexShrink: 0, marginTop: off3 }}>
              <line x1={0} y1={MH / 2} x2={24} y2={MH / 2} stroke={C} strokeWidth={1.5} />
            </svg>

            {/* CENTER FINAL */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ marginTop: off3 - MH / 2 }}>
              <MatchCard {...final} delay={0.38} />
              <div style={{ width: 1.5, height: 20, backgroundColor: C, margin: '4px auto' }} />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 }}
                className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,214,10,0.08)', width: MW }}
              >
                <Trophy className="w-5 h-5" style={{ color: '#FFD60A' }} />
                <img src={av[0]} className="w-9 h-9 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
                <span className="text-[10px] font-black" style={{ color: '#FFD60A' }}>CAMPEÃO</span>
                <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
              </motion.div>
            </div>

            {/* SF → FINAL connector right */}
            <svg width={24} height={MH} style={{ flexShrink: 0, marginTop: off3 }}>
              <line x1={0} y1={MH / 2} x2={24} y2={MH / 2} stroke={C} strokeWidth={1.5} />
            </svg>

            {/* RIGHT SF */}
            <div style={{ marginTop: off3 }}>
              {sfR.map((m, i) => <MatchCard key={i} {...m} delay={0.28} />)}
            </div>

            {/* RIGHT R2 connectors (mirrored) */}
            <Connectors count={2} right />

            {/* RIGHT R2 */}
            <div className="flex flex-col" style={{ gap: VGAP, marginTop: off2 }}>
              {r2R.map((m, i) => <MatchCard key={i} {...m} delay={0.15 + i * 0.04} />)}
            </div>

            {/* RIGHT R1 connectors (mirrored) */}
            <Connectors count={4} right />

            {/* RIGHT R1 */}
            <div className="flex flex-col" style={{ gap: VGAP }}>
              {r1R.map((m, i) => <MatchCard key={i} {...m} delay={i * 0.04} />)}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
