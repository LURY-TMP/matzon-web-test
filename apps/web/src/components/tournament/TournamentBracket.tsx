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

function TeamSlot({ code, date, avatar, side }: { code: string; date: string; avatar: string; side: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${side === 'right' ? 'items-end' : 'items-start'}`}>
      <img src={avatar} alt={code} className="w-10 h-10 rounded-full object-cover" style={{ border: '2px solid rgba(255,255,255,0.1)' }} />
      <span className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>{code}</span>
      <span className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{date}</span>
    </div>
  );
}

function MatchBox({ left, right, code, date, isFinal = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-1"
    >
      <div
        className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl w-[200px]"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        <TeamSlot code={left.code} date="" avatar={left.avatar} side="left" />
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-semibold" style={{ color: 'var(--text-tertiary)' }}>{code}</span>
          <span className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{date}</span>
          {isFinal && (
            <span className="mt-1 px-2 py-0.5 rounded-full text-[9px] font-black" style={{ backgroundColor: 'rgba(10,132,255,0.2)', color: '#0A84FF' }}>Final</span>
          )}
        </div>
        <TeamSlot code={right.code} date="" avatar={right.avatar} side="right" />
      </div>
    </motion.div>
  );
}

// Linha vertical de conexão
function VLine({ height = 24 }: { height?: number }) {
  return <div style={{ width: 2, height, backgroundColor: 'rgba(255,255,255,0.12)', margin: '0 auto' }} />;
}

// Linha horizontal conectando dois
function HConnector() {
  return (
    <div className="flex items-start justify-center" style={{ width: 440, margin: '0 auto' }}>
      <div style={{ flex: 1, height: 2, backgroundColor: 'rgba(255,255,255,0.12)', marginTop: 0 }} />
      <div style={{ width: 2, height: 20, backgroundColor: 'rgba(255,255,255,0.12)' }} />
      <div style={{ flex: 1, height: 2, backgroundColor: 'rgba(255,255,255,0.12)', marginTop: 0 }} />
    </div>
  );
}

export function TournamentBracket() {
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

      <div className="overflow-x-auto pb-4">
        <div className="flex flex-col items-center" style={{ minWidth: 500 }}>

          {/* QUARTOS - Linha 1 (4 jogos lado a lado) */}
          <div className="flex gap-6 justify-center">
            <MatchBox code="WPO1" date="10 MAR." left={{ code: '1', avatar: avatars[0] }} right={{ code: '5/6', avatar: avatars[1] }} />
            <MatchBox code="WPO2" date="10 MAR." left={{ code: '2', avatar: avatars[2] }} right={{ code: '3/4', avatar: avatars[3] }} />
            <MatchBox code="WPO3" date="10 MAR." left={{ code: '3', avatar: avatars[4] }} right={{ code: '7/8', avatar: avatars[5] }} />
            <MatchBox code="WPO4" date="10 MAR." left={{ code: '4', avatar: avatars[6] }} right={{ code: '1/2', avatar: avatars[7] }} />
          </div>

          {/* Connector 4→2 */}
          <div className="flex gap-6 justify-center w-full" style={{ marginTop: 0 }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}><VLine height={16} /></div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}><VLine height={16} /></div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}><VLine height={16} /></div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}><VLine height={16} /></div>
          </div>

          <div className="flex justify-center gap-[216px]">
            <HConnector />
          </div>

          {/* OITAVOS - 2 jogos */}
          <div className="flex gap-6 justify-center mt-0" style={{ gap: 216 }}>
            <MatchBox code="WOF1" date="7 ABR." left={{ code: 'WOF1', avatar: avatars[8] }} right={{ code: 'WOF2', avatar: avatars[9] }} />
            <MatchBox code="WOF3" date="7 ABR." left={{ code: 'WOF3', avatar: avatars[10] }} right={{ code: 'WOF4', avatar: avatars[11] }} />
          </div>

          <div className="flex justify-center" style={{ gap: 216 }}>
            <div style={{ width: 440, display: 'flex', justifyContent: 'center' }}>
              <VLine height={16} />
            </div>
            <div style={{ width: 440, display: 'flex', justifyContent: 'center' }}>
              <VLine height={16} />
            </div>
          </div>

          <HConnector />

          {/* QUARTOS FINAIS */}
          <MatchBox code="WQF1" date="28 ABR." left={{ code: 'WQF1', avatar: avatars[12] }} right={{ code: 'WQF2', avatar: avatars[13] }} />
          <VLine height={16} />

          {/* SEMIFINAL */}
          <MatchBox code="WSF1" date="30 MAI." left={{ code: 'WSF1', avatar: avatars[14] }} right={{ code: 'WSF2', avatar: avatars[15] }} isFinal={true} />
          <VLine height={16} />

          {/* CAMPEÃO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl"
            style={{ backgroundColor: 'rgba(255,214,10,0.08)' }}
          >
            <Trophy className="w-8 h-8" style={{ color: '#FFD60A' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#FFD60A' }}>Campeão</span>
            <img src={avatars[0]} alt="winner" className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid #FFD60A' }} />
            <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Faker</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
