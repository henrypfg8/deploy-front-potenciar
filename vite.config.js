import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target: "https://potenciar-solidario.onrender.com",
        ws: true,
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
