import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          1: "#0A0A0A",
          2: "#7A808C52",
          3: "#7A808C",
          4: "#FAFAFA",
        },
        primary: "#DF9ECD",
      },
    },
  },
  plugins: [],
} satisfies Config;
