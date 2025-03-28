"use client";

import React from "react";
import Header from "./Header";
import OurServices from "./OurExpertises";
import WhoAreWe from "./WhoAreWe";
import Testimonials from "./Testimonials";
import ClientSupport from "./ClientSupport";

const IntroBanner = () => {
  return (
    <>
      <Header />
      <OurServices />
      <Testimonials />
      <div className="bg-gradient-to-b from-slate-50 to-slate-100">
        <WhoAreWe />
        <ClientSupport />
      </div>
    </>
  );
};

export default IntroBanner;
