'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'Torneios',   href: '/torneios',   icon: '🏆' },
  { label: 'Eventos',    href: '/eventos',    icon: '⚽' },
  { label: 'Ranking',    href: '/ranking',    icon: '📊' },
  { label: 'Comunidade', href: '/comunidade', icon: '👥' },
  { label: 'Chat',       href: '/chat',       icon: '💬' },
  { label: 'Perfil',     href: '/perfil',     icon: '👤' },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 64,
        backgroundColor: 'rgba(10,10,14,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <div onClick={() => router.push('/')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: '#fff' }}>M</div>
          <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: -0.5, color: '#fff' }}>
            MATZ<span style={{ fontWeight: 400, fontFamily: 'Georgia, serif', fontSize: 20 }}>ON</span>
          </div>
        </div>

        {/* Botão Chat direto na navbar */}
        <button onClick={() => router.push('/chat')} style={{ background: pathname === '/chat' ? 'rgba(0,94,250,0.2)' : 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 18, position: 'relative' }}>
          💬
          <span style={{ position: 'absolute', top: -4, right: -4, width: 14, height: 14, backgroundColor: '#EA4335', borderRadius: '50%', border: '2px solid rgba(10,10,14,0.92)', fontSize: 8, fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
        </button>

        <button onClick={() => setOpen(true)} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, width: 40, height: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer', padding: 0 }}>
          <span style={{ display: 'block', width: 18, height: 2, backgroundColor: '#fff', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 18, height: 2, backgroundColor: '#fff', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 12, height: 2, backgroundColor: '#fff', borderRadius: 2, alignSelf: 'flex-start', marginLeft: 11 }} />
        </button>
      </nav>

      {open && <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />}

      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 400,
        width: 280, backgroundColor: '#0D1625',
        borderLeft: '1px solid rgba(255,255,255,0.08)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column', padding: '0 0 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: -0.5 }}>
            MATZ<span style={{ fontWeight: 400, fontFamily: 'Georgia, serif', fontSize: 18 }}>ON</span>
          </div>
          <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>
            <X style={{ width: 14, height: 14 }} />
          </button>
        </div>

        <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <button key={link.href} onClick={() => { router.push(link.href); setOpen(false); }} style={{ background: active ? 'rgba(37,99,255,0.15)' : 'none', border: 'none', borderRadius: 10, padding: '13px 16px', textAlign: 'left', cursor: 'pointer', fontSize: 15, fontWeight: active ? 700 : 500, color: active ? '#fff' : 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 12, width: '100%', borderLeft: active ? '3px solid #2563FF' : '3px solid transparent' }}>
                <span style={{ fontSize: 18 }}>{link.icon}</span>
                {link.label}
                {link.label === 'Chat' && <span style={{ marginLeft: 'auto', width: 18, height: 18, backgroundColor: '#EA4335', borderRadius: '50%', fontSize: 10, fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>}
              </button>
            );
          })}
        </div>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textAlign: 'center', letterSpacing: 1 }}>MATZON © 2026 · Liga Elite & Champions Cup</div>
        </div>
      </div>
    </>
  );
}
