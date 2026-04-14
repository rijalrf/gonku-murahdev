import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/murahdev/', // Sesuaikan dengan nama repo Mas di GitHub
})