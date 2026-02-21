'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Search, Trophy, Zap, Clock } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const opponents = [
  { name: 'Faker_EU', elo: 3840, rank: 'Elite', wins: 234, losses: 45, avatar: 'Faker_EU', online: true },
  { name: 'S1mple_Pro', elo: 3720, rank: 'Master', wins: 198, losses: 67, avatar: 'S1mple', online: true },
  { name: 'NiKo_CS', elo: 3650, rank: 'Master', wins: 187, losses: 72, avatar: 'NiKo_CS', online: false },
  { name: 'Caps_LoL', elo: 3580, rank: 'Diamond', wins: 165, losses: 88, avatar: 'Caps_LoL', online: true },
];

export default function DueloPage() {
  const [selected, setSelected] = useState<typeof opponents[0] | null>(null);
  const [challenged, setChallenged] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, #FF453A, #FF9F0A)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <Swords style={{ width: 32, height: 32, color: '#fff' }} />
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px' }}>Duelo 1v1</h1>
            <p style={{ color: 'var(--text-tertiary)', margin: 0 }}>Desafia um adversário diretamente</p>
          </div>

          {/* VS Preview */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, marginBottom: 48, padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://ui-avatars.com/api/?name=Faker&background=2563FF&color=fff&size=80" style={{ width: 72, height: 72, borderRadius: '50%', border: '3px solid #2563FF', marginBottom: 8 }} />
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>Tu</p>
              <p style={{ margin: 0, fontSize: 13, color: '#2563FF' }}>ELO 3450</p>
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--text-tertiary)', letterSpacing: 4 }}>VS</div>
            <div style={{ textAlign: 'center' }}>
              {selected ? (
                <>
                  <img src={`https://ui-avatars.com/api/?name=${selected.avatar}&background=FF453A&color=fff&size=80`} style={{ width: 72, height: 72, borderRadius: '50%', border: '3px solid #FF453A', marginBottom: 8 }} />
                  <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>{selected.name}</p>
                  <p style={{ margin: 0, fontSize: 13, color: '#FF453A' }}>ELO {selected.elo}</p>
                </>
              ) : (
                <div style={{ width: 72, height: 72, borderRadius: '50%', border: '2px dashed var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 28, color: 'var(--text-tertiary)' }}>?</span>
                </div>
              )}
              {!selected && <p style={{ margin: 0, fontSize: 13, color: 'var(--text-tertiary)' }}>Escolhe abaixo</p>}
            </div>
          </div>

          {/* Opponents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {opponents.map((opp, i) => (
              <div key={i} onClick={() => setSelected(opp)}
                style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: selected?.name === opp.name ? 'rgba(255,69,58,0.08)' : 'var(--bg-card)', border: `1px solid ${selected?.name === opp.name ? 'rgba(255,69,58,0.3)' : 'var(--border-soft)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s' }}>
                <div style={{ position: 'relative' }}>
                  <img src={`https://ui-avatars.com/api/?name=${opp.avatar}&background=333&color=fff&size=48`} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: opp.online ? '#30D158' : '#6B7280', border: '2px solid var(--bg-primary)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{opp.name}</span>
                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 6, background: 'rgba(37,99,255,0.15)', color: '#2563FF', fontWeight: 700 }}>{opp.rank}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 2 }}>
                    <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>ELO {opp.elo}</span>
                    <span style={{ fontSize: 12, color: '#30D158' }}>V {opp.wins}</span>
                    <span style={{ fontSize: 12, color: '#FF453A' }}>D {opp.losses}</span>
                  </div>
                </div>
                <Zap style={{ width: 18, height: 18, color: selected?.name === opp.name ? '#FF453A' : 'var(--text-tertiary)' }} />
              </div>
            ))}
          </div>

          {selected && (
            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              onClick={() => setChallenged(true)}
              style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, #FF453A, #FF9F0A)', border: 'none', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <Swords style={{ width: 20, height: 20 }} />
              Desafiar {selected.name}
            </motion.button>
          )}

          {challenged && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 16, padding: '14px 20px', background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.2)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <Clock style={{ width: 16, height: 16, display: 'inline', marginRight: 8, color: '#2563FF' }} />
              <span style={{ color: '#2563FF', fontWeight: 600 }}>Desafio enviado! A aguardar resposta...</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
