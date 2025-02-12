"use client";

import React from "react";
import Link from "next/link";
import { ReactTyped } from "react-typed";
// import { motion } from "framer-motion";
import OrbitTechLabs from "@/assets/svg/orbit-tech-labs";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-screen h-[calc(100vh-3rem)]">
      <div className="h-[calc(100%-6rem)] flex flex-col justify-center items-center gap-6 md:gap-10 pt-4">
        {/* <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        > */}
        {/* <div className="absolute top-8"> */}
        <OrbitTechLabs />
        {/* </div> */}
        {/* </motion.div> */}

        {/* <motion.h2
          variants={{
            visible: { color: "#ef6b7b" },
            hidden: { color: "#000" },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="mt-4"
        > */}
        <span className=" text-primary-300 font-extrabold uppercase text-4xl md:text-5xl">
          Orbit Tech Labs
        </span>
        {/* </motion.h2> */}

        <p className="font-bold text-center text-blue-600 max-w-[52rem] px-1 text-xl md:text-4xl">
          Future-Proof Your Business with Expert IT Solutions That Optimize,
          Secure, and Scale Your Technology.
        </p>

        <ReactTyped
          strings={[
            "Optimizing IT for Maximum Performance, Reliability, and Business Growth...",
            "Securing Your Digital Future with Robust, Scalable, and Cutting-Edge Solutions...",
            "Innovating Solutions and Powering Success Through Technology-Driven Transformation...",
          ]}
          typeSpeed={30}
          className="font-medium text-center max-w-[32rem] h-4 px-2"
          loop
        />

        <Link href={"/contact"}>
          <Button className="text-lg rounded-full mt-8 px-8 bg-blue-600 hover:bg-slate-800">
            Say Hello !
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

// font-sans -> xelo
// font-raleway -> raleway ( default )
