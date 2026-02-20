'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Users, Trophy, Swords, Globe, Target, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function CarouselFeatures() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <style>{`
        .swiper-button-next, .swiper-button-prev { color: #0A84FF !important; transform: scale(0.7); }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.3) !important; }
        .swiper-pagination-bullet-active { background: #0A84FF !important; opacity: 1 !important; }
      `}</style>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-[24px] overflow-hidden"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        {/* SLIDE 1: ESTATÍSTICAS */}
        <SwiperSlide>
          <div className="h-[360px] sm:h-[420px] flex flex-col items-center justify-center p-8 relative">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,132,255,0.08) 0%, transparent 60%)' }} />
            <h2 className="text-2xl sm:text-4xl font-black mb-10 text-center" style={{ color: 'var(--text-primary)' }}>
              O ECOSSISTEMA <span style={{ color: '#0A84FF' }}>DEFINITIVO</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 w-full max-w-3xl relative z-10">
              {[
                { icon: Users, value: '2.5M+', label: 'Jogadores', color: '#0A84FF' },
                { icon: Trophy, value: '$150k', label: 'Prémios', color: '#FFD60A' },
                { icon: Swords, value: '10k+', label: 'Torneios', color: '#BF5AF2' },
                { icon: Globe, value: 'Ao Vivo', label: 'Matchmaking', color: '#FF453A' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1"
                    style={{ backgroundColor: `${s.color}18` }}>
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black" style={{ color: 'var(--text-primary)' }}>{s.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2: RANKING */}
        <SwiperSlide>
          <div className="h-[360px] sm:h-[420px] flex items-center p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--bg-card) 40%, transparent)' }} />
            <div className="relative z-10 max-w-lg">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(10,132,255,0.12)' }}>
                <Target className="w-6 h-6" style={{ color: '#0A84FF' }} />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>Ranking Global</h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Compare-se com os melhores do mundo. Suba nas divisões de Elite e garanta o seu lugar na história do MATZON.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3: INFRAESTRUTURA */}
        <SwiperSlide>
          <div className="h-[360px] sm:h-[420px] flex items-center justify-end p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, var(--bg-card) 40%, transparent)' }} />
            <div className="relative z-10 max-w-lg text-right">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ml-auto" style={{ backgroundColor: 'rgba(191,90,242,0.12)' }}>
                <Zap className="w-6 h-6" style={{ color: '#BF5AF2' }} />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>Infraestrutura Pro</h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Chaves automáticas, anticheat integrado e perfis sociais completos para competir ao mais alto nível.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#0A84FF', color: '#fff' }}>
          Começar Agora <ArrowRight className="w-4 h-4" />
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all hover:opacity-80"
          style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>
          <Trophy className="w-4 h-4" style={{ color: '#FFD60A' }} /> Explorar Torneios
        </button>
      </motion.div>
    </section>
  );
}
