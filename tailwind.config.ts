import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-cru": "#F5F5F0",
        "brand-dark": "#1C1C1C",
        "brand-text": "#1A1A1A",
        "brand-muted": "#4A4A4A",
        "brand-border": "#C4C4C4",
        "brand-primary": "#8B6B3D",
        "brand-secondary": "#3A5E5E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
