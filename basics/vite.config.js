// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      // Your existing proxy (if you still need it)
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

      // New proxy rule for jsondataai.com
      "/jsondata": {
        // When your frontend calls /jsondata/...
        target: "https://www.jsondataai.com", // The base URL of the external API
        changeOrigin: true, // Important for cross-origin requests
        rewrite: (path) => path.replace(/^\/jsondata/, "/api"), // Remove /jsondata and prepend /api
        // because the external path is /api/jIrSj2I
      },
    },
  },
});
