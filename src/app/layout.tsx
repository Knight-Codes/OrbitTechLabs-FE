import type { Metadata } from "next";
import { inter, kanit, poppins, xelo } from "./fonts";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/modules/Navbar";
import Main from "@/components/modules/MainLayout";
import Footer from "@/components/modules/Footer";

export const metadata: Metadata = {
  title: "Orbit Tech Labs",
  description: "Innovate. Create. Succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="website development, app development, mobile app development, web design, custom software, iOS development, Android development, e-commerce development, web application, software development, Kolkata, Durgapur, West Bengal"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${kanit.variable} ${inter.variable} ${xelo.variable} ${poppins.variable} font-inter antialiased`}
      >
        <Navbar />
        <Main>{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
