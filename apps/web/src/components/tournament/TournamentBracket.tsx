'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Swords } from 'lucide-react';

const bracketData = [
  {
    round: 'Quartos de Final',
    matches: [
      { p1: { name: 'Faker', score: 3, winner: true }, p2: { name: 'Zywoo', score: 1, winner: false } },
      { p1: { name: 'S1mple', score: 3, winner: true }, p2: { name: 'NiKo', score: 2, winner: false } },
      { p1: { name: 'TenZ', score: 3, winner: true }, p2: { name: 'Shroud', score: 0, winner: false } },
      { p1: { name: 'Kscerato', score: 3, winner: true }, p2: { name: 'Device', score: 1, winner: false } },
    ],
  },
  {
    round: 'Semifinais',
    matches: [
      { p1: { name: 'Faker', score: 3, winner: true }, p2: { name: 'S1mple', score: 2, winner: false } },
      { p1: { name: 'TenZ', score: 1, winner: false }, p2: { name: 'Kscerato', score: 3, winner: true } },
    ],
  },
  {
    round: 'Grande Final',
    matches: [
      { p1: { name: 'Faker', score: 3, winner: true }, p2: { name: 'Kscerato', score: 2, winner: false } },
    ],
  },
];

function MatchCard({ match }: { match: any }) {
  return (
    <div
      className="rounded-2xl overflow-hidden w-full sm:w-56"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      {[match.p1, match.p2].map((player, i) => (
        <div
          key={i}
          className="flex justify-between items-center px-4 py-3 transition-colors"
          style={{
            backgroundColor: player.winner ? 'rgba(10,132,255,0.08)' : 'transparent',
            borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
          }}
        >
          <div className="flex items-center gap-2">
            {player.winner && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0A84FF' }} />}
            <span
              className="text-sm font-semibold"
              style={{ color: player.winner ? 'var(--text-primary)' : 'var(--text-tertiary)' }}
            >
              {player.name}
            </span>
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: player.winner ? '#0A84FF' : 'var(--text-tertiary)' }}
          >
            {player.score}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TournamentBracket() {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Invitational MATZON 2026
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            Fase Eliminatória
          </p>
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ backgroundColor: 'rgba(255,214,10,0.12)', color: '#FFD60A' }}
        >
          <Trophy className="w-4 h-4" /> $50,000
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-8 min-w-max">
          {bracketData.map((round, rIndex) => (
            <motion.div
              key={round.round}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rIndex * 0.15 }}
              className="flex flex-col gap-4"
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2 text-center"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {round.round}
              </p>
              <div
                className="flex flex-col"
                style={{ gap: rIndex === 0 ? '12px' : rIndex === 1 ? '80px' : '160px' }}
              >
                {round.matches.map((match, mIndex) => (
                  <MatchCard key={mIndex} match={match} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Campeão */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Campeão</p>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,214,10,0.12)' }}
            >
              <Trophy className="w-8 h-8" style={{ color: '#FFD60A' }} />
            </div>
            <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Faker</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
