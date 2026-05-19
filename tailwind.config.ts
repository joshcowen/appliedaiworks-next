import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background":                "#060e20",
        "surface":                   "#060e20",
        "surface-dim":               "#060e20",
        "surface-container-lowest":  "#000000",
        "surface-container-low":     "#091328",
        "surface-container":         "#0f1930",
        "surface-container-high":    "#141f38",
        "surface-container-highest": "#192540",
        "surface-variant":           "#192540",
        "surface-bright":            "#1f2b49",
        "on-surface":                "#dee5ff",
        "on-surface-variant":        "#a3aac4",
        "outline":                   "#6d758c",
        "outline-variant":           "#40485d",
        "primary":                   "#8ff5ff",
        "on-primary":                "#005d63",
        "brand-orange":              "#FF6B00",
        "brand-orange-dim":          "#CC5500",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body:     ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        "2xl":   "1rem",
        "3xl":   "1.5rem",
        full:    "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
