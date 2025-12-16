"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutone from "@/asset/about/aboutone.png";
import abouttwo from "@/asset/about/abouttwo.png";
import aboutUs from "@/asset/about/about-bg.webp";
import vision from "@/asset/about/vision.webp";
import mission from "@/asset/about/mission.webp";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import MarqueeLogos from "@/components/MarqueeLogos";
import CustomSlider from "@/components/LocationSlider";
import Stats from "@/components/Stats";
import TestimonialSliderRight from "@/components/TestimonialSliderRight";
import ContactSection from "@/components/ContactSection";
function Aboutus() {
  return (
    <div className="-mt-20 ">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full h-[460px] md:h-[460px] rounded-3xl overflow-hidden "
      >
        {/* Background Image */}
        <Image
          src={aboutUs} // your hero image path
          alt="About Background"
          fill
          priority
          className="object-cover p-2  rounded-3xl"
        />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-4xl font-semibold ">
            About us
          </h2>

          <p className="text-white/80 mt-3 text-sm md:text-base">
            Home <span className="text-blue-200">›</span> about-us
          </p>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 pt-30">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT IMAGE (Always first on mobile) */}
          <div className="w-full order-1">
            <Image
              src={aboutone}
              alt="Logistics"
              className="rounded-3xl  w-full  h-[160px]  sm:h-[200px]  md:h-[260px]  lg:h-[600px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT (2nd on mobile) */}
          <div className="flex flex-col space-y-3 md:space-y-3 order-2">
            <p className=" font-medium">
              FAST, SMART & CONNECTED SUPPLY CHAINS
            </p>

            <h2 className=" ">
              Optimizing logistics <br /> with purpose
            </h2>

            <p className="font-medium">
              Supply is a leader in logistics, making shipping simple and
              reliable for any business that needs to move goods.
            </p>

            {/* SECOND IMAGE – stays inside right column but stacks on mobile */}
            <Image
              src={abouttwo}
              alt="Logistics Team"
              className="
          rounded-3xl 
          w-full 
          h-[160px] 
          sm:h-[200px] 
          md:h-[260px] 
          lg:h-[540px]
          object-cover 
          mt-5
        "
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto lg:py-20 ">
        <MarqueeLogos />
      </section>

      <section className="bg-[#000] py-30 pb-30">
        <CustomSlider title="Our Key Locations" />
      </section>
      <section className="py-30">
        <Stats
          data={[
            { start: 0, end: 22, label: "Loads delivered" },
            { start: 0, end: 15, label: "Client Served" },
            { start: 0, end: 5, label: "Year of Experience" },
            { start: 0, end: 30, label: "Order Completed" },
          ]}
        />
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
          {/* LEFT GRID IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            {/* BLUE BOX */}
            <div className="bg-primary rounded-3xl p-6 leading-[1.4] flex items-end justify-end text-white text-3xl font-semibold min-h-[150px] md:min-h-[200px]">
              Our Corporate Values
            </div>

            {/* IMAGE 1 */}
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={vision}
                alt="Truck image"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="col-span-2 rounded-3xl overflow-hidden">
              <Image
                src={mission}
                alt="Cargo image"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-xs tracking-wide  uppercase">
              Business forward with trust
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Corporate Values
            </h2>

            <p className="text-second mt-4 leading-relaxed max-w-lg">
              Our values align to our mission, support our culture, and serve as
              a declaration of how we treat each other, our customers, and our
              partners.
            </p>

            {/* VALUES LIST */}
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Respect</h3>
                <p className="text-second text-sm mt-1 max-w-md">
                  We recognize that the thoughts, feelings, and backgrounds of
                  others are as important as our own.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Integrity</h3>
                <p className="text-second text-sm mt-1 max-w-md">
                  We are honest, ethical, and trustworthy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Accountability</h3>
                <p className="text-second text-sm mt-1 max-w-md">
                  We accept full responsibility for our decisions, actions, and
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
         <Testimonials />
      </section>

      <section className="mt-7 bg-[#050A1F] mx-auto">
        <ContactSection />
      </section>

       <CallToAction />
    </div>
  );
}

export default Aboutus;
