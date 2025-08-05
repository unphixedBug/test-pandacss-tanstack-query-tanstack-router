import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pandaPostcss from "@pandacss/dev/postcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // @ts-expect-error - PandaCSS PostCSS plugin type incompatibility
    postcss: { plugins: [pandaPostcss] },
  },
});
