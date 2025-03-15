import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#fdeeee",
          50: "#fce5ea",
          100: "#f8c8d2",
          200: "#f28a98",
          300: "#ef6b7b",
          400: "#da4a65",
          500: "#c13d54",
          600: "#a83144",
          700: "#8f2534",
          800: "#761924",
          900: "#5d0d14",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-xelo)"],
        raleway: ["var(--font-raleway)"],
      },
      height: {
        navbar: "56px",
        footer: "216px",
      },
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  //   plugins: [require("tailwindcss-animate")],
};
export default config;
