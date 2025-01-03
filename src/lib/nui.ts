import { NUI_EVENTS } from './constants';

interface NuiMessage<T = unknown> {
  type: string;
  data: T;
}

export const isEnvBrowser = (): boolean => {
  return !(window as any).invokeNative;
};

export const sendNuiMessage = <T>(message: NuiMessage<T>): void => {
  if (isEnvBrowser()) {
    console.log('NUI Message:', message);
    return;
  }

  try {
    window.postMessage(message, '*');
  } catch (error) {
    console.error('Error sending NUI message:', error);
  }
};

export const sendNuiEvent = <T>(eventName: keyof typeof NUI_EVENTS, data: T): void => {
  sendNuiMessage({ type: NUI_EVENTS[eventName], data });
};