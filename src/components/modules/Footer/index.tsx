import React from "react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  //   {
  //     name: "Services",
  //     link: "/services",
  //   },
  //   {
  //     name: "About Us",
  //     link: "/about",
  //   },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Footer = () => (
  <footer className="bg-[#ef6b7b] text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:pl-8">
          <h3 className="font-bold text-xl mb-4">ORBIT TECH LABS</h3>
          <p className="text-sm tracking-wider">
            Delivering innovative IT solutions and services that empower
            businesses to thrive in the digital age. Contact us today to explore
            how we can help your business reach its full potential.
          </p>
        </div>

        <div className="flex flex-row md:justify-center w-full">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((ql) => (
                <li key={ql.name}>
                  <a href={ql.link} className="hover:underline">
                    {ql.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:contact@orbittechlabs.com"
                className="hover:underline tracking-wider"
              >
                bishal@orbittechlabs.com
              </a>
            </li>
            {/* <li>+1 (555) 123-4567</li>
            <li>123 Tech Street, Suite 100</li> */}
            <li>Kolkata, India</li>
          </ul>
        </div>
      </div>

      <Separator className="my-6 bg-white/20" />

      <div className="font-serif text-center text-sm">
        <p>© {new Date().getFullYear()} OrbitTechLabs. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
