/**
 *  Works as intended
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import { glob } from "glob";

// get all prompts from folder structure
const promptEntries = Object.fromEntries(
  glob
    .sync("src/components/prompts/*/prompt.tsx") // replace with your local path and file extension
    .map((file: string) => {
      return [
        file.split("/").slice(-2).shift()?.replace(".tsx", ""),
        resolve(__dirname, file),
      ];
    })
);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: promptEntries,
      output: {
        dir: "dist/prompts", // replace with where you want the bundle to compile
        entryFileNames: "[name].js",
        // file chunks
        chunkFileNames: "shared/[name]-[hash].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
    cssCodeSplit: false,
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});