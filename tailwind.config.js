/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        // Core Colors
        background: "#000000",             // True black
        "bg-dark": "#0a0a0a",              // Slightly lighter black for sections
        "bg-card": "#1a1a1a",              // Used for cards or contrast blocks

        // Accent Colors
        "accent-yellow": "#fce83a",        // Main accent color (bright yellow)
        "accent-light": "#fff9c4",         // Optional lighter yellow (if needed)

        // Text Colors
        "text-primary": "#FFFFFF",         // Main text color - white
        "text-secondary": "#fce83a",       // Highlighted text (yellow)
        "text-muted": "#B0B0B0",           // Muted white-gray

        // Custom branding
        'shovel-head-main-color': "#fce83a",  // Alias for main yellow (used in your components)
      },

      fontFamily: {
        bitcount: ['"Bitcount Prop Double"', "sans-serif"],
        nirvana: ["Nirvana", "serif"],
      },
    },
  },
  plugins: [],
};
