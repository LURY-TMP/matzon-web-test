'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Plus, Sparkles, ChevronLeft, Phone, Video, Image as ImageIcon, Camera, Smile, Mic, Send, Play, MessageCircle, Users } from 'lucide-react';

type Message = { id: string; text?: string; isAudio?: boolean; sender: 'me' | 'other' | 'ai'; isProcessing?: boolean };
type Chat = { id: string; name: string; isOnline: boolean; isAI: boolean; avatar: string; messages: Message[] };

export function ChatOfficial() {
  const [activeView, setActiveView] = useState<'home' | 'chat'>('home');
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat?.messages]);

  const initialChats: Chat[] = [
    { id: 'ai', name: 'Agente MZ', isOnline: true, isAI: true, avatar: 'ai', messages: [{ id: '1', text: 'Estou pronto para ajudar no torneio.', sender: 'ai' }] },
    { id: 'joao', name: 'João Matzon', isOnline: true, isAI: false, avatar: 'https://ui-avatars.com/api/?name=João+Matzon&background=007AFF&color=fff', messages: [{ id: '1', text: 'Vamos jogar hoje? 🎮', sender: 'other' }] },
    { id: 'ana', name: 'Ana Design', isOnline: false, isAI: false, avatar: 'https://ui-avatars.com/api/?name=Ana+D&background=FF2D55&color=fff', messages: [{ id: '1', text: 'Enviei os assets SVG.', sender: 'other' }] },
  ];

  const [chats, setChats] = useState<Chat[]>(initialChats);

  const openChat = (chatId: string) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) { setActiveChat(chat); setActiveView('chat'); }
  };

  const closeChat = () => {
    setActiveView('home');
    setTimeout(() => setActiveChat(null), 400);
  };

  const handleSendMessage = (text: string, isAudio = false) => {
    if ((!text && !isAudio) || !activeChat) return;
    const newMessage: Message = { id: Date.now().toString(), text: isAudio ? undefined : text, isAudio, sender: 'me' };
    const updatedChat = { ...activeChat, messages: [...activeChat.messages, newMessage] };
    setActiveChat(updatedChat);
    setChats(chats.map(c => c.id === activeChat.id ? updatedChat : c));
    setInputValue('');
    if (activeChat.isAI) simulateAIResponse(updatedChat);
  };

  const simulateAIResponse = (currentChat: Chat) => {
    const pid = Date.now().toString() + 'ai';
    setActiveChat(prev => prev ? { ...prev, messages: [...prev.messages, { id: pid, sender: 'ai', isProcessing: true }] } : prev);
    setTimeout(() => {
      setActiveChat(prev => {
        if (!prev) return prev;
        return { ...prev, messages: [...prev.messages.filter(m => m.id !== pid), { id: Date.now().toString(), text: 'Entendido. A sua mensagem foi processada com sucesso no sistema Matzon.', sender: 'ai' }] };
      });
    }, 1500);
  };

  const handleMicClick = () => {
    if (!isRecording) { setIsRecording(true); }
    else { setIsRecording(false); handleSendMessage('', true); }
  };

  const aiGradient = "bg-gradient-to-br from-[#FF2D55] via-[#5E5CE6] to-[#007AFF]";
  const aiTextGradient = "bg-gradient-to-br from-[#FF2D55] via-[#5E5CE6] to-[#007AFF] text-transparent bg-clip-text";

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden font-sans text-black sm:max-w-md sm:mx-auto sm:border-x sm:border-white/20">
      {/* HOME VIEW */}
      <div className={`absolute inset-0 bg-white flex flex-col transition-all duration-400 z-10 ${activeView === 'chat' ? '-translate-x-1/4 brightness-[0.8]' : 'translate-x-0'}`}>
        <header className="pt-5 pb-2 px-4 flex justify-between items-center bg-white/85 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="https://ui-avatars.com/api/?name=Eu&background=333&color=fff" className="w-8 h-8 rounded-full" alt="Perfil" />
              <span className="absolute -top-0.5 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full border border-white">3</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Conversas</h1>
          </div>
          <div className="flex gap-3">
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"><Camera className="w-5 h-5" /></button>
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"><Plus className="w-5 h-5" /></button>
          </div>
        </header>
        <div className="px-4 py-2">
          <div className="bg-[#F0F2F5] rounded-full px-3 py-2 flex items-center gap-2 text-gray-500">
            <Search className="w-4 h-4" />
            <input type="text" placeholder="Pesquisar" className="bg-transparent border-none w-full outline-none text-[16px]" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
          {chats.map(chat => (
            <div key={chat.id} onClick={() => openChat(chat.id)} className="flex items-center px-4 py-2.5 cursor-pointer active:bg-[#F0F2F5] transition-colors">
              <div className="relative mr-3">
                {chat.isAI ? (
                  <div className="relative w-14 h-14">
                    <div className={`absolute -inset-[2px] rounded-full opacity-60 blur-[3px] animate-spin ${aiGradient}`} style={{animationDuration:'4s'}}></div>
                    <div className="absolute inset-0 bg-black rounded-full border border-white flex items-center justify-center z-10"><Sparkles className="w-6 h-6 text-white" /></div>
                  </div>
                ) : (
                  <>
                    <img src={chat.avatar} className="w-14 h-14 rounded-full object-cover" />
                    {chat.isOnline && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#31A24C] border-2 border-white rounded-full"></div>}
                  </>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center overflow-hidden">
                <div className="flex justify-between items-center mb-0.5">
                  <span className={`font-semibold text-[17px] ${chat.isAI ? aiTextGradient : 'text-black'}`}>{chat.name}</span>
                  <span className="text-[12px] text-gray-500">Agora</span>
                </div>
                <p className="text-[14px] text-gray-500 truncate">{chat.messages[chat.messages.length - 1]?.text || 'Mensagem de voz'}</p>
              </div>
            </div>
          ))}
        </div>
        <nav className="absolute bottom-0 w-full h-[50px] bg-white/95 backdrop-blur-md border-t border-black/5 flex justify-around">
          <button className="flex flex-col items-center justify-center text-[#0084FF] gap-1 flex-1"><MessageCircle className="w-6 h-6 fill-current" /><span className="text-[10px] font-medium">Chats</span></button>
          <button className="flex flex-col items-center justify-center text-gray-500 gap-1 flex-1"><Users className="w-6 h-6" /><span className="text-[10px] font-medium">Pessoas</span></button>
        </nav>
      </div>

      {/* CHAT VIEW */}
      <div className={`absolute inset-0 bg-white flex flex-col transition-transform duration-400 z-20 ${activeView === 'chat' ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className="pt-5 h-[80px] px-2 flex items-center justify-between bg-white/85 backdrop-blur-xl border-b border-black/5 absolute top-0 w-full z-30">
          <button onClick={closeChat} className="p-2 text-[#0084FF]"><ChevronLeft className="w-7 h-7" /></button>
          <div className="flex flex-1 items-center ml-1">
            <div className="relative mr-2.5">
              {activeChat?.isAI ? (
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center"><Sparkles className="w-5 h-5 text-white" /></div>
              ) : (
                <>
                  <img src={activeChat?.avatar} className="w-9 h-9 rounded-full object-cover" />
                  {activeChat?.isOnline && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#31A24C] border-2 border-white rounded-full"></div>}
                </>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`font-semibold text-[16px] leading-tight ${activeChat?.isAI ? aiTextGradient : 'text-black'}`}>{activeChat?.name}</span>
              <span className="text-[11px] text-gray-500">{activeChat?.isAI ? 'Apple Intelligence' : (activeChat?.isOnline ? 'Online agora' : 'Offline')}</span>
            </div>
          </div>
          <div className="flex gap-4 pr-3 text-[#0084FF]"><Phone className="w-[22px] h-[22px]" /><Video className="w-[22px] h-[22px]" /></div>
        </header>

        <div className="flex-1 overflow-y-auto px-3 pt-[100px] pb-[80px] flex flex-col gap-1 bg-white hide-scrollbar">
          {activeChat?.messages.map((msg) => (
            <div key={msg.id} className={`max-w-[75%] px-3.5 py-2.5 text-[16px] leading-[1.3]
              ${msg.sender === 'me' ? 'bg-gradient-to-br from-[#0084FF] to-[#00C6FF] text-white self-end rounded-[18px] rounded-br-[4px]'
                : msg.sender === 'ai' ? 'bg-[#F2F2F7] text-black self-start rounded-[18px] rounded-bl-[4px]'
                : 'bg-[#E4E6EB] text-black self-start rounded-[18px] rounded-bl-[4px]'}`}>
              {msg.isProcessing ? <span className={`font-semibold ${aiTextGradient}`}>Processando...</span>
                : msg.isAudio ? <div className="flex items-center gap-2 min-w-[120px]"><Play className="w-5 h-5 fill-current" /><span className="text-[11px]">0:04</span></div>
                : msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <footer className="absolute bottom-0 w-full px-2 py-2 bg-white/90 backdrop-blur-md flex items-center gap-2 z-30 border-t border-black/5">
          <button className="p-1.5 text-[#0084FF]"><ImageIcon className="w-6 h-6" /></button>
          <button className="p-1.5 text-[#0084FF]"><Camera className="w-6 h-6" /></button>
          <div className="flex-1 bg-[#F0F2F5] rounded-[20px] px-3 py-1.5 flex items-center gap-2">
            <input type="text" placeholder={isRecording ? "Gravando..." : "Aa"} disabled={isRecording}
              className="bg-transparent border-none w-full text-[16px] outline-none h-6"
              value={inputValue} onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)} />
            <button className="text-[#0084FF]"><Smile className="w-6 h-6" /></button>
          </div>
          {inputValue.trim().length > 0
            ? <button onClick={() => handleSendMessage(inputValue)} className="p-1.5 text-[#0084FF]"><Send className="w-6 h-6 fill-current" /></button>
            : <button onClick={handleMicClick} className={`p-1.5 ${isRecording ? 'text-[#FF3B30] scale-125' : 'text-[#0084FF]'} transition-all`}><Mic className="w-6 h-6 fill-current" /></button>
          }
        </footer>
      </div>
      <style dangerouslySetInnerHTML={{__html: '.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}'}} />
    </div>
  );
}
