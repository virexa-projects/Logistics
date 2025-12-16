"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Assets
import c1 from "@/asset/c1.webp";
import valuesdiff from "@/asset/values-diff.webp";

import courierimg from "@/asset/courierimg.webp";


const servicesData = [
  {
    title: "Safe & Secure Luggage Handling",
    description:
      "Your bags are handled by trained professionals with secure sealing and verified partners, ensuring protection throughout the journey.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-second",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: c1,
    imageAlt: "Excess baggage service image",
    delay: 0,
  },
  {
    title: "Reliable Door-to-Door Baggage Pickup & Drop",
    description:
      "Skip the hassle of heavy luggage—book online, and we’ll pick up from your home and deliver anywhere in India.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-second",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: valuesdiff,
    imageAlt: "Excess baggage service image",
    delay: 0,
  },
  {
    title: "On-Time Delivery Guarantee",
    description:
      "Avoid baggage delays—our scheduled deliveries and real-time updates keep you informed until your luggage arrives.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-second",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: courierimg,
    imageAlt: "Excess baggage service image",
    delay: 0,
  },
  {
    title: "Live Luggage Tracking Across India",
    description:
      "Get real-time tracking and SMS/WhatsApp alerts, so you always know exactly where your baggage is in transit.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-second",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: courierimg,
    imageAlt: "Excess baggage service image",
    delay: 0,
  },
  {
    title: "Corporate & Group Travel Luggage Management",
    description:
      "We provide specialised support for corporate travel, events, and group trips, ensuring seamless coordination across multiple bags and destinations.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-second",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: courierimg,
    imageAlt: "Excess baggage service image",
    delay: 0,
  },
  {
    title: "Nationwide Luggage Delivery Network",
    description:
      "We deliver luggage across major, tier-2, and tier-3 cities, supporting seamless travel, relocation, and baggage movement nationwide.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-second",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: courierimg,
    imageAlt: "Excess baggage service image",
    delay: 0,
  },
  
];

export default function Slider({ title = "Why Choose Us — India’s Trusted Luggage Delivery" }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full container mx-auto pt-20 px-4 relative">
      {/* Header + Arrows */}
      <div className="absolute -top-28 lg:-top-9 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-white text-sm lg:text-xl">{title}</h2>

        <div className="flex space-x-2 z-20">
          <button
            ref={prevRef}
            className="p-2 bg-white rounded-sm shadow-md hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="p-2 bg-white rounded-sm shadow-md hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-[500px] rounded-3xl overflow-hidden ${service.bgColor} p-8`}
            >
              <h3 className={`text-sm lg:text-xl font-semibold ${service.textColor}`}>
                {service.title}
              </h3>
              <p className={`mt-2 text-[15px] ${service.descColor}`}>
                {service.description}
              </p>

              <div className="absolute bottom-[-10%] right-0 left-0 w-full h-[66%] z-0">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-contain"
                  priority={service.delay === 0}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
