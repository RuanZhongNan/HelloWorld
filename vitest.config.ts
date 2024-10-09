// vitest.config.ts

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: ["html"],
    // outputFile: "./.vitest-html/index.html",
  },
});
