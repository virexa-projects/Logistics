"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// --- Import Assets ---
import Smartbox from "@/asset/service/premium-banner-img.svg";
import Standard from "@/asset/service/standard-banner-img.svg";
import Airport from "@/asset/service/express.svg";
import Corporate from "@/asset/service/corporate.svg";
import Packing from "@/asset/service/individual.svg";

// --- Services Data ---
const servicesData = [
  {
    title: "Standard Delivery",
    description:
      "For trips and moves planned ahead. A reliable, cost-effective way to send your packages with care.",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: Standard,
    imageAlt: "Standard luggage delivery",
    delay: 0,
    link: "/standard-delivery",
  },
  {
    title: "Express Delivery",
    description:
      "Faster delivery without cutting corners on safety. With added flexibility and priority handling.",
    bgColor: "bg-yellow-500",
    textColor: "text-black",
    descColor: "text-black",
    linkColor: "text-black hover:text-[#013EFE]",
    imageSrc: Airport,
    imageAlt: "Express delivery service",
    delay: 0.15,
    link: "/express-delivery",
  },
  {
    title: "Premium Delivery",
    description:
      "White glove care, end to end. For deliveries you would rather not think twice about.",
    bgColor: "bg-[#013EFE]",
    textColor: "text-white",
    descColor: "text-white",
    linkColor: "text-white hover:text-white",
    imageSrc: Smartbox,
    imageAlt: "Premium delivery service",
    delay: 0.3,
    link: "/premium-delivery",
  },
];

// --- Service Card Component ---
const ServiceCard = ({ service }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: service.delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`relative p-6 md:p-8 lg:p-10 rounded-3xl flex flex-col justify-between ${service.bgColor} h-[550px] overflow-hidden`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10">
        <h4 className={` ${service.textColor}`}>
          {service.title}
        </h4>
       

        <p className={`mt-4 text-base ${service.descColor}`}>
          {service.description}
        </p>

        <Link
          href={service.link}
          className={`mt-4 inline-block font-semibold ${service.linkColor}`}
        >
          Learn more
        </Link>
      </div>

      {/* Image */}
      <div className="absolute bottom-[-0%] inset-x-0 w-full h-[55%] z-0">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          className="object-contain"
          priority={service.delay === 0}
        />
      </div>
    </motion.div>
  );
};

// --- Feature Card Component ---
const FeatureCard = ({
  title,
  description,
  image,
  link = "#",
  fit = "cover",
}) => {
  return (
    <div className="relative bg-white rounded-3xl p-8 h-[500px] overflow-hidden transition-transform hover:-translate-y-2">
      <div className="relative z-10">
        <h4 className="">{title}</h4>

        <p className="mt-3 text-gray-500">{description}</p>

        <Link
          href={link}
          className="mt-4 inline-block text-[16px] font-semibold hover:text-[#013EFE]"
        >
          Learn more
        </Link>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-[70%]">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-${fit}`}
          priority
        />
      </div>
    </div>
  );
};

// --- Main Services Section ---
const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center  mb-10 md:mb-12 lg:mb-16">
         Five ways to move your luggage. One way to travel lighter.
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <FeatureCard
            title="Corporate"
            description="Business delivery that handles it all. From employee moves to event travel, we handle baggage so work keeps moving."
            image={Corporate}
            link="/corporate"
            fit="contain"
          />

          <FeatureCard
            title="Individual"
            description="When life requires extra bags, longer stays, or city transfers, we step in to make sure your luggage reaches safely."
            image={Packing}
            link="/individual"
            fit="contain"
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/book-shipment"
            className="btn-primary hover:scale-105 transition-all"
          >
            Book Now 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
