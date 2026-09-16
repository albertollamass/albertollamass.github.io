import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Base '/' because this is a user site (albertollamass.github.io) served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
