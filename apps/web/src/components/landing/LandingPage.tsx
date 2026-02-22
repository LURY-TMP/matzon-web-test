'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

function CountStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = () => { v += Math.ceil(value / 80); if (v >= value) { setCount(value); return; } setCount(v); requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, value]);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, color: '#F5F5F7', lineHeight: 1 }}>{count.toLocaleString()}{suffix}</div>
      <div style={{ fontSize: 14, color: '#6B7280', marginTop: 8 }}>{label}</div>
    </div>
  );
}

export function LandingPage() {
  const router = useRouter();
  const fade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };

  return (
    <div style={{ backgroundColor: '#0B0B0F', color: '#F5F5F7', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 'clamp(140px,15vw,200px) 24px 100px', overflow: 'hidden' }}>
        
        {/* Background Glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)', width: '120vw', height: '80vh', background: 'radial-gradient(ellipse at center top, rgba(37,99,255,0.18) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }} />
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          style={{ textAlign: 'center', maxWidth: 960, position: 'relative', zIndex: 1 }}>
          
          <motion.div variants={fade} style={{ marginBottom: 32 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 50, background: 'rgba(37,99,255,0.12)', border: '1px solid rgba(37,99,255,0.25)', fontSize: 13, fontWeight: 600, color: '#2563FF', letterSpacing: '0.03em' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563FF', display: 'inline-block', boxShadow: '0 0 8px #2563FF' }} />
              A nova era da competição chegou
            </span>
          </motion.div>

          <motion.h1 variants={fade} style={{ fontSize: 'clamp(52px,9vw,108px)', fontWeight: 800, lineHeight: 1.0, margin: '0 0 32px', letterSpacing: '-0.03em', color: '#F5F5F7' }}>
            Compete.<br />
            <span style={{ background: 'linear-gradient(135deg, #2563FF 0%, #7C3AED 50%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Evolui.</span><br />
            Domina.
          </motion.h1>

          <motion.p variants={fade} style={{ fontSize: 'clamp(17px,2.5vw,22px)', color: '#9CA3AF', maxWidth: 580, margin: '0 auto 56px', lineHeight: 1.65, fontWeight: 400 }}>
            A plataforma competitiva que transforma jogadores em campeões. Matchmaking inteligente, torneios reais, comunidade global.
          </motion.p>

          <motion.div variants={fade} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}>
            <button onClick={() => router.push('/login')}
              style={{ padding: '18px 48px', borderRadius: 50, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', border: 'none', color: '#fff', fontSize: 17, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 50px rgba(37,99,255,0.35), 0 4px 24px rgba(37,99,255,0.2)', letterSpacing: '0.02em' }}>
              Começar agora
            </button>
            <button onClick={() => router.push('/torneios')}
              style={{ padding: '18px 48px', borderRadius: 50, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#F5F5F7', fontSize: 17, fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
              Ver torneios
            </button>
          </motion.div>

          {/* LIVE MATCH CARD */}
          <motion.div variants={fade}
            style={{ maxWidth: 520, margin: '0 auto', padding: '28px 36px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, backdropFilter: 'blur(24px)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF453A', display: 'inline-block', boxShadow: '0 0 10px #FF453A', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF' }}>Live — Partida em curso</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 12 }}>
                  <img src="https://ui-avatars.com/api/?name=Faker&background=2563FF&color=fff&size=72" style={{ width: 72, height: 72, borderRadius: '50%', border: '3px solid #2563FF', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'linear-gradient(135deg, #2563FF, #7C3AED)', opacity: 0.3, filter: 'blur(8px)', zIndex: -1 }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#F5F5F7' }}>Faker_EU</div>
                <div style={{ fontSize: 13, color: '#2563FF', fontWeight: 600 }}>ELO 4850</div>
              </div>
              <div style={{ textAlign: 'center', padding: '0 16px' }}>
                <div style={{ fontSize: 13, color: '#6B7280', marginBottom: 6 }}>Round 3/5</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#F5F5F7', letterSpacing: 2, lineHeight: 1 }}>VS</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 6 }}>Valorant</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 12 }}>
                  <img src="https://ui-avatars.com/api/?name=S1mple&background=FF453A&color=fff&size=72" style={{ width: 72, height: 72, borderRadius: '50%', border: '3px solid #FF453A', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'linear-gradient(135deg, #FF453A, #FF9F0A)', opacity: 0.3, filter: 'blur(8px)', zIndex: -1 }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#F5F5F7' }}>S1mple</div>
                <div style={{ fontSize: 13, color: '#FF453A', fontWeight: 600 }}>ELO 4720</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 48 }}>
          <CountStat value={127450} suffix="+" label="Jogadores registados" />
          <CountStat value={2840000} suffix="+" label="Partidas realizadas" />
          <CountStat value={38} suffix="" label="Torneios ativos" />
          <CountStat value={64} suffix="" label="Países" />
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section style={{ padding: 'clamp(80px,10vw,130px) 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563FF', display: 'block', marginBottom: 16 }}>Ecossistema</span>
            <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em' }}>Tudo num só lugar</h2>
            <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>MATZON não é apenas uma plataforma. É um universo competitivo completo.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 16 }}>
            {[
              { emoji: '⚡', label: 'Matchmaking', desc: 'Encontra o adversário perfeito em segundos com IA', color: '#2563FF' },
              { emoji: '🏆', label: 'Torneios', desc: 'Compete por prize pools reais com outros jogadores', color: '#FFD60A' },
              { emoji: '🛡️', label: 'Clãs', desc: 'Cria ou junta-te a uma comunidade competitiva', color: '#7C3AED' },
              { emoji: '💬', label: 'Chat', desc: 'Comunica em tempo real com a tua equipa', color: '#06B6D4' },
              { emoji: '💰', label: 'Wallet', desc: 'Gere os teus ganhos e prémios em segurança', color: '#30D158' },
              { emoji: '🎯', label: 'Eventos', desc: 'Participa em eventos sazonais e exclusivos', color: '#FF9F0A' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: '28px 32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, cursor: 'pointer', transition: 'all 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${item.color}10`; (e.currentTarget as HTMLElement).style.borderColor = `${item.color}30`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.emoji}</div>
                <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 700, color: '#F5F5F7' }}>{item.label}</h3>
                <p style={{ margin: 0, fontSize: 15, color: '#9CA3AF', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RANKING */}
      <section style={{ padding: 'clamp(80px,10vw,130px) 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD60A', display: 'block', marginBottom: 16 }}>Ranking Global</span>
            <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Os melhores do mundo</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { name: 'Faker_EU', elo: 4850, wins: 342, region: 'EU', color: '#FFD60A' },
              { name: 'S1mple_Pro', elo: 4720, wins: 298, region: 'EU', color: '#9CA3AF' },
              { name: 'NiKo_CS', elo: 4680, wins: 276, region: 'EU', color: '#FF9F0A' },
              { name: 'Caps_LoL', elo: 4540, wins: 254, region: 'EU', color: '#6B7280' },
              { name: 'ShowMaker', elo: 4490, wins: 231, region: 'AS', color: '#6B7280' },
            ].map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 24px', background: i < 3 ? 'rgba(255,255,255,0.04)' : 'transparent', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16 }}>
                <span style={{ fontSize: 22, width: 36, textAlign: 'center', flexShrink: 0 }}>{i < 3 ? ['🥇','🥈','🥉'][i] : `${i+1}`}</span>
                <div style={{ position: 'relative' }}>
                  <img src={`https://ui-avatars.com/api/?name=${p.name}&background=111116&color=fff&size=48`} style={{ width: 48, height: 48, borderRadius: '50%', border: `2px solid ${i < 3 ? p.color : 'rgba(255,255,255,0.1)'}`, display: 'block' }} />
                  {i < 3 && <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: `${p.color}`, opacity: 0.2, filter: 'blur(6px)', zIndex: -1 }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#F5F5F7' }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: '#6B7280' }}>{p.wins} vitórias · {p.region}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, fontSize: 20, color: p.color }}>{p.elo.toLocaleString()}</div>
                  <div style={{ fontSize: 11, color: '#6B7280' }}>ELO</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button onClick={() => router.push('/ranking')} style={{ padding: '12px 32px', borderRadius: 50, background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#9CA3AF', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Ver ranking completo →</button>
          </div>
        </div>
      </section>

      {/* TORNEIOS */}
      <section style={{ padding: 'clamp(80px,10vw,130px) 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7C3AED', display: 'block', marginBottom: 16 }}>Torneios</span>
              <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Em destaque</h2>
            </div>
            <button onClick={() => router.push('/torneios')} style={{ padding: '12px 28px', borderRadius: 50, background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#9CA3AF', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Ver todos →</button>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
            {[
              { name: 'Champions Cup 2026', prize: '€5,000', players: '128/256', date: '15 Mar', status: 'open', game: 'Valorant', color: '#2563FF' },
              { name: 'Pro League Season 3', prize: '€10,000', players: '32/32', date: '20 Mar', status: 'full', game: 'LoL', color: '#FFD60A' },
              { name: 'Winter Clash', prize: '€2,500', players: '64/128', date: '18 Mar', status: 'open', game: 'CS2', color: '#30D158' },
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: 28, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, transition: 'all 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.border = `1px solid ${t.color}30`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.07)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: '5px 14px', borderRadius: 20, background: `${t.color}15`, color: t.color }}>{t.game}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: t.status === 'open' ? '#30D158' : '#FF453A' }}>● {t.status === 'open' ? 'Aberto' : 'Esgotado'}</span>
                </div>
                <h3 style={{ margin: '0 0 24px', fontSize: 19, fontWeight: 700, color: '#F5F5F7', lineHeight: 1.3 }}>{t.name}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
                  <div><div style={{ fontSize: 20, fontWeight: 800, color: '#FFD60A' }}>{t.prize}</div><div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>Prize Pool</div></div>
                  <div><div style={{ fontSize: 20, fontWeight: 800, color: '#F5F5F7' }}>{t.players}</div><div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>Jogadores</div></div>
                  <div><div style={{ fontSize: 20, fontWeight: 800, color: '#F5F5F7' }}>{t.date}</div><div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>Data</div></div>
                </div>
                <button style={{ width: '100%', padding: '13px', borderRadius: 14, background: t.status === 'open' ? `linear-gradient(135deg, ${t.color}, ${t.color}99)` : 'rgba(255,255,255,0.05)', border: 'none', color: t.status === 'open' ? '#fff' : '#6B7280', fontWeight: 700, fontSize: 14, cursor: t.status === 'open' ? 'pointer' : 'default' }}>
                  {t.status === 'open' ? 'Inscrever agora' : 'Esgotado'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section style={{ padding: 'clamp(80px,10vw,130px) 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            style={{ padding: 'clamp(40px,6vw,64px)', background: 'linear-gradient(135deg, #2563FF 0%, #7C3AED 50%, #06B6D4 100%)', borderRadius: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: 16 }}>Premium</span>
                <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, margin: '0 0 16px', color: '#fff', letterSpacing: '-0.02em' }}>Eleva o teu jogo</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 28, lineHeight: 1.6 }}>Acesso a torneios exclusivos, analytics avançados e muito mais.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                  {['Torneios ilimitados','Analytics avançado','Badge Pro','Sem anúncios','Suporte 24/7'].map((f,i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>✓</span>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => router.push('/subscricoes')}
                style={{ padding: '18px 40px', borderRadius: 50, background: '#fff', border: 'none', color: '#2563FF', fontSize: 16, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                Ver planos — desde €9.99/mês
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section style={{ padding: 'clamp(80px,10vw,130px) 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#30D158', display: 'block', marginBottom: 16 }}>Segurança</span>
            <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Fair Play garantido</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px,1fr))', gap: 16 }}>
            {[
              { emoji: '🛡️', label: 'Anti-Cheat', desc: 'Deteção automática em tempo real', color: '#30D158' },
              { emoji: '👁️', label: 'Moderação 24/7', desc: 'Equipa dedicada sempre disponível', color: '#2563FF' },
              { emoji: '🚨', label: 'Sistema de Reports', desc: 'Denúncias tratadas rapidamente', color: '#FF9F0A' },
              { emoji: '🔒', label: 'Proteção de Dados', desc: 'RGPD compliant, dados seguros', color: '#7C3AED' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{item.emoji}</div>
                <h3 style={{ margin: '0 0 10px', fontSize: 17, fontWeight: 700, color: '#F5F5F7' }}>{item.label}</h3>
                <p style={{ margin: 0, fontSize: 14, color: '#9CA3AF', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: 'clamp(100px,14vw,180px) 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '80vw', height: '80vw', maxWidth: 700, maxHeight: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,255,0.12) 0%, transparent 65%)' }} />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(40px,7vw,80px)', fontWeight: 800, margin: '0 0 24px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Está pronto para<br />
            <span style={{ background: 'linear-gradient(135deg, #2563FF, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>competir?</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 18, margin: '0 auto 56px', maxWidth: 480, lineHeight: 1.6 }}>
            Junta-te a 127.000+ jogadores. Registo gratuito. Começa hoje.
          </p>
          <button onClick={() => router.push('/login')}
            style={{ padding: '22px 64px', borderRadius: 50, background: 'linear-gradient(135deg, #2563FF, #7C3AED)', border: 'none', color: '#fff', fontSize: 19, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 80px rgba(37,99,255,0.4), 0 4px 32px rgba(37,99,255,0.25)', letterSpacing: '0.02em' }}>
            Criar conta grátis
          </button>
          <p style={{ marginTop: 20, fontSize: 14, color: '#6B7280' }}>Sem cartão de crédito · Sem compromisso</p>
        </motion.div>
      </section>

    </div>
  );
}
