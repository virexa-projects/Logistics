"use client";

import { UserCheck, Calendar, MapPin, Shield, DollarSign } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: UserCheck,
      title: "Dedicated Account Manager",
      description: "One point of contact from planning to delivery."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Pickups and drops aligned with flights, events & check-ins."
    },
    {
      icon: MapPin,
      title: "Multi-City Handling",
      description: "Single or multiple locations handled seamlessly."
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Tamper-sealed, tracked, and insured from start to finish."
    },
    {
      icon: DollarSign,
      title: "Transparent Corporate Pricing",
      description: "Custom quotes based on volume, distance, and service level."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="mb-4">
            Why corporate and travel teams trust Frisbi
          </h2>
          <p className="text-second max-w-xl mx-auto">
            Built for business travel, events, tours, and large groups.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => {
            const isLastRow = index >= 3; // 4th & 5th cards

            return (
              <div
                key={index}
                className={`h-full ${
                  isLastRow
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }`}
              >
                {/* Card */}
                <div className="h-full w-full max-w-sm mx-auto p-6 rounded-3xl border border-[#f5f5f5] text-center flex flex-col transition-all duration-300 hover:shadow-lg">
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-50 rounded-3xl flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h5 className="mb-2 text-black">
                    {feature.title}
                  </h5>
                  <p className="text-second flex-grow">
                    {feature.description}
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
