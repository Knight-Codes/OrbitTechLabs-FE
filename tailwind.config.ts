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
          50: "#F5F3FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA", // Your provided primary color
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
          950: "#3B0764",
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
        inter: ["var(--font-inter)"],
        kanit: ["var(--font-kanit)"],
        lexend: ["var(--font-lexend)"],
        manrope: ["var(--font-manrope)"],
        poppins: ["var(--font-poppins)"],
        xelo: ["var(--font-xelo)"],
      },
      height: {
        navbar: "60px",
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

//  50: "#f2e8fc",
//  100: "#e1cbf9",
//  200: "#ceadf6",
//  300: "#ba90f3",
//  400: "#a773f0",
//  500: "#9456ed",
//  600: "#810fd7", // Your provided primary color
//  700: "#6e0cb4",
//  800: "#5b0991",
//  900: "#48076e",
//  950: "#240337",
