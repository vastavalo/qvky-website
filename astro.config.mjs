import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://qvky.fi",
  integrations: [tailwind()],
});
