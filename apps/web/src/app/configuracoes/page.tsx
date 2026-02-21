'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, ChevronRight, Moon, Wifi, Trash2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const sections = [
  { icon: User, label: 'Conta', color: '#2563FF', items: ['Editar Perfil', 'Alterar Password', 'Email', 'Username'] },
  { icon: Bell, label: 'Notificações', color: '#7C3AED', items: ['Push notifications', 'Email alerts', 'Torneios', 'Mensagens'] },
  { icon: Shield, label: 'Privacidade', color: '#30D158', items: ['Perfil público', 'Mostrar ELO', 'Histórico visível', 'Bloquear utilizadores'] },
  { icon: Palette, label: 'Aparência', color: '#FF9F0A', items: ['Tema escuro', 'Cor de destaque', 'Tamanho de fonte'] },
  { icon: Globe, label: 'Idioma & Região', color: '#06B6D4', items: ['Idioma', 'Fuso horário', 'Formato de data'] },
];

export default function ConfiguracoesPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({ 'Push notifications': true, 'Tema escuro': true, 'Perfil público': true });
  const toggle = (key: string) => setToggles(p => ({ ...p, [key]: !p[key] }));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px' }}>Configurações</h1>
          <p style={{ color: 'var(--text-tertiary)', margin: '0 0 40px', fontSize: 15 }}>Personaliza a tua experiência MATZON</p>

          {sections.map((section, si) => (
            <motion.div key={si} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.06 }}
              style={{ marginBottom: 24, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border-soft)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${section.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <section.icon style={{ width: 18, height: 18, color: section.color }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{section.label}</span>
              </div>
              {section.items.map((item, ii) => (
                <div key={ii} style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: ii < section.items.length - 1 ? '1px solid var(--border-soft)' : 'none', cursor: 'pointer' }}
                  onClick={() => toggle(item)}>
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)' }}>{item}</span>
                  {toggles[item] !== undefined ? (
                    <div onClick={e => { e.stopPropagation(); toggle(item); }}
                      style={{ width: 44, height: 26, borderRadius: 13, background: toggles[item] ? '#2563FF' : 'var(--border-medium)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', top: 3, left: toggles[item] ? 21 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} />
                    </div>
                  ) : (
                    <ChevronRight style={{ width: 16, height: 16, color: 'var(--text-tertiary)' }} />
                  )}
                </div>
              ))}
            </motion.div>
          ))}

          <div style={{ marginTop: 16, padding: '14px 20px', background: 'rgba(255,69,58,0.08)', border: '1px solid rgba(255,69,58,0.2)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
            <Trash2 style={{ width: 18, height: 18, color: '#FF453A' }} />
            <span style={{ fontSize: 15, color: '#FF453A', fontWeight: 600 }}>Eliminar Conta</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
