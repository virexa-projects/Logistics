"use client";

import {
  Truck,
  ShieldCheck,
  Radar,
  CalendarClock,
  IndianRupee,
  Map,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Doorstep Pickup & Delivery",
    description: "We collect from where you pack and drop where you unpack.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Handling",
    description:
      "Every bag sealed, scanned, and moved carefully through verified partners.",
  },
  {
    icon: Radar,
    title: "Real-Time Tracking",
    description:
      "Check your luggage location anytime without calling anyone.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Time Slots",
    description:
      "Early riser or late planner? Choose a pickup window that actually works.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Distance plus bags equals price. That's it. No hidden math.",
  },
  {
    icon: Map,
    title: "All-India Coverage",
    description:
      "From metro cities to smaller towns, your luggage moves wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="md:py-24 py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Heading */}
        <h2 className="text-center mb-4">
          The smart way to move your stuff
        </h2>

        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Travel without the heavy baggage. We handle the rest.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="
                  flex gap-4 p-6 rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  hover:bg-white/15 transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="mb-2 font-semibold">
                    {benefit.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
