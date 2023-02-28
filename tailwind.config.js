/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.{js,html}",
    "./src/**/*.{js,html}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      sans: ["GolosUIWebRegular", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1rem" }],
      base: ["1rem", { lineHeight: "1.15rem" }],
      lg: ["1.25rem", { lineHeight: "1.25rem" }],
      xl: ["1.5rem", { lineHeight: "1.5rem" }],
      "2xl": ["2rem", { lineHeight: "1.5rem" }],
      "3xl": ["4rem", { lineHeight: "2rem" }],
    },
  },
  important: true,
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  plugins: [require("@tailwindcss/forms")],
  plugins: [require("@tailwindcss/line-clamp")],
}
