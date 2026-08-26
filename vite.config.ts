import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(), 
        tailwindcss(),
        {
          name: 'copy-htaccess',
          closeBundle() {
            fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
          }
        }
      ],
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom'],
              'vendor-motion': ['framer-motion'],
              'vendor-i18n': ['i18next', 'react-i18next'],
              'vendor-lucide': ['lucide-react']
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.')
        }
      },
      ssr: {
        external: ['react-helmet-async', 'react-i18next', 'i18next']
      }
    };
});