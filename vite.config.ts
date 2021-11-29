import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 2333,
    strictPort: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})
