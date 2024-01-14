/** @type {import("tailwindcss").Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      background: "rgb(var(--color-background) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
      button: "rgb(var(--color-button) / <alpha-value>)",
      buttonHover: "rgb(var(--color-buttonHover) / <alpha-value>)",
      buttonText: "rgb(var(--color-buttonText) / <alpha-value>)",
      sidePanel: "rgb(var(--color-sidePanel) / <alpha-value>)",
      sidePanelHover: "rgb(var(--color-sidePanelHover) / <alpha-value>)",
      border: "rgb(var(--color-border) / <alpha-value>)",
    },
    fontFamily: {
      albert: ["Albert Sans", "sans-serif"],
      figtree: ["Figtree", "sans-serif"],
    },
  },
  plugins: [],
};
