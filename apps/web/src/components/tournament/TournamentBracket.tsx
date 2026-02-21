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
const CHAMPION_Y = FY - 175;

const mc = (y: number) => y + MH / 2;

function MatchCard({ winner, loser, sw, sl, label, date, x, y, delay = 0, isFinal = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="absolute rounded-xl overflow-hidden"
      style={{ width: MW, top: y, left: x, backgroundColor: 'rgba(255,255,255,0.04)' }}
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

      <div className="overflow-x-auto pb-4 max-w-full">
        {/* Round labels */}
        <div className="flex mb-3 flex-shrink-0" style={{ width: TW }}>
          {([
            { label: 'Oitavas', w: MW + CW },
            { label: 'Quartos', w: MW + CW },
            { label: 'Semi', w: MW + CW },
            { label: 'Final', w: MW + CW },
            { label: 'Semi', w: MW + CW },
            { label: 'Quartos', w: MW + CW },
            { label: 'Oitavas', w: MW },
          ] as {label: string, w: number}[]).map((r, i) => (
            <div key={i} className="text-[9px] font-black uppercase tracking-widest text-center flex-shrink-0"
              style={{ width: r.w, color: i === 3 ? '#0A84FF' : 'var(--text-tertiary)' }}>
              {r.label}
            </div>
          ))}
        </div>
        <div className="relative" style={{ width: TW, height: TOTAL_H + 60 }}>

          {/* ── SVG LINES ── */}
          <svg className="absolute inset-0" width={TW} height={TOTAL_H + 60} style={{ pointerEvents: 'none', overflow: 'visible' }}>

            {/* LEFT: R1 → R2 (pair 0-1) */}
            <line x1={X0+MW} y1={mc(R1Y[0])} x2={X0+MW+CW/2} y2={mc(R1Y[0])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X0+MW+CW/2} y1={mc(R1Y[0])} x2={X0+MW+CW/2} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X0+MW} y1={mc(R1Y[1])} x2={X0+MW+CW/2} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X0+MW+CW/2} y1={(mc(R1Y[0])+mc(R1Y[1]))/2} x2={X1} y2={(mc(R1Y[0])+mc(R1Y[1]))/2} stroke={LINE} strokeWidth={1.5}/>

            {/* LEFT: R1 → R2 (pair 2-3) */}
            <line x1={X0+MW} y1={mc(R1Y[2])} x2={X0+MW+CW/2} y2={mc(R1Y[2])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X0+MW+CW/2} y1={mc(R1Y[2])} x2={X0+MW+CW/2} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X0+MW} y1={mc(R1Y[3])} x2={X0+MW+CW/2} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X0+MW+CW/2} y1={(mc(R1Y[2])+mc(R1Y[3]))/2} x2={X1} y2={(mc(R1Y[2])+mc(R1Y[3]))/2} stroke={LINE} strokeWidth={1.5}/>

            {/* LEFT: R2 → SF */}
            <line x1={X1+MW} y1={mc(R2Y[0])} x2={X1+MW+CW/2} y2={mc(R2Y[0])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X1+MW+CW/2} y1={mc(R2Y[0])} x2={X1+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X1+MW} y1={mc(R2Y[1])} x2={X1+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X1+MW+CW/2} y1={mc(SFY)} x2={X2} y2={mc(SFY)} stroke={LINE} strokeWidth={1.5}/>

            {/* Champion → Final line */}
            <line x1={X3+MW/2} y1={CHAMPION_Y + 110} x2={X3+MW/2} y2={FY} stroke={LINE} strokeWidth={1.5}/>

            {/* LEFT: SF → FINAL */}
            <line x1={X2+MW} y1={mc(SFY)} x2={X3} y2={mc(FY)} stroke={LINE} strokeWidth={1.5}/>

            <line x1={X3+MW} y1={mc(FY)} x2={X4} y2={mc(SFY)} stroke={LINE} strokeWidth={1.5}/>

            {/* RIGHT: R2 → SF */}
            <line x1={X4+MW} y1={mc(SFY)} x2={X4+MW+CW/2} y2={mc(SFY)} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X4+MW+CW/2} y1={mc(R2Y[0])} x2={X4+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X4+MW+CW/2} y1={mc(R2Y[0])} x2={X5} y2={mc(R2Y[0])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X4+MW+CW/2} y1={mc(R2Y[1])} x2={X5} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/>

            {/* RIGHT: R1 → R2 (pair 0-1) */}
            <line x1={X5+MW} y1={mc(R2Y[0])} x2={X5+MW+CW/2} y2={mc(R2Y[0])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X5+MW+CW/2} y1={mc(R1Y[0])} x2={X5+MW+CW/2} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X5+MW+CW/2} y1={mc(R1Y[0])} x2={X6} y2={mc(R1Y[0])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X5+MW+CW/2} y1={mc(R1Y[1])} x2={X6} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/>

            {/* RIGHT: R1 → R2 (pair 2-3) */}
            <line x1={X5+MW} y1={mc(R2Y[1])} x2={X5+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X5+MW+CW/2} y1={mc(R1Y[2])} x2={X5+MW+CW/2} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X5+MW+CW/2} y1={mc(R1Y[2])} x2={X6} y2={mc(R1Y[2])} stroke={LINE} strokeWidth={1.5}/>
            <line x1={X5+MW+CW/2} y1={mc(R1Y[3])} x2={X6} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/>
          </svg>

          {/* ── CHAMPION (above final) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
            className="absolute flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl"
            style={{ width: MW, top: CHAMPION_Y, left: X3, backgroundColor: 'rgba(255,214,10,0.08)' }}
          >
            <Trophy className="w-5 h-5" style={{ color: '#FFD60A' }} />
            <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: '#FFD60A' }}>CAMPEÃO</span>
            <img src={av[0]} className="w-9 h-9 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
            <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
          </motion.div>

          {/* ── FINAL ── */}
          <MatchCard winner={{ name: 'Faker', avatar: av[0] }} loser={{ name: 'Coldzera', avatar: av[12] }}
            sw={3} sl={2} label="FINAL" date="30 MAI." x={X3} y={FY} delay={0.38} isFinal />

          {/* ── LEFT SF ── */}
          <MatchCard winner={{ name: 'Faker', avatar: av[0] }} loser={{ name: 'Kscerato', avatar: av[6] }}
            sw={3} sl={2} label="SF1" date="28 ABR." x={X2} y={SFY} delay={0.28} />

          {/* ── LEFT R2 ── */}
          <MatchCard winner={{ name: 'Faker', avatar: av[0] }} loser={{ name: 'S1mple', avatar: av[2] }}
            sw={3} sl={2} label="QF1" date="7 ABR." x={X1} y={R2Y[0]} delay={0.15} />
          <MatchCard winner={{ name: 'Kscerato', avatar: av[6] }} loser={{ name: 'TenZ', avatar: av[4] }}
            sw={3} sl={1} label="QF2" date="7 ABR." x={X1} y={R2Y[1]} delay={0.18} />

          {/* ── LEFT R1 ── */}
          <MatchCard winner={{ name: 'Faker', avatar: av[0] }} loser={{ name: 'ZywOo', avatar: av[1] }}
            sw={3} sl={1} label="WPO1" date="10 MAR." x={X0} y={R1Y[0]} delay={0} />
          <MatchCard winner={{ name: 'S1mple', avatar: av[2] }} loser={{ name: 'NiKo', avatar: av[3] }}
            sw={3} sl={2} label="WPO2" date="10 MAR." x={X0} y={R1Y[1]} delay={0.04} />
          <MatchCard winner={{ name: 'TenZ', avatar: av[4] }} loser={{ name: 'Shroud', avatar: av[5] }}
            sw={3} sl={0} label="WPO3" date="10 MAR." x={X0} y={R1Y[2]} delay={0.08} />
          <MatchCard winner={{ name: 'Kscerato', avatar: av[6] }} loser={{ name: 'Device', avatar: av[7] }}
            sw={3} sl={1} label="WPO4" date="10 MAR." x={X0} y={R1Y[3]} delay={0.12} />

          {/* ── RIGHT SF ── */}
          <MatchCard winner={{ name: 'Coldzera', avatar: av[12] }} loser={{ name: 'Apex', avatar: av[9] }}
            sw={3} sl={1} label="SF2" date="28 ABR." x={X4} y={SFY} delay={0.28} />

          {/* ── RIGHT R2 ── */}
          <MatchCard winner={{ name: 'Apex', avatar: av[9] }} loser={{ name: 'Rain', avatar: av[11] }}
            sw={3} sl={1} label="QF3" date="7 ABR." x={X5} y={R2Y[0]} delay={0.15} />
          <MatchCard winner={{ name: 'Coldzera', avatar: av[12] }} loser={{ name: 'Twistzz', avatar: av[15] }}
            sw={3} sl={2} label="QF4" date="7 ABR." x={X5} y={R2Y[1]} delay={0.18} />

          {/* ── RIGHT R1 ── */}
          <MatchCard winner={{ name: 'Apex', avatar: av[9] }} loser={{ name: 'Mixer', avatar: av[8] }}
            sw={3} sl={1} label="WPO5" date="10 MAR." x={X6} y={R1Y[0]} delay={0} />
          <MatchCard winner={{ name: 'Rain', avatar: av[11] }} loser={{ name: 'Krimz', avatar: av[10] }}
            sw={3} sl={2} label="WPO6" date="10 MAR." x={X6} y={R1Y[1]} delay={0.04} />
          <MatchCard winner={{ name: 'Coldzera', avatar: av[12] }} loser={{ name: 'EliGE', avatar: av[13] }}
            sw={3} sl={0} label="WPO7" date="10 MAR." x={X6} y={R1Y[2]} delay={0.08} />
          <MatchCard winner={{ name: 'Twistzz', avatar: av[15] }} loser={{ name: 'Xantares', avatar: av[14] }}
            sw={3} sl={2} label="WPO8" date="10 MAR." x={X6} y={R1Y[3]} delay={0.12} />

        </div>
      </div>
    </section>
  );
}
