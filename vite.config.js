import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Oprit/', 
  plugins: [react()],
  build: {
    outDir: 'docs', // This tells Vite to use /docs instead of /dist
  }
})
