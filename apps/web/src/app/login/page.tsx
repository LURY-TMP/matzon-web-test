'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = () => router.push('/dashboard');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
        style={{ width: '100%', maxWidth: 420, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 32, padding: 'clamp(32px, 5vw, 48px)', backdropFilter: 'blur(20px)' }}>

        {/* Logo Oficial */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ transform: 'scale(0.5)', transformOrigin: 'center', display: 'flex', alignItems: 'center', gap: 16, height: 86 }}>
            <div style={{ width: 148, height: 86, borderRadius: 999, display: 'flex', alignItems: 'center', padding: 6, border: '7px solid #FFFFFF', flexShrink: 0 }}>
              <motion.div
                style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', x: 62 }}
              >
                <span style={{ fontSize: 14, fontWeight: 900, letterSpacing: 0.5, color: '#000', userSelect: 'none' }}>MATZ</span>
              </motion.div>
            </div>
            <div style={{ fontSize: 95, fontWeight: 900, lineHeight: 0.8, marginLeft: -4, color: '#FFFFFF', userSelect: 'none' }}>N</div>
          </div>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 4, marginBottom: 32 }}>
          {['Entrar', 'Registar'].map((label, i) => (
            <button key={i} onClick={() => setIsLogin(i === 0)}
              style={{ flex: 1, padding: '10px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
                background: (isLogin ? i === 0 : i === 1) ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: (isLogin ? i === 0 : i === 1) ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
              {label}
            </button>
          ))}
        </div>

        {/* Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
          {!isLogin && (
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>Username</label>
              <input type="text" placeholder="Faker_PT" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: 'var(--text-primary)', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
            </div>
          )}
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>Email</label>
            <input type="email" placeholder="faker@matzon.gg" value={email} onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: 'var(--text-primary)', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showPass ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', padding: '14px 48px 14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: 'var(--text-primary)', fontSize: 15, outline: 'none', boxSizing: 'border-box' }} />
              <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-tertiary)', display: 'flex' }}>
                {showPass ? <EyeOff style={{ width: 18, height: 18 }} /> : <Eye style={{ width: 18, height: 18 }} />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button onClick={handleSubmit}
          style={{ width: '100%', padding: '16px', borderRadius: 16, background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: 'var(--shadow-glow-accent)', letterSpacing: '0.03em', marginBottom: 20 }}>
          {isLogin ? 'Entrar' : 'Criar conta'}
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border-soft)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>ou continua com</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-soft)' }} />
        </div>

        {/* Social */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          {['Discord', 'Google', 'Twitch'].map((s, i) => (
            <button key={i} style={{ flex: 1, padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{s}</button>
          ))}
        </div>

        {/* Footer */}
        <p style={{ margin: 0, textAlign: 'center', fontSize: 13, color: 'var(--text-tertiary)' }}>
          {isLogin ? 'Não tens conta? ' : 'Já tens conta? '}
          <button onClick={() => setIsLogin(!isLogin)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#2563FF', padding: 0 }}>
            {isLogin ? 'Regista-te' : 'Entra aqui'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
