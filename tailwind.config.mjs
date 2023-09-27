import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Eagle Lake", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        pan: {
          "0%, 100%": { "background-position": "left top" },
          "50%": { "background-position": "right bottom" },
        },
      },
      animation: {
        pan: "pan 200s linear infinite",
      },
    },
  },
};
