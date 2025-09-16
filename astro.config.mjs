// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dorianniemiecsvrjs.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Spline Sans",
        weights: [400, 500, 600, 700],
        cssVariable: "--font-spline-sans",
        fallbacks: ["Tahoma", "Arial", "Helvetica", "sans-serif"],
        subsets: ["latin", "latin-ext"],
      },
    ],
  },
});
