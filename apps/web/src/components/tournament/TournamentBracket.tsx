'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Swords } from 'lucide-react';

export function TournamentBracket() {
  const rounds = [
    {
      title: 'Quartos de Final',
      matches: [
        { id: 1, p1: { name: 'Faker', score: 2, winner: true }, p2: { name: 'Caps', score: 0, winner: false } },
        { id: 2, p1: { name: 'ShowMaker', score: 1, winner: false }, p2: { name: 'Chovy', score: 2, winner: true } },
        { id: 3, p1: { name: 'Rookie', score: 2, winner: true }, p2: { name: 'Doinb', score: 1, winner: false } },
        { id: 4, p1: { name: 'Scout', score: 0, winner: false }, p2: { name: 'Knight', score: 2, winner: true } },
      ]
    },
    {
      title: 'Semifinais',
      matches: [
        { id: 5, p1: { name: 'Faker', score: 2, winner: true }, p2: { name: 'Chovy', score: 1, winner: false } },
        { id: 6, p1: { name: 'Rookie', score: 0, winner: false }, p2: { name: 'Knight', score: 2, winner: true } },
      ]
    },
    {
      title: 'Grande Final',
      matches: [
        { id: 7, p1: { name: 'Faker', score: 3, winner: true }, p2: { name: 'Knight', score: 2, winner: false } },
      ]
    }
  ];

  const MatchCard = ({ match }: { match: any }) => (
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-white/5 w-full sm:w-56 flex flex-col hover:border-white/20 transition-colors">
      <div className={`flex justify-between items-center p-3 border-b border-white/5 ${match.p1.winner ? 'bg-white/5' : 'opacity-50'}`}>
        <span className={`text-sm ${match.p1.winner ? 'text-white font-black' : 'text-white/60 font-bold'}`}>{match.p1.name}</span>
        <span className={`text-sm font-black ${match.p1.winner ? 'text-cyan-400' : 'text-white/40'}`}>{match.p1.score}</span>
      </div>
      <div className={`flex justify-between items-center p-3 ${match.p2.winner ? 'bg-white/5' : 'opacity-50'}`}>
        <span className={`text-sm ${match.p2.winner ? 'text-white font-black' : 'text-white/60 font-bold'}`}>{match.p2.name}</span>
        <span className={`text-sm font-black ${match.p2.winner ? 'text-cyan-400' : 'text-white/40'}`}>{match.p2.score}</span>
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <Swords className="w-8 h-8 text-cyan-400" />
            Invitational MATZON 2026
          </h2>
          <p className="text-white/50 text-sm mt-1 font-semibold uppercase tracking-widest">Fase Eliminatória</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400">
          <Trophy className="w-4 h-4" />
          <span className="text-xs font-black uppercase">Prémio: $50,000</span>
        </div>
      </div>
      <div className="overflow-x-auto pb-8">
        <div className="flex gap-8 min-w-max justify-start items-center">
          {rounds.map((round, rIndex) => (
            <div key={rIndex} className="flex flex-col gap-6">
              <h3 className="text-white/40 text-xs font-black uppercase tracking-widest text-center mb-4">{round.title}</h3>
              <div className="flex flex-col justify-around h-full gap-8">
                {round.matches.map((match) => (
                  <motion.div key={match.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: rIndex * 0.2 }}>
                    <MatchCard match={match} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center ml-4">
            <Trophy className="w-16 h-16 text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 rounded-2xl flex flex-col items-center">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Campeão</span>
              <span className="text-2xl font-black text-white">Faker</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
