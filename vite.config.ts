import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  server: {
    host: "::",
=======
  base: "/",  

  server: {
    host: true,
>>>>>>> 05f55b0c066731ec428969f1136cd63cf85e85d3
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< HEAD
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
=======
    mode === "development" && componentTagger(),
  ].filter(Boolean),

>>>>>>> 05f55b0c066731ec428969f1136cd63cf85e85d3
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
<<<<<<< HEAD
=======

>>>>>>> 05f55b0c066731ec428969f1136cd63cf85e85d3
