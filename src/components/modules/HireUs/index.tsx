"use client";

import Link from "next/link";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import HireUsImg from "@/assets/images/hire-us.jpg";

const HireUs = () => {
  return (
    <div className="relative overflow-hidden mt-16 text-white">
      <div className="h-[84vh] sm:h-[72vh] flex items-center">
        <ParallaxProvider>
          <Parallax speed={-25} className="absolute inset-0 w-full h-full">
            <Image
              src={HireUsImg}
              alt="hire us"
              fill
              quality={100}
              className="filter blur-[4px] object-cover"
            />
          </Parallax>
        </ParallaxProvider>

        <div className="absolute inset-0 bg-black/50" />

        <div className="h-full w-full flex flex-col items-center justify-center gap-6 text-center z-[1] px-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">Hire Us</h3>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 max-w-2xl">
              Transform Your Ideas into Powerful Digital Solutions.
            </h2>
          </div>

          <p className="mx-auto text-md sm:text-lg sm:max-w-3xl font-medium">
            We provide comprehensive IT consultancy services, specializing in
            the development of custom web and mobile applications. Our
            experienced team delivers high-quality, scalable solutions tailored
            to your specific requirements.
          </p>

          <Link href="/contact">
            <Button className="mt-6 bg-primary-500 hover:bg-primary-600">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
