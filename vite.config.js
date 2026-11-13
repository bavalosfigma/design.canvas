import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Project site is served from https://bavalosfigma.github.io/design.canvas/
// Production assets must be prefixed with that path; local dev stays at /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/design.canvas/' : '/',
  plugins: [vue()],
  assetsInclude: ['**/*.mov'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
