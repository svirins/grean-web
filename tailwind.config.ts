import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "blue-500": "#2276FC",
        "yellow-100": "#fef7da",
        // newbk-design colors
        "bk-pink": "#FCDFEA",
        "bk-purple": "#C3BFF4",
        "bk-green": "#BBE6D2",
        "bk-yellow": "#FFF5E2",
        // grays and blacks
        // bk-black is bk-text
        "bk-black": "#000000",
        "bk-white": "#FFFFFF",
        "bk-gray": "#1D1D1D",
        "bk-light-gray": "#D9D9D9",
        "bk-medium-gray": "#0000008a",
        "bk-dark-gray": "#4D4D60",
        "bk-darker-gray": "#1E1E1E",
      },
      borderRadius: {
        large: "3.25rem",
        medium: "2rem",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: "1.2",
      },
      fontSize: {
        hero: "6rem",
        h1: "4rem",
        h2: "2.5rem",
        h3: "1.5rem",
        base: "1rem",
        label: "0.75rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
} satisfies Config;
