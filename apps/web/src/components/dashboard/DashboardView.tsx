'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Swords, Trophy, Users, Settings, LogOut, Bell, Search, Activity, Target, Flame, ChevronRight } from 'lucide-react';

const playerData = {
  name: 'John Doe', rank: 'Elite Global', elo: 3450, winrate: 68, matches: 124,
  recentMatches: [
    { id: 1, result: 'Vitória', score: '2-0', opponent: 'Faker', time: 'Há 2h', isWin: true },
    { id: 2, result: 'Derrota', score: '1-2', opponent: 'Caps', time: 'Há 5h', isWin: false },
    { id: 3, result: 'Vitória', score: '3-1', opponent: 'ShowMaker', time: 'Ontem', isWin: true },
    { id: 4, result: 'Vitória', score: '2-0', opponent: 'Chovy', time: 'Ontem', isWin: true },
  ]
};

const cv = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const iv = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } } };

export function DashboardView() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <aside className="hidden md:flex w-20 lg:w-64 flex-col justify-between h-screen sticky top-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRight: '1px solid var(--separator)' }}>
        <div>
          <div className="h-20 flex items-center justify-center lg:justify-start lg:px-8" style={{ borderBottom: '1px solid var(--separator)' }}>
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <span className="font-black text-sm text-white">MZ</span>
            </div>
            <span className="hidden lg:block ml-3 font-black text-xl tracking-widest" style={{ color: 'var(--text-primary)' }}>MATZON</span>
          </div>
          <nav className="p-4 space-y-2">
            {[
              { icon: LayoutGrid, label: 'Visão Geral', active: true },
              { icon: Swords, label: 'Partidas', active: false },
              { icon: Trophy, label: 'Torneios', active: false },
              { icon: Users, label: 'Comunidade', active: false },
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all"
                style={{ backgroundColor: item.active ? 'rgba(10,132,255,0.1)' : 'transparent', color: item.active ? '#0A84FF' : 'var(--text-tertiary)', border: `1px solid ${item.active ? 'rgba(10,132,255,0.2)' : 'transparent'}` }}>
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4" style={{ borderTop: '1px solid var(--separator)' }}>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold" style={{ color: 'var(--text-tertiary)' }}>
            <Settings className="w-5 h-5 flex-shrink-0" /><span className="hidden lg:block">Configurações</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold mt-2" style={{ color: '#FF453A' }}>
            <LogOut className="w-5 h-5 flex-shrink-0" /><span className="hidden lg:block">Sair</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-20 flex items-center justify-between px-6 sm:px-10 sticky top-0 z-30"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--separator)' }}>
          <div className="flex items-center rounded-full px-4 py-2 w-full max-w-sm" style={{ backgroundColor: 'var(--bg-card)' }}>
            <Search className="w-4 h-4 mr-2" style={{ color: 'var(--text-tertiary)' }} />
            <input type="text" placeholder="Buscar jogadores, torneios..." className="bg-transparent text-sm focus:outline-none w-full" style={{ color: 'var(--text-primary)' }} />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative" style={{ color: 'var(--text-tertiary)' }}>
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full border-2 animate-pulse" style={{ backgroundColor: '#0A84FF', borderColor: 'var(--bg-primary)' }} />
            </button>
            <div className="flex items-center gap-3 pl-6" style={{ borderLeft: '1px solid var(--separator)' }}>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{playerData.name}</p>
                <p className="text-xs font-bold" style={{ color: '#0A84FF' }}>{playerData.rank}</p>
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white"
                style={{ background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)' }}>JD</div>
            </div>
          </div>
        </header>

        <motion.div variants={cv} initial="hidden" animate="visible" className="p-6 sm:p-10 flex-1 space-y-6 max-w-7xl mx-auto w-full">
          <motion.div variants={iv} className="relative w-full rounded-[24px] overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,132,255,0.3), transparent)' }} />
            <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h1 className="text-2xl sm:text-4xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>
                  BEM-VINDO DE VOLTA, <span style={{ color: '#0A84FF' }}>{playerData.name.toUpperCase()}</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>A sua próxima partida do Torneio de Elite começa em 45 minutos.</p>
              </div>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#0A84FF', color: '#fff' }}>
                <Flame className="w-5 h-5" /> Jogar Agora
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Pontuação ELO', value: playerData.elo, icon: Target, color: '#0A84FF', soft: 'rgba(10,132,255,0.12)' },
              { title: 'Taxa de Vitória', value: `${playerData.winrate}%`, icon: Activity, color: '#BF5AF2', soft: 'rgba(191,90,242,0.12)' },
              { title: 'Partidas Jogadas', value: playerData.matches, icon: Swords, color: '#FFD60A', soft: 'rgba(255,214,10,0.12)' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={iv} className="p-6 rounded-[20px]" style={{ backgroundColor: 'var(--bg-card)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: stat.soft }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <h3 className="text-4xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>{stat.value}</h3>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>{stat.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div variants={iv} className="lg:col-span-2 p-6 rounded-[24px]" style={{ backgroundColor: 'var(--bg-card)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>Partidas Recentes</h2>
                <button className="flex items-center text-sm font-bold" style={{ color: '#0A84FF' }}>
                  Ver Todas <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="space-y-3">
                {playerData.recentMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-card-hover)' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-10 rounded-full" style={{ backgroundColor: match.isWin ? '#30D158' : '#FF453A' }} />
                      <div>
                        <p className="font-bold" style={{ color: 'var(--text-primary)' }}>{match.opponent}</p>
                        <p className="text-xs font-bold uppercase" style={{ color: 'var(--text-tertiary)' }}>{match.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-lg" style={{ color: match.isWin ? '#30D158' : '#FF453A' }}>{match.result}</p>
                      <p className="text-sm font-bold" style={{ color: 'var(--text-tertiary)' }}>{match.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={iv} className="p-6 rounded-[24px] flex flex-col justify-between relative overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(191,90,242,0.2)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(191,90,242,0.1)', filter: 'blur(40px)' }} />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5" style={{ color: '#BF5AF2' }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#BF5AF2' }}>Torneio Ativo</span>
                </div>
                <h3 className="text-2xl font-black leading-none mb-2" style={{ color: 'var(--text-primary)' }}>CHAMPIONS CUP 2026</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Fase: Quartos de Final</p>
                <div className="p-4 rounded-xl mb-4" style={{ backgroundColor: 'var(--bg-card-hover)' }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>Você</span>
                    <span className="font-black" style={{ color: '#0A84FF' }}>2</span>
                  </div>
                  <div className="flex justify-between items-center opacity-50">
                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>S1mple</span>
                    <span className="font-black" style={{ color: 'var(--text-primary)' }}>0</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl font-bold hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(191,90,242,0.12)', color: '#BF5AF2', border: '1px solid rgba(191,90,242,0.3)' }}>
                Ver Bracket Completa
              </button>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
