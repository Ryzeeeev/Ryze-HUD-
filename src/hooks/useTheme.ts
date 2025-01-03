import { useState, useCallback } from 'react';
import { Theme } from '@/types';

export function useTheme(initialTheme: Theme = 'dark') {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(current => current === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, toggleTheme };
}