"use client";

import { Check, X, AlertTriangle } from "lucide-react";

export function Comparison() {
  const features = [
    { feature: "Luggage-first operating model", frisbi: true, courier: false },
    { feature: "Dedicated point of contact", frisbi: true, courier: false },
    { feature: "Multi-location pickup", frisbi: true, courier: "partial" },
    { feature: "Proactive tracking & status updates", frisbi: true, courier: "partial" },
    { feature: "End-to-end accountability", frisbi: true, courier: false },
    { feature: "Corporate pricing and SLAs", frisbi: true, courier: false },
  ];

  const renderIcon = (value) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-green-600" />;
    }
    if (value === false) {
      return <X className="w-6 h-6 text-red-500" />;
    }
    return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
  };

  return (
    <section className="md:py-24 pb-0">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className=" text-center mb-16">
          Purpose-made for corporate luggage movement
        </h2>

        <div className="bg-white rounded-3xl  overflow-hidden">
          <div className="grid grid-cols-3 bg-primary text-white p-4 font-semibold">
            <div className="text-center">Content</div>
            <div className="text-center">Frisbi</div>
            <div className="text-center">Typical Courier</div>
          </div>

          {features.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-4 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="font-semibold">{item.feature}</div>
              <div className="flex justify-center ">
                {renderIcon(item.frisbi)}
              </div>
              <div className="flex justify-center">
                {renderIcon(item.courier)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
