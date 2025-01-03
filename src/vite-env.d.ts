/// <reference types="vite/client" />

interface Window {
  invokeNative?: (action: string, data?: any) => void;
}