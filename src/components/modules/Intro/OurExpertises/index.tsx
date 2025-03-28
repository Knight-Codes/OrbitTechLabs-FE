import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { services } from "./components/services";
import { ServicesCard } from "./components/ServiceCard";
import TechSlider from "./components/TechSlider";

const OurExpertises = () => {
  return (
    <section className="px-4 pb-8 bg-gradient-to-b from-white to-slate-50 mt-[-20px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="px-4 py-1">
              Our Expertise
            </Badge>

            <h2 className="font-inter text-4xl font-bold tracking-tight sm:text-5xl text-primary-600">
              Technology Solutions
            </h2>

            <p className="mx-auto text-md sm:text-lg sm:max-w-3xl text-slate-800 font-medium">
              We expertise in delivering innovative, hand-crafted technology
              solutions that simplify complexity, enhance efficiency, and drive
              sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
          </div>
        </div>
      </motion.div>

      <TechSlider />

      {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {[
          { number: "500+", label: "Projects Delivered" },
          { number: "50+", label: "Team Members" },
          { number: "99%", label: "Client Satisfaction" },
          { number: "24/7", label: "Support" },
        ].map((stat, index) => (
          <div key={index} className="space-y-2">
            <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
            <p className="text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default OurExpertises;
