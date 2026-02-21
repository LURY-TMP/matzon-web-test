'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const plans = [
  {
    icon: Zap, name: 'Starter', price: '0', period: 'sempre grátis', color: '#6B7280', gradient: 'linear-gradient(135deg, #374151, #1F2937)',
    features: ['5 torneios/mês', 'Chat básico', 'Perfil público', 'ELO básico'],
    cta: 'Plano atual', disabled: true,
  },
  {
    icon: Star, name: 'Pro', price: '9.99', period: '/mês', color: '#2563FF', gradient: 'linear-gradient(135deg, #2563FF, #7C3AED)',
    features: ['Torneios ilimitados', 'Chat premium', 'Analytics avançado', 'Badge Pro', 'Sem anúncios', 'Suporte prioritário'],
    cta: 'Começar Pro', disabled: false, popular: true,
  },
  {
    icon: Crown, name: 'Elite', price: '24.99', period: '/mês', color: '#FFD60A', gradient: 'linear-gradient(135deg, #FF9F0A, #FFD60A)',
    features: ['Tudo do Pro', 'Torneios exclusivos', 'Coaching IA', 'Aura exclusiva', 'Badge Elite animado', 'Acesso antecipado'],
    cta: 'Tornar-se Elite', disabled: false,
  },
];

export default function SubscricoesPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (<div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="fixed top-0 left-0 w-full z-[100]"><Navbar /></div>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(100px, 12vw, 140px) 24px 48px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2563FF' }}>Subscrições</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', margin: '12px 0 8px' }}>
            Eleva o teu<br /><span style={{ background: 'var(--gradient-premium)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>jogo</span>
          </h1>
          <p style={{ color: 'var(--text-tertiary)', fontSize: 16, margin: '0 0 40px' }}>Escolhe o plano que se adapta à tua ambição</p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 12, padding: 4, marginBottom: 48, gap: 4 }}>
            {(['monthly', 'yearly'] as const).map(b => (
              <button key={b} onClick={() => setBilling(b)}
                style={{ padding: '8px 20px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
                  background: billing === b ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: billing === b ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
                {b === 'monthly' ? 'Mensal' : 'Anual −20%'}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, textAlign: 'left' }}>
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                style={{ position: 'relative', background: 'var(--bg-card)', border: plan.popular ? `1px solid ${plan.color}40` : '1px solid var(--border-soft)', borderRadius: 'var(--radius-xl)', padding: 28, overflow: 'hidden' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', borderRadius: 20, background: plan.gradient, fontSize: 11, fontWeight: 700, color: '#fff' }}>Popular</div>
                )}
                <div style={{ width: 48, height: 48, borderRadius: 14, background: plan.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <plan.icon style={{ width: 24, height: 24, color: '#fff' }} />
                </div>
                <h3 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>{plan.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--text-primary)' }}>€{billing === 'yearly' && plan.price !== '0' ? (parseFloat(plan.price) * 0.8).toFixed(2) : plan.price}</span>
                  <span style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>{plan.period}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {plan.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Check style={{ width: 16, height: 16, color: plan.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button disabled={plan.disabled}
                  style={{ width: '100%', padding: '14px', borderRadius: 'var(--radius-md)', border: 'none', cursor: plan.disabled ? 'default' : 'pointer', fontSize: 15, fontWeight: 700,
                    background: plan.disabled ? 'var(--bg-elevated)' : plan.gradient,
                    color: plan.disabled ? 'var(--text-tertiary)' : '#fff',
                    opacity: plan.disabled ? 0.6 : 1 }}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
