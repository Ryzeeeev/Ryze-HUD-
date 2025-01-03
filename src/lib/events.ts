import { NUI_EVENTS } from './constants';
import { sendNuiEvent } from './nui';

export const toggleUI = () => {
  sendNuiEvent(NUI_EVENTS.TOGGLE_UI, {});
};

export const updatePlayerData = (data: any) => {
  sendNuiEvent(NUI_EVENTS.UPDATE_PLAYER, data);
};

export const updateInventory = (data: any) => {
  sendNuiEvent(NUI_EVENTS.UPDATE_INVENTORY, data);
};

export const updateNotifications = (data: any) => {
  sendNuiEvent(NUI_EVENTS.UPDATE_NOTIFICATIONS, data);
};