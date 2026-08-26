/// <reference types="vite/client" />

import type { BiaoyiBridge } from './shared/types';

declare global {
  interface Window {
    biaoyi: BiaoyiBridge;
    biaoyiClient?: {
      appName: string;
      platform: string;
    };
  }
}

export {};
