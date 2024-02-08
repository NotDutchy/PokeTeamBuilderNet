import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

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
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#1c26ff",
        "secondary": "#00e7e3",
        "accent": "#0043ff",
        "neutral": "#00070a",
        "base-100": "#1f2937",
        "info": "#00e8ff",
        "success": "#75f035",
        "warning": "#f4a300",
        "error": "#ed0145",
        },
      },
    ],
  },
};
export default config;
