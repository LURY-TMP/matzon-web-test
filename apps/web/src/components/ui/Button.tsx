'use client';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const styles = {
  primary:   { background: 'linear-gradient(135deg, #2563FF, #7C3AED)', color: '#fff', border: 'none' },
  secondary: { background: 'rgba(255,255,255,0.07)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' },
  ghost:     { background: 'transparent', color: '#A1A1AA', border: '1px solid rgba(255,255,255,0.10)' },
  danger:    { background: 'rgba(255,69,58,0.12)', color: '#FF453A', border: '1px solid rgba(255,69,58,0.3)' },
};

const sizes = {
  sm: { padding: '8px 16px',  fontSize: 13, borderRadius: 10 },
  md: { padding: '12px 20px', fontSize: 14, borderRadius: 12 },
  lg: { padding: '14px 28px', fontSize: 15, borderRadius: 14 },
};

export function Button({ children, variant = 'primary', size = 'md', fullWidth, disabled, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ ...styles[variant], ...sizes[size], width: fullWidth ? '100%' : undefined, fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
      {children}
    </button>
  );
}
