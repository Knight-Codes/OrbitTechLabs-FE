import React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { TextContent } from "./components/TextContent";
import OrbitTechLabs from "@/assets/svg/orbit-tech-labs";
import { NavMenu } from "../../Navbar/components/NavMenu";

const containerStyles = cva(
  "relative w-full h-[40rem] sm:h-[95vh] sm:mt-2.5 mb-20 bg-cover bg-center rounded-[1rem] border"
);

const Header = () => {
  return (
    <div className="px-2 sm:px-6">
      <div
        className={containerStyles()}
        style={{ backgroundImage: "url('/banner-img.jpg')" }}
      >
        <div className="absolute top-5 left-4 sm:top-10 sm:left-16">
          <Link href="/">
            <div className="flex items-center gap-2">
              <OrbitTechLabs className="h-16 w-16 sm:h-20 sm:w-20" />
              <h2
                className={
                  "text-xl sm:text-3xl font-semibold text-center font-xelo uppercase text-black mt-[-2px]"
                }
              >
                Orbit Tech Labs
              </h2>
            </div>
          </Link>
        </div>
        <div className="absolute top-9 right-6 sm:top-16 sm:right-14 z-10">
          <NavMenu />
        </div>
        <TextContent />
      </div>
    </div>
  );
};

export default Header;
