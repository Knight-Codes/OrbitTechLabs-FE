"use client";

import Link from "next/link";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import HireUsImg from "@/assets/images/hire-us.jpg";

const HireUs = () => {
  return (
    <div className="relative overflow-hidden px-0 sm:px-8">
      <div className="relative h-[100vh] sm:h-[68vh] flex items-center bg-gray-900">
        <ParallaxProvider>
          <Parallax speed={-25} className="absolute inset-0 w-full h-full">
            <Image
              src={HireUsImg}
              alt="Parallax Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter blur-[4px]"
            />
          </Parallax>
        </ParallaxProvider>

        <div className="absolute inset-0 bg-black/40" />

        <div className="h-full relative z-1 text-center text-white px-4 w-[100%] mt-10">
          <div className="h-full flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Hire Us</h3>

            <h2 className="text-4xl font-semibold mb-4 text-white max-w-2xl">
              Transform Your Ideas into Powerful Digital Solutions.
            </h2>

            <p className="text-lg text-white max-w-3xl">
              We provide comprehensive IT consultancy services, specializing in
              the development of custom web and mobile applications. Our
              experienced team delivers high-quality, scalable solutions
              tailored to your specific requirements.
            </p>

            <Link href="/contact">
              <Button className="mt-6 bg-primary-400 hover:bg-primary-500">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
