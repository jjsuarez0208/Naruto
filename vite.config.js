import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Naruto PWA',
        short_name: 'NarutoApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icons/Naruto_logo.svg.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/ninja.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
