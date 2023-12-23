/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "prim-black": "#151515",
      "prim-green": "#4EE1A0",
      "prim-grey": "#242424",
      "prim-light": "#d9d9d9",
      "prim-white": "#FFFFFF",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    fontSize: {
      "fs-88": "88px",
      "fs-48": "48px",
      "fs-24": "24px",
      "fs-18": "18px",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    lineHeight: {
      "lh-88": "88px",
      "lh-48": "48px",
      "lh-32": "32px",
      "lh-28": "28px",
    },
    letterSpacing: {
      "ls-2.5": "-2.5px",
      "ls-1.5": "-1.5px",
    },
    extend: {},
  },

  plugins: [],
};
