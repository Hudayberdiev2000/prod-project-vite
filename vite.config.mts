import path from "path"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import i18nextLoader from 'vite-plugin-i18next-loader'

export default defineConfig({
  plugins: [
      svgr(),
    checker({ typescript: true }),
    react(),
    i18nextLoader({
    paths: ['public/locales'],
    namespaceResolution: 'basename',
  })
  ],
  server: { open: true, port: 3000 },
  resolve: {
    alias: {
      "~app": path.resolve(__dirname, "src/app"),
      "~pages": path.resolve(__dirname, "src/pages"),
      "~entities": path.resolve(__dirname, "src/entities"),
      "~features": path.resolve(__dirname, "src/features"),
      "~widgets": path.resolve(__dirname, "src/widgets"),
      "~shared": path.resolve(__dirname, "src/shared"),
    },
  },
})
