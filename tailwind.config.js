/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        separator: "#ffffff2e",
        primarybgColor: "#150e28",
        secondarybgColor: "#903aff",
        primaryTextColor: "#ffffff",
        secondaryTextColor: "#d434fe",
        tertiaryTextColor: "#FF26B9"
      },
    },
  },
  plugins: [],
};
