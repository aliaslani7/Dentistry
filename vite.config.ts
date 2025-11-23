import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // ← مهم، برای Local Dev مسیر root باشه
  plugins: [
    react(),
    // ❌ Image optimizer رو الان حذف کردیم چون Local Dev هست
  ],

  server: {
    hmr: {
      overlay: false, // ارور HMR روی صفحه نشون داده نشه
    },
    port: 5173, // میتونی تغییر بدی اگر میخوای
  },

  optimizeDeps: {
    include: ["@mui/material", "@emotion/react", "@emotion/styled", "gsap"],
  },
});
