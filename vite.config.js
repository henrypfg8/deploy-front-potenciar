import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target:
          "https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app/",
        ws: true,
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
