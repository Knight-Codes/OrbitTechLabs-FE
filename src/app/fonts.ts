import { Kanit, Lexend, Manrope, Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const xelo = localFont({
  src: [
    {
      path: "../../public/fonts/Xelo.ttf",
      weight: "400",
    },
  ],
  variable: "--font-xelo",
});
