"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesData } from "../servicesData";
import { ServiceTile } from "../SerivceTile";
import { IdeaSection } from "../IdeaSection";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServicesContents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center justify-start py-24 pt-12 bg-gradient-to-b from-slate-50 to-slate-100">
      <div ref={ref} className="space-y-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ServiceTile isReversed={index % 2 === 0} {...service} />
          </motion.div>
        ))}
      </div>
      <div className="px-4 w-full flex justify-center">
        <IdeaSection />
      </div>
    </div>
  );
};

export default ServicesContents;
