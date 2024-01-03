import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        scissorsFirst: "#EC9E0E",
        scissorsSecond: "#ECA922",
        paperFirst: "#4865F4",
        paperSecond: "#5671F5",
        rockFirst: "#DC2E4E",
        rockSecond: "#DD405D",
        lizardFirst: "#834FE3",
        lizardSecond: "#8C5DE5",
        cyanFirst: "#40B9CE",
        cyanSecond: "#52BED1",

        darkText: "#3B4363",
        scoreText: "#2A46C0",
        headerOutline: "#606E85",

        radialFirst: "#1F3756",
        radialSecond: "#141539",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
