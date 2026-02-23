'use client';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  elevated?: boolean;
  highlighted?: boolean;
  padding?: number | string;
  radius?: number;
  onClick?: () => void;
};

export function Card({ children, elevated, highlighted, padding = 20, radius = 20, onClick }: CardProps) {
  return (
    <div onClick={onClick}
      style={{ background: elevated ? '#1a1a22' : '#18181c', borderRadius: radius, padding, border: highlighted ? '1px solid rgba(37,99,255,0.35)' : '1px solid rgba(255,255,255,0.05)', cursor: onClick ? 'pointer' : undefined, transition: 'opacity 0.2s' }}>
      {children}
    </div>
  );
}
