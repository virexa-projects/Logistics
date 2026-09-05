"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

export default function Stats({ data }) {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-10 md:mb-12 lg:mb-16 text-2xl md:text-3xl font-semibold">
          Frisbi at a Glance
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {data.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ start, end, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  // ✅ suffix logic
  const getSuffix = () => {
    if (label === "Customer Satisfaction") return "%";
    if (label === "Years Moving Luggage") return "+";
    return "+";
  };

  return (
    <div
      ref={ref}
      className="
        bg-white
        rounded-2xl
        border border-[#f5f5f5]
        p-6
        flex flex-col
        items-center md:items-start
      "
    >
      {/* NUMBER */}
      <div className="flex items-baseline text-black">
        <span className="text-4xl md:text-4xl font-bold">
          {isInView ? (
            <CountUp
              start={start}
              end={end}
              duration={2}
              separator=","   // ✅ comma formatting
            />
          ) : (
            end.toLocaleString()
          )}
        </span>

        {getSuffix() && (
          <span className="ml-1 text-3xl md:text-4xl font-bold">
            {getSuffix()}
          </span>
        )}
      </div>

      {/* LABEL */}
      <p className="mt-3 text-xs md:text-sm font-medium text-second text-center md:text-left">
        {label}
      </p>
    </div>
  );
}
