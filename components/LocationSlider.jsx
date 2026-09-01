"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Assets


const servicesData = [
  {
    title: "Excess Baggage",
    description:
      "Skip airline charges—send your extra luggage at a fraction of the cost.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    phoneno: "+91-989-984-87877",
    mail: "support@frisbi.in",
    delay: 0,
  },
  {
    title: "Excess Baggage",
    description:
      "Skip airline charges—send your extra luggage at a fraction of the cost.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    phoneno: "+91-989-984-87877",
    mail: "support@frisbi.in",
    delay: 0,
  },
  {
    title: "Excess Baggage",
    description:
      "Skip airline charges—send your extra luggage at a fraction of the cost.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    phoneno: "+91-989-984-87877",
    mail: "support@frisbi.in",
    delay: 0,
  },
  {
    title: "Excess Baggage",
    description:
      "Skip airline charges—send your extra luggage at a fraction of the cost.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    phoneno: "+91-989-984-87877",
    mail: "support@frisbi.in",
    delay: 0,
  },
];

export default function Slider({ title = "Our Core Strengths" }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full container mx-auto pt-20 px-4 relative">
      {/* Header + Arrows */}
      <div className="absolute -top-5 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-white">{title}</h2>

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
          1024: { slidesPerView: 3 },
        }}
      >
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-[260px] rounded-3xl overflow-hidden ${service.bgColor} p-8`}
            >
              <h3 className={`text-xl font-semibold ${service.textColor}`}>
                {service.title}
              </h3>
              <p className={`mt-2 text-sm ${service.descColor}`}>
                {service.description}
              </p>

              <p className={`mt-2 text-sm `}>{service.phoneno}</p>
              <p className={`mt-2 text-sm `}>{service.mail}</p>

              {/* <div className="absolute bottom-[-10%] right-0 left-0 w-full h-[66%] z-0">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-contain"
                  priority={service.delay === 0}
                />
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
