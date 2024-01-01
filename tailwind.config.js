/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   sans: ['"Space Grotesk", sans-serif'],
    // },
    fontSize: {
      "fs-88": "88px",
      "fs-72": "72px",
      "fs-48": "48px",
      "fs-40": "40px",
      "fs-32": "32px",
      "fs-24": "24px",
      "fs-18": "18px",
      "fs-16": "16px",
    },
    lineHeight: {
      "lh-88": "88px",
      "lh-72": "72px",
      "lh-56": "56px",
      "lh-40": "40px",
      "lh-32": "32px",
      "lh-28": "28px",
      "lh-26": "26px",
    },
    letterSpacing: {
      "ls-2.5": "2.5px",
      "ls-2.286": "2.286px",
      "ls-2.045": "2.045px",
      "ls-1.5": "1.5px",
      "ls-1.136": "1.136px",
      "ls-1": "1px",
      "ls-0.444": "0.444px",
      "ls-0.333": "0.333px",
      "ls-0.222": "0.222px",
    },
    colors: {
      black: "#151515",
      green: "#4EE1A0",
      "med-black": "#242424",
      "med-white": "#d9d9d9",
      "pure-white": "#ffffff",
    },
    maxWidth: {
      desktop: "1440px",
      "project-card": "320px",
    },
    extend: {
      fontFamily: {
        sans: [
          "'Space Grotesk', 'sans-serif'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
