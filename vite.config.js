import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    include: ['@tabler/icons-react']
  },
  server: {
    hmr: true
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
