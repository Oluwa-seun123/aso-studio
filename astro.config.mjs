import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  vite: {
    build: {
      cssCodeSplit: true,
    },
  },

  adapter: cloudflare()
});