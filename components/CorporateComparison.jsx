"use client";

import { Check, X, AlertTriangle } from "lucide-react";

export function Comparison() {
  const features = [
    { feature: "Luggage-specific handling", frisbi: true, courier: false },
    { feature: "Dedicated corporate support", frisbi: true, courier: false },
    { feature: "Bulk & multi-location pickup", frisbi: true, courier: "partial" },
    { feature: "Real-time tracking", frisbi: true, courier: "partial" },
    { feature: "Event & hotel coordination", frisbi: true, courier: false },
    { feature: "Corporate pricing & SLA", frisbi: true, courier: false },
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
    <section className="py-24 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className=" text-center mb-16">
          What Makes Frisbi Better Than Alternatives
        </h2>

        <div className="bg-white rounded-3xl  overflow-hidden">
          <div className="grid grid-cols-3 bg-blue-600 text-white p-6 font-semibold">
            <div />
            <div className="text-center">Frisbi</div>
            <div className="text-center">Typical Courier</div>
          </div>

          {features.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-6 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div>{item.feature}</div>
              <div className="flex justify-center">
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
