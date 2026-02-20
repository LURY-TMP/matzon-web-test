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

const LINE = 'rgba(255,255,255,0.18)';
const MW = 145;
const MH = 86;
const GAP = 48;
const IH = MH + GAP;
const CW = 32;

// X positions
const X0 = 0;
const X1 = X0 + MW + CW;
const X2 = X1 + MW + CW;
const X3 = X2 + MW + CW; // FINAL center
const X4 = X3 + MW + CW; // SF right
const X5 = X4 + MW + CW; // R2 right
const X6 = X5 + MW + CW; // R1 right
const TW = X6 + MW;

// Y positions — R1: 4 matches, R2: 2 matches, SF: 1 match
const R1Y = [0, IH, IH * 2, IH * 3];
const R2Y = [IH / 2, IH * 2 + IH / 2];
const SFY = IH + IH / 2;
const FY = SFY;
const CHAMPION_Y = FY - 150;

const mc = (y: number) => y + MH / 2;

function MatchCard({ winner, loser, sw, sl, label, date, x, y, delay = 0, isFinal = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="absolute rounded-xl overflow-hidden"
      style={{ width: MW, top: y, left: x, backgroundColor: 'var(--bg-card)' }}
    >
      <div className="flex items-center gap-2 px-3 py-2.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', backgroundColor: 'rgba(10,132,255,0.09)' }}>
        <img src={winner.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-bold truncate flex-1" style={{ color: 'var(--text-primary)' }}>{winner.name}</span>
        <span className="text-[11px] font-black flex-shrink-0" style={{ color: '#0A84FF' }}>{sw}</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2.5">
        <img src={loser.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] truncate flex-1" style={{ color: 'var(--text-tertiary)' }}>{loser.name}</span>
        <span className="text-[11px] flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>{sl}</span>
      </div>
      <div className="px-3 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <span className="text-[8px] font-bold" style={{ color: 'var(--text-tertiary)' }}>
          {label}{date ? ` · ${date}` : ''}
          {isFinal && <span className="ml-1 px-1.5 py-0.5 rounded-full text-[8px]" style={{ backgroundColor: 'rgba(10,132,255,0.2)', color: '#0A84FF' }}> FINAL</span>}
        </span>
      </div>
    </motion.div>
  );
}

export function TournamentBracket() {
  const TOTAL_H = IH * 4;

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

      {/* Round labels */}
            <div className="flex mb-3" style={{ minWidth: TW, gap: 0 }}>
        {[
          { label: 'Oitavas', w: MW + CW },
          { label: 'Quartos', w: MW + CW },
          { label: 'Semi', w: MW + CW },
          { label: 'Final', w: MW + CW },
          { label: 'Semi', w: MW + CW },
          { label: 'Quartos', w: MW + CW },
          { label: 'Oitavas', w: MW },
        ].map((r, i) => (
          <div key={i} className="text-[9px] font-black uppercase tracking-widest text-center flex-shrink-0"
            style={{ width: r.w, color: i === 3 ? '#0A84FF' : 'var(--text-tertiary)' }}>
            {r.label}
          </div>
        ))}
      </div>
    </section>
  );
}
