import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",

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
});