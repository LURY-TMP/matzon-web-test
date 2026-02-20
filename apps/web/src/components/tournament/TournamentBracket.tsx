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
const W = 155;

function MatchBox({ left, right, label, date, isFinal = false, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col rounded-xl overflow-hidden flex-shrink-0"
      style={{ width: W, backgroundColor: 'var(--bg-card)' }}
    >
      <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <img src={left.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{left.name}</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <img src={right.avatar} className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
        <span className="text-[11px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{right.name}</span>
      </div>
      <div className="flex items-center justify-center gap-1 px-2 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <span className="text-[9px] font-bold" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
        {date && <span className="text-[9px]" style={{ color: 'var(--text-tertiary)' }}>· {date}</span>}
        {isFinal && <span className="ml-1 px-1.5 py-0.5 rounded-full text-[8px] font-black" style={{ backgroundColor: 'rgba(10,132,255,0.2)', color: '#0A84FF' }}>Final</span>}
      </div>
    </motion.div>
  );
}

function VLine({ h = 20 }: { h?: number }) {
  return <div style={{ width: 1.5, height: h, backgroundColor: C, margin: '0 auto' }} />;
}

function HLine({ w = 300 }: { w?: number }) {
  return <div style={{ width: w, height: 1.5, backgroundColor: C }} />;
}

function TSection({ matches4, matches2, qfMatch, label }: any) {
  return (
    <div className="flex flex-col items-center">
      {/* 4 matches */}
      <div className="flex gap-3">
        {matches4.map((m: any, i: number) => (
          <MatchBox key={i} delay={i * 0.05} {...m} />
        ))}
      </div>

      {/* connectors 4→2 */}
      <div className="flex" style={{ width: W * 4 + 12 * 3 }}>
        <div className="flex flex-col items-center" style={{ width: W * 2 + 12 }}>
          <div className="flex" style={{ width: '100%' }}>
            <div className="flex flex-col items-center" style={{ flex: 1 }}><VLine h={16} /></div>
            <div className="flex flex-col items-center" style={{ flex: 1 }}><VLine h={16} /></div>
          </div>
          <HLine w={W + 12} />
          <VLine h={16} />
        </div>
        <div style={{ width: 12 }} />
        <div className="flex flex-col items-center" style={{ width: W * 2 + 12 }}>
          <div className="flex" style={{ width: '100%' }}>
            <div className="flex flex-col items-center" style={{ flex: 1 }}><VLine h={16} /></div>
            <div className="flex flex-col items-center" style={{ flex: 1 }}><VLine h={16} /></div>
          </div>
          <HLine w={W + 12} />
          <VLine h={16} />
        </div>
      </div>

      {/* 2 matches */}
      <div className="flex gap-3" style={{ gap: 12 }}>
        {matches2.map((m: any, i: number) => (
          <MatchBox key={i} delay={0.2 + i * 0.05} {...m} />
        ))}
      </div>

      {/* connectors 2→1 */}
      <div className="flex flex-col items-center" style={{ width: W * 2 + 12 }}>
        <div className="flex" style={{ width: '100%' }}>
          <div className="flex flex-col items-center" style={{ flex: 1 }}><VLine h={16} /></div>
          <div className="flex flex-col items-center" style={{ flex: 1 }}><VLine h={16} /></div>
        </div>
        <HLine w={W + 12} />
        <VLine h={16} />
      </div>

      {/* QF */}
      <MatchBox delay={0.35} {...qfMatch} />
      <VLine h={20} />
    </div>
  );
}

export function TournamentBracket() {
  const topMatches4 = [
    { label: 'WPO1', date: '10 MAR.', left: { name: 'Faker', avatar: av[0] }, right: { name: 'ZywOo', avatar: av[1] } },
    { label: 'WPO2', date: '10 MAR.', left: { name: 'S1mple', avatar: av[2] }, right: { name: 'NiKo', avatar: av[3] } },
    { label: 'WPO3', date: '10 MAR.', left: { name: 'TenZ', avatar: av[4] }, right: { name: 'Shroud', avatar: av[5] } },
    { label: 'WPO4', date: '10 MAR.', left: { name: 'Kscerato', avatar: av[6] }, right: { name: 'Device', avatar: av[7] } },
  ];
  const topMatches2 = [
    { label: 'WOF1', date: '7 ABR.', left: { name: 'WOF1', avatar: av[8] }, right: { name: 'WOF2', avatar: av[9] } },
    { label: 'WOF2', date: '7 ABR.', left: { name: 'WOF3', avatar: av[10] }, right: { name: 'WOF4', avatar: av[11] } },
  ];
  const topQF = { label: 'WQF1', date: '28 ABR.', left: { name: 'WQF1', avatar: av[12] }, right: { name: 'WQF2', avatar: av[13] } };

  const botMatches4 = [
    { label: 'WPO5', date: '10 MAR.', left: { name: 'Mixer', avatar: av[1] }, right: { name: 'Apex', avatar: av[0] } },
    { label: 'WPO6', date: '10 MAR.', left: { name: 'Krimz', avatar: av[3] }, right: { name: 'Rain', avatar: av[2] } },
    { label: 'WPO7', date: '10 MAR.', left: { name: 'Coldzera', avatar: av[5] }, right: { name: 'EliGE', avatar: av[4] } },
    { label: 'WPO8', date: '10 MAR.', left: { name: 'Xantares', avatar: av[7] }, right: { name: 'Twistzz', avatar: av[6] } },
  ];
  const botMatches2 = [
    { label: 'WOF5', date: '7 ABR.', left: { name: 'WOF5', avatar: av[11] }, right: { name: 'WOF6', avatar: av[10] } },
    { label: 'WOF6', date: '7 ABR.', left: { name: 'WOF7', avatar: av[9] }, right: { name: 'WOF8', avatar: av[8] } },
  ];
  const botQF = { label: 'WQF2', date: '28 ABR.', left: { name: 'WQF3', avatar: av[14] }, right: { name: 'WQF4', avatar: av[15] } };

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
        <div className="flex flex-col items-center" style={{ minWidth: 680 }}>

          {/* TOP HALF */}
          <TSection matches4={topMatches4} matches2={topMatches2} qfMatch={topQF} label="top" />

          {/* SEMIFINAL */}
          <MatchBox delay={0.45} label="WSF" date="30 MAI." isFinal={true}
            left={{ name: 'WSF1', avatar: av[14] }} right={{ name: 'WSF2', avatar: av[15] }} />
          <VLine h={20} />

          {/* CAMPEÃO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl mb-4"
            style={{ backgroundColor: 'rgba(255,214,10,0.08)' }}
          >
            <Trophy className="w-7 h-7" style={{ color: '#FFD60A' }} />
            <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: '#FFD60A' }}>Campeão</span>
            <img src={av[0]} className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
            <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
          </motion.div>

          <VLine h={20} />

          {/* BOTTOM HALF — espelhado */}
          <div className="flex flex-col-reverse items-center">
            <TSection matches4={botMatches4} matches2={botMatches2} qfMatch={botQF} label="bot" />
          </div>

        </div>
      </div>
    </section>
  );
}
