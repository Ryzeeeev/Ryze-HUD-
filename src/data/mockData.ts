import type { GameState } from '@/types';
import { DEFAULT_VALUES } from '@/lib/constants';

export const mockData: GameState = {
  playerData: {
    health: DEFAULT_VALUES.MAX_HEALTH,
    armor: DEFAULT_VALUES.MAX_ARMOR,
    stamina: DEFAULT_VALUES.MAX_STAMINA,
    money: 5000,
    bank: 50000
  },
  location: {
    heading: 0,
    name: 'Los Santos'
  }
};