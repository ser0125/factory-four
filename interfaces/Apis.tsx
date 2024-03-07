export interface Api {
  message: string;
  success: boolean;
  hostname?: string;
  time?: number;
  error?: any;
}

export interface Apis {
  [key: string]: Api;
}
