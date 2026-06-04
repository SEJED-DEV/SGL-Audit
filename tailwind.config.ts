import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#040404",
          foreground: "#F8F2E7",
        },
        secondary: {
          DEFAULT: "#F8F2E7",
          foreground: "#040404",
        },
        accent: {
          DEFAULT: "#5C5852",
          foreground: "#F8F2E7",
        },
        success: {
          DEFAULT: "#3C4434",
          foreground: "#F8F2E7",
        }
      },
    },
  },
  plugins: [],
};
export default config;
