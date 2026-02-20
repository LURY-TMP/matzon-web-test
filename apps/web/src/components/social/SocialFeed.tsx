'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Share2, MoreHorizontal, Image as ImageIcon, Send, Trophy } from 'lucide-react';

const initialPosts = [
  {
    id: 1,
    author: { name: 'S1mple', tag: '#EUW', avatar: '', initials: 'S1', photo: 'https://randomuser.me/api/portraits/men/44.jpg' },
    content: 'Acabei de garantir o Top 2 Global! O matchmaking de hoje estava insano. GG WP a todos que jogaram contra mim na última bracket. 🏆🔥',
    timestamp: '2h', likes: 1240, comments: 84, hasImage: false, isLiked: true,
  },
  {
    id: 2,
    author: { name: 'John Doe', tag: '#MZ1', avatar: '', initials: 'JD', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    content: 'Aquele clutch no 1v3 para fechar a partida... Nunca duvidem do buff do teclado novo! 😂',
    timestamp: '5h', likes: 342, comments: 12, hasImage: false, isLiked: false,
  },
  {
    id: 3,
    author: { name: 'TenZ', tag: '#NA1', avatar: '', initials: 'TZ', photo: 'https://randomuser.me/api/portraits/men/55.jpg' },
    content: 'Procurando um Duo para grindar o rank Elite esta noite. Requisitos: comunicação no Discord e não dar rage no primeiro round. Alguém on? ⚔️',
    timestamp: '8h', likes: 890, comments: 156, hasImage: false, isLiked: false,
  }
];

export function SocialFeed() {
  const [posts, setPosts] = useState(initialPosts);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 };
      }
      return post;
    }));
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-12 px-4 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">Feed da Comunidade</h2>
        <p className="text-white/50 text-sm mt-1 font-semibold">Veja o que está a acontecer no Universo MATZON</p>
      </div>
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-4 mb-8 shadow-lg">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="JD" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1">
            <textarea placeholder="Partilhe a sua última vitória ou procure um Duo..." className="w-full bg-transparent text-white placeholder:text-white/30 resize-none outline-none text-lg min-h-[60px]" />
            <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-2">
              <div className="flex gap-2">
                <button className="p-2 text-white/50 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-full transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-white/50 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-full transition-colors">
                  <Trophy className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-white/90 transition-transform active:scale-95">
                Postar <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
        {posts.map((post) => (
          <motion.div key={post.id} variants={postVariants} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg hover:border-white/20 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img src={post.author.photo} alt={post.author.name} className="w-12 h-12 rounded-full flex-shrink-0 shadow-md object-cover" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-base cursor-pointer hover:underline">{post.author.name}</span>
                    <span className="text-white/40 text-sm font-semibold">{post.author.tag}</span>
                  </div>
                  <span className="text-white/30 text-xs font-bold">{post.timestamp}</span>
                </div>
              </div>
              <button className="text-white/30 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/90 text-[15px] leading-relaxed mb-4">{post.content}</p>
            <div className="flex items-center gap-6 mt-4">
              <button onClick={() => toggleLike(post.id)} className={`flex items-center gap-2 text-sm font-bold transition-colors group ${post.isLiked ? 'text-pink-500' : 'text-white/50 hover:text-pink-500'}`}>
                <div className={`p-2 rounded-full transition-colors ${post.isLiked ? 'bg-pink-500/10' : 'group-hover:bg-pink-500/10'}`}>
                  <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                </div>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-sm font-bold text-white/50 hover:text-cyan-400 transition-colors group">
                <div className="p-2 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-sm font-bold text-white/50 hover:text-green-400 transition-colors group ml-auto">
                <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                  <Share2 className="w-5 h-5" />
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
