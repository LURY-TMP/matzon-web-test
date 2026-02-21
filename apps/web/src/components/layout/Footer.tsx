'use client';

import React from 'react';
import { Trophy, Swords, Users, Target, Twitter, Youtube, Instagram, Twitch, MessageCircle, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Plataforma',
    links: ['Dashboard', 'Rankings', 'Torneios', 'Matchmaking', 'Leaderboard'],
  },
  {
    title: 'Comunidade',
    links: ['Feed', 'Clãs', 'Eventos', 'Streamers', 'Blog'],
  },
  {
    title: 'Suporte',
    links: ['Centro de Ajuda', 'Contacto', 'Reportar Bug', 'Termos de Uso', 'Privacidade'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Carreiras', 'Parceiros', 'Imprensa', 'Investidores'],
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitch, label: 'Twitch' },
  { icon: MessageCircle, label: "Discord" },
];

const stats = [
  { icon: Users, value: '2.5M+', label: 'Jogadores' },
  { icon: Trophy, value: '$150k', label: 'Prémios' },
  { icon: Swords, value: '10k+', label: 'Torneios' },
  { icon: Target, value: '99.9%', label: 'Uptime' },
];

export function Footer() {
  return (
    <footer className="w-full mt-10" style={{ backgroundColor: 'var(--bg-card)' }}>

      {/* Stats Bar */}
      <div className="w-full" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(10,132,255,0.1)' }}>
                  <s.icon className="w-5 h-5" style={{ color: '#0A84FF' }} />
                </div>
                <div>
                  <p className="text-base font-black" style={{ color: 'var(--text-primary)' }}>{s.value}</p>
                  <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
            <span className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>MATZ</span>
            <span className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>ON</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              A infraestrutura definitiva para jogadores competitivos. Suba no ranking, conquiste torneios e construa o seu legado.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0A84FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <s.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: 'var(--text-tertiary)' }}>
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-10 p-6 rounded-3xl" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Fica a par de tudo</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Recebe as últimas novidades de torneios e atualizações.</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl flex-1 sm:w-64"
                style={{ backgroundColor: 'var(--bg-elevated)' }}>
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }} />
                <input
                  type="email"
                  placeholder="O teu email..."
                  className="bg-transparent text-sm focus:outline-none w-full"
                  style={{ color: 'var(--text-primary)' }}
                />
              </div>
              <button
                className="px-5 py-2.5 rounded-2xl text-sm font-semibold flex-shrink-0 transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#0A84FF', color: '#fff' }}
              >
                Subscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            © 2026 MATZON. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {['Termos', 'Privacidade', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs transition-colors"
                style={{ color: 'var(--text-tertiary)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-tertiary)')}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
