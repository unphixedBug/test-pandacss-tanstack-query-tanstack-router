import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: "Nunito Sans, sans-serif" },
        },
        fontWeights: {
          light: { value: "300" },
          semibold: { value: "600" },
          extrabold: { value: "800" },
        },
        colors: {
          dark: {
            elements: { value: "hsl(209, 23%, 22%)" },
            background: { value: "hsl(207, 26%, 17%)" },
            text: { value: "hsl(0, 100%, 100%)" },
          },
          light: {
            text: { value: "hsl(200, 15%, 8%)" },
            input: { value: "hsl(0, 0%, 50%)" },
            background: { value: "hsl(0, 0%, 99%)" },
            elements: { value: "hsl(0, 100%, 100%)" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
