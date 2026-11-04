import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Keep the Vite setup small so the same configuration works in development and production.
export default defineConfig({
  plugins: [react()],
})
