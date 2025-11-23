import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/Dentistry/", // اضافه برای GitHub Pages
  plugins: [
    react(),

    // ❗ image optimizer باعث خطای sharp میشه، پس در محیط GH Pages غیرفعال:
    // فقط اگر فقط روی local میخوای فعال باشه:
    // ...(process.env.NODE_ENV === "production"
    //   ? []
    //   : [
    //       ViteImageOptimizer({
    //         jpg: { quality: 80 },
    //         jpeg: { quality: 80 },
    //         png: { quality: 80 },
    //         webp: { quality: 80 },
    //       }),
    //     ]),
  ],

  server: {
    hmr: {
      overlay: false,
    },
  },

  optimizeDeps: {
    include: ["@mui/material", "@emotion/react", "@emotion/styled", "gsap"],
  },
});
