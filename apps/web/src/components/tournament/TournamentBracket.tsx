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
const MW = 145; // match width
const MH = 82;  // match height
const IH = MH + 48; // item height with gap = 98
const CW = 28;  // connector width

// All positions
const R1_Y = [0, IH, IH*2, IH*3];             // 0, 98, 196, 294
const R2_Y = [IH/2, IH*2 + IH/2];             // 49, 245
const SF_Y = [IH + IH/2];                      // 147
const F_Y  = IH + IH/2;                        // 147 (center)
const TOTAL_H = IH * 4 - 16;                   // 376

// Column X positions (left side)
const X_R1L = 0;
const X_C1L = MW;
const X_R2L = X_C1L + CW;
const X_C2L = X_R2L + MW;
const X_SFL = X_C2L + CW;
const X_CSF = X_SFL + MW;
const X_FIN = X_CSF + CW;
const X_CSFR = X_FIN + MW + CW; // champion box below final, so final col width = MW
const X_SFR = X_CSFR;
const X_C2R = X_SFR + MW + CW;
const X_R2R = X_C2R;
const X_C1R = X_R2R + MW + CW;
const X_R1R = X_C1R;
const TOTAL_W = X_R1R + MW;

function MatchCard({ winner, loser, sw, sl, label, date, delay = 0, x, y }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="absolute rounded-xl overflow-hidden"
      style={{ width: MW, top: y, left: x, backgroundColor: 'var(--bg-card)' }}
    >
      {/* Winner top */}
      <div className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', backgroundColor: 'rgba(10,132,255,0.1)' }}>
        <img src={winner.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-bold truncate flex-1" style={{ color: 'var(--text-primary)' }}>{winner.name}</span>
        <span className="text-[11px] font-black" style={{ color: '#0A84FF' }}>{sw}</span>
      </div>
      {/* Loser bottom */}
      <div className="flex items-center gap-2 px-3 py-2">
        <img src={loser.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] truncate flex-1" style={{ color: 'var(--text-tertiary)' }}>{loser.name}</span>
        <span className="text-[11px]" style={{ color: 'var(--text-tertiary)' }}>{sl}</span>
      </div>
      {/* Label */}
      <div className="px-3 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <span className="text-[8px] font-bold" style={{ color: 'var(--text-tertiary)' }}>{label} · {date}</span>
      </div>
    </motion.div>
  );
}

export function TournamentBracket() {
  // center of each match for line drawing
  const mc = (y: number) => y + MH / 2;

  // SVG lines data
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];

  // LEFT R1→R2 connectors
  [[0, 1], [2, 3]].forEach(([a, b], i) => {
    const ya = mc(R1_Y[a]);
    const yb = mc(R1_Y[b]);
    const ymid = (ya + yb) / 2;
    const xRight = X_C1L + CW;
    const xMid = X_C1L + CW / 2;
    lines.push({ x1: X_C1L, y1: ya, x2: xMid, y2: ya });
    lines.push({ x1: xMid, y1: ya, x2: xMid, y2: yb });
    lines.push({ x1: X_C1L, y1: yb, x2: xMid, y2: yb });
    lines.push({ x1: xMid, y1: ymid, x2: xRight, y2: ymid });
  });

  // LEFT R2→SF connectors
  [[0, 1]].forEach(() => {
    const ya = mc(R2_Y[0]);
    const yb = mc(R2_Y[1]);
    const ymid = (ya + yb) / 2;
    const xStart = X_C2L;
    const xMid = X_C2L + CW / 2;
    const xEnd = X_C2L + CW;
    lines.push({ x1: xStart, y1: ya, x2: xMid, y2: ya });
    lines.push({ x1: xMid, y1: ya, x2: xMid, y2: yb });
    lines.push({ x1: xStart, y1: yb, x2: xMid, y2: yb });
    lines.push({ x1: xMid, y1: ymid, x2: xEnd, y2: ymid });
  });

  // LEFT SF→FINAL
  lines.push({ x1: X_CSF, y1: mc(SF_Y[0]), x2: X_FIN, y2: mc(SF_Y[0]) });

  // RIGHT SF→FINAL
  const X_FIN_RIGHT = X_FIN + MW;
  lines.push({ x1: X_FIN_RIGHT, y1: mc(SF_Y[0]), x2: X_FIN_RIGHT + CW, y2: mc(SF_Y[0]) });

  // RIGHT SF→R2 connectors
  const X_SFR2 = X_SFR + MW;
  lines.push({ x1: X_SFR2, y1: mc(SF_Y[0]), x2: X_SFR2 + CW, y2: mc(SF_Y[0]) });

  // RIGHT R2→R1 connectors
  [[0, 1], [2, 3]].forEach(([a, b], i) => {
    const ya = mc(R2_Y[i === 0 ? 0 : 1]);
    const yb = ya; // single match per side
    // R2 right side: two matches
    const r2ya = mc(R2_Y[0]);
    const r2yb = mc(R2_Y[1]);
    const r2ymid = (r2ya + r2yb) / 2;
    if (i === 0) {
      const xStart = X_C2R + CW;
      const xMid = X_C2R + CW / 2;
      lines.push({ x1: X_C2R + MW + CW, y1: mc(R1_Y[0]), x2: xStart, y2: mc(R1_Y[0]) });
      lines.push({ x1: xStart - MW/2 + CW/2, y1: mc(R1_Y[0]), x2: xStart - MW/2 + CW/2, y2: mc(R1_Y[1]) });
      lines.push({ x1: X_C2R + MW + CW, y1: mc(R1_Y[1]), x2: xStart, y2: mc(R1_Y[1]) });
      lines.push({ x1: xStart, y1: r2ya, x2: X_C2R + MW + CW, y2: r2ya });
    }
  });

  // Recompute right side lines cleanly
  const cleanRightLines: { x1: number; y1: number; x2: number; y2: number }[] = [];

  // RIGHT: SF → R2 right
  const xSFRright = X_SFR + MW;
  const xR2Rmid = xSFRright + CW / 2;
  const xR2Rstart = xSFRright + CW;
  // R2R: two matches at R2_Y[0] and R2_Y[1]
  cleanRightLines.push({ x1: xSFRright, y1: mc(SF_Y[0]), x2: xR2Rmid, y2: mc(SF_Y[0]) });
  cleanRightLines.push({ x1: xR2Rmid, y1: mc(R2_Y[0]), x2: xR2Rmid, y2: mc(R2_Y[1]) });
  cleanRightLines.push({ x1: xR2Rmid, y1: mc(R2_Y[0]), x2: xR2Rstart, y2: mc(R2_Y[0]) });
  cleanRightLines.push({ x1: xR2Rmid, y1: mc(R2_Y[1]), x2: xR2Rstart, y2: mc(R2_Y[1]) });

  // RIGHT: R2 → R1 right
  const xR2Rright = xR2Rstart + MW;
  [[R2_Y[0], R1_Y[0], R1_Y[1]], [R2_Y[1], R1_Y[2], R1_Y[3]]].forEach(([r2y, r1ya, r1yb]) => {
    const xMid = xR2Rright + CW / 2;
    cleanRightLines.push({ x1: xR2Rright, y1: mc(r2y), x2: xMid, y2: mc(r2y) });
    cleanRightLines.push({ x1: xMid, y1: mc(r1ya), x2: xMid, y2: mc(r1yb) });
    cleanRightLines.push({ x1: xMid, y1: mc(r1ya), x2: xMid + CW / 2, y2: mc(r1ya) });
    cleanRightLines.push({ x1: xMid, y1: mc(r1yb), x2: xMid + CW / 2, y2: mc(r1yb) });
  });

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
        <div className="relative" style={{ width: TOTAL_W, height: TOTAL_H + 140 }}>

          {/* SVG LINES */}
          <svg className="absolute inset-0" width={TOTAL_W} height={TOTAL_H + 140} style={{ overflow: 'visible', pointerEvents: 'none' }}>
            {/* Left side lines */}
            {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={LINE} strokeWidth={1.5} />)}
            {/* Right side lines */}
            {cleanRightLines.map((l, i) => <line key={'r'+i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={LINE} strokeWidth={1.5} />)}
            {/* Final left connector */}
            <line x1={X_SFL + MW} y1={mc(SF_Y[0])} x2={X_FIN} y2={mc(SF_Y[0])} stroke={LINE} strokeWidth={1.5} />
            {/* Final right connector */}
            <line x1={X_FIN + MW} y1={mc(SF_Y[0])} x2={X_SFR} y2={mc(SF_Y[0])} stroke={LINE} strokeWidth={1.5} />
            {/* Final → Champion */}
            <line x1={X_FIN + MW/2} y1={F_Y + MH} x2={X_FIN + MW/2} y2={F_Y + MH + 40} stroke={LINE} strokeWidth={1.5} />
          </svg>

          {/* ── LEFT R1 ── */}
          {[
            { w: { name: 'Faker', avatar: av[0] }, l: { name: 'ZywOo', avatar: av[1] }, sw: 3, sl: 1, label: 'WPO1', date: '10 MAR.', y: R1_Y[0] },
            { w: { name: 'S1mple', avatar: av[2] }, l: { name: 'NiKo', avatar: av[3] }, sw: 3, sl: 2, label: 'WPO2', date: '10 MAR.', y: R1_Y[1] },
            { w: { name: 'TenZ', avatar: av[4] }, l: { name: 'Shroud', avatar: av[5] }, sw: 3, sl: 0, label: 'WPO3', date: '10 MAR.', y: R1_Y[2] },
            { w: { name: 'Kscerato', avatar: av[6] }, l: { name: 'Device', avatar: av[7] }, sw: 3, sl: 1, label: 'WPO4', date: '10 MAR.', y: R1_Y[3] },
          ].map((m, i) => <MatchCard key={'r1l'+i} winner={m.w} loser={m.l} sw={m.sw} sl={m.sl} label={m.label} date={m.date} x={X_R1L} y={m.y} delay={i*0.04} />)}

          {/* ── LEFT R2 ── */}
          {[
            { w: { name: 'Faker', avatar: av[0] }, l: { name: 'S1mple', avatar: av[2] }, sw: 3, sl: 2, label: 'QF1', date: '7 ABR.', y: R2_Y[0] },
            { w: { name: 'Kscerato', avatar: av[6] }, l: { name: 'TenZ', avatar: av[4] }, sw: 3, sl: 1, label: 'QF2', date: '7 ABR.', y: R2_Y[1] },
          ].map((m, i) => <MatchCard key={'r2l'+i} winner={m.w} loser={m.l} sw={m.sw} sl={m.sl} label={m.label} date={m.date} x={X_R2L} y={m.y} delay={0.15+i*0.04} />)}

          {/* ── LEFT SF ── */}
          <MatchCard winner={{ name: 'Faker', avatar: av[0] }} loser={{ name: 'Kscerato', avatar: av[6] }} sw={3} sl={2} label="SF1" date="28 ABR." x={X_SFL} y={SF_Y[0]} delay={0.28} />

          {/* ── FINAL ── */}
          <MatchCard winner={{ name: 'Faker', avatar: av[0] }} loser={{ name: 'Coldzera', avatar: av[12] }} sw={3} sl={2} label="FINAL" date="30 MAI." x={X_FIN} y={F_Y} delay={0.38} />

          {/* ── CHAMPION ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
            className="absolute flex flex-col items-center gap-2 px-5 py-3 rounded-2xl"
            style={{ width: MW, top: F_Y + MH + 40, left: X_FIN, backgroundColor: 'rgba(255,214,10,0.08)' }}
          >
            <Trophy className="w-5 h-5" style={{ color: '#FFD60A' }} />
            <img src={av[0]} className="w-9 h-9 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
            <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: '#FFD60A' }}>CAMPEÃO</span>
            <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
          </motion.div>

          {/* ── RIGHT SF ── */}
          <MatchCard winner={{ name: 'Coldzera', avatar: av[12] }} loser={{ name: 'Apex', avatar: av[9] }} sw={3} sl={1} label="SF2" date="28 ABR." x={X_SFR} y={SF_Y[0]} delay={0.28} />

          {/* ── RIGHT R2 ── */}
          {[
            { w: { name: 'Apex', avatar: av[9] }, l: { name: 'Rain', avatar: av[11] }, sw: 3, sl: 1, label: 'QF3', date: '7 ABR.', y: R2_Y[0] },
            { w: { name: 'Coldzera', avatar: av[12] }, l: { name: 'Twistzz', avatar: av[15] }, sw: 3, sl: 2, label: 'QF4', date: '7 ABR.', y: R2_Y[1] },
          ].map((m, i) => <MatchCard key={'r2r'+i} winner={m.w} loser={m.l} sw={m.sw} sl={m.sl} label={m.label} date={m.date} x={xR2Rstart} y={m.y} delay={0.15+i*0.04} />)}

          {/* ── RIGHT R1 ── */}
          {[
            { w: { name: 'Apex', avatar: av[9] }, l: { name: 'Mixer', avatar: av[8] }, sw: 3, sl: 1, label: 'WPO5', date: '10 MAR.', y: R1_Y[0] },
            { w: { name: 'Rain', avatar: av[11] }, l: { name: 'Krimz', avatar: av[10] }, sw: 3, sl: 2, label: 'WPO6', date: '10 MAR.', y: R1_Y[1] },
            { w: { name: 'Coldzera', avatar: av[12] }, l: { name: 'EliGE', avatar: av[13] }, sw: 3, sl: 0, label: 'WPO7', date: '10 MAR.', y: R1_Y[2] },
            { w: { name: 'Twistzz', avatar: av[15] }, l: { name: 'Xantares', avatar: av[14] }, sw: 3, sl: 2, label: 'WPO8', date: '10 MAR.', y: R1_Y[3] },
          ].map((m, i) => <MatchCard key={'r1r'+i} winner={m.w} loser={m.l} sw={m.sw} sl={m.sl} label={m.label} date={m.date} x={xR2Rstart + MW + CW} y={m.y} delay={i*0.04} />)}

        </div>
      </div>
    </section>
  );
}
