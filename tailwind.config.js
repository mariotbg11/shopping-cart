/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      "luxury",
      "night",
      "fantasy",
      "acid",
      "lemonade",
      "winter",
      "cmyk",
      "bumblebee",
      "cyberpunk",
      "forest",
      "halloween",
      "sunset",
    ],
  },
};
