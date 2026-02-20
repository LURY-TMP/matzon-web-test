'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Zap } from 'lucide-react';

export function LandingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-white/80 text-sm font-bold tracking-wide uppercase">A nova era da competição</span>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            DOMINE O <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">UNIVERSO MATZON</span>
          </h1>
        </motion.div>
        <motion.p variants={itemVariants} className="mt-4 text-lg md:text-xl text-white/60 max-w-2xl mb-10">
          A infraestrutura definitiva para jogadores competitivos. Suba no ranking, conquiste torneios e construa o seu legado.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-black hover:bg-white/90 transition-transform hover:scale-105 active:scale-95">
            Começar Agora <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold hover:bg-white/10 backdrop-blur-md transition-transform hover:scale-105 active:scale-95">
            <Trophy className="w-5 h-5" /> Explorar Torneios
          </button>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/10 w-full">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">2.5M+</span>
            <span className="text-white/50 text-sm font-bold mt-1">Jogadores Ativos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">$150k</span>
            <span className="text-white/50 text-sm font-bold mt-1">Prémios Distribuídos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">10k+</span>
            <span className="text-white/50 text-sm font-bold mt-1">Torneios Realizados</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-cyan-400">Ao Vivo</span>
            <span className="text-white/50 text-sm font-bold mt-1">Matchmaking Global</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
