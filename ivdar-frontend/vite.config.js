import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: { postcss: "./postcss.config.cjs" },
  server: {
    host: '127.0.0.1',   // bind for CI smoke tests
    port: 5173,
    strictPort: true,
  },
}); 