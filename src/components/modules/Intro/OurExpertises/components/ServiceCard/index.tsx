"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { services } from "../../services";

export const ServicesCard = ({
  service,
}: {
  service: (typeof services)[0];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
      <CardContent className="flex flex-col justify-between p-6 space-y-6 h-[324px]">
        <div className="w-16 h-16 rounded-lg bg-primary-25 flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300">
          {React.cloneElement(service.icon, {
            className: "w-8 h-8 text-primary-400",
          })}
        </div>

        <div className="space-y-4 h-36 flex flex-col">
          <h3 className="font-inter text-xl font-semibold text-slate-900">
            {service.label}
          </h3>
          <p className=" text-slate-600">{service.description}</p>

          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-slate-100 hover:bg-slate-200 tracking-wider font-kanit"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 group-hover:translate-x-2 transition-transform duration-300 flex items-center text-primary font-medium">
          Learn more
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
