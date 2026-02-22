'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContext = { isLoggedIn: boolean; isLoading: boolean; login: () => void; logout: () => void; };
const AuthContext = createContext<AuthContext>({ isLoggedIn: false, isLoading: true, login: () => {}, logout: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('matzon_auth');
    if (stored === 'true') setIsLoggedIn(true);
    setIsLoading(false);
  }, []);

  const login = () => { localStorage.setItem('matzon_auth', 'true'); setIsLoggedIn(true); };
  const logout = () => { localStorage.removeItem('matzon_auth'); setIsLoggedIn(false); };

  return <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
