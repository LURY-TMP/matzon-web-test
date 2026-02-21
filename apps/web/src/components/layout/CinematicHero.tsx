'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Thumbs, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

const slidesData = [
  { id: 1, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop', title: 'UNIVERSO MATZON', subtitle: 'A nova era da competição. Domine o ranking e construa o seu legado.', location: 'Arena Global' },
  { id: 2, image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop', title: 'RANKING DE ELITE', subtitle: 'Suba nas divisões e prove que está entre os melhores do mundo.', location: 'Divisão Competitiva' },
  { id: 3, image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop', title: 'INFRAESTRUTURA PRO', subtitle: 'Matchmaking instantâneo, anticheat e servidores de alta performance.', location: 'Tecnologia MATZON' },
  { id: 4, image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop', title: '$150K EM PRÉMIOS', subtitle: 'Compita em torneios diários e conquiste recompensas reais.', location: 'Grande Final' },
];

export function CinematicHero() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => { setHasAnimated(true); }, []);

  return (
    <section suppressHydrationWarning className="relative w-full overflow-hidden" data-theme="dark" style={{ height: '92vh' }}>
      <style>{`
        .swiper-slide-thumb-active { border: 2px solid #0A84FF !important; opacity: 1 !important; }
        .thumbs-swiper .swiper-slide { opacity: 0.4; transition: all 0.3s ease; cursor: pointer; border: 2px solid transparent; border-radius: 12px; }
        .thumbs-swiper .swiper-slide:hover { opacity: 0.7; }
      `}</style>

      {/* MAIN SWIPER */}
      <Swiper
        modules={[EffectFade, Thumbs, Autoplay]}
        effect="fade"
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')`, transform: 'scale(1.05)' }}>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)' }} />
            </div>

            <div className="absolute inset-0 flex items-center z-10 px-8 sm:px-16 lg:px-24">
              <div className="max-w-2xl">
                <div suppressHydrationWarning className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-widest" style={{ color: "#0A84FF" }}>
                  <Zap className="w-4 h-4" /> {slide.location}
                </div>

                {index === 0 && hasAnimated ? (
                  <motion.h1
                    initial={{ opacity: 0, scale: 1.3, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="font-black text-white mb-5 leading-none"
                    style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                  >
                    {slide.title}
                  </motion.h1>
                ) : (
                  <h1 className="font-black text-white mb-5 leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
                    {slide.title}
                  </h1>
                )}

                <p className="text-lg sm:text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {slide.subtitle}
                </p>

                <button className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:opacity-80"
                  style={{ backgroundColor: '#0A84FF', color: '#fff' }}>
                  Começar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBS SWIPER */}
      <div className="absolute bottom-8 right-8 z-20" style={{ width: 'min(480px, 50vw)' }}>
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          watchSlidesProgress
          spaceBetween={12}
          slidesPerView={3}
          className="thumbs-swiper"
          style={{ height: '90px' }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="overflow-hidden" style={{ borderRadius: 12 }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
              <div className="absolute inset-0 flex items-end p-2" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
                <span className="text-white font-bold text-[9px] uppercase tracking-wide truncate leading-tight">{slide.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
