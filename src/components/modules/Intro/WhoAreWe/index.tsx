"use client";

import React, { useState } from "react";
import { Rocket, Check, Zap, Users, Shield, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HireUs from "../../HireUs";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-3xl font-bold text-center text-slate-900"
  >
    {children}
  </motion.h2>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <motion.div
            animate={isHovered ? { y: -4, scale: 1 } : {}}
            transition={{ type: "tween", stiffness: 300, damping: 10 }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CheckmarkFeature = ({ feature }: { feature: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
  >
    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
    <span className="text-slate-700 font-medium">{feature}</span>
  </motion.div>
);

const WhoAreWe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="max-w-6xl mx-auto space-y-16 py-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-slate-900">Who We Are</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              At{" "}
              <span className="font-semibold text-primary-300">
                Orbit Tech Labs
              </span>
              , we are more than just an IT consultancy—we are
              <span className="text-primary-300 font-semibold">
                &nbsp;strategic partners&nbsp;
              </span>
              in your digital transformation journey.
            </p>
          </section>

          <Card className="bg-primary-300 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                To empower businesses with future-ready IT solutions that
                accelerate success and create lasting value.
              </p>
            </CardContent>
          </Card>

          <section className="space-y-6">
            <SectionHeading>Our Approach</SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-blue-500" />}
                title="Technical Expertise"
                description="Cutting-edge technical knowledge with best practices"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-blue-500" />}
                title="Security Focus"
                description="Ensuring robust cybersecurity measures across all solutions"
              />
              <FeatureCard
                icon={<Code className="w-8 h-8 text-blue-500" />}
                title="Custom Development"
                description="Building tailored solutions that match your specific needs"
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-blue-500" />}
                title="Client Partnership"
                description="Working closely with you to achieve your business goals"
              />
            </div>
          </section>

          <HireUs />

          <section className="space-y-6">
            <SectionHeading>Why Choose Us?</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Innovation-Driven",
                "Client-Centric",
                "Expert Team",
                "End-to-End Services",
              ].map((feature) => (
                <CheckmarkFeature key={feature} feature={feature} />
              ))}
            </div>
          </section>

          <div className="text-center space-y-4">
            <p className="text-lg text-slate-700">
              At{" "}
              <span className="font-semibold text-primary-300">
                Orbit Tech Lens
              </span>
              , we don't just solve IT challenges—we turn them into
              opportunities for growth.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl font-bold">
                Let's build the future together
              </span>
              <Rocket className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoAreWe;
