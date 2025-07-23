/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'], // Scan all relevant files
  theme: {
    extend: {
      colors: {
        background: '#18130E', // Deep dark background
        accent: '#E5E5DB',     // Soft light text/accent
      },
    },
  },
  plugins: [],
};
