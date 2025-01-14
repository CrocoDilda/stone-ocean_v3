import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueDevTools(),
    visualizer({
      open: false, // Автоматически откроет отчёт в браузере
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: "esbuild", // Минификатор JavaScript
    terserOptions: {
      compress: {
        drop_console: true, // Удалить console.log
        drop_debugger: true, // Удалить debugger
      },
    },
  },
});
