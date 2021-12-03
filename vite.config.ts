import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";

import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    sourcemap: true,
    outDir: "dist",
    assetsDir: "static",

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 2333,
    strictPort: true,
  },
  resolve: {
    alias: {
      "*": resolve(__dirname, ""),
      "@": resolve(__dirname, "src"),
    },
  },
});
