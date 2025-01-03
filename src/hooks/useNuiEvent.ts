import { useEffect, useCallback } from 'react';
import { isEnvBrowser } from '@/lib/nui';
import type { NuiMessage } from '@/types';

export function useNuiEvent<T>(action: string, handler: (data: T) => void) {
  const eventListener = useCallback((event: MessageEvent<NuiMessage<T>>) => {
    const { data: eventData } = event;
    
    // Early return if no event data
    if (!eventData) return;
    
    // Safely destructure event data
    const { type, data } = eventData;
    
    // Validate event data
    if (type !== action || data === undefined) return;
    
    handler(data);
  }, [action, handler]);

  useEffect(() => {
    if (isEnvBrowser()) {
      console.log(`NUI Event listener registered for: ${action}`);
      return;
    }

    window.addEventListener('message', eventListener);
    return () => window.removeEventListener('message', eventListener);
  }, [action, eventListener]);
}