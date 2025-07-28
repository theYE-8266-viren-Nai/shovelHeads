/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        background: "#1C2526", // Dark gray background, inspired by the shutter door's dark tone
        "bg-dark": "#0F1415", // Even darker gray for contrast, mimicking deep shadows
        "bg-card": "#2D383A", // Slightly lighter gray for cards/sections, akin to wall texture
        // RAUE brand colors (replaced with gray tones)
<<<<<<< HEAD
        'shovel-head-main-color' : '#ffea3a',
        'raue-coral': '#666666',  // Lighter gray, replacing coral
        'raue-red': '#3A3A3A',    // Darker gray, replacing red
        'raue-peach': '#8A8A8A',  // Soft gray, replacing peach

=======
        "raue-orange": "#4A4A4A", // Medium gray, replacing orange
        "raue-coral": "#666666", // Lighter gray, replacing coral
        "raue-red": "#3A3A3A", // Darker gray, replacing red
        "raue-peach": "#8A8A8A", // Soft gray, replacing peach
>>>>>>> feat/temp/compotestpage
        // Text colors
        accent: "#D3D7D9", // Light gray for soft text, inspired by wall highlights
        "text-primary": "#FFFFFF", // Pure white for headings, matching bright areas
        "text-secondary": "#A9AEB0", // Muted gray for secondary text, mid-tone gray
        "text-muted": "#7D8486", // Very muted gray for subtle text, darker mid-tone
        // Utility colors
        "neutral-900": "#1C2526",
        "neutral-800": "#2D383A",
        "neutral-700": "#3E4547",
        "neutral-600": "#5F6567",
        "neutral-500": "#7D8486",
      },
      fontFamily: {
        bitcount: ['"Bitcount Prop Double"', "sans-serif"],
        nirvana: ["Nirvana", "serif"],
      },
    },
  },
  plugins: [],
};
