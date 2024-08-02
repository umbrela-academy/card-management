import { defineConfig } from 'astro/config';
import playformCompress from "@playform/compress";
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import auth from "auth-astro";

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [
    playformCompress(), 
    tailwind({
      applyBaseStyles: false
    }), 
    svelte(), 
    starlight({
      title: "Card Management User Manual"
    }), 
    sitemap(), 
    auth(), 
    analogjsangular({
      vite: {
        inlineStylesExtension: 'scss',
      }
    })
  ],
  site: 'https://gitasp.app',
  output: "hybrid",
  vite: {
    noExternal: [`@rx-angular/**`]
  },
  adapter: node({
    mode: "standalone"
  })
});