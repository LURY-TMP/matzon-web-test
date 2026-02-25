'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Dashboard', href: '/dashboard', emoji: '🏠' },
  { label: 'Torneios', href: '/torneios', emoji: '🏆' },
  { label: 'Eventos', href: '/eventos', emoji: '⚽' },
  { label: 'Ranking', href: '/ranking', emoji: '📊' },
  { label: 'Comunidade', href: '/comunidade', emoji: '👥' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigate = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 64,
        backgroundColor: 'rgba(10,10,14,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)', zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
      }}>

        {/* LOGO */}
        <div
          onClick={() => navigate('/dashboard')}
          style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: 9,
            background: 'linear-gradient(135deg, #2563FF, #7C3AED)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, fontWeight: 900, color: '#fff', flexShrink: 0,
          }}>M</div>
          <span style={{ fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '-0.3px' }}>
            MATZ<span style={{ fontFamily: 'serif', fontWeight: 400 }}>ON</span>
          </span>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
            backgroundColor: 'rgba(255,255,255,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 5, padding: 0,
          }}
        >
          <span style={{ display: 'block', width: 18, height: 2, backgroundColor: '#fff', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 18, height: 2, backgroundColor: '#fff', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 12, height: 2, backgroundColor: '#fff', borderRadius: 2 }} />
        </button>
      </nav>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* DRAWER */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 280, zIndex: 400,
        backgroundColor: '#0D1625', borderLeft: '1px solid rgba(255,255,255,0.08)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column', padding: '0 0 32px',
      }}>
        {/* DRAWER HEADER */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px', height: 64, borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <span style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>
            MATZ<span style={{ fontFamily: 'serif', fontWeight: 400 }}>ON</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'none', border: 'none', color: '#9AA4B6',
              fontSize: 22, cursor: 'pointer', lineHeight: 1,
            }}
          >✕</button>
        </div>

        {/* LINKS */}
        <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '13px 16px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  backgroundColor: active ? 'rgba(37,99,255,0.15)' : 'transparent',
                  borderLeft: active ? '3px solid #2563FF' : '3px solid transparent',
                  color: active ? '#fff' : '#9AA4B6',
                  fontSize: 14, fontWeight: active ? 700 : 500, textAlign: 'left',
                  transition: 'all 0.15s ease',
                }}
              >
                <span style={{ fontSize: 18 }}>{link.emoji}</span>
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
