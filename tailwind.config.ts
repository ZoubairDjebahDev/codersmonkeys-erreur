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
    extend: {},
  },
  plugins: [],
};
export default config;
