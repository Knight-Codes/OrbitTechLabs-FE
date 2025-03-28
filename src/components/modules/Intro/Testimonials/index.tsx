import React from "react";
import { TestimonialCard } from "./components/TestimonialCard";
import { testimonialData } from "./components/testimonialData";

const Testimonials = () => {
  return (
    <section className="px-4 my-16">
      <div className="text-center mb-8">
        <h2 className="text-primary-600 text-3xl font-bold mb-3">
          What Our Clients Say
        </h2>
        <p className="text-center text-slate-800 font-semibold text-lg">
          Trusted and consistently praised by satisfied customers worldwide.
        </p>
      </div>

      <div className="flex justify-center">
        {testimonialData.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
