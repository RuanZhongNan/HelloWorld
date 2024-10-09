import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
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
