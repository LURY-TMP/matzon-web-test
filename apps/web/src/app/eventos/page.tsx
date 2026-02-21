'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Clock, Filter, Star } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const events = [
  { name: 'Champions Cup 2026', type: 'Torneio', prize: '€5,000', players: '128/256', date: '15 Mar', status: 'open', game: 'Valorant', color: '#2563FF' },
  { name: 'Winter Clash', type: 'Evento', prize: '€1,500', players: '64/64', date: '10 Mar', status: 'full', game: 'CS2', color: '#7C3AED' },
  { name: 'Pro League Season 3', type: 'Liga', prize: '€10,000', players: '32/32', date: '20 Mar', status: 'soon', game: 'LoL', color: '#FFD60A' },
  { name: 'Weekend Brawl', type: 'Evento', prize: '€500', players: '45/128', date: '8 Mar', status: 'open', game: 'Fortnite', color: '#30D158' },
  { name: 'Elite Invitational', type: 'Torneio', prize: '€25,000', players: '16/16', date: '1 Abr', status: 'invite', game: 'Dota 2', color: '#FF453A' },
  { name: 'Community Cup', type: 'Torneio', prize: '€250', players: '80/128', date: '12 Mar', status: 'open', game: 'Rocket League', color: '#06B6D4' },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  open:   { label: 'Inscrições abertas', color: '#30D158' },
  full:   { label: 'Esgotado', color: '#FF453A' },
  soon:   { label: 'Em breve', color: '#FF9F0A' },
  invite: { label: 'Convite apenas', color: '#7C3AED' },
};

export default function EventosPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px' }}>Eventos & Torneios</h1>
          <p style={{ color: 'var(--text-tertiary)', margin: '0 0 32px' }}>Compete, ganha, domina</p>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {['all', 'Torneio', 'Liga', 'Evento'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ padding: '8px 16px', borderRadius: 20, border: `1px solid ${filter === f ? '#2563FF' : 'var(--border-soft)'}`, background: filter === f ? 'rgba(37,99,255,0.12)' : 'transparent', color: filter === f ? '#2563FF' : 'var(--text-tertiary)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                {f === 'all' ? 'Todos' : f}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {events.filter(e => filter === 'all' || e.type === filter).map((ev, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                style={{ padding: '20px 24px', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: `${ev.color}20`, color: ev.color }}>{ev.type}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{ev.game}</span>
                    </div>
                    <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{ev.name}</h3>
                    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Trophy style={{ width: 13, height: 13, color: '#FFD60A' }} /> {ev.prize}
                      </span>
                      <span style={{ fontSize: 13, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Users style={{ width: 13, height: 13 }} /> {ev.players}
                      </span>
                      <span style={{ fontSize: 13, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Calendar style={{ width: 13, height: 13 }} /> {ev.date}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: statusConfig[ev.status].color }}>● {statusConfig[ev.status].label}</span>
                    <button style={{ padding: '10px 20px', borderRadius: 10, background: ev.status === 'open' ? 'var(--gradient-premium)' : 'var(--bg-elevated)', border: 'none', color: ev.status === 'open' ? '#fff' : 'var(--text-tertiary)', fontSize: 13, fontWeight: 700, cursor: ev.status === 'open' ? 'pointer' : 'default', opacity: ev.status === 'full' ? 0.5 : 1 }}>
                      {ev.status === 'open' ? 'Inscrever' : ev.status === 'full' ? 'Esgotado' : ev.status === 'soon' ? 'Lembrar' : 'Convite'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
