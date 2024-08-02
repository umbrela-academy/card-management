import { defineConfig } from 'astro/config';
import playformCompress from "@playform/compress";
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), tailwind({
    applyBaseStyles: false
  }), svelte(), starlight({
    title: "Card Management User Manual"
  }), sitemap(), auth()],
  site: 'https://cardemon.nep.work',
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});