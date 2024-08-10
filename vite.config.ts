import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/rollup-plugin'

const viteConfig = defineConfig({
  plugins: [react(), stylex({})],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
})

export default viteConfig
