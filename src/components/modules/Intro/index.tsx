"use client";

import React from "react";
import Header from "./Header";
import OurServices from "./OurExpertises";
import WhoAreWe from "./WhoAreWe";
import HireUs from "../HireUs";

const IntroBanner = () => {
  return (
    <>
      <Header />
      <OurServices />
	  <HireUs />
      <WhoAreWe />
    </>
  );
};

export default IntroBanner;
