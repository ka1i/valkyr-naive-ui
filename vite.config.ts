import { resolve } from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 2333,
    host: "0.0.0.0",
    strictPort: true,
  },
  preview: {
    port: 2333,
    host: "0.0.0.0",
    strictPort: true,
  },
  resolve: {
    alias: {
      "*": resolve(__dirname, ""),
      "@": resolve(__dirname, "src"),
    },
  },
})
