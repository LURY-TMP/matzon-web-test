'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Trophy, Users, MessageCircle, Wallet, Calendar, Shield, Globe, Award, Target, Flame, Check, ChevronRight, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

function CountStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = () => { v += Math.ceil(value / 60); if (v >= value) { setCount(value); return; } setCount(v); requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, value]);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{count.toLocaleString()}{suffix}</div>
      <div style={{ fontSize: 14, color: 'var(--text-tertiary)', marginTop: 8 }}>{label}</div>
    </div>
  );
}

export function LandingPage() {
  const router = useRouter();
  const [activeEco, setActiveEco] = useState(0);
  const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };

  const ecosystem = [
    { icon: Zap, label: 'Matchmaking', desc: 'Encontra o adversário perfeito em segundos', color: '#2563FF' },
    { icon: Trophy, label: 'Torneios', desc: 'Compete por prize pools reais', color: '#FFD60A' },
    { icon: Users, label: 'Clãs', desc: 'Cria ou junta-te a uma comunidade', color: '#7C3AED' },
    { icon: MessageCircle, label: 'Chat', desc: 'Comunica em tempo real', color: '#06B6D4' },
    { icon: Wallet, label: 'Wallet', desc: 'Gere os teus ganhos e prémios', color: '#30D158' },
    { icon: Calendar, label: 'Eventos', desc: 'Participa em eventos sazonais exclusivos', color: '#FF9F0A' },
  ];

  const topPlayers = [
    { name: 'Faker_EU', elo: 4850, wins: 342, region: 'EU' },
    { name: 'S1mple_Pro', elo: 4720, wins: 298, region: 'EU' },
    { name: 'NiKo_CS', elo: 4680, wins: 276, region: 'EU' },
    { name: 'Caps_LoL', elo: 4540, wins: 254, region: 'EU' },
    { name: 'ShowMaker', elo: 4490, wins: 231, region: 'AS' },
  ];

  const tournaments = [
    { name: 'Champions Cup 2026', prize: '€5,000', players: '128/256', date: '15 Mar', status: 'open', game: 'Valorant' },
    { name: 'Pro League S3', prize: '€10,000', players: '32/32', date: '20 Mar', status: 'full', game: 'LoL' },
    { name: 'Winter Clash', prize: '€2,500', players: '64/128', date: '18 Mar', status: 'open', game: 'CS2' },
  ];

  const clans = [
    { name: 'Shadow Legion', members: 48, elo: 4200, color: '#7C3AED' },
    { name: 'Storm Riders', members: 32, elo: 4050, color: '#2563FF' },
    { name: 'Iron Wolves', members: 45, elo: 3980, color: '#FF9F0A' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', overflowX: 'hidden' }}>

      {/* 1. HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 'clamp(120px,15vw,180px) 24px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,255,0.12) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} style={{ textAlign: 'center', maxWidth: 900, position: 'relative', zIndex: 1 }}>
          <motion.div variants={fade}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.2)', fontSize: 13, fontWeight: 600, color: '#2563FF', marginBottom: 24 }}>
              <Flame style={{ width: 14, height: 14 }} /> A nova era da competição chegou
            </span>
          </motion.div>
          <motion.h1 variants={fade} style={{ fontSize: 'clamp(48px,8vw,96px)', fontWeight: 800, lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
            Compete.<br /><span style={{ background: 'var(--gradient-premium)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Evolui.</span><br />Domina.
          </motion.h1>
          <motion.p variants={fade} style={{ fontSize: 'clamp(16px,2.5vw,20px)', color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.6 }}>
            A plataforma competitiva que transforma jogadores em campeões.
          </motion.p>
          <motion.div variants={fade} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => router.push('/login')} style={{ padding: '16px 40px', borderRadius: 50, background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 40px rgba(37,99,255,0.3)' }}>Começar agora</button>
            <button onClick={()=> router.push('/login')} style={{ padding: '16px 40px', borderRadius: 50, background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 40px rgba(37,99,255,0.3)' }}>Começar agora</button>
            <button onClick={() => router.push('/torneios')} style={{ padding: '16px 40px', borderRadius: 50, background: 'transparent', border: '1px solid var(--border-medium)', color: 'var(--text-primary)', fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>Explorar <ChevronRight style={{ width: 16, height: 16 }} /></button>
          </motion.div>
          <motion.div variants={fade} style={{ marginTop: 64, maxWidth: 480, margin: '64px auto 0', padding: '24px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, backdropFilter: 'blur(20px)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 20 }}>● LIVE — Partida em curso</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <img src="https://ui-avatars.com/api/?name=Faker&background=2563FF&color=fff&size=56" style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #2563FF', marginBottom: 8 }} />
                <div style={{ fontWeight: 700, fontSize: 14 }}>Faker_EU</div>
                <div style={{ fontSize: 12, color: '#2563FF' }}>ELO 4850</div>
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--text-tertiary)', letterSpacing: 4 }}>VS</div>
              <div style={{ textAlign: 'center' }}>
                <img src="https://ui-avatars.com/api/?name=S1mple&background=FF453A&color=fff&size=56" style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #FF453A', marginBottom: 8 }} />
                <div style={{ fontWeight: 700, fontSize: 14 }}>S1mple</div>
                <div style={{ fontSize: 12, color: '#FF453A' }}>ELO 4720</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 48 }}>
          <CountStat value={127450} suffix="+" label="Jogadores registados" />
          <CountStat value={2840000} suffix="+" label="Partidas realizadas" />
          <CountStat value={38} suffix="" label="Torneios ativos" />
          <CountStat value={64} suffix="" label="Países" />
        </div>
      </section>

      {/* 3. ECOSSISTEMA */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2563FF' }}>Ecossistema</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, margin: '12px 0 16px' }}>Tudo num só lugar</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>MATZON não é apenas uma plataforma. É um universo competitivo completo.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 16 }}>
            {ecosystem.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: 28, background: activeEco === i ? `${item.color}10` : 'var(--bg-card)', border: `1px solid ${activeEco === i ? item.color+'30' : 'var(--border-soft)'}`, borderRadius: 20, cursor: 'pointer', transition: 'all 0.3s' }}
                onClick={() => setActiveEco(i)}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <item.icon style={{ width: 24, height: 24, color: item.color }} />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700 }}>{item.label}</h3>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RANKING */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFD60A' }}>Ranking Global</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, margin: '12px 0' }}>Os melhores do mundo</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {topPlayers.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 24px', background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 16 }}>
                <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>{i < 3 ? ['🥇','🥈','🥉'][i] : i+1}</span>
                <img src={`https://ui-avatars.com/api/?name=${p.name}&background=2563FF&color=fff&size=48`} style={{ width: 48, height: 48, borderRadius: '50%', ...(i < 3 ? { boxShadow: '0 0 16px rgba(37,99,255,0.4)' } : {}) }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{p.wins} vitórias · {p.region}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: i === 0 ? '#FFD60A' : i === 1 ? '#9CA3AF' : i === 2 ? '#FF9F0A' : 'var(--text-primary)' }}>{p.elo.toLocaleString()}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>ELO</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button onClick={() => router.push('/ranking')} style={{ padding: '12px 28px', borderRadius: 50, background: 'transparent', border: '1px solid var(--border-medium)', color: 'var(--text-secondary)', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Ver ranking completo <ArrowRight style={{ width: 14, height: 14 }} /></button>
          </div>
        </div>
      </section>

      {/* 5. TORNEIOS */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7C3AED' }}>Torneios</span>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, margin: '12px 0 0' }}>Em destaque</h2>
            </div>
            <button onClick={() => router.push('/torneios')} style={{ padding: '10px 24px', borderRadius: 50, background: 'transparent', border: '1px solid var(--border-medium)', color: 'var(--text-secondary)', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>Ver todos <ArrowRight style={{ width: 14, height: 14 }} /></button>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
            {tournaments.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: 24, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20, background: 'rgba(37,99,255,0.1)', color: '#2563FF' }}>{t.game}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: t.status === 'open' ? '#30D158' : '#FF453A' }}>● {t.status === 'open' ? 'Aberto' : 'Esgotado'}</span>
                </div>
                <h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700 }}>{t.name}</h3>
                <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                  <div><div style={{ fontSize: 22, fontWeight: 800, color: '#FFD60A' }}>{t.prize}</div><div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Prize Pool</div></div>
                  <div><div style={{ fontSize: 22, fontWeight: 800 }}>{t.players}</div><div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Jogadores</div></div>
                  <div><div style={{ fontSize: 22, fontWeight: 800 }}>{t.date}</div><div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Data</div></div>
                </div>
                <button style={{ width: '100%', padding: 12, borderRadius: 12, background: t.status === 'open' ? 'var(--gradient-premium)' : 'var(--bg-elevated)', border: 'none', color: t.status === 'open' ? '#fff' : 'var(--text-tertiary)', fontWeight: 700, fontSize: 14, cursor: t.status === 'open' ? 'pointer' : 'default', opacity: t.status === 'full' ? 0.6 : 1 }}>
                  {t.status === 'open' ? 'Inscrever agora' : 'Esgotado'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLÃS */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#06B6D4' }}>Comunidade</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, margin: '12px 0 16px' }}>Junta-te ao teu clã</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
            {clans.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: 24, background: 'var(--bg-card)', border: `1px solid ${c.color}20`, borderRadius: 20, textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${c.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Shield style={{ width: 28, height: 28, color: c.color }} />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700 }}>{c.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
                  <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>{c.members} membros</span>
                  <span style={{ fontSize: 13, color: c.color }}>ELO {c.elo}</span>
                </div>
                <button style={{ padding: '10px 24px', borderRadius: 50, background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Entrar</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PREMIUM */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            style={{ padding: 48, background: 'var(--gradient-premium)', borderRadius: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Premium</span>
              <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 700, margin: '12px 0 16px', color: '#fff' }}>Eleva o teu jogo</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 32, maxWidth: 480 }}>Torneios exclusivos, analytics avançados, badge premium e muito mais.</p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
                {['Torneios ilimitados','Analytics avançado','Badge Pro','Sem anúncios','Suporte 24/7'].map((f,i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check style={{ width: 16, height: 16, color: '#fff' }} />
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => router.push('/subscricoes')} style={{ padding: '14px 32px', borderRadius: 50, background: '#fff', border: 'none', color: '#2563FF', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>Ver planos — desde €9.99/mês</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. SEGURANÇA */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#30D158' }}>Segurança</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, margin: '12px 0' }}>Fair Play garantido</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16 }}>
            {[
              { icon: Shield, label: 'Anti-Cheat', desc: 'Deteção em tempo real', color: '#30D158' },
              { icon: Target, label: 'Moderação', desc: 'Equipa dedicada 24/7', color: '#2563FF' },
              { icon: Award, label: 'Denúncias', desc: 'Sistema de reports eficiente', color: '#FF9F0A' },
              { icon: Globe, label: 'Proteção de Dados', desc: 'RGPD compliant', color: '#7C3AED' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: 24, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 20, textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <item.icon style={{ width: 24, height: 24, color: item.color }} />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700 }}>{item.label}</h3>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EVENTO ESPECIAL */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            style={{ padding: 40, background: 'var(--bg-card)', border: '1px solid var(--border-soft)', borderRadius: 28, display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF9F0A' }}>Evento Especial</span>
              <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 700, margin: '12px 0 12px' }}>Winter Championship 2026</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>O maior torneio da época. Prize pool de €25.000.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[{ label: 'Prize Pool', value: '€25K', color: '#FF9F0A' }, { label: 'Vagas', value: '512', color: '#2563FF' }, { label: 'Data', value: '1 Abr', color: '#30D158' }].map((s, i) => (
                  <div key={i} style={{ padding: '12px 20px', background: `${s.color}10`, border: `1px solid ${s.color}20`, borderRadius: 12 }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => router.push('/eventos')} style={{ padding: '16px 32px', borderRadius: 50, background: 'linear-gradient(135deg, #FF9F0A, #FFD60A)', border: 'none', color: '#000', fontSize: 15, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Inscrever agora</button>
          </motion.div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section style={{ padding: 'clamp(100px,12vw,160px) 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,255,0.1) 0%, transparent 70%)' }} />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 800, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
            Está pronto para<br /><span style={{ background: 'var(--gradient-premium)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>competir?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 18, marginBottom: 48, maxWidth: 480, margin: '0 auto 48px' }}>Junta-te a 127.000+ jogadores. Registo gratuito.</p>
          <button onClick={() => router.push('/login')} style={{ padding: '20px 56px', borderRadius: 50, background: 'var(--gradient-premium)', border: 'none', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 60px rgba(37,99,255,0.4)' }}>Criar conta grátis</button>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-tertiary)' }}>Sem cartão de crédito. Sem compromisso.</p>
        </motion.div>
      </section>

    </div>
  );
}
