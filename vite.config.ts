import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"
import { viteMockServe } from 'vite-plugin-mock'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
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
