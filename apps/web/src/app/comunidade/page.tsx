'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Trophy, Flame, Plus, Shield } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const clans = [
  { name: 'Shadow Legion', tag: 'SHL', members: 48, rank: 1, elo: 4200, wins: 234, region: 'EU', color: '#7C3AED' },
  { name: 'Storm Riders', tag: 'STR', members: 32, rank: 2, elo: 4050, wins: 198, region: 'EU', color: '#2563FF' },
  { name: 'Iron Wolves', tag: 'IRW', members: 45, rank: 3, elo: 3980, wins: 187, region: 'PT', color: '#FF9F0A' },
  { name: 'Neon Phoenix', tag: 'NPX', members: 28, rank: 4, elo: 3850, wins: 165, region: 'BR', color: '#06B6D4' },
  { name: 'Dark Matter', tag: 'DKM', members: 40, rank: 5, elo: 3720, wins: 154, region: 'NA', color: '#FF453A' },
  { name: 'Cosmic Blaze', tag: 'CBL', members: 22, rank: 6, elo: 3640, wins: 142, region: 'AS', color: '#30D158' },
];

export default function ComunidadePage() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('clans');
  const filtered = clans.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
            <div>
              <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px' }}>Comunidade</h1>
              <p style={{ color: 'var(--text-tertiary)', margin: 0 }}>Junta-te ao teu clã e domina</p>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 'var(--radius-md)', background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
              <Plus style={{ width: 16, height: 16 }} /> Criar Clã
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 12, padding: 4, marginBottom: 24, width: 'fit-content' }}>
            {[['clans', 'Clãs'], ['events', 'Eventos'], ['feed', 'Feed']].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)}
                style={{ padding: '8px 20px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
                  background: tab === key ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: tab === key ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>{label}</button>
            ))}
          </div>

          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: 24 }}>
            <Search style={{ width: 16, height: 16, color: 'var(--text-tertiary)' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar clãs..."
              style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: 15, width: '100%' }} />
          </div>

          {/* Clans Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((clan, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-tertiary)', width: 24, textAlign: 'center' }}>
                  {clan.rank <= 3 ? ['🥇','🥈','🥉'][clan.rank-1] : clan.rank}
                </div>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${clan.color}20`, border: `1px solid ${clan.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield style={{ width: 22, height: 22, color: clan.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                    <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>{clan.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, background: `${clan.color}20`, color: clan.color }}>[{clan.tag}]</span>
                    <span style={{ fontSize: 11, color: 'var(--text-tertiary)', marginLeft: 4 }}>{clan.region}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <span style={{ fontSize: 12, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Users style={{ width: 12, height: 12 }} /> {clan.members} membros
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Trophy style={{ width: 12, height: 12 }} /> {clan.wins} vitórias
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Flame style={{ width: 12, height: 12 }} /> ELO {clan.elo}
                    </span>
                  </div>
                </div>
                <button style={{ padding: '8px 16px', borderRadius: 10, background: `${clan.color}15`, border: `1px solid ${clan.color}30`, color: clan.color, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                  Entrar
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
