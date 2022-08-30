import { resolve } from "path";

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// naive ui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
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
    build: {
      outDir: "dist",
      manifest: true,
      target: 'esnext',
      sourcemap: "inline",
      assetsDir: "static",
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
      chunkSizeWarningLimit: 512, // chunk 大小警告的限制（单位kb）
    },
    resolve: {
      alias: {
        "*": resolve(__dirname, ""),
        "@": resolve(__dirname, "src"),
      },
    },
  }
})
