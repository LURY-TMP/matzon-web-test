'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Trophy, AlertTriangle, BarChart2, Settings, Ban, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const stats = [
  { label: 'Utilizadores', value: '12,847', icon: Users, color: '#2563FF', change: '+124 hoje' },
  { label: 'Torneios ativos', value: '38', icon: Trophy, color: '#30D158', change: '+3 hoje' },
  { label: 'Reports', value: '14', icon: AlertTriangle, color: '#FF453A', change: '5 urgentes' },
  { label: 'Receita mês', value: '€8,420', icon: BarChart2, color: '#FFD60A', change: '+12% MoM' },
];

const reports = [
  { user: 'xXhacker99', reason: 'Cheating', date: '2h', severity: 'high' },
  { user: 'toxic_gamer', reason: 'Linguagem ofensiva', date: '4h', severity: 'medium' },
  { user: 'spammer01', reason: 'Spam no chat', date: '6h', severity: 'low' },
  { user: 'afk_player', reason: 'AFK em torneio', date: '1d', severity: 'medium' },
];

export default function AdminPage() {
  const [tab, setTab] = useState('overview');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Shield style={{ width: 28, height: 28, color: '#FF453A' }} />
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Painel Admin</h1>
          </div>
          <p style={{ color: 'var(--text-tertiary)', margin: '0 0 32px' }}>Gestão e controlo da plataforma</p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                style={{ padding: '20px 24px', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{s.label}</span>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <s.icon style={{ width: 16, height: 16, color: s.color }} />
                  </div>
                </div>
                <p style={{ margin: '0 0 4px', fontSize: 28, fontWeight: 800, color: 'var(--text-primary)' }}>{s.value}</p>
                <span style={{ fontSize: 12, color: s.color }}>{s.change}</span>
              </motion.div>
            ))}
          </div>

          {/* Reports */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <AlertTriangle style={{ width: 18, height: 18, color: '#FF453A' }} />
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Reports Pendentes</span>
              <span style={{ padding: '2px 8px', borderRadius: 6, background: 'rgba(255,69,58,0.15)', color: '#FF453A', fontSize: 12, fontWeight: 700, marginLeft: 4 }}>{reports.length}</span>
            </div>
            {reports.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderBottom: i < reports.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>
                <img src={`https://ui-avatars.com/api/?name=${r.user}&background=333&color=fff&size=40`} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 15 }}>{r.user}</span>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--text-tertiary)' }}>{r.reason} • {r.date}</p>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: r.severity === 'high' ? 'rgba(255,69,58,0.15)' : r.severity === 'medium' ? 'rgba(255,159,10,0.15)' : 'rgba(107,114,128,0.15)', color: r.severity === 'high' ? '#FF453A' : r.severity === 'medium' ? '#FF9F0A' : '#6B7280' }}>{r.severity}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(48,209,88,0.1)', border: '1px solid rgba(48,209,88,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <CheckCircle style={{ width: 16, height: 16, color: '#30D158' }} />
                  </button>
                  <button style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(255,69,58,0.1)', border: '1px solid rgba(255,69,58,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Ban style={{ width: 16, height: 16, color: '#FF453A' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
