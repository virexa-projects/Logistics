"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Assets
import heroBg from "@/asset/shippment/ratecalculator.webp";
import one from "@/asset/service/1.png";
import two from "@/asset/service/2.png";
import three from "@/asset/service/3.png";
import corporate from "@/asset/helpcenter-salient.webp";
import packing from "@/asset/packing.webp";

// Components
import ServicesSection from "@/components/ServiceCard";
import MarqueeLogos from "@/components/MarqueeLogos";

import FAQSection from "@/components/Accordion";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function Services() {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="-mt-20">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[460px] rounded-3xl overflow-hidden"
        >
          <Image
            src={heroBg}
            alt="Services Hero"
            fill
            priority
            className="object-cover p-2 rounded-3xl"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-4xl font-semibold ">
              Services
            </h1>
            <p className="text-white/80 mt-3 text-sm md:text-base">
              Home <span className="text-blue-200">›</span> Services
            </p>
          </div>
        </motion.section>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <section className="container mx-auto px-4 my-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Delivering seamless <br /> logistics for your business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[one, two, three].map((img, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden  ${
                i === 1
                  ? "md:translate-y-10"
                  : i === 2
                  ? "md:translate-y-20"
                  : ""
              }`}
            >
              <Image
                src={img}
                alt="Service"
                className="w-full h-[460px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= LOGOS + SERVICES ================= */}

      <div className="container mx-auto py-20">
        <MarqueeLogos />
      </div>

      <section className="bg-[#F1F2F6] pt-24 pb-8">
        <ServicesSection />
      </section>
      <section className="bg-[#F1F2F6]">
        <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
            {/* Corporate */}
            <FeatureCard
              title="Corporate "
              description="Seamless Package Delivery, Right at Your Doorstep!"
              image={corporate}
              imageFit="cover"
            />

            {/* Package Delivery */}
            <FeatureCard
              title="Individual"
              description="Fast, reliable delivery for every shipment"
              image={packing}
              imageFit="contain"
            />
          </div>

          <div className="flex justify-center mt-16">
            <Link
              href="/"
              className="bg-primary text-white font-semibold py-3 px-12 rounded-full shadow-xl shadow-blue-500/50"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className=" px-4 overflow-x-hidden">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      <section className=" bg-[#000] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>
      <section className="py-24 pb-0 overflow-x-hidden ">
        <div>
          <FAQSection />
        </div>
      </section>

      <CallToAction />

      
    </div>
  );
}

function FeatureCard({ title, description, image, fit = "cover" }) {
  return (
    <div className="relative bg-white rounded-3xl p-8 h-[550px] overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3">{description}</p>
        <Link
          href="#"
          className="mt-4 inline-block font-semibold hover:text-[#013EFE]"
        >
          Learn more
        </Link>
      </div>

      <div className="absolute bottom-[-10%] inset-x-0 h-[60%]">
        <Image
          src={image}
          alt={title}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    </div>
  );
}
