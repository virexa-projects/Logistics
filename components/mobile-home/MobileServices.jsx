import React from "react";
import Image from "next/image";
import Link from "next/link";

import StandardImg from "@/asset/service/standard-banner-img.svg";
import ExpressImg from "@/asset/service/express.svg";
import PremiumImg from "@/asset/service/premium-banner-img.svg";
import CorporateImg from "@/asset/service/corporate.svg";
import IndividualImg from "@/asset/service/individual.svg";

const servicesList = [
  {
    title: "Standard Delivery",
    desc: "For trips and moves planned ahead. A reliable, cost-effective way to send your packages with care.",
    bg: "bg-white",
    text: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    link: "/services/standard-delivery",
    img: StandardImg,
    isFeature: false,
  },
  {
    title: "Express Delivery",
    desc: "Faster delivery without cutting corners on safety. With added flexibility and priority handling.",
    bg: "bg-yellow-500",
    text: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    link: "/services/express-delivery",
    img: ExpressImg,
    isFeature: false,
  },
  {
    title: "Premium Delivery",
    desc: "White glove care, end to end. For deliveries you would rather not think twice about.",
    bg: "bg-[#013EFE]",
    text: "text-white",
    descColor: "text-white",
    linkColor: "text-white hover:text-white",
    link: "/services/premium-delivery",
    img: PremiumImg,
    isFeature: false,
  }
];

export default function MobileServices() {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#F1F2F6]">
      <div className="mb-6">
        <span className="text-[11px] font-bold text-[#013EFE] uppercase tracking-wider block mb-1">
          Our Services
        </span>
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          Three ways to move your luggage. One way to travel lighter.
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Scroll to see each service stack smoothly in sequence.
        </p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative pb-6 max-w-md mx-auto">
        {servicesList.map((svc, i) => {
          const isFeature = svc.isFeature;
          return (
            <div
              key={i}
              style={{
                position: "sticky",
                top: "70px",
                zIndex: i + 10,
              }}
              className={`relative ${isFeature
                ? "bg-white rounded-3xl p-8 h-[500px]"
                : `${svc.bg} rounded-3xl p-6 md:p-8 lg:p-10 h-[500px]`
                } flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden mb-8 last:mb-0`}
            >
              <div className="relative z-10">
                <h3
                  className={`${isFeature ? "text-black" : svc.text
                    } md:text-[20px] text-[18px]`}
                >
                  {svc.title}
                </h3>

                <p
                  className={`${isFeature
                    ? "mt-3 text-gray-500"
                    : `mt-4 text-base ${svc.descColor}`
                    }`}
                >
                  {svc.desc}
                </p>

                <Link
                  href={svc.link || "#"}
                  className={`${isFeature
                    ? "mt-4 inline-block text-[16px] font-semibold hover:text-[#013EFE]"
                    : `mt-4 inline-block font-semibold ${svc.linkColor}`
                    }`}
                >
                  Learn more about {svc.title}
                </Link>
              </div>

              {/* Image */}
              <div
                className={`absolute bottom-0 inset-x-0 ${isFeature ? "h-[48%] pb-2 px-3" : "w-full h-[55%] z-0"
                  }`}
              >
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className={
                    isFeature ? "object-contain object-bottom" : "object-contain"
                  }
                  priority={i === 0}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <Link
          href="/book-shipment"
          className="btn-primary hover:scale-105 transition-all"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
