import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from 'vite-plugin-stylex'

const viteConfig = defineConfig({
  plugins: [react(), styleX()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
})

export default viteConfig
