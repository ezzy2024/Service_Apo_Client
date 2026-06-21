import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/telepharmacy': {
        target: 'https://serviceapotheke-pdl-bot-830781040278.europe-west3.run.app',
        changeOrigin: true,
        secure: false,
      },
      '/api/timesheet': {
        target: 'https://api.serviceapotheke.tech',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
