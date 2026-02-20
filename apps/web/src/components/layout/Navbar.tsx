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

  const netflixGlowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 0.4, scale: 1.5, transition: { duration: 2, ease: "easeOut" } }
  };

  const bannerImageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <header className="relative w-full max-w-7xl mx-auto flex flex-col rounded-[30px] sm:rounded-[40px] overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>

        {/* NAVBAR */}
        <nav className="w-full z-50 backdrop-blur-xl h-20 relative ">
          <div className="w-full px-4 sm:px-6 lg:px-8 h-full relative">
            <div className="flex items-center justify-between h-full">

              {/* LOGO */}
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
                    animate={{ x: isLightMode ? -100 : 0, scale: isLightMode ? 0.70 : 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  >
                    N
                  </motion.div>
                </div>
              </div>

              {/* SEARCH */}
              <div className="hidden md:flex flex-1 justify-center px-8">
                <div className="flex items-center bg-white/5 rounded-full px-4 py-2  hover:border-white/20 transition-colors focus-within:border-white/40 w-full max-w-md">
                  <Search className="w-4 h-4 text-white/50 mr-2" />
                  <input type="text" placeholder="Buscar jogador ou torneio..." className="bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-white/30 w-full" />
                </div>
              </div>

              {/* MENU HAMBURGUER */}
              <div className="absolute top-[10px] right-4 sm:right-6 lg:right-8 z-[999] flex flex-col items-end">
                <motion.div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer shadow-xl transition-colors duration-500"
                  style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-[24px] h-[24px] relative">
                    <motion.span animate={{ top: isOpen ? 10.5 : 4, rotate: isOpen ? 45 : 0 }} className="block w-full h-[3px] absolute left-0" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                    <motion.span animate={{ opacity: isOpen ? 0 : 1, top: 10.5 }} className="block w-full h-[3px] absolute left-0" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
                    <motion.span animate={{ top: isOpen ? 10.5 : 17, rotate: isOpen ? -45 : 0 }} className="block w-full h-[3px] absolute left-0" style={{ backgroundColor: isLightMode ? '#FFF' : '#000' }} />
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
                          className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer shadow-xl hover:scale-110 transition-transform"
                          style={{ backgroundColor: isLightMode ? '#000' : '#FFF' }}
                          title={item.label}
                        >
                          <item.icon className="w-6 h-6" style={{ color: isLightMode ? '#FFF' : '#000' }} />
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </nav>

        {/* BANNER */}
        <div className="relative w-full overflow-hidden ">
          <motion.div
            variants={netflixGlowVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/30 blur-[100px] rounded-full pointer-events-none z-10"
          />
          <motion.div
            variants={bannerImageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-video sm:aspect-[21/9]"
          >
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
              alt="MATZON Arena eSports"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/90 backdrop-blur-md text-white text-sm font-black tracking-wider uppercase">
            <div className="absolute top-3 left-3 z-20 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-red-600/90 backdrop-blur-md text-white text-[7px] font-black tracking-wider uppercase"><Zap className="w-2 h-2 fill-current" />Em Destaque</div>
            </div>
          </motion.div>
        </div>

      </header>
    </div>
  );
}
