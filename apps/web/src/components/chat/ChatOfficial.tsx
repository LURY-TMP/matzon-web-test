'use client';

import React, { useState, useRef } from 'react';

type Message = { id: string; content: string; type: 'sent' | 'received' | 'ai-response'; isAudio?: boolean; isProcessing?: boolean };
type ChatInfo = { name: string; isOnline: boolean; isAI: boolean; avatar: string };

export function ChatOfficial() {
  const [activeView, setActiveView] = useState<'home' | 'chat'>('home');
  const [activeChat, setActiveChat] = useState<ChatInfo | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const openChat = (info: ChatInfo) => {
    setActiveChat(info);
    setMessages([]);
    setActiveView('chat');
  };

  const closeChat = () => {
    setActiveView('home');
    setIsRecording(false);
    setInputValue('');
  };

  const sendMessage = (text: string, isAudio = false) => {
    if (!text && !isAudio) return;
    const newMsg: Message = { id: Date.now().toString(), content: text, type: 'sent', isAudio };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    scrollToBottom();

    if (activeChat?.isAI) {
      const pid = Date.now().toString() + 'p';
      setTimeout(() => {
        setMessages(prev => [...prev, { id: pid, content: '', type: 'ai-response', isProcessing: true }]);
        scrollToBottom();
        setTimeout(() => {
          setMessages(prev => prev.map(m => m.id === pid ? { ...m, content: 'Entendido. A mensagem foi processada com sucesso no sistema Matzon.', isProcessing: false } : m));
          scrollToBottom();
        }, 1500);
      }, 300);
    }
  };

  const handleMic = () => {
    if (!isRecording) { setIsRecording(true); }
    else { setIsRecording(false); sendMessage('', true); }
  };

  const aiGrad = 'linear-gradient(135deg, #FF2D55, #5E5CE6, #007AFF)';

  return (
    <div style={{ position: 'relative', width: '100%', height: '100dvh', background: '#000', overflow: 'hidden', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

      {/* ===== HOME VIEW ===== */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: '#fff', display: 'flex', flexDirection: 'column',
        transform: activeView === 'chat' ? 'translateX(-25%)' : 'translateX(0)',
        filter: activeView === 'chat' ? 'brightness(0.8)' : 'brightness(1)',
        transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), filter 0.4s',
        zIndex: 10,
      }}>
        {/* Header */}
        <header style={{ padding: '14px 16px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.85)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ position: 'relative' }}>
              <img src="https://ui-avatars.com/api/?name=Eu&background=333&color=fff" style={{ width: 32, height: 32, borderRadius: '50%' }} alt="Perfil" />
              <span style={{ position: 'absolute', top: -2, right: -4, background: 'red', color: 'white', fontSize: 10, padding: '1px 4px', borderRadius: 10, border: '1px solid white' }}>3</span>
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Conversas</h1>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ background: '#F5F5F5', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
            </button>
            <button style={{ background: '#F5F5F5', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </button>
          </div>
        </header>{/* Search */}
        <div style={{ padding: '5px 16px' }}>
          <div style={{ background: '#F0F2F5', borderRadius: 20, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, color: '#65676B' }}>
            <svg width="16" height="16" fill="#8E8E93" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <input type="text" placeholder="Pesquisar" style={{ border: 'none', background: 'transparent', width: '100%', fontSize: 16, outline: 'none' }} />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* Stories */}
          <div style={{ display: 'flex', gap: 12, padding: 16, overflowX: 'auto', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            {/* My Story */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 60, cursor: 'pointer' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #E4E6EB', padding: 2, position: 'relative' }}>
                <img src="https://ui-avatars.com/api/?name=Eu&background=333&color=fff" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
                <span style={{ position: 'absolute', bottom: 0, right: 0, background: '#0084FF', color: 'white', width: 18, height: 18, borderRadius: '50%', border: '2px solid white', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</span>
              </div>
              <span style={{ fontSize: 12, color: '#65676B' }}>Sua nota</span>
            </div>
            {/* AI Story */}
            <div onClick={() => openChat({ name: 'Agente MZ', isOnline: true, isAI: true, avatar: '' })} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 60, cursor: 'pointer' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: aiGrad, padding: 2 }}>
                <div style={{ background: '#000', width: '100%', height: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
                </div>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, background: aiGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Agente MZ</span>
            </div>
            {/* João Story */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 60, cursor: 'pointer' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #E4E6EB', padding: 2 }}>
                <img src="https://ui-avatars.com/api/?name=Joao+M&background=007AFF&color=fff" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
              </div>
              <span style={{ fontSize: 12, color: '#65676B' }}>João</span>
            </div>
            {/* Ana Story */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 60, cursor: 'pointer' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #0084FF', padding: 2 }}>
                <img src="https://ui-avatars.com/api/?name=Ana+D&background=FF2D55&color=fff" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
              </div>
              <span style={{ fontSize: 12, color: '#65676B' }}>Ana</span>
            </div>
          </div>

          {/* Chat List */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {/* Agente MZ */}
            <li onClick={() => openChat({ name: 'Agente MZ', isOnline: true, isAI: true, avatar: '' })}
              style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', cursor: 'pointer' }}>
              <div style={{ position: 'relative', marginRight: 12 }}>
                <div style={{ position: 'absolute', top: -2, left: -2, right: -2, bottom: -2, borderRadius: '50%', background: aiGrad, opacity: 0.6, filter: 'blur(3px)' }} />
                <div style={{ width: 56, height: 56, background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontWeight: 600, fontSize: 17, background: aiGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Agente MZ</span>
                  <span style={{ fontSize: 12, color: '#65676B' }}>Agora</span>
                </div>
                <p style={{ fontSize: 14, color: '#65676B', margin: 0 }}>Estou pronto para ajudar no torneio.</p>
              </div>
            </li>

            {/* João */}
            <li onClick={() => openChat({ name: 'João Matzon', isOnline: true, isAI: false, avatar: 'https://ui-avatars.com/api/?name=João+Matzon&background=007AFF&color=fff' })}
              style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', cursor: 'pointer' }}>
              <div style={{ position: 'relative', marginRight: 12 }}>
                <img src="https://ui-avatars.com/api/?name=João+Matzon&background=007AFF&color=fff" style={{ width: 56, height: 56, borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, background: '#31A24C', border: '2px solid white', borderRadius: '50%' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontWeight: 600, fontSize: 17 }}>João Matzon</span>
                  <span style={{ fontSize: 12, color: '#65676B' }}>14:02</span>
                </div>
                <p style={{ fontSize: 14, color: '#8E8E93', margin: 0 }}>Vamos jogar hoje? 🎮</p>
              </div>
            </li>

            {/* Ana */}
            <li onClick={() => openChat({ name: 'Ana Design', isOnline: true, isAI: false, avatar: 'https://ui-avatars.com/api/?name=Ana+D&background=FF2D55&color=fff' })}
              style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', cursor: 'pointer' }}>
              <div style={{ position: 'relative', marginRight: 12 }}>
                <img src="https://ui-avatars.com/api/?name=Ana+D&background=FF2D55&color=fff" style={{ width: 56, height: 56, borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, background: '#31A24C', border: '2px solid white', borderRadius: '50%' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <span style={{ fontWeight: 700, fontSize: 17 }}>Ana Design</span>
                    <span style={{ fontSize: 12, color: '#65676B' }}>13:45</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: 14, color: '#000', fontWeight: 700, margin: 0 }}>Enviei os assets SVG.</p>
                    <span style={{ width: 10, height: 10, background: '#0084FF', borderRadius: '50%', flexShrink: 0 }} />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Tab Bar */}
        <nav style={{ height: 50, background: 'rgba(255,255,255,0.95)', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-around' }}>
          <button style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0084FF', flex: 1, fontSize: 10, gap: 2, cursor: 'pointer' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            <span>Chats</span>
          </button>
          <button style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#65676B', flex: 1, fontSize: 10, gap: 2, cursor: 'pointer' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            <span>Pessoas</span>
          </button>
        </nav>
      </div>

      {/* ===== CHAT VIEW ===== */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: '#fff', display: 'flex', flexDirection: 'column',
        transform: activeView === 'chat' ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1)',
        zIndex: 20,
      }}>
        {/* Chat Header */}
        <header style={{ position: 'absolute', top: 0, width: '100%', height: 60, padding: '0 12px 0 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(0,0,0,0.05)', zIndex: 10 }}>
          <button onClick={closeChat} style={{ background: 'none', border: 'none', padding: 5, color: '#007AFF', cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginLeft: 4 }}>
            <div style={{ position: 'relative', marginRight: 10 }}>
              {activeChat?.isAI ? (
                <div style={{ width: 36, height: 36, background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
                </div>
              ) : (
                <>
                  <img src={activeChat?.avatar} style={{ width: 36, height: 36, borderRadius: '50%' }} />
                  {activeChat?.isOnline && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, background: '#31A24C', border: '2px solid white', borderRadius: '50%' }} />}
                </>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600, fontSize: 16, ...(activeChat?.isAI ? { background: aiGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : { color: '#000' }) }}>
                {activeChat?.name}
              </span>
              <span style={{ fontSize: 11, color: '#65676B' }}>{activeChat?.isAI ? 'Apple Intelligence' : (activeChat?.isOnline ? 'Online agora' : 'Offline')}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 15 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="22" height="22" fill="#007AFF" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="22" height="22" fill="#007AFF" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
            </button>
          </div>
        </header>

        {/* Messages */}
        <div style={{ flex: 1, padding: '70px 12px 80px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20, marginBottom: 20, opacity: 0.7 }}>
            {activeChat?.isAI ? (
              <div style={{ width: 80, height: 80, background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, padding: 15 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
              </div>
            ) : (
              <img src={activeChat?.avatar} style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 8 }} />
            )}
            <h3 style={{ fontWeight: 700, fontSize: 18, margin: '0 0 4px', ...(activeChat?.isAI ? { background: aiGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}) }}>{activeChat?.name}</h3>
            <p style={{ fontSize: 14, color: '#65676B', margin: 0 }}>Matzon MatchZone</p>
          </div>{messages.map(msg => (
            <div key={msg.id} style={{
              maxWidth: '70%', padding: '8px 12px', borderRadius: 18, fontSize: 16, lineHeight: 1.3,
              alignSelf: msg.type === 'sent' ? 'flex-end' : 'flex-start',
              background: msg.type === 'sent' ? 'linear-gradient(to right bottom, #0084FF, #00C6FF)' : (msg.type === 'ai-response' ? 'linear-gradient(135deg, #F2F2F7, #E5E5EA)' : '#E4E6EB'),
              color: msg.type === 'sent' ? 'white' : 'black',
              borderBottomRightRadius: msg.type === 'sent' ? 4 : 18,
              borderBottomLeftRadius: msg.type !== 'sent' ? 4 : 18,
              border: msg.type === 'ai-response' ? '1px solid rgba(0,0,0,0.05)' : 'none',
            }}>
              {msg.isProcessing ? (
                <span style={{ fontWeight: 600, background: 'linear-gradient(90deg, #5E5CE6, #007AFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Processando...</span>
              ) : msg.isAudio ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 140 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <div style={{ flex: 1, height: 20, opacity: 0.8, background: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' fill='white'><rect x='0' y='8' width='4' height='4' rx='2'/><rect x='8' y='5' width='4' height='10' rx='2'/><rect x='16' y='2' width='4' height='16' rx='2'/><rect x='24' y='6' width='4' height='8' rx='2'/><rect x='32' y='4' width='4' height='12' rx='2'/></svg>\") no-repeat center" }} />
                  <span style={{ fontSize: 11, fontWeight: 500 }}>0:04</span>
                </div>
              ) : msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <footer style={{ position: 'absolute', bottom: 0, width: '100%', padding: '8px', display: 'flex', alignItems: 'center', gap: 8, backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.85)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <button style={{ background: 'none', border: 'none', color: '#007AFF', padding: 4, cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </button>
          <button style={{ background: 'none', border: 'none', color: '#007AFF', padding: 4, cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </button>
          <div style={{ flex: 1, background: '#F0F2F5', borderRadius: 20, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="text" placeholder={isRecording ? 'Gravando... (Toque para parar)' : 'Aa'} disabled={isRecording}
              value={inputValue} onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(inputValue)}
              style={{ border: 'none', background: 'transparent', width: '100%', fontSize: 16, outline: 'none', height: 24 }} />
            <button style={{ background: 'none', border: 'none', color: '#007AFF', padding: 0, cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
            </button>
          </div>
          {inputValue.trim().length > 0 ? (
            <button onClick={() => sendMessage(inputValue)} style={{ background: 'none', border: 'none', color: '#007AFF', padding: 4, cursor: 'pointer' }}>
              <svg width="24" height="24" fill="#007AFF" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          ) : (
            <button onClick={handleMic} style={{ background: 'none', border: 'none', color: isRecording ? '#FF3B30' : '#007AFF', padding: 4, cursor: 'pointer', transform: isRecording ? 'scale(1.2)' : 'scale(1)', transition: 'all 0.2s' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
