import React from "react";
import ServicesContents from "@/components/modules/Services/Contents";

export default function Services() {
  return (
    <div className="w-screen overflow-x-hidden">
      <div
        className="flex flex-col justify-start items-center py-24 gap-4 bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: "url('/images/technology-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <p className="text-slate-50 text-4xl font-bold text-center px-2 z-[1]">
          Technology. Strategy. Success.
        </p>

        <p className="text-center text-xl text-slate-50 max-w-lg px-4 z-[1]">
          We provide innovative IT consultancy and services designed to help
          businesses stay ahead in an ever-changing digital landscape.
        </p>
      </div>
      <ServicesContents />
    </div>
  );
}
