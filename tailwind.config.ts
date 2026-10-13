import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        imr: {
          navy: "#0a0f1d",
          black: "#000000",
          "navy-dark": "#050811",
          blue: "#0284c7",
          "blue-primary": "#0284c7",
          "blue-sky": "#38bdf8",
          "blue-light": "#e0f2fe",
          accent: "#38bdf8",
        },
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.02em",
        wider: "0.05em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
