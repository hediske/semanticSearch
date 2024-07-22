import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:
        {
          'primary': '#FF5D5D',
          'text' : '#4B4B4B',
          'heading': '#5A0005',
          'background':'#EDEFEF'
        }
    },
  },
  plugins: [],
};
export default config;
