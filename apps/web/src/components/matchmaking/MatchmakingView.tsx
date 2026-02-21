'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Trophy, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function MatchmakingView() {
  const [status, setStatus] = useState<'idle' | 'searching' | 'found'>('idle');
  const [timer, setTimer] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'searching') {
      interval = setInterval(() => {
        setTimer(t => {
          if (t >= 8) { setStatus('found'); return t; }
          return t + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const startSearch = () => { setStatus('searching'); setTimer(0); };
  const cancelSearch = () => { setStatus('idle'); setTimer(0); };

  const progress = Math.min((timer / 8) * 100, 100);
  const circumference = 2 * Math.PI * 54;
  const strokeDash = circumference - (progress / 100) * circumference;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
          <Zap style={{ color: '#2563FF', width: 20, height: 20 }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Matchmaking</span>
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: 1.1 }}>
          Encontra o teu<br />
          <span style={{ background: 'var(--gradient-premium)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>adversário</span>
        </h1>
      </motion.div>

      {/* VS Card */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', gap: 'clamp(24px, 5vw, 80px)', marginBottom: 64 }}>

        {/* Player 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg, #2563FF, #7C3AED)', padding: 3 }}>
              <img src="https://ui-avatars.com/api/?name=Faker&background=0B0B0F&color=fff&size=90" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 22, height: 22, background: '#30D158', borderRadius: '50%', border: '2px solid var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>Faker</p>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)' }}>ELO 3450</p>
          </div>
          <div style={{ padding: '4px 12px', borderRadius: 20, background: 'rgba(37,99,255,0.12)', border: '1px solid rgba(37,99,255,0.2)' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#2563FF' }}>Elite Global</span>
          </div>
        </div>

        {/* VS + Timer */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {status === 'searching' ? (
            <div style={{ position: 'relative', width: 120, height: 120 }}>
              <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="60" cy="60" r="54" fill="none" stroke="var(--border-soft)" strokeWidth="4" />
                <motion.circle cx="60" cy="60" r="54" fill="none" stroke="url(#grad)" strokeWidth="4"
                  strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDash}
                  style={{ transition: 'stroke-dashoffset 1s linear' }} />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563FF" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)' }}>{timer}s</span>
                <span style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>a procurar</span>
              </div>
            </div>
          ) : status === 'found' ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
              style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--gradient-premium)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trophy style={{ width: 36, height: 36, color: '#fff' }} />
            </motion.div>
          ) : (
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--text-tertiary)', letterSpacing: 4 }}>VS</div>
          )}
        </div>

        {/* Player 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          {status === 'found' ? (
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg, #FF453A, #FF9F0A)', padding: 3 }}>
                  <img src="https://ui-avatars.com/api/?name=S1mple&background=0B0B0F&color=fff&size=90" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>S1mple</p>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)' }}>ELO 3380</p>
              </div>
              <div style={{ padding: '4px 12px', borderRadius: 20, background: 'rgba(255,69,58,0.12)', border: '1px solid rgba(255,69,58,0.2)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#FF453A' }}>Master</span>
              </div>
            </motion.div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 90, height: 90, borderRadius: '50%', border: '2px dashed var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {status === 'searching' ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
                    <Zap style={{ width: 32, height: 32, color: '#2563FF' }} />
                  </motion.div>
                ) : (
                  <span style={{ fontSize: 32, color: 'var(--text-tertiary)' }}>?</span>
                )}
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: 'var(--text-tertiary)' }}>{status === 'searching' ? 'A procurar...' : 'Adversário'}</p>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)' }}>ELO ???</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ display: 'flex', gap: 24, marginBottom: 48 }}>
        {[{ label: 'Online', value: '2,847' }, { label: 'Em jogo', value: '1,203' }, { label: 'Tempo médio', value: '23s' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '12px 20px', borderRadius: 'var(--radius-md)', background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>{s.value}</p>
            <p style={{ margin: 0, fontSize: 11, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.button key="start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            onClick={startSearch}
            style={{ padding: '16px 48px', borderRadius: 'var(--radius-xl)', background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.05em', boxShadow: 'var(--shadow-glow-accent)' }}>
            Iniciar Matchmaking
          </motion.button>
        )}
        {status === 'searching' && (
          <motion.button key="cancel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            onClick={cancelSearch}
            style={{ padding: '14px 40px', borderRadius: 'var(--radius-xl)', background: 'transparent', border: '1px solid var(--border-medium)', color: 'var(--text-secondary)', fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <X style={{ width: 16, height: 16 }} /> Cancelar
          </motion.button>
        )}
        {status === 'found' && (
          <motion.div key="found" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>Adversário encontrado!</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={cancelSearch} style={{ padding: '14px 32px', borderRadius: 'var(--radius-xl)', background: 'transparent', border: '1px solid var(--border-medium)', color: 'var(--text-secondary)', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Recusar</button>
              <button style={{ padding: '14px 32px', borderRadius: 'var(--radius-xl)', background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: 'var(--shadow-glow-accent)' }}>Aceitar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
