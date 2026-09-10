import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/notionbrain/', // GitHub Pages project site: https://santiagosuhe.github.io/notionbrain/
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs' // <-- Aquí cambiamos el directorio a 'docs' esto es lo importante
  }
});
