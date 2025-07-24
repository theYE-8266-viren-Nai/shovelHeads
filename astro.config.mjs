import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],

  theme: {
    extend: {
      colors: {
        background: '#18130E', // Deep dark background
        accent: '#E5E5DB',     // Soft light text/accent
      },
    },
  },

  plugins: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
});