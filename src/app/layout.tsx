import type { Metadata } from "next";
import { raleway } from "./fonts";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/modules/Navbar";
import Main from "@/components/modules/MainLayout";
import Footer from "@/components/modules/Footer";

export const metadata: Metadata = {
  title: "Orbit Tech Labs",
  description: "Innovate. Create. Succeed.",
};

const xelo = localFont({
  src: [
    {
      path: "../../public/fonts/Xelo.ttf",
      weight: "400",
    },
  ],
  variable: "--font-xelo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${raleway.variable} ${xelo.variable} font-sans font-raleway antialiased`}
      >
        <Navbar />
        <Main>{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
