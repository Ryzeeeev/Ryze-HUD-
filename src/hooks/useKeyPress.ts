import { useEffect, useCallback } from 'react';
import { isEnvBrowser } from '@/lib/nui';

export function useKeyPress(targetKey: string, handler: () => void) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!event?.key) return;
      if (event.key.toLowerCase() === targetKey.toLowerCase()) {
        event.preventDefault();
        handler();
      }
    },
    [targetKey, handler]
  );

  useEffect(() => {
    if (isEnvBrowser()) {
      console.log(`Key press handler registered for: ${targetKey}`);
      return;
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [targetKey, handleKeyPress]);
}