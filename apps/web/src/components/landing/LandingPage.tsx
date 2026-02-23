'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function LandingPage() {
  const router = useRouter();
  const { isLoggedIn, openAuthModal } = useAuth();
  const [activeTab, setActiveTab] = useState('Torneios');
  const [activePlayer, setActivePlayer] = useState(0);

  const tabs = [
    { label: 'Torneios', href: '/torneios' },
    { label: 'Comunidade', href: '/comunidade' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Ranking', href: '/ranking' },
  ];

  const players = [
    { name: 'Faker_EU', game: 'Valorant', elo: 4850, wins: 342, img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop', color: '#2563FF' },
    { name: 'S1mple', game: 'CS2', elo: 4720, wins: 298, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop', color: '#7C3AED' },
    { name: 'NiKo', game: 'CS2', elo: 4680, wins: 276, img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop', color: '#06B6D4' },
  ];
  const player = players[activePlayer];

  const tournaments = [
    { name: 'Champions Cup', prize: '5.000', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop', rating: 4.8, sub: true },
    { name: 'Pro League S3', prize: '10.000', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&auto=format&fit=crop', rating: 4.7, sub: false },
    { name: 'Winter Clash', prize: '2.500', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop', rating: 4.6, sub: false },
    { name: 'Elite Invitational', prize: '25.000', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop', rating: 4.9, sub: true },
    { name: 'Weekend Brawl', prize: '500', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&auto=format&fit=crop', rating: 4.4, sub: false },
  ];

  const handleCTA = () => isLoggedIn ? router.push('/dashboard') : openAuthModal();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0c', color: '#fff' }}>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '72px 16px 12px' }}>
        <nav style={{ display: 'flex', gap: 20, overflowX: 'auto' }}>
          {tabs.map(tab => (
            <button key={tab.label} onClick={() => { setActiveTab(tab.label); router.push(tab.href); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: activeTab === tab.label ? '#fff' : '#808085', borderBottom: activeTab === tab.label ? '2px solid #2563FF' : '2px solid transparent', paddingBottom: 4, whiteSpace: 'nowrap' }}>
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <section style={{ position: 'relative', paddingBottom: 48 }}>
        <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 50vw, 480px)' }}>
          <motion.img key={activePlayer} src={player.img} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center bottom, ' + player.color + '60 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #0a0a0c 100%)' }} />
          <button style={{ position: 'absolute', top: 16, left: 16, width: 44, height: 44, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Play style={{ width: 16, height: 16, color: '#fff', fill: '#fff' }} />
          </button>
          <div style={{ position: 'absolute', right: 12, top: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 64, height: 44, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}><img src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=200" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} /></div>
            <div style={{ width: 64, height: 44, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}><img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} /></div>
            <div style={{ width: 64, height: 44, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>99+</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 16px', marginTop: -24 }}>
          <span style={{ fontSize: 10, color: '#808085', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Top Jogador do Mes</span>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 60px)', fontWeight: 800, lineHeight: 1.0, margin: '8px 0 12px', letterSpacing: '-0.02em' }}>{player.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(s => <Star key={s} style={{ width: 12, height: 12, color: '#f5c518', fill: '#f5c518' }} />)}</div>
            <span style={{ fontWeight: 700, fontSize: 13 }}>{player.elo} ELO</span>
            <span style={{ color: '#808085', fontSize: 12 }}>- {player.wins} vitorias</span>
          </div>
          <div style={{ fontSize: 13, color: '#808085', marginBottom: 20, lineHeight: 1.6 }}>{player.game} - Especialista em clutch plays.</div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            <button onClick={handleCTA} style={{ flex: 1, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', color: '#fff', border: 'none', padding: '14px', borderRadius: 30, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
              {isLoggedIn ? 'Ir para Dashboard' : 'Comecar agora'}
            </button>
            <button onClick={handleCTA} style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
              <Plus style={{ width: 20, height: 20 }} />
            </button>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {players.map((_, i) => (<button key={i} onClick={() => setActivePlayer(i)} style={{ width: i === activePlayer ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === activePlayer ? '#2563FF' : 'rgba(255,255,255,0.2)' }} />))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 16px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Torneios em Destaque</h2>
          <button onClick={() => router.push('/torneios')} style={{ background: 'none', border: 'none', color: '#2563FF', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Ver todos</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 10 }}>
          {tournaments.map((t, i) => (
            <div key={i} onClick={() => router.push('/torneios')} style={{ background: '#18181c', borderRadius: 14, overflow: 'hidden', position: 'relative', height: 180, cursor: 'pointer' }}>
              <img src={t.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} />
              {t.sub && <span style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(255,159,10,0.9)', color: '#fff', fontSize: 9, padding: '2px 7px', borderRadius: 8, fontWeight: 700 }}>Premium</span>}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '28px 10px 10px', background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: '#f5c518', fontSize: 10, marginBottom: 2 }}><Star style={{ width: 10, height: 10, fill: '#f5c518' }} /> {t.rating}</div>
                <h3 style={{ fontSize: 11, fontWeight: 700, marginBottom: 2, color: '#fff' }}>{t.name}</h3>
                <div style={{ fontSize: 11, color: '#2563FF', fontWeight: 700 }}>EUR {t.prize}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 16px 60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Escolhe o teu plano</h2>
        <p style={{ color: '#808085', fontSize: 13, marginBottom: 28 }}>Compete sem limites.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { name: 'Starter', price: '0', period: 'gratis', features: ['5 torneios/mes', 'Chat basico', 'ELO basico'], featured: false },
            { name: 'Pro', price: '9.99', period: '/mes', features: ['Torneios ilimitados', 'Analytics', 'Badge Pro', 'Sem anuncios'], featured: true },
            { name: 'Elite', price: '24.99', period: '/mes', features: ['Tudo do Pro', 'Coaching IA', 'Aura exclusiva'], featured: false },
          ].map((plan, i) => (
            <div key={i} style={{ background: plan.featured ? '#1a1a22' : '#18181c', borderRadius: 18, padding: '20px 16px', textAlign: 'left', border: plan.featured ? '1px solid rgba(37,99,255,0.4)' : '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>{plan.name}</h3>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#2563FF' }}>EUR {plan.price}<span style={{ fontSize: 12, color: '#808085', fontWeight: 400 }}>{plan.period}</span></div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: plan.featured ? 16 : 0 }}>
                {plan.features.map((f, fi) => (<span key={fi} style={{ fontSize: 11, color: '#9CA3AF', background: 'rgba(255,255,255,0.05)', padding: '3px 9px', borderRadius: 20 }}>{f}</span>))}
              </div>
              {plan.featured && (<button onClick={() => openAuthModal('register')} style={{ width: '100%', background: 'linear-gradient(135deg, #2563FF, #7C3AED)', color: '#fff', border: 'none', padding: '13px', borderRadius: 16, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Subscrever</button>)}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
