import { resolve } from "path";

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite';

import { wrapperEnv } from './build/utils';
import { createProxy } from './build/vite/proxy';

import moment from 'moment';
import pkg from './package.json';
import { execSync } from 'child_process';

// naive ui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const { name, author, license, version, repository, description, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  pkg: { name, author, license, version, repository, description, dependencies, devDependencies },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  gitTags: execSync('echo $(git rev-parse --short HEAD)').toString().trim(),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;

  return {
    envPrefix: "valkyr_",
    base: VITE_PUBLIC_PATH,
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
      port: VITE_PORT,
      host: "0.0.0.0",
      strictPort: true,
      proxy: createProxy(VITE_PROXY),
    },
    preview: {
      port: VITE_PORT,
      host: "0.0.0.0",
      strictPort: true,
      proxy: createProxy(VITE_PROXY),
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
        "/^": resolve(__dirname, "."),
        "/@": resolve(__dirname, "src"),
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
})
