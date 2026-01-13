import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/defkraft-blog/',
  server: {
    host: true,
    cors: true,
    allowedHosts: ['.trycloudflare.com']
  },
});
