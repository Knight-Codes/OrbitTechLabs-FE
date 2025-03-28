import React from "react";
import { SupportCard } from "./components/SupportCard";
import { supportData } from "./components/supportData";

const ClientSupport = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 sm:px-0 mt-4 pb-24">
      <h2 className="text-center text-slate-800 text-4xl font-bold mb-12">
        How We Support
        <br />
        <span className="text-purple-600">&nbsp;You As A Client</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {supportData.map((item, index) => (
          <div className="col-span-1" key={index}>
            <h3 className="text-slate-800 text-2xl font-bold mb-6">{item.section}</h3>
            <div className="space-y-4">
              {item.tiles.map((tile, index) => (
                <SupportCard
                  key={index}
                  content={tile.content}
                  icon={tile.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSupport;
