'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Trophy, Swords, Users, Target, Search, Bell } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

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

          <div className="scale-[0.40] sm:scale-[0.45] origin-left">
            <div className="flex items-center gap-[16px] relative" style={{ perspective: '1000px' }}>
              <div
                className="w-[148px] h-[86px] border-[7px] rounded-full flex items-center p-[6px] relative z-10 pointer-events-none transition-colors duration-500"
                style={{ borderColor: isLightMode ? '#000' : '#FFF' }}
              >
                <motion.div
                  className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer z-20 pointer-events-auto"
                  style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                  animate={{ x: isLightMode ? 0 : 62 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  onClick={() => setIsLightMode(!isLightMode)}
                >
                  <span
                    className="text-[14px] font-black tracking-[0.5px] select-none pointer-events-none"
                    style={{ color: isLightMode ? '#FFF' : '#000' }}
                  >
                    MATZ
                  </span>
                </motion.div>
              </div>
              <motion.div
                className="text-[95px] font-black leading-[0.8] -ml-1 select-none relative z-0 cursor-pointer hover:opacity-80"
                style={{ color: isLightMode ? '#000' : '#FFF', transformOrigin: 'center center' }}
                animate={{ x: isLightMode ? -106 : 0, scale: isLightMode ? 0.70 : 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                N
              </motion.div>
            </div>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 border-b border-white/10 absolute w-full"
          >
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
