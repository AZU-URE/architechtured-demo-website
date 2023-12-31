import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#182246",
        secondary: "#2c1b59",
        btnBlue: "#00A3FF",
      },
      fontFamily: {
        michroma: ["var(--font-michroma)"],
        questrial: ["var(--font-questrial)"],
      },
    },
  },
  plugins: [],
};
export default config;
