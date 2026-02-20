'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Trophy, Swords, Users, Target, Search, Bell } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: Target },
    { name: 'Torneios', icon: Trophy },
    { name: 'Rankings', icon: Swords },
    { name: 'Comunidade', icon: Users },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-24 h-10 rounded-full border border-white/20 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-white font-black tracking-widest text-sm">MATZ</span>
            </div>
            <div className="text-white font-black text-4xl cursor-pointer hover:opacity-80 transition-opacity">N</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 hover:border-white/20 transition-colors focus-within:border-white/40">
              <Search className="w-4 h-4 text-white/50 mr-2" />
              <input type="text" placeholder="Buscar jogador ou torneio..." className="bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-white/30 w-48" />
            </div>
            <div className="flex gap-2">
              {navItems.map((item) => (
                <button key={item.name} className="flex items-center gap-2 px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-bold">
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="relative p-2 text-white/70 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer p-1 pr-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">JD</div>
              <span className="text-white text-sm font-bold">John Doe</span>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-black/95 border-b border-white/10 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <div className="flex items-center bg-white/5 rounded-full px-4 py-3 mb-4 border border-white/10">
                <Search className="w-4 h-4 text-white/50 mr-2" />
                <input type="text" placeholder="Buscar..." className="bg-transparent border-none text-white text-sm focus:outline-none w-full" />
              </div>
              {navItems.map((item) => (
                <a key={item.name} href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 font-bold">
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
