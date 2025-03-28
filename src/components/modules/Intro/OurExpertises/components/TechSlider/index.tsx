import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blocks, settings } from "./sliderData";

const TechSlider = () => {
  return (
    <div className="slider-container w-[95%] sm:w-[100%]">
      <div className="my-16 max-w-6xl mx-auto">
        <p className="text-3xl font-bold text-primary-600 text-right">
          Our Tech Stack
        </p>
        <p className="text-lg font-medium text-slate-800 text-right">
          A powerful range of technologies, driving your <br /> innovative
          solutions.
        </p>
      </div>

      <Slider {...settings}>
        {blocks.map((block, index) => (
          <div key={index} className="slider-item">
            <div className="w-full h-full flex justify-center items-center">
              <Image src={block.src} alt={block.label} width={80} height={80} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechSlider;
