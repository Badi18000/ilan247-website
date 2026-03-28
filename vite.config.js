import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    // Generate gzip & brotli bundles for servers that support pre-compressed serving
    compression({ algorithm: "gzip", ext: ".gz" }),
    compression({ algorithm: "brotliCompress", ext: ".br" }),
  ],
  build: {
    // Split vendor chunks so users cache them independently of app code
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-gsap": ["gsap"],
          "vendor-lucide": ["lucide-react"],
        },
      },
    },
    // Inline assets smaller than 4 KB to reduce requests
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 600,
  },
});
