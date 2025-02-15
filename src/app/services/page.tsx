"use client";

import React from "react";
// import { servicesData } from "@/components/modules/Services/servicesData";
// import { ServiceTile } from "@/components/modules/Services/SerivceTile";
// import { IdeaSection } from "@/components/modules/Services/IdeaSection";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const Contents = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <div className="flex flex-col items-center justify-start py-24 bg-gradient-to-b from-slate-50 to-slate-100">
//       <div ref={ref} className="space-y-8">
//         {servicesData.map((service, index) => (
//           <motion.div
//             key={service.title}
//             variants={variants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <ServiceTile isReversed={index % 2 === 0} {...service} />
//           </motion.div>
//         ))}
//       </div>
//       <div className="px-4 w-full flex justify-center">
//         <IdeaSection />
//       </div>
//     </div>
//   );
// };

const Srevices = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col justify-start items-center py-24 gap-4">
        <p className="text-4xl font-bold text-center">
          Technology. Strategy. Success.
        </p>

        <p className="text-center text-xl text-slate-500 md:w-[40%] px-4">
          We provide innovative IT consultancy and services designed to help
          businesses stay ahead in an ever-changing digital landscape
        </p>
      </div>

      {/* <Contents /> */}
    </div>
  );
};

export default Srevices;
