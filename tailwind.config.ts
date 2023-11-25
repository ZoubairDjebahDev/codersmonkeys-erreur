import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      primary: {
        200: "#EFEFFC",
        300: "#CFD0F6",
        400: "#7F81E8",
        DEFAULT: "#5F62E2",
        600: "#5658CB",
      },
      secondary: {
        200: "#EAF8F4",
        300: "#BFE9DE",
        400: "#56C4A7",
        DEFAULT: "#2AB691",
        600: "#26A482",
      },
      gray: {
        400: "#F2F2F2",
        500: "#E5E5E5",
        600: "#B2B2B2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
    },
    fontSize: {
      "8xl": /* Display - 120/120 */ [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "500",
        },
      ],
      "7xl": /* Headline 1 - 72/80 */ [
        "72px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": /* Headline 2 - 55/60 */ [
        "55px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": /* Headline 3 - 48/54 */ [
        "48px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.6px",
          fontWeight: "500",
        },
      ],
      "4xl": /* Headline 4 - 36/44 */ [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2px",
          fontWeight: "500",
        },
      ],
      "3xl": /* Headline 5 - 28/34 */ [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.8px",
          fontWeight: "500",
        },
      ],
      "2xl": /* Lead - 24/30 */ [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: /* Body ld - 21/30 */ [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.8px",
          fontWeight: "400",
        },
      ],
      base: /* Body base - 17/25 */ [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.7px",
          fontWeight: "400",
        },
      ],
      sm: /* Body sm - 15/23 */ [
        "15px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption1: /* caption 1 - 20/24 */ [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption2: /* caption 2 - 18/20 */ [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        },
      ],
      caption3: /* caption 3 - 16/18 */ [
        "16px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: /* caption 4 - 13/15 */ [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        },
      ],
    },

    extend: {},
  },
  plugins: [],
};
export default config;
