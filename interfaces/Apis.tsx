export interface Api {
  message: string;
  success: boolean;
  hostname?: string;
  time?: number;
}

export interface Apis {
  [key: string]: Api;
}
