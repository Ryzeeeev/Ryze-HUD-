export const NUI_EVENTS = {
  TOGGLE_UI: 'toggleUI',
  UPDATE_PLAYER: 'updatePlayerData',
  UPDATE_INVENTORY: 'updateInventory',
  UPDATE_NOTIFICATIONS: 'updateNotifications',
} as const;

export const KEYBINDS = {
  TOGGLE_UI: 'k',
} as const;

export const DEFAULT_VALUES = {
  MAX_HEALTH: 100,
  MAX_ARMOR: 100,
  MAX_STAMINA: 100,
} as const;