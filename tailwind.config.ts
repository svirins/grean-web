import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    screens: {
      md: "640px",
      lg: "1024px",
      xl: "1500px",
    },
    colors: {
      // color scheme is defined in /app.css
      transparent: "transparent",
      current: "currentColor",
      white: "var(--color-white)",
      black: "var(--color-black)",
      accent: "var(--color-blue-500)",
      active: "color-red-300",
      blue: {
        100: "var(--color-blue-100)",
        200: "var(--color-blue-200)",
        300: "var(--color-blue-300)",
        400: "var(--color-blue-400)",
        500: "var(--color-blue-500)",
        600: "var(--color-blue-600)",
        700: "var(--color-blue-700)",
        800: "var(--color-blue-800)",
        900: "var(--color-blue-900)",
      },
      gray: {
        50: "#f7f7f7",
        100: "var(--color-gray-50)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
      red: "#ef4444",
    },

    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-xslow": "spin 7s linear infinite",
        "reverse-spin": "reverse-spin 1s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },

      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        xl: "1.375rem", // 22px
        "2xl": "1.5625rem", // 25px
        "3xl": "1.875rem", // 30px
        "4xl": "2.5rem", // 40px
        "5xl": "3.125rem", // 50px
        "6xl": "3.75rem", // 60px
        "7xl": "4.375rem", // 70px
      },
      fontWeight: {
        base: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      gridTemplateRows: {
        "max-content": "max-content",
      },
      spacing: {
        "5vw": "5vw", // pull featured sections and navbar in the margin
        "8vw": "8vw", // positions hero img inside the margin
        "10vw": "10vw", // page margin
      },
      height: {
        hero: "min(60rem, calc(100vh - 10rem))", // screen - navbar height (lg: only)
      },
      maxWidth: {
        "8xl": "96rem",
      },
      maxHeight: {
        "50vh": "50vh", // max height for medium size hero images
        "75vh": "75vh", // max height for giant size hero images
      },
      rotate: {
        "-135": "-135deg",
        135: "135deg",
      },
      typography: (theme: any) => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = (size: string) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        const breakout = {
          marginLeft: 0,
          marginRight: 0,
          gridColumn: "2 / span 10",
        };

        return {
          // DEFAULT only holds shared stuff and not the things that change
          // between light/dark
          DEFAULT: {
            css: [
              {
                "> *": {
                  gridColumn: "1 / -1",

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    gridColumn: "3 / span 8",
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                "> div": {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                a: {
                  textDecoration: "none",
                },
                "a:hover,a:focus": {
                  textDecoration: "underline",
                  outline: "none",
                },
                strong: {
                  fontWeight: theme("fontWeight.medium"),
                  fontSize: fontSize("lg"),
                },
                hr: {
                  marginTop: theme("spacing.8"),
                  marginBottom: theme("spacing.16"),
                },
                pre: {
                  color: "var(--base05)",
                  backgroundColor: "var(--base00)",
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  marginLeft: `-${theme("spacing.10vw")}`,
                  marginRight: `-${theme("spacing.10vw")}`,
                  padding: theme("spacing.8"),
                  borderRadius: 0,

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: theme("borderRadius.lg"),
                    ...breakout,
                  },
                },
                ".embed": {
                  position: "relative",
                  marginLeft: "-10vw",
                  marginRight: "-10vw",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    ...breakout,
                  },
                },
                ".embed > div": {
                  height: "0px",
                },
                ".embed > div > iframe": {
                  height: "100% !important",
                  width: "100% !important",
                  top: "0",
                  left: "0",
                  position: "absolute",
                  border: "none",
                  borderRadius: "0 !important",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: "0.5rem !important",
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                "h1, h2, h3, h4, h5, h6": {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme("fontWeight.normal"),

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontWeight: theme("fontWeight.medium"),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                "h1, h2": {
                  fontSize: fontSize("2xl"),
                  marginTop: theme("spacing.20"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("3xl"),
                  },
                },
                h3: {
                  fontSize: fontSize("xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("2xl"),
                  },
                },
                "h4, h5, h6": {
                  fontSize: fontSize("2xl"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("xl"),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme("borderRadius.lg"),
                },
              },
            ],
          },
          // use prose-light instead of default, so it's easier to see theme differences
          light: {
            css: [
              {
                color: theme("colors.gray.500"),
                a: {
                  color: theme("colors.black"),
                },
                strong: {
                  color: theme("colors.black"),
                },
                hr: {
                  borderColor: theme("colors.gray.200"),
                },
                code: {
                  color: theme("colors.gray.800"),
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: theme("colors.black"),
                },
                "thead, tbody tr": {
                  borderBottomColor: theme("colors.gray.200"),
                },
              },
            ],
          },
          dark: {
            css: [
              {
                color: theme("colors.gray.400"),
                a: {
                  color: theme("colors.white"),
                },
                strong: {
                  color: theme("colors.white"),
                },
                hr: {
                  borderColor: theme("colors.gray.600"),
                },
                code: {
                  color: theme("colors.gray.100"),
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: theme("colors.white"),
                },
                "thead, tbody tr": {
                  borderBottomColor: theme("colors.gray.600"),
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [typography],
} satisfies Config;
