import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Use Astro's Tailwind integration
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Apply Tailwind to all relevant files
      config: {
        applyBaseStyles: false, // Optional: Set to false if you want full control over Tailwind styles
        configFile: './tailwind.config.js', // Optional: Point to a separate Tailwind config file
      },
    }),
  ],
});