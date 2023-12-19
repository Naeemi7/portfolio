import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the current working directory
const currentWorkingDirectory = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": `${currentWorkingDirectory}/src`, // Set the base directory for your project
      "@assets": `${currentWorkingDirectory}/src/assets`,
      "@images": `${currentWorkingDirectory}/src/assets/images`,
    },
  },
});
