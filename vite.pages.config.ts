// Build estático para GitHub Pages (independente do vite.config.ts usado pelo Lovable).
// Uso: PAGES_BASE=/nome-do-repositorio/ npm run build:pages  → gera dist-pages/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const here = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  root: here("./pages"),
  base: process.env["PAGES_BASE"] || "/",
  publicDir: here("./public"),
  envDir: here("."),
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": here("./src") } },
  build: { outDir: here("./dist-pages"), emptyOutDir: true },
});
