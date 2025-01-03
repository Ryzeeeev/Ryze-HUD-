import { useState, useCallback } from 'react';
import { useNuiEvent } from './useNuiEvent';
import { NUI_EVENTS } from '@/lib/constants';
import type { GameState } from '@/types';

const initialState: GameState = {
  playerData: {
    health: 100,
    armor: 100,
    stamina: 100,
    money: 0,
    bank: 0
  },
  location: {
    heading: 0,
    name: 'Los Santos'
  }
};

export function useGameState(mockData?: GameState) {
  const [state, setState] = useState<GameState>(mockData || initialState);

  const updatePlayerData = useCallback((data: GameState['playerData']) => {
    setState(prev => ({ ...prev, playerData: data }));
  }, []);

  const updateLocation = useCallback((data: GameState['location']) => {
    setState(prev => ({ ...prev, location: data }));
  }, []);

  // Register NUI event listeners
  useNuiEvent(NUI_EVENTS.UPDATE_PLAYER, updatePlayerData);
  useNuiEvent('updateLocation', updateLocation);

  return state;
}