'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Search, Home, LayoutGrid, User, Zap } from 'lucide-react';

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

  const floatingMenuItems = [
    { icon: Home, label: 'Início' },
    { icon: LayoutGrid, label: 'Dashboard' },
    { icon: Trophy, label: 'Torneios' },
    { icon: User, label: 'Perfil' },
  ];

  const netflixContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.2 } }
  };

  const netflixTextVariants = {
    hidden: { opacity: 0, scale: 3, filter: 'blur(20px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const netflixGlowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 0.4, scale: 1.5, transition: { duration: 2, ease: "easeOut" } }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <header className="relative w-full max-w-7xl mx-auto min-h-[calc(100vh-3rem)] bg-black overflow-hidden flex flex-col rounded-[30px] sm:rounded-[40px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

        <nav className="w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 h-20 relative">
          <div className="w-full px-4 sm:px-6 lg:px-8 h-full relative">
            <div className="flex items-center justify-between h-full">

              <div className="scale-[0.55] sm:scale-[0.65] origin-left">
                <div className="flex items-center gap-[16px] relative" style={{ perspective: '1000px' }}>
                  <div
                    className="w-[148px] h-[86px] border-[7px] rounded-full flex items-center p-[6px] relative z-10 pointer-events-none transition-colors duration-500"
                    style={{ borderColor: isLightMode ? '#000' : '#FFF' }}
                  >
                    <motion.div
                      className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer z-20 pointer-events-auto shadow-lg"
                      style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                      animate={{ x: isLightMode ? 0 : 62 }}
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                      onClick={() => setIsLightMode(!isLightMode)}
                    >
                      <span
                        className="text-[14px] font-black tracking-[0.5px] select-none pointer-events-none transition-colors"
                        style={{ color: isLightMode ? '#FFF' : '#000' }}
                      >
                        MATZ
                      </span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-[95px] font-black leading-[0.8] -ml-1 select-none relative z-0 cursor-pointer hover:opacity-80 transition-colors"
                    style={{ color: isLightMode ? '#000' : '#FFF', transformOrigin: 'center center' }}
                    animate={{ x: isLightMode ? -100 : 0, scale: isLightMode ? 0.70 : 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  >
                    N
                  </motion.div>
                </div>
              </div>

              <div className="hidden md:flex flex-1 justify-center px-8">
                <div className="flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 hover:border-white/20 transition-colors focus-within:border-white/40 w-full max-w-md">
                  <Search className="w-4 h-4 text-white/50 mr-2" />
                  <input type="text" placeholder="Buscar jogador ou torneio..." className="bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-white/30 w-full" />
                </div>
              </div>

              <div className="absolute top-[10px] right-4 sm:right-6 lg:right-8 z-[200] flex flex-col items-end">
                <motion.div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer shadow-xl transition-colors duration-500"
                  style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-[24px] h-[24px] relative">
                    <motion.span animate={{ top: isOpen ? 10.5 : 4, rotate: isOpen ? 45 : 0 }} className="block w-full h-[3px] absolute left-0 transition-colors duration-500" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                    <motion.span animate={{ opacity: isOpen ? 0 : 1, top: 10.5 }} className="block w-full h-[3px] absolute left-0 transition-colors duration-500" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                    <motion.span animate={{ top: isOpen ? 10.5 : 17, rotate: isOpen ? -45 : 0 }} className="block w-full h-[3px] absolute left-0 transition-colors duration-500" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.ul className="absolute top-[70px] right-0 flex flex-col gap-[10px] m-0 p-0 list-none">
                      {floatingMenuItems.map((item, index) => (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, y: -20, scale: 0.5 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.5 }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                          className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer shadow-xl transition-transform hover:scale-110"
                          style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                          title={item.label}
                        >
                          <item.icon className="w-6 h-6 transition-colors duration-500" style={{ color: isLightMode ? '#FFF' : '#000' }} />
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10 pb-24 sm:pb-32 mt-[-20px]">
          <motion.div variants={netflixGlowVariants} initial="hidden" animate="visible" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[400px] bg-cyan-600/40 blur-[100px] rounded-full pointer-events-none" />

          <motion.div variants={netflixContainerVariants} initial="hidden" animate="visible" className="relative z-10">
            <motion.div variants={netflixTextVariants} className="mb-6 flex justify-center">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-sm font-bold tracking-wider uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                <Zap className="w-4 h-4" /> A nova era da competição
              </span>
            </motion.div>

            <motion.h1 variants={netflixTextVariants} className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6 text-white drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">
              DOMINE O<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                UNIVERSO MATZON
              </span>
            </motion.h1>

            <motion.p variants={netflixTextVariants} className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
              A infraestrutura definitiva para jogadores competitivos. Suba no ranking, conquiste torneios e construa o seu legado.
            </motion.p>
          </motion.div>
        </div>

      </header>
    </div>
  );
}
