'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
export function AuthModal() {
  const { showAuthModal, authTab, closeAuthModal, login, openAuthModal } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const handleSubmit = () => { login(); router.push('/dashboard'); };
  return (
    <AnimatePresence>
      {showAuthModal && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAuthModal} style={{ position: 'fixed', inset: 0, zIndex: 998, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }} />
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, background: 'rgba(10,10,14,0.94)', backdropFilter: 'blur(48px)', WebkitBackdropFilter: 'blur(48px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '72px 20px 32px' }}>
            <div style={{ maxWidth: 400, margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}><span style={{ fontWeight: 900, fontSize: 14, color: '#fff' }}>MZ</span></div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: 0 }}>{authTab === 'login' ? 'Entrar na MATZON' : 'Criar conta'}</h2>
                </div>
                <button onClick={closeAuthModal} style={{ background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}><X style={{ width: 14, height: 14 }} /></button>
              </div>
              <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: 4, marginBottom: 20 }}>
                {(['login', 'register'] as const).map(tab => (
                  <button key={tab} onClick={() => openAuthModal(tab)} style={{ flex: 1, padding: '8px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: authTab === tab ? 'rgba(255,255,255,0.12)' : 'transparent', color: authTab === tab ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                    {tab === 'login' ? 'Entrar' : 'Registar'}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {authTab === 'register' && <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />}
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                <button onClick={handleSubmit} style={{ width: '100%', padding: '13px', borderRadius: 10, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', border: 'none', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', marginTop: 4 }}>
                  {authTab === 'login' ? 'Entrar' : 'Criar conta'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
