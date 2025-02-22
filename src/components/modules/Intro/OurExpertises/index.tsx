"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ServicesCard } from "./components/ServiceCard";
import { services } from "./services";

const OurExpertises = () => {
  return (
    <section className="px-4 pb-8 bg-gradient-to-b from-white to-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="px-4 py-1">
              Our Expertise
            </Badge>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
              Technology Solutions
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              We expertise in delivering innovative, hand-crafted technology
              solutions that simplify complexity, enhance efficiency, and drive
              sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
          </div>
        </div>
      </motion.div>

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
