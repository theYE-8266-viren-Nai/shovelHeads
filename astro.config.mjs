import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
  integrations: [react()],
  theme: {
    extend: {
      colors: {
        // Background colors
        background: '#18130E',     // Deep dark background (your current)
        'bg-dark': '#0F0B08',      // Even darker for contrast
        'bg-card': '#1F1A15',      // Slightly lighter for cards/sections
        
        // RAUE brand colors (inspired by the logo)
        'raue-orange': '#FF6B35',  // Main orange from logo
        'raue-coral': '#FF8F65',   // Lighter coral shade
        'raue-red': '#E55B3C',     // Deeper red-orange
        'raue-peach': '#FFB4A1',   // Soft peach highlight
        
        // Text colors
        accent: '#E5E5DB',         // Soft light text (your current)
        'text-primary': '#FFFFFF', // Pure white for headings
        'text-secondary': '#B8B5B0', // Muted text
        'text-muted': '#8B8680',   // Very muted text
        
        // Utility colors that work with the palette
        'neutral-900': '#18130E',
        'neutral-800': '#1F1A15',
        'neutral-700': '#2A241E',
        'neutral-600': '#3D352C',
        'neutral-500': '#5C5248',
      },
      fontFamily: {
       bitcount: ['"Bitcount Prop Double"', 'sans-serif'],
        
      },
    },
  },

  plugins: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
});