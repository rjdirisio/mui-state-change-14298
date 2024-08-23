import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    define: {
      "process.env": process.env,
    },
    server: {
      open: true,
    },
  };
});
