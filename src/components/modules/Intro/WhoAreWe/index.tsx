import React from "react";
import { Rocket, Check, Zap, Users, Shield, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import HireUs from "../../HireUs";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-4xl font-bold text-center text-primary-600 inline-flex"
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="p-6 shadow-none border-none">
        <div className="flex items-start space-x-4">
          {icon}
          <div>
            <h3 className="text-slate-800 font-semibold text-lg mb-2">
              {title}
            </h3>
            <p className="text-slate-700">{description}</p>
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
    <div className="min-h-screen  p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <div className="max-w-6xl mx-auto py-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary-600">Who We Are</h1>
            <p className="mx-auto text-md sm:text-lg sm:max-w-3xl text-slate-800 font-medium">
              At{" "}
              <span className="font-semibold text-primary-600">
                Orbit Tech Labs
              </span>
              , we are more than just an IT consultancy—we are
              <span className="text-primary-600 font-semibold">
                &nbsp;strategic partners&nbsp;
              </span>
              in your digital transformation journey. Our mission is to empower
              businesses with future-ready IT solutions that accelerate success
              and create lasting value.
            </p>
          </section>

          <section className="space-y-2 mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-primary-600" />}
                title="Technical Expertise"
                description="Cutting-edge technical knowledge with best practices"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-primary-600" />}
                title="Security Focus"
                description="Ensuring robust cybersecurity measures across all solutions"
              />
              <FeatureCard
                icon={<Code className="w-8 h-8 text-primary-600" />}
                title="Custom Development"
                description="Building tailored solutions that match your specific needs"
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-primary-600" />}
                title="Client Partnership"
                description="Working closely with you to achieve your business goals"
              />
            </div>
          </section>
        </div>

        <HireUs />

        <section className="py-8 sm:py-16">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <SectionHeading>Why Choose Us? </SectionHeading>
              {/* <Rocket className="w-7 h-7 text-blue-500" /> */}
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg font-semibold text-slate-800">
                Let's build the future together
              </span>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Innovation-Driven",
              "Client-Centric",
              "Expert Team",
              "End-to-End Services",
            ].map((feature) => (
              <CheckmarkFeature key={feature} feature={feature} />
            ))}
          </div>

          <p className="text-center text-lg text-slate-700 mt-6">
            At{" "}
            <span className="font-semibold text-primary-600">
              Orbit Tech Labs
            </span>
            , we don't just solve IT challenges—we turn them into opportunities
            for growth.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default WhoAreWe;
