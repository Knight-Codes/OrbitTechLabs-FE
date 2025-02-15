"use client";

import React from "react";
import { ServicesContents as Contents } from "@/components/modules/Services/Contents";

export default function Services() {
  return (
    <div className="w-screen">
      <div className="flex flex-col justify-start items-center py-24 gap-4">
        <p className="text-4xl font-bold text-center">
          Technology. Strategy. Success.
        </p>

        <p className="text-center text-xl text-slate-500 md:w-[40%] px-4">
          We provide innovative IT consultancy and services designed to help
          businesses stay ahead in an ever-changing digital landscape
        </p>
      </div>

      <Contents />
    </div>
  );
}
