"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavMenu } from "./components/NavMenu";
import { useScrollPosition } from "@/hooks/useScrollHeight ";
import OrbitTechLabs from "@/assets/svg/orbit-tech-labs";
import "./index.css";

const Navbar = () => {
  const path = usePathname();
  const scrollHeight = useScrollPosition();

  const visible = useMemo(() => {
    if (scrollHeight >= 188 || path !== "/") return true;
    return false;
  }, [scrollHeight, path]);

  if (!visible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-navbar navbar flex flex-row justify-center top-0 sticky z-10"
    >
      <div className="w-[90%] flex flex-row justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-1">
            <OrbitTechLabs className="h-12 w-12" />
            <h2 className="text-xl font-semibold text-center font-xelo uppercase text-black">
              Orbit Tech Labs
            </h2>
          </div>
        </Link>
        <NavMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
