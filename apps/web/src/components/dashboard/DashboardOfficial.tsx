'use client';

import React, { useState } from 'react';
import { User, Search, Trophy, Calendar, BarChart2, Shield, Users } from 'lucide-react';

const flexPanels = [
  { id: 0, title: 'Social Zone', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop' },
  { id: 1, title: 'Inovação', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Explorar', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Jogos', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Vibes', img: 'https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=1000&auto=format&fit=crop' },
];

const gamesData = [
  { title: 'Storm Coin', sub: 'Hold and Win 3x3', img: 'https://images.unsplash.com/photo-1614726365345-5df0b457319c?q=80&w=1000&auto=format&fit=crop' },
  { title: 'Midgard Zombies', sub: 'Adventure', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop' },
  { title: 'Cyber Racing', sub: 'Fast paced', img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=1000&auto=format&fit=crop' },
];

const categoriesData = [
  { name: 'Slots', img: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300' },
  { name: 'Ao Vivo', img: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=300' },
  { name: 'Tech', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300' },
  { name: 'Crash', img: 'https://images.unsplash.com/photo-1635326444826-06c8f8b84105?w=300' },
  { name: 'TV Games', img: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=300' },
  { name: 'Bingo', img: 'https://images.unsplash.com/photo-1520696342893-614745507b66?w=300' },
  { name: 'Cards', img: 'https://images.unsplash.com/photo-1628151016021-36b334208a3d?w=300' },
];

export function DashboardOfficial() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <div className="w-full flex flex-col pb-10 pt-32">

      {/* SEARCH NAV */}
      <nav className="w-[90%] max-w-[700px] mx-auto mb-[30px] p-5 rounded-[40px] flex flex-col gap-[15px]"
        style={{ backgroundColor: 'var(--bg-card)', boxShadow: '0 0 40px rgba(10,132,255,0.08)' }}>
        <div className="flex items-center justify-between gap-2.5 flex-wrap sm:flex-nowrap">
          <button className="rounded-[50px] font-bold text-[13px] flex items-center justify-center px-5 py-2.5"
            style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-primary)' }}>
            Dash
          </button>
          <div className="flex-grow rounded-[50px] font-bold text-[13px] flex items-center justify-between px-5 py-2.5"
            style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }}>
            <span>Nome do Usuário</span>
            <User className="w-[18px] h-[18px]" style={{ color: 'var(--text-tertiary)' }} />
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex-grow rounded-[50px] font-bold text-[13px] flex items-center justify-between px-5 py-2.5"
            style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Search Results</span>
            <Search className="w-[18px] h-[18px]" style={{ color: 'var(--text-tertiary)' }} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2.5 flex-wrap sm:flex-nowrap">
          <button className="rounded-[50px] font-bold text-[13px] px-5 py-2.5"
            style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-primary)' }}>
            Filtros
          </button>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {[{ icon: Trophy }, { icon: Calendar }, { icon: BarChart2 }, { icon: Shield }, { icon: Users }].map((btn, idx) => (
              <button key={idx} className="rounded-[50px] flex items-center justify-center px-4 py-2.5 shrink-0"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
                <btn.icon className="w-[18px] h-[18px]" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* FLEX PANELS HERO */}
      <main id="dashboard-hero" className="flex w-[95%] max-w-[1400px] h-[400px] md:h-[65vh] mx-auto mb-[50px] gap-[15px] flex-col md:flex-row">
        {flexPanels.map((panel) => (
          <div key={panel.id} onClick={() => setActivePanel(panel.id)}
            className="relative bg-cover bg-center rounded-[25px] md:rounded-[40px] text-white cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url('${panel.img}')`,
              flex: activePanel === panel.id ? '5' : '0.5',
              transition: 'flex 0.7s cubic-bezier(0.05,0.61,0.41,0.95)'
            }}>
            <h3 className="absolute bottom-5 left-5 m-0 text-[24px] font-bold text-white px-[25px] py-2.5 rounded-[20px] transition-opacity duration-300"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', opacity: activePanel === panel.id ? 1 : 0 }}>
              {panel.title}
            </h3>
          </div>
        ))}
      </main>

      {/* EM DESTAQUE */}
      <section className="w-[95%] max-w-[1400px] mx-auto mb-[40px] flex flex-col gap-[20px]">
        <div className="flex items-center justify-between px-2.5">
          <div className="flex items-center gap-2.5 text-[22px] font-[800]" style={{ color: 'var(--text-primary)' }}>
            Em destaque
            <span className="text-white text-[11px] font-[700] uppercase px-[10px] py-1 rounded-[20px]" style={{ backgroundColor: '#0A84FF' }}>1xGames</span>
          </div>
          <button className="px-3.5 py-1.5 rounded-[20px] text-[12px] font-[700]"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}>Ver tudo</button>
        </div>
        <div className="flex gap-[15px] overflow-x-auto px-[5px] pb-[20px] hide-scrollbar snap-x snap-mandatory">
          {gamesData.map((game, idx) => (
            <div key={idx} className="min-w-[240px] md:min-w-[280px] h-[150px] md:h-[180px] rounded-[25px] bg-cover bg-center snap-start relative cursor-pointer overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              style={{ backgroundImage: `url('${game.img}')` }}>
              <div className="absolute bottom-0 left-0 w-full p-[15px] text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <span className="block text-[16px] font-[800] mb-1">{game.title}</span>
                <span className="text-[12px] opacity-80">{game.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="w-[95%] max-w-[1400px] mx-auto mb-[40px] flex flex-col gap-[20px]">
        <div className="flex items-center justify-between px-2.5">
          <div className="flex items-center gap-2.5 text-[22px] font-[800]" style={{ color: 'var(--text-primary)' }}>
            Categorias
            <span className="text-white text-[11px] font-[700] uppercase px-[10px] py-1 rounded-[20px]" style={{ backgroundColor: '#BF5AF2' }}>Casino</span>
          </div>
          <button className="px-3.5 py-1.5 rounded-[20px] text-[12px] font-[700]"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}>Todos</button>
        </div>
        <div className="flex gap-[15px] overflow-x-auto px-[5px] pb-[20px] hide-scrollbar snap-x snap-mandatory">
          {categoriesData.map((cat, idx) => (
            <div key={idx} className="min-w-[110px] h-[110px] rounded-[20px] snap-start relative cursor-pointer overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover absolute inset-0" />
              <span className="text-[11px] font-[800] text-white text-center absolute bottom-0 left-0 w-full z-20 px-0.5 py-2"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="w-[95%] max-w-[1400px] mx-auto mb-[40px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-2.5 px-2.5 text-[22px] font-[800]" style={{ color: 'var(--text-primary)' }}>
          Selecionado para si
          <span className="text-white text-[11px] font-[700] uppercase px-[10px] py-1 rounded-[20px]" style={{ backgroundColor: '#FF453A' }}>Casino</span>
        </div>
        <div className="w-full h-[200px] md:h-[250px] rounded-[30px] bg-cover bg-center relative overflow-hidden cursor-pointer"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=1000&auto=format&fit=crop')" }}>
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} />
          <div className="absolute bottom-5 left-5 text-white max-w-[70%] z-20">
            <h2 className="text-[22px] md:text-[28px] font-[900] m-0 mb-1">Torneios</h2>
            <p className="text-[14px] opacity-90 mb-3.5">Jogue nos melhores torneios e ganhe prémios exclusivos.</p>
            <button className="text-white px-[25px] py-2.5 rounded-[20px] font-[800] text-[14px]"
              style={{ background: 'linear-gradient(to right, #FF9F0A, #FF453A)' }}>
              Jogue e ganhe!
            </button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}} />
    </div>
  );
}
