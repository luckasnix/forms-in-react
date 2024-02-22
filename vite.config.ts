import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/rollup-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylex({})],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
})
