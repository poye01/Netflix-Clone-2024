import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Netflix-Clone-2024-Clone-2024/", // Base path for deployment
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory
    assetsDir: "assets", // Directory for static assets
  },
});
