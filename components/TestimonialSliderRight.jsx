"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Rail Freight helped us move heavy shipments long distance in an eco-friendly way, while keeping costs low and schedules predictable.",
    author: "Plant Manager, SteelWorks",
  },
  {
    text: "Their service is incredibly reliable and professional. Delivery was faster than expected, and the costs were much lower.",
    author: "Operations Head, MetroLogistics",
  },
  {
    text: "Excellent customer support and smooth shipment process. Our experience has been hassle-free every single time.",
    author: "Supply Chain Lead, CargoMax",
  },
];

export default function TestimonialSliderRight() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className=" max-w-7xl mx-auto rounded-3xl  overflow-hidden shadow-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative h-100  w-full">
          <Image
            src={s2} // your image
            alt="Customer"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="bg-gradient-to-br from-[#0B1220] to-black p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">

          {/* Quote Icon */}
          <Quote className="w-10 h-10 text-blue-500 mb-4" />

          {/* SLIDE CONTENT */}
          <div
            key={index}
            className="transition-all duration-500 ease-in-out"
          >
            <span className="text-[22px] font-semibold  leading-relaxed ">
              {testimonials[index].text}
            </span>

            <p className="text-sm text-white mt-4">
              {testimonials[index].author}
            </p>
          </div>

          {/* DOTS */}
          <div className="flex mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-blue-500" : "bg-white/40"
                }`}
              ></span>
            ))}
          </div>

          {/* NEXT/PREV BUTTONS */}
          {/* <div className="absolute bottom-5 right-6 flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
            >
              →
            </button>
          </div> */}

        </div>

      </div>
    </div>
  );
}
