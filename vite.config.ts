import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      types: fileURLToPath(new URL("./src/types", import.meta.url)),
      views: fileURLToPath(new URL("./src/views", import.meta.url)),
      api: fileURLToPath(new URL("./src/apis", import.meta.url)),
      stores: fileURLToPath(new URL("./src/stores", import.meta.url)),
      routers: fileURLToPath(new URL("./src/routers", import.meta.url)),
      utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },

  plugins: [
    vue(),

    AutoImport({
      dts: "auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      dts: "components.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
