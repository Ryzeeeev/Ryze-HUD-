export interface PlayerData {
  health: number;
  armor: number;
  stamina: number;
  money: number;
  bank: number;
}

export interface Location {
  heading: number;
  name: string;
}

export interface GameState {
  playerData: PlayerData;
  location: Location;
}

export type Theme = 'light' | 'dark';