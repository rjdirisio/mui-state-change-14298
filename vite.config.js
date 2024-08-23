import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    define: {
      "process.env": process.env,
    },
    // plugins: [
    //   react({
    //     jsxImportSource: "@emotion/react",
    //     babel: {
    //       plugins: ["@emotion/babel-plugin"],
    //     },
    //   }),
    // ],
    server: {
      open: true,
    },
    // https://github.com/mui/material-ui/issues/32727#issuecomment-1967192208
    optimizeDeps: {
      include: [
        // "@mui/material/Tooltip",
        // "@emotion/styled",
        // "@emotion/react",
        // "@mui/material/Unstable_Grid2",
        // "@mui/icons-material",
      ],
    },
  };
});
