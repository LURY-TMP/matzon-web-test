'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Share2, MoreHorizontal, Image as ImageIcon, Send, Trophy } from 'lucide-react';

const initialPosts = [
  { id: 1, author: { name: 'S1mple', tag: '#EUW', photo: 'https://randomuser.me/api/portraits/men/44.jpg' }, content: 'Acabei de garantir o Top 2 Global! O matchmaking de hoje estava insano. GG WP a todos. 🏆🔥', timestamp: '2h', likes: 1240, comments: 84, isLiked: true },
  { id: 2, author: { name: 'John Doe', tag: '#MZ1', photo: 'https://randomuser.me/api/portraits/men/32.jpg' }, content: 'Aquele clutch no 1v3 para fechar a partida... Nunca duvidem do buff do teclado novo! 😂', timestamp: '5h', likes: 342, comments: 12, isLiked: false },
  { id: 3, author: { name: 'TenZ', tag: '#NA1', photo: 'https://randomuser.me/api/portraits/men/55.jpg' }, content: 'Procurando um Duo para grindar o rank Elite esta noite. Comunicação no Discord obrigatória. Alguém on? ⚔️', timestamp: '8h', likes: 890, comments: 156, isLiked: false },
];

export function SocialFeed() {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p));
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-8 px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Feed da Comunidade</h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>O que está a acontecer no Universo MATZON</p>
      </div>

      <div className="p-4 rounded-3xl mb-6" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="flex gap-3">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="you" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
          <div className="flex-1">
            <textarea placeholder="Partilhe a sua última vitória..." className="w-full bg-transparent text-sm resize-none focus:outline-none min-h-[50px]" style={{ color: 'var(--text-primary)' }} />
            <div className="flex items-center justify-between pt-3 mt-1" style={{ borderTop: 'none' }}>
              <div className="flex gap-1">
                <button className="p-2 rounded-xl transition-colors" style={{ color: 'var(--text-tertiary)' }}>
                  <ImageIcon className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-xl transition-colors" style={{ color: 'var(--text-tertiary)' }}>
                  <Trophy className="w-4 h-4" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all" style={{ backgroundColor: '#0A84FF', color: '#fff' }}>
                Postar <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-5 rounded-3xl" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img src={post.author.photo} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{post.author.name}</span>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{post.author.tag}</span>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{post.timestamp}</span>
                </div>
              </div>
              <button style={{ color: 'var(--text-tertiary)' }}>
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>{post.content}</p>

            <div className="flex items-center gap-5">
              <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: post.isLiked ? '#FF453A' : 'var(--text-tertiary)' }}>
                <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                {post.likes}
              </button>
              <button className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                <MessageSquare className="w-4 h-4" />
                {post.comments}
              </button>
              <button className="ml-auto" style={{ color: 'var(--text-tertiary)' }}>
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
