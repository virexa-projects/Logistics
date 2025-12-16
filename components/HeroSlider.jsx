"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import bone from "@/asset/1.png";
import btwo from "@/asset/2.png";
import bthree from "@/asset/3.png";
import bannerone from "@/asset/banner.png";
import Image from "next/image";

const slides = [
  {
    title: "Seamless Ship Freight for Global Trade",
    desc: "We partner with leading international shipping lines to move your cargo across major trade routes. From full containers to consolidated loads, we provide dependable schedules and cost-efficient solutions worldwide.",
    img: bannerone,
  },
  // {
  //   title: "Seamless Ship Freight for Global Trade",
  //   desc: "We partner with leading international shipping lines to move your cargo across major trade routes. From full containers to consolidated loads, we provide dependable schedules and cost-efficient solutions worldwide.",
  //   img: bannerone,
  // },
];

const features = [
  {
    title: "Advanced Real Time Tracking System",
    img: bone,
  },
  {
    title: "From India to the World, Hassle-Free",
    img: btwo,
  },
  {
    title: "Comprehensive Customs and Compliance",
    img: bthree,
  },
];

export default function HeroSlider() {
  return (
    <div className="ml-2 mr-2 mt-1 rounded-3xl">
      <section className="relative w-full h-[150vh] md:h-[100vh] -mt-20 overflow-hidden rounded-2xl ">
        <Swiper
          navigation
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img.src})` }}
              >
                <div className="h-full max-w-7xl mx-auto px-4 flex items-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white max-w-2xl top-1/3 md:top-1/2 "
                  >
                    <h2 className="font-semibold text-sm sm:text-lg md:text-3xl lg:text-5xl mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-base sm:text-sm md:text-lg lg:text-3xl mb-6">
                      {slide.desc}
                    </p>
                    <button className="bg-primary text-[16px] text-white font-semibold py-3 px-6 sm:px-12 rounded-full transition duration-300">
                      Book Shipment
                    </button>
                  </motion.div>

                  {/* Booking Form */}
                  <div className="absolute md:right-6 top-2/3 md:top-1/2 md:-translate-y-1/2 w-[90%] sm:w-[440px] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 bottom-10 md:bottom-auto bg-white shadow-xl p-6 md:p-10 rounded-3xl z-30">
                    <h3 className="text-lg font-semibold mb-5 text-center md:text-left">
                      Your Booking is a Step Away!
                    </h3>

                    <div className="space-y-4 md:space-y-6 mt-2">
                      {/* Pickup */}
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder=" "
                          className="peer w-full p-3 rounded-lg bg-[#f5f5f5] outline-none
                 border border-gray-300 focus:ring-2 focus:ring-[#013EFE]
                 placeholder-transparent"
                        />

                        <label
                          className="absolute left-3 top-3 text-gray-500 text-sm transition-all
                 peer-placeholder-shown:top-3
                 peer-placeholder-shown:text-sm
                 peer-focus:-top-2
                 peer-focus:text-xs
                 peer-focus:text-[#013EFE]
                 peer-focus:bg-white
                 peer-focus:px-1"
                        >
                          Pickup Location
                        </label>
                      </div>

                      {/* Drop */}
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder=" "
                          className="peer w-full p-3 rounded-lg bg-[#f5f5f5] outline-none
                 border border-gray-300 focus:ring-2 focus:ring-[#013EFE]
                 placeholder-transparent"
                        />

                        <label
                          className="absolute left-3 top-3 text-gray-500 text-sm transition-all
                 peer-placeholder-shown:top-3
                 peer-placeholder-shown:text-sm
                 peer-focus:-top-2
                 peer-focus:text-xs
                 peer-focus:text-[#013EFE]
                 peer-focus:bg-white
                 peer-focus:px-1"
                        >
                          Drop Location
                        </label>
                      </div>

                      {/* Button */}
                      <button className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:opacity-90 transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      {/* <section className="py-10 px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[460px] md:h-[460px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg drop-shadow-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
