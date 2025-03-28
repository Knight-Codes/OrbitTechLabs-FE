import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const AnimFrame = dynamic(() => import("../AnimFrame"), { ssr: false });

export const ServiceTile = ({
  title,
  description,
  animation,
  services,
  isReversed = false,
}: {
  title: string;
  description: string;
  animation: any;
  services: { icon: JSX.Element; text: string }[];
  isReversed?: boolean;
}) => {
  return (
    <Card className="w-full max-w-6xl mx-auto shadow-none border-0">
      <CardContent className="p-8">
        <div
          className={`flex md:gap-12 flex-wrap ${
            isReversed ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex-1">
            <div className="flex h-full items-center justify-center bg-slate-50">
              <AnimFrame title={title} animation={animation} />
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600 text-md">{description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-1">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <span className="text-gray-700 text-sm">{service.text}</span>
                  </div>
                ))}
              </div>

              <Link href={"/contact"}>
                <Button className="flex items-center space-x-2 transition-colors w-fit bg-primary-500 ml-1">
                  <span className="font-medium">Explore</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
