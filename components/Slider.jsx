"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Safe from "@/asset/why-choose/safe-secure.png";
import Door from "@/asset/why-choose/door-to-door.png";
import Tier from "@/asset/why-choose/tier.png";
import LiveTracking from "@/asset/why-choose/live-tracking.png";
import OnTime from "@/asset/why-choose/on-time-delivery.png";
import Corporate from "@/asset/why-choose/corporate.png";
import Support from "@/asset/why-choose/support.png";

const data = [

  {
    title: "Costs Less Than Carrying It ",
    desc: (
      <>
        Excess baggage fees add up fast, so you can ship 20 kg or more for far less and pay once, without surprises. Read our detailed guide on{" "}
        <Link
          href="/blog/how-to-avoid-excess-baggage-charges-india"
          className="text-primary underline hover:text-blue-700 font-medium transition-colors"
        >
          how to avoid airline excess baggage charges
        </Link>{" "}
        to see how much you can save.
      </>
    ),
    img: Safe,
  },
  {
    title: "Dedicated Support Throughout",
    desc: "No chatbots. No waiting three days for an email reply. Get a dedicated contact who knows your shipment.",
    img: Support,
  },
  {
    title: "No More Weight Limits",
    desc: "Pack what you actually need instead of packing around limits, and let us handle the weight.",
    img: Door,
  },
  {
    title: "Built for Last-Minute Plans Too",
    desc: "Forgot to ship earlier? Express and Premium services get your luggage moving fast. Same day pickups available. Delivered in 3-5 days or less.",
    img: OnTime,
  },

  {
    title: "Live Updates Keep You in the Loop",
    desc: "Real time tracking plus SMS and WhatsApp alerts at every step. You always know where your luggage is. No more guess games.",
    img: LiveTracking,
  },
  {
    title: "Made for Group Travel and Corporate Moves",
    desc: (
      <>
        Moving an entire team? Managing event luggage? Coordinating bags for a group trip? We handle multiple shipments to multiple destinations without the chaos. Relocating soon? Read our guide on{" "}
        <Link
          href="/blog/moving-to-bangalore-luggage-transport"
          className="text-primary underline hover:text-blue-700 font-medium transition-colors"
        >
          the easiest way to transport your luggage when moving to Bangalore
        </Link>
        .
      </>
    ),
    img: Corporate,
  },
  {
    title: "Nationwide Luggage Delivery Network",
    desc: "Not just metros. We deliver across 25,000+ pincodes. From big cities to smaller towns, we deliver wherever your journey takes you.",
    img: Tier,
  },

];

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-white  text-center md:text-left">
            Why people choose frisbi for luggage delivery
          </h2>

          {/* DESKTOP ARROWS */}
          <div className="hidden lg:flex gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
              className="p-2 bg-white rounded cursor-pointer"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
              className="p-2 bg-white rounded cursor-pointer"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl p-8 h-[500px] relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className=" font-semibold text-[18px] md:text-[21px]">{item.title}</h3>
                  <p className="text-sm mt-2 text-second">{item.desc}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none">
                  <Image
                    src={item.img}
                    alt="Frisbi luggage delivery feature"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MOBILE ARROWS — BOTTOM CENTER */}
        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="p-3 bg-white rounded-full cursor-pointer"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="p-3 bg-white rounded-full cursor-pointer"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
