import { defineConfig } from 'astro/config';
import playformCompress from "@playform/compress";
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), tailwind({
    applyBaseStyles: false
  }), svelte(), starlight({
    title: "Card Management User Manual"
  }), sitemap()],
  site: 'https://cardemon.nep.work'
});