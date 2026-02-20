'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Trophy, Swords, Zap, ArrowRight, Globe, Users, Target } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperStyles = `
  .swiper-button-next, .swiper-button-prev {
    color: #22d3ee;
    background-color: rgba(0,0,0,0.5);
    padding: 2rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  .swiper-button-next::after, .swiper-button-prev::after {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .swiper-pagination-bullet { background-color: #ffffff; opacity: 0.5; }
  .swiper-pagination-bullet-active { background-color: #22d3ee; opacity: 1; }
`;

const carouselSlides = [
  {
    type: 'stats',
    content: [
      { icon: Users, value: '2.5M+', label: 'Jogadores Ativos', color: 'text-white' },
      { icon: Trophy, value: '$150k', label: 'Prémios Distribuídos', color: 'text-white' },
      { icon: Swords, value: '10k+', label: 'Torneios Realizados', color: 'text-white' },
      { icon: Globe, value: 'Ao Vivo', label: 'Matchmaking Global', color: 'text-cyan-400' },
    ],
  },
  {
    type: 'feature',
    title: 'Ranking Global',
    description: 'Compare-se com os melhores e suba nas classificações mundiais.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
  },
  {
    type: 'feature',
    title: 'Outros Recursos',
    description: 'Descubra comunidades, eventos exclusivos e muito mais.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
  },
];

export function LandingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <style>{swiperStyles}</style>

      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614726365345-5df0b457319c?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <motion.div className="relative z-10 max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-sm font-bold tracking-wider uppercase">
              <Zap className="w-4 h-4" /> A nova era da competição
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6 font-oswald">
            DOMINE O<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              UNIVERSO MATZON
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            A infraestrutura definitiva para jogadores competitivos. Suba no ranking, conquiste torneios e construa o seu legado.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10">
              <Trophy className="w-5 h-5" /> Explorar Torneios
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10"
          >
            {carouselSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px] md:h-[600px] bg-gray-800 rounded-3xl overflow-hidden flex items-center justify-center">
                  {slide.image && (
                    <>
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('${slide.image}')` }} />
                      <div className="absolute inset-0 bg-black/60" />
                    </>
                  )}
                  <div className="relative z-10 text-center p-8 max-w-4xl">
                    {slide.type === 'stats' ? (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {slide.content.map((stat, i) => (
                          <div key={i} className="flex flex-col items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                            <stat.icon className={`w-12 h-12 mb-4 ${stat.color}`} />
                            <span className={`text-4xl md:text-5xl font-black ${stat.color}`}>{stat.value}</span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-wider mt-2">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="mb-6 inline-block p-4 bg-cyan-500/20 rounded-full backdrop-blur-md">
                          {React.createElement(slide.icon, { className: "w-12 h-12 text-cyan-400" })}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 font-oswald">{slide.title}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                        <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-colors">
                          Saiba Mais
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
