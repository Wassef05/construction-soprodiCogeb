import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true, // ou '0.0.0.0'
    port: process.env.PORT || 5173,
    strictPort: true,
    proxy: {
      '/soprodi': {
        // target: 'http://localhost:4000/api',
        target: 'http://localhost:4000',

        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
       // Séparation des dépendances principales en un chunk séparé
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Créer un chunk 'vendor' pour les modules externes
          }
        },
      },
    },
  },
});
