export interface NuiMessage<T = unknown> {
  type: string;
  data: T;
}

export interface NuiCallback<T = unknown> {
  data: T;
  success: boolean;
  error?: string;
}