'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Home, LayoutGrid, User } from 'lucide-react';

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

  const logoBorderColor = isLightMode ? '#000000' : '#FFFFFF';
  const logoBallBg = isLightMode ? '#000000' : '#FFFFFF';
  const logoTextColor = isLightMode ? '#FFFFFF' : '#000000';
  const logoNColor = isLightMode ? '#000000' : '#FFFFFF';
  const menuBg = isLightMode ? '#000000' : '#FFFFFF';
  const menuIconColor = isLightMode ? '#FFFFFF' : '#000000';
  const menuLineColor = isLightMode ? '#FFFFFF' : '#000000';

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between h-20">

        {/* LOGO — solto */}
        <div className="scale-[0.55] sm:scale-[0.65] origin-left">
          <div className="flex items-center gap-[16px]">
            <div
              className="w-[148px] h-[86px] rounded-full flex items-center p-[6px] pointer-events-none"
              style={{ border: `7px solid ${logoBorderColor}`, transition: 'border-color 0.5s' }}
            >
              <motion.div
                className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer z-20 pointer-events-auto"
                style={{ backgroundColor: logoBallBg }}
                animate={{ x: isLightMode ? 0 : 62 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                onClick={() => setIsLightMode(!isLightMode)}
              >
                <span className="text-[14px] font-black tracking-[0.5px] select-none pointer-events-none" style={{ color: logoTextColor }}>
                  MATZ
                </span>
              </motion.div>
            </div>
            <motion.div
              className="text-[95px] font-black leading-[0.8] -ml-1 select-none cursor-pointer hover:opacity-80"
              style={{ color: logoNColor, transformOrigin: 'center center' }}
              animate={{ x: isLightMode ? -100 : 0, scale: isLightMode ? 0.70 : 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              N
            </motion.div>
          </div>
        </div>

        {/* HAMBURGUER — solto */}
        <div className="flex flex-col items-end z-[999]">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer shadow-xl"
            style={{ backgroundColor: menuBg }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-[20px] h-[20px] relative">
              <motion.span animate={{ top: isOpen ? 8.5 : 3, rotate: isOpen ? 45 : 0 }} className="block w-full h-[2.5px] absolute left-0" style={{ backgroundColor: menuLineColor }} />
              <motion.span animate={{ opacity: isOpen ? 0 : 1, top: 8.5 }} className="block w-full h-[2.5px] absolute left-0" style={{ backgroundColor: menuLineColor }} />
              <motion.span animate={{ top: isOpen ? 8.5 : 14, rotate: isOpen ? -45 : 0 }} className="block w-full h-[2.5px] absolute left-0" style={{ backgroundColor: menuLineColor }} />
            </div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.ul className="absolute top-[70px] right-4 sm:right-6 lg:right-8 flex flex-col gap-[10px] m-0 p-0 list-none">
                {floatingMenuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ delay: index * 0.06, type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center gap-3 px-4 h-[46px] rounded-full cursor-pointer shadow-xl hover:scale-105 transition-transform"
                    style={{ backgroundColor: menuBg, minWidth: 140 }}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" style={{ color: menuIconColor }} />
                    <span className="text-sm font-semibold" style={{ color: menuIconColor }}>{item.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
