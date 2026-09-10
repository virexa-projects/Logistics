"use client";
import React, { useState } from "react";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE
import About from "@/asset/home/about-frisbi.png";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";
import { Check, Minus, NetworkIcon, Plus } from "lucide-react";

import CustomSlider from "@/components/Slider";
import MarqueeLogos from "@/components/MarqueeLogos";
import ServicesSection from "@/components/ServiceCard";
import { motion, AnimatePresence } from "framer-motion";
import Packing from "@/asset/icon/express.svg";
// Swiper styles are mandatory to import!
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FAQSection from "@/components/AccordionCorporate";
import ContactSection from "@/components/ContactSection";
import HowToShip from "@/components/HowToShip";
import Testimonials from "@/components/Testimonials";

function Home() {
  const faqData = [
    {
      id: 1,
      title: "1. Get an Instant Quote",
      content:
        "Enter your pickup city, destination city, and number of bags to get a clear, upfront price—no hidden charges",
    },
    {
      id: 2,
      title: "2. Schedule Your Pickup",
      content:
        "Choose a convenient pickup date, time, and location (home, hotel, office, hostel, PG or Airbnb). We’ll confirm everything and assign a coordinator.",
    },
    {
      id: 3,
      title: "3. Handover Your Luggage",
      content:
        "Our executive arrives at your location, scans and secures your bags, applies seals, and shares digital proof of pickup. Optional premium packaging is available.",
    },
    {
      id: 4,
      title: "4. Track & Receive Delivery",
      content:
        "Track your shipment through our website with live status updates. Your luggage is delivered safely at your destination with digital proof of delivery.",
    },
    {
      id: 5,
      title: "5. Support & Rewards",
      content:
        "Benefit from 24/7 dedicated customer support and real-time shipment tracking to ensure a seamless service experience.",
    },
  ];

  const [open, setOpen] = useState(1);

  return (
    <div>
      <HeroSlider />

      <section className="container mx-auto relative px-4 py-12 md:py-20  sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h4 className=" font-semibold  text-center md:text-start mb-4">
                About Frisbi
              </h4>
              <h2 className="md:text-left text-center mb-4">
                Built for worry-free luggage delivery across cities
              </h2>
              <p className="text-second mb-8 text-center md:text-left max-w-xl leading-relaxed">
                We started because dragging 20kg through airports didn’t make
                sense. Neither did paying ₹2,000 in excess baggage fees or
                leaving behind things you actually need. So we built a reliable
                luggage delivery service made for real travel. Your luggage now
                travels just as safely as you do.
              </p>

              <ul className="space-y-3 font-medium text-[15px] mb-8">
                
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Door step pickup and delivery
                </li>
                 <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Dedicated point of contact for every shipment
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Live tracking from pickup to delivery
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Service available across 25,000+ pincodes in India
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  24/7 support, Live tracking from pickup to delivery
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  Professional packing using sturdy boxes
                </li>
              </ul>

              {/* CTA */}
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="btn-primary transition-transform hover:scale-105"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl h-[280px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={About}
                  alt="Frisbi luggage delivery illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F2F6]  overflow-x-hidden">
        <div className="container mx-auto">
          <ServicesSection />
        </div>
      </section>

      <HowToShip />

      <section className="relative bg-primary overflow-x-hidden">
        <CustomSlider />
      </section>

      <section className="  mx-auto relative px-4 py-12 md:py-16 lg:py-24 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      <section className=" overflow-x-hidden ">
        <div>
          <FAQSection />
        </div>
      </section>
      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>
     

      <section className="w-full px-4 py-12   md:py-20 md:pb-0 ">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="CTA background"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient overlay */}
          {/* <div className="absolute inset-0 bg-[#003BE3] " /> */}

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center py-16 md:py-20 px-6"
          >
            <h2 className=" text-white mb-4">
              On-Time Luggage Delivery You Can Plan Around
            </h2>

            <p className="text-white mb-8 max-w-2xl mx-auto text-sm md:text-base">
              We know your world does not fit into a 7 kg suitcase. That’s why
              we move your baggage for you, so you can carry everything you want
              without worrying about weight or limits.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

       <MarqueeLogos />
    </div>
  );
}

export default Home;
