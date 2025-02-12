"use client";

import React, { Fragment } from "react";
import { GreetingSection } from "./components/GreetingSection";
import { ContactForm } from "./components/ContactForm";
import { SocialLinks } from "./components/SocialLinks";

export default function Contact() {
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col lg:flex-row md:px-8 lg:px-20 py-12">
        <div className="w-full lg:w-1/2">
          <GreetingSection />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactForm />
          <div className="flex justify-center mt-8 lg:hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
