import { resolve } from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// naive ui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
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
