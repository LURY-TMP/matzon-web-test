'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function useAuthGuard() {
  const { isLoggedIn, isLoading, openAuthModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.replace('/');
      openAuthModal();
    }
  }, [isLoggedIn, isLoading]);

  return { isLoggedIn, isLoading };
}
