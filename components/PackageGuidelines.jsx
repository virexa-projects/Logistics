"use client";

import Image from "next/image";

// ✅ icon
import allowedCheck from "@/asset/icon/check.svg";
import arrowIcon from "@/asset/icon/arrow.svg";
import closed from "@/asset/icon/close.svg";

export default function PackageGuidelines() {
  const allowedItems = [
    { icon: arrowIcon, label: "Luggage" },
    { icon: arrowIcon, label: "Baggage" },
    { icon: arrowIcon, label: "Suitcase" },
    { icon: arrowIcon, label: "Trolley" },
    { icon: arrowIcon, label: "Backpacks" },
    { icon: arrowIcon, label: "Trekking bags" },
    { icon: arrowIcon, label: "Sports gears" },
    { icon: arrowIcon, label: "Equipments" },
  ];

  const prohibitedItems = [
    { icon: arrowIcon, label: "Illegal goods" },
    { icon: arrowIcon, label: "Hazardous materials" },
    { icon: arrowIcon, label: "Flammable items" },
    { icon: arrowIcon, label: "High-capacity batteries" },
    { icon: arrowIcon, label: "Perishable food" },
  ];

  return (
    <section className="py-24 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        What You Can Send With Us

      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* ✅ Allowed Items */}
        <div className="bg-green-50 border border-green-200 rounded-3xl p-6">
          <div className="flex items-center mb-6">
            <Image src={allowedCheck} alt="Allowed" width={44} height={44} />
            <span className="ml-3 font-bold text-xl text-green-700">
              Yes, We Ship These
            </span>
          </div>

          <ul className="space-y-4">
            {allowedItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center bg-white rounded-lg p-3 shadow-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <span className="ml-3 font-semibold text-gray-800">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ❌ Prohibited Items */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6">
          <div className="flex items-center mb-6">
             <Image src={closed} alt="Allowed" width={44} height={44} />
            <span className="ml-3 font-bold text-xl text-red-700">
              Sorry, Not These
            </span>
          </div>

          <ul className="space-y-4">
            {prohibitedItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center bg-white rounded-lg p-3 shadow-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <span className="ml-3 font-semibold text-gray-800">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
