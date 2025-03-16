"use client";

import React from "react";
import Link from "next/link";
import { NavMenu } from "./components/NavMenu";
import OrbitTechLabs from "@/assets/svg/orbit-tech-labs";
import "./index.css"

const Navbar = () => {
  return (
    <nav className="h-navbar navbar flex flex-row justify-center top-0 sticky z-10">
      <div className="w-[90%] flex flex-row justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-1">
            <OrbitTechLabs className="h-20 w-20" />
            <h2 className="text-xl font-semibold text-center font-xelo uppercase">
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
