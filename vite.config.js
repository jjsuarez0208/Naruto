import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg', 'icons/icon-192x192.png', 'icons/icon-512x512.png'],
      manifest: {
        name: 'Mi App Naruto',
        short_name: 'NarutoApp',
        description: 'Una app de ejemplo PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icons/ninja.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/Naruto_logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
