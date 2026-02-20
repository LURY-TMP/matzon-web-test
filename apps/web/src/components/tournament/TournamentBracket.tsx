'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const avatars = [
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

const LINE = 'rgba(255,255,255,0.15)';
const BOX_W = 160;
const BOX_H = 80;
const GAP = 12;

function MatchBox({ left, right, label, date, isFinal = false, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{ width: BOX_W, backgroundColor: 'var(--bg-card)' }}
    >
      {/* Player 1 */}
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
        <img src={left.avatar} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-semibold truncate flex-1" style={{ color: 'var(--text-primary)' }}>{left.code}</span>
      </div>
      {/* Player 2 */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <img src={right.avatar} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-semibold truncate flex-1" style={{ color: 'var(--text-primary)' }}>{right.code}</span>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-center gap-1 px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <span className="text-[9px] font-bold" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
        {date && <span className="text-[9px]" style={{ color: 'var(--text-tertiary)' }}>· {date}</span>}
        {isFinal && <span className="ml-1 px-1.5 py-0.5 rounded-full text-[8px] font-black" style={{ backgroundColor: 'rgba(10,132,255,0.2)', color: '#0A84FF' }}>Final</span>}
      </div>
    </motion.div>
  );
}

export function TournamentBracket() {
  const CONNECTOR = LINE;

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Invitational MATZON 2026</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Fase Eliminatória</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(255,214,10,0.12)', color: '#FFD60A' }}>
          <Trophy className="w-4 h-4" /> $50,000
        </div>
      </div>

      <div className="overflow-x-auto pb-6">
        <div className="flex flex-col items-center" style={{ minWidth: 600 }}>

          {/* ── ROUND 1: 4 matches ── */}
          <div className="flex justify-center" style={{ gap: GAP * 4 }}>
            {[
              { label: 'WPO1', date: '10 MAR.', l: avatars[0], r: avatars[1], lc: 'Faker', rc: 'ZywOo' },
              { label: 'WPO2', date: '10 MAR.', l: avatars[2], r: avatars[3], lc: 'S1mple', rc: 'NiKo' },
              { label: 'WPO3', date: '10 MAR.', l: avatars[4], r: avatars[5], lc: 'TenZ', rc: 'Shroud' },
              { label: 'WPO4', date: '10 MAR.', l: avatars[6], r: avatars[7], lc: 'Kscerato', rc: 'Device' },
            ].map((m, i) => (
              <MatchBox key={i} delay={i * 0.05} label={m.label} date={m.date}
                left={{ code: m.lc, avatar: m.l }} right={{ code: m.rc, avatar: m.r }} />
            ))}
          </div>

          {/* Connectors R1 → R2 */}
          <svg width="740" height="40" style={{ overflow: 'visible', display: 'block' }}>
            {/* Left pair: match 0 and 1 → midpoint */}
            <line x1="80" y1="0" x2="80" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="80" y1="20" x2="252" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="252" y1="0" x2="252" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="166" y1="20" x2="166" y2="40" stroke={CONNECTOR} strokeWidth="1.5" />
            {/* Right pair: match 2 and 3 → midpoint */}
            <line x1="488" y1="0" x2="488" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="488" y1="20" x2="660" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="660" y1="0" x2="660" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="574" y1="20" x2="574" y2="40" stroke={CONNECTOR} strokeWidth="1.5" />
          </svg>

          {/* ── ROUND 2: 2 matches ── */}
          <div className="flex justify-center" style={{ gap: 220 }}>
            {[
              { label: 'WOF1', date: '7 ABR.', l: avatars[8], r: avatars[9], lc: 'WOF1', rc: 'WOF2' },
              { label: 'WOF2', date: '7 ABR.', l: avatars[10], r: avatars[11], lc: 'WOF3', rc: 'WOF4' },
            ].map((m, i) => (
              <MatchBox key={i} delay={0.2 + i * 0.05} label={m.label} date={m.date}
                left={{ code: m.lc, avatar: m.l }} right={{ code: m.rc, avatar: m.r }} />
            ))}
          </div>

          {/* Connectors R2 → R3 */}
          <svg width="400" height="40" style={{ overflow: 'visible', display: 'block' }}>
            <line x1="80" y1="0" x2="80" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="80" y1="20" x2="320" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="320" y1="0" x2="320" y2="20" stroke={CONNECTOR} strokeWidth="1.5" />
            <line x1="200" y1="20" x2="200" y2="40" stroke={CONNECTOR} strokeWidth="1.5" />
          </svg>

          {/* ── ROUND 3: QF ── */}
          <MatchBox delay={0.35} label="WQF1" date="28 ABR."
            left={{ code: 'WQF1', avatar: avatars[12] }} right={{ code: 'WQF2', avatar: avatars[13] }} />

          {/* Connector R3 → SF */}
          <svg width="2" height="32" style={{ display: 'block' }}>
            <line x1="1" y1="0" x2="1" y2="32" stroke={CONNECTOR} strokeWidth="1.5" />
          </svg>

          {/* ── SEMIFINAL ── */}
          <MatchBox delay={0.45} label="WSF" date="30 MAI." isFinal={true}
            left={{ code: 'WSF1', avatar: avatars[14] }} right={{ code: 'WSF2', avatar: avatars[15] }} />

          {/* Connector SF → Champion */}
          <svg width="2" height="32" style={{ display: 'block' }}>
            <line x1="1" y1="0" x2="1" y2="32" stroke={CONNECTOR} strokeWidth="1.5" />
          </svg>

          {/* ── CAMPEÃO ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl"
            style={{ backgroundColor: 'rgba(255,214,10,0.08)' }}
          >
            <Trophy className="w-7 h-7" style={{ color: '#FFD60A' }} />
            <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: '#FFD60A' }}>Campeão</span>
            <img src={avatars[0]} className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
            <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
