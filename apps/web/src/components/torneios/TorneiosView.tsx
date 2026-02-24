'use client';
import React, { useState } from 'react';
const tabs = ['Em Destaque', 'Classificação', 'Bracket', 'Sobre'];
const matches = [
  { date: 'HOJE • 21:00', team1: 'MATZON FC', team2: 'Elite Squad', score: '2 - 1', live: true },
  { date: 'AMANHÃ • 18:00', team1: 'Pro Lions', team2: 'Storm Kings', score: null, time: '18:00' },
  { date: 'QUI • 20:00', team1: 'Cyber Wolves', team2: 'Royal Flash', score: null, time: '20:00' },
];
const standings = [
  { pos: 1, name: 'MATZON FC', j: 6, g: 5, e: 0, d: 1, gd: '+12', pts: 15, form: ['W','W','W','D','W'], qual: 'direct' },
  { pos: 2, name: 'Elite Squad', j: 6, g: 4, e: 1, d: 1, gd: '+8', pts: 13, form: ['W','W','D','W','L'], qual: 'direct' },
  { pos: 3, name: 'Pro Lions', j: 6, g: 3, e: 2, d: 1, gd: '+4', pts: 11, form: ['D','W','W','D','W'], qual: 'playoff' },
  { pos: 4, name: 'Storm Kings', j: 6, g: 3, e: 1, d: 2, gd: '+2', pts: 10, form: ['W','L','W','W','D'], qual: 'playoff' },
  { pos: 5, name: 'Cyber Wolves', j: 6, g: 2, e: 1, d: 3, gd: '-3', pts: 7, form: ['L','W','L','W','L'], qual: '' },
  { pos: 6, name: 'Royal Flash', j: 6, g: 1, e: 2, d: 3, gd: '-5', pts: 5, form: ['L','D','L','W','L'], qual: '' },
  { pos: 7, name: 'Night Hawks', j: 6, g: 1, e: 1, d: 4, gd: '-8', pts: 4, form: ['L','L','W','D','L'], qual: '' },
  { pos: 8, name: 'Alpha Dogs', j: 6, g: 0, e: 2, d: 4, gd: '-10', pts: 2, form: ['L','D','L','L','D'], qual: 'eliminated' },
];
const bracket = [
  { round: 'Quartos de Final', matches: [
    { t1: 'MATZON FC', t2: 'Night Hawks', s1: 3, s2: 0, done: true, time: '' },
    { t1: 'Elite Squad', t2: 'Alpha Dogs', s1: 2, s2: 1, done: true, time: '' },
    { t1: 'Pro Lions', t2: 'Royal Flash', s1: null, s2: null, done: false, time: '21 Fev' },
    { t1: 'Storm Kings', t2: 'Cyber Wolves', s1: null, s2: null, done: false, time: '22 Fev' },
  ]},
  { round: 'Meias-Finais', matches: [
    { t1: 'MATZON FC', t2: 'Elite Squad', s1: null, s2: null, done: false, time: '28 Fev' },
    { t1: 'TBD', t2: 'TBD', s1: null, s2: null, done: false, time: '01 Mar' },
  ]},
  { round: 'Final', matches: [
    { t1: 'TBD', t2: 'TBD', s1: null, s2: null, done: false, time: '08 Mar' },
  ]},
];
const formColor = (r: string) => r === 'W' ? '#34A853' : r === 'D' ? '#9AA4B6' : '#EA4335';
const qualColor = (q: string) => q === 'direct' ? '#4285F4' : q === 'playoff' ? '#FA7B17' : 'transparent';
export function TorneiosView() {
  const [activeTab, setActiveTab] = useState('Em Destaque');
  return (
    <div style={{ backgroundColor: '#0B121E', color: '#F8F9FA', fontFamily: "'Inter', sans-serif", minHeight: '100vh', paddingBottom: 40 }}>
      <div style={{ position: 'relative', height: 180, overflow: 'hidden', marginTop: 80 }}>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0B121E 0%, rgba(11,18,30,0.4) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 15, left: 20, zIndex: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#005EFA', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>MATZON • Champions Cup 2026</div>
          <h1 style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>Torneios em Destaque</h1>
        </div>
        <div style={{ position: 'absolute', bottom: 15, right: 20, zIndex: 10, width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #005EFA, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 12 }}>MZ</div>
      </div>
      <div style={{ display: 'flex', borderBottom: '1px solid #222A3B', padding: '0 20px', overflowX: 'auto' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: 'none', border: 'none', color: activeTab === tab ? '#F8F9FA' : '#9AA4B6', fontSize: 15, fontWeight: 600, padding: '15px 0', marginRight: 25, cursor: 'pointer', whiteSpace: 'nowrap', borderBottom: activeTab === tab ? '3px solid #005EFA' : '3px solid transparent' }}>{tab}</button>
        ))}
      </div>
      {activeTab === 'Em Destaque' && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{ padding: '25px 20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 15 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700 }}>Jogos Ao Vivo & Próximos</h2>
              <a href="#" style={{ color: '#005EFA', fontSize: 13, fontWeight: 500 }}>Ver todos</a>
            </div>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 10 }}>
              {matches.map((m, i) => (
                <div key={i} style={{ backgroundColor: '#171E2D', borderRadius: 12, padding: 12, minWidth: 260, position: 'relative', flexShrink: 0, border: m.live ? '1px solid rgba(255,59,48,0.3)' : '1px solid transparent' }}>
                  <div style={{ fontSize: 11, color: '#9AA4B6', fontWeight: 600, marginBottom: 8 }}>{m.date}</div>
                  {m.live && <div style={{ position: 'absolute', top: 12, right: 12, width: 6, height: 6, backgroundColor: '#FF3B30', borderRadius: '50%' }} />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                      {[m.team1, m.team2].map((t, ti) => (
                        <div key={ti} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600 }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: ti === 0 ? '#005EFA' : '#7C3AED', flexShrink: 0 }} />{t}
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: m.live ? 18 : 13, fontWeight: 700, color: m.live ? '#fff' : '#9AA4B6', marginLeft: 12 }}>{m.score || m.time}</div>
                  </div>
                  {m.live && <div style={{ marginTop: 8, fontSize: 10, fontWeight: 800, color: '#FF3B30', textTransform: 'uppercase', letterSpacing: 1 }}>● Ao Vivo</div>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '25px 20px 0' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 15 }}>Torneios Ativos</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Champions Cup 2026', prize: 'EUR 25.000', teams: 32, badge: 'A decorrer', badgeColor: '#30D158', textColor: '#fff', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' },
                { name: 'Pro League Season 3', prize: 'EUR 10.000', teams: 16, badge: 'Inscricoes abertas', badgeColor: '#005EFA', textColor: '#fff', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400' },
                { name: 'World Masters 2026', prize: 'EUR 100.000', teams: 64, badge: 'Internacional', badgeColor: '#FFD60A', textColor: '#000', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400' },
                { name: 'Night Cup Series', prize: 'EUR 3.000', teams: 8, badge: 'Esgotado', badgeColor: '#FF453A', textColor: '#fff', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' },
              ].map((t, i) => (
                <div key={i} style={{ backgroundColor: '#171E2D', borderRadius: 12, overflow: 'hidden', display: 'flex', border: '1px solid #222A3B' }}>
                  <div style={{ width: 80, height: 80, flexShrink: 0 }}>
                    <img src={t.img} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: t.badge === 'Esgotado' ? 'grayscale(60%)' : 'none' }} />
                  </div>
                  <div style={{ padding: '10px 14px', flex: 1 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: t.badgeColor, color: t.textColor, padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 4 }}>{t.badge}</span>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{t.name}</div>
                    <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#9AA4B6' }}>
                      <span style={{ color: '#005EFA', fontWeight: 700 }}>{t.prize}</span>
                      <span>{t.teams} equipas</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'Classificação' && (
        <div style={{ padding: '20px', animation: 'fadeIn 0.3s ease' }}>
          <div style={{ backgroundColor: '#171E2D', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '20px 20px 15px', borderBottom: '1px solid #222A3B' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Classificacao</h2>
              <div style={{ fontSize: 11, color: '#9AA4B6' }}>Temporada</div>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>Champions Cup 2026</div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', whiteSpace: 'nowrap' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, padding: '12px 8px 12px 20px', borderBottom: '1px solid #222A3B', textAlign: 'left' }}>POS</th>
                    {['J','G','E','D','DG','PTS'].map(h => (
                      <th key={h} style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, padding: '12px 8px', borderBottom: '1px solid #222A3B', textAlign: 'center', borderLeft: h === 'PTS' ? '1px solid #222A3B' : 'none' }}>{h}</th>
                    ))}
                    <th style={{ fontSize: 10, color: '#9AA4B6', fontWeight: 600, padding: '12px 8px', borderBottom: '1px solid #222A3B', textAlign: 'center' }}>FORMA</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((s, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '10px 8px 10px 0', borderBottom: '1px solid rgba(255,255,255,0.02)', borderLeft: `3px solid ${qualColor(s.qual)}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 12 }}>
                          <span style={{ width: 20, textAlign: 'center', fontSize: 12, color: '#9AA4B6' }}>{s.pos}</span>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#005EFA' }} />
                          <span style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</span>
                        </div>
                      </td>
                      {[s.j, s.g, s.e, s.d, s.gd].map((v, vi) => (
                        <td key={vi} style={{ padding: '10px 8px', fontSize: 13, textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.02)', color: '#fff' }}>{v}</td>
                      ))}
                      <td style={{ padding: '10px 8px', textAlign: 'center', fontWeight: 700, borderLeft: '1px solid #222A3B', borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: 13 }}>{s.pts}</td>
                      <td style={{ padding: '10px 8px', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                          {s.form.map((r, ri) => <span key={ri} style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: formColor(r), display: 'inline-block' }} />)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 20, backgroundColor: '#121825' }}>
              {[{ color: '#4285F4', label: 'Qualificacao Direta' }, { color: '#FA7B17', label: 'Playoff' }, { color: '#EA4335', label: 'Eliminado' }].map((l, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#9AA4B6' }}>
                  <span style={{ width: 8, height: 8, backgroundColor: l.color, borderRadius: 1, display: 'inline-block' }} />{l.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'Bracket' && (
        <div style={{ padding: '20px 0', animation: 'fadeIn 0.3s ease' }}>
          <div style={{ display: 'flex', gap: 20, overflowX: 'auto', padding: '0 20px 20px' }}>
            {bracket.map((round, ri) => (
              <div key={ri} style={{ display: 'flex', flexDirection: 'column', gap: 15, minWidth: 200, flexShrink: 0 }}>
                <div style={{ fontSize: 11, color: '#9AA4B6', textTransform: 'uppercase', fontWeight: 600, letterSpacing: 1 }}>{round.round}</div>
                {round.matches.map((m, mi) => (
                  <div key={mi} style={{ backgroundColor: '#171E2D', borderRadius: 12, padding: 14, border: '1px solid #222A3B', display: 'flex', flexDirection: 'column', gap: 10, opacity: m.t1 === 'TBD' ? 0.5 : 1 }}>
                    {[{ t: m.t1, s: m.s1 }, { t: m.t2, s: m.s2 }].map((tm, ti) => (
                      <div key={ti} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: ti === 0 ? '#005EFA' : '#7C3AED', flexShrink: 0 }} />
                          <span style={{ color: tm.t === 'TBD' ? '#9AA4B6' : '#fff' }}>{tm.t}</span>
                        </div>
                        <span style={{ fontWeight: 700, color: tm.s !== null ? '#fff' : '#9AA4B6' }}>{tm.s !== null ? tm.s : m.time}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'Sobre' && (
        <div style={{ padding: '25px 20px', color: '#9AA4B6', fontSize: 13, lineHeight: 1.6, animation: 'fadeIn 0.3s ease' }}>
          <h2 style={{ color: '#fff', fontSize: 16, marginBottom: 15, marginTop: 0 }}>Sobre a Champions Cup 2026</h2>
          <p style={{ marginBottom: 15 }}>A Champions Cup e o torneio mais prestigiado da MATZON, reunindo as 32 melhores equipas do mundo em competicao intensa pelo titulo supremo e EUR 25.000 em premios.</p>
          <h3 style={{ color: '#fff', fontSize: 14, marginBottom: 8, marginTop: 20 }}>Formato</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 15 }}>
            <li style={{ marginBottom: 6 }}>Fase de grupos — 8 grupos de 4 equipas</li>
            <li style={{ marginBottom: 6 }}>Quartos de Final — eliminacao direta</li>
            <li style={{ marginBottom: 6 }}>Meias-Finais e Final ao vivo</li>
          </ul>
          <h3 style={{ color: '#fff', fontSize: 14, marginBottom: 8, marginTop: 20 }}>Premios</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 15 }}>
            <li style={{ marginBottom: 6 }}>1 Lugar — EUR 15.000</li>
            <li style={{ marginBottom: 6 }}>2 Lugar — EUR 7.000</li>
            <li style={{ marginBottom: 6 }}>3/4 Lugar — EUR 1.500 cada</li>
          </ul>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: '@keyframes fadeIn{from{opacity:0}to{opacity:1}}.hide-scrollbar::-webkit-scrollbar{display:none}'}} />
    </div>
  );
}
