import Link from "next/link";
import { cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

const containerStyles = cva(
  "relative my-8 sm:my-12 z-8 flex flex-col items-center justify-center h-full text-black"
);

const headerTextStyles = cva(
  "font-inter font-extrabold text-center text-black text-2xl sm:text-[44px] leading-[1.2] max-w-[72rem] my-1"
);

const attributeTextStyles = cva("text-sm sm:text-xl text-center max-w-[90%]");

const AnimatedQuoteButton = () => (
  <Link
    href="/contact"
    className="relative rounded-full bg-slate-800 text-white group transition-all duration-300 ease-in-out group"
  >
    <div
      className={cn(
        "absolute left-0.5 top-0.5 h-[90%] bg-white rounded-full transition-all duration-500 ease-in-out z-0 group-hover:w-[97.5%] w-14"
      )}
    />

    <div className="relative z-10 flex items-center justify-between w-full">
      <div className="flex items-center justify-center w-14 h-14 transition-colors duration-500">
        <ArrowRight
          className={"transition-colors duration-500 text-slate-800"}
          size={24}
        />
      </div>

      <span className="ml-4 pr-6 font-medium text-lg transition-colors duration-500 group-hover:text-gray-900">
        Say Hello!
      </span>
    </div>
  </Link>
);

export const TextContent = () => (
  <div className={containerStyles()}>
    <p className={cn(headerTextStyles(), "text-slate-800 mx-6 sm:mx-0")}>
      Future-Proof Your Business with Expert IT
    </p>
    <p
      className={cn(
        headerTextStyles(),
        "text-primary-600 sm:text-[52px] sm:mx-0"
      )}
    >
      Solutions That Optimize, Secure, and Scale Your Technology.
    </p>
    <div className="flex items-center justify-center mt-8 mb-12 flex-wrap space-x-1 mx-4">
      <p className={attributeTextStyles()} style={{ lineHeight: "1.7" }}>
        Elevate your code quality to elite standards. We deliver superior
        software through automated analysis, precise issue detection, and
        rigorous cybersecurity practices, ensuring robust, efficient, and secure
        applications.
      </p>
    </div>

    <AnimatedQuoteButton />
  </div>
);
