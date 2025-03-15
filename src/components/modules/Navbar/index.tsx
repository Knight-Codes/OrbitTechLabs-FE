"use client";

import React from "react";
import Link from "next/link";
import { NavMenu } from "./components/NavMenu";
import OrbitTechLabs from "@/assets/svg/orbit-tech-labs";

const Navbar = () => {
  return (
    <nav className="h-navbar flex flex-row justify-center border-b border-grey-500 top-0 sticky bg-white z-10 shadow-sm">
      <div className="w-[90%] flex flex-row justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-1">
            <OrbitTechLabs className="h-10 w-10" />
            <h2 className="text-md font-extrabold text-center font-sans uppercase">
              Orbit Tech Labs
            </h2>
          </div>
        </Link>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
