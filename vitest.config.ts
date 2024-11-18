import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import typecript from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), typecript(), vanillaExtractPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    root: "app",
  },
});
