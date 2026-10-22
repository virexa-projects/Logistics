"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import bannerone from "@/asset/banner-1-1.webp";
import bannertwo from "@/asset/luggage-bag.jpg";
import bannerthree from "@/asset/luggage-person.jpg";
import PorterPickupDrop from "./PickupDropBooking";

export const heroSlides = [
  {
    title: "Door-to-Door Luggage Pickup & Delivery in Bangalore",
    desc: "Skip the heavy bags and travel hands-free. Frisbi picks up your luggage from your doorstep and delivers it safely to your destination.",
    img: bannerone,
  },
  {
    title: "Safe, Fast & Reliable Luggage Delivery Across Cities",
    desc: "Frisbi provides safe, fast, and reliable intercity luggage delivery across India.",
    img: bannertwo,
  },
  {
    title: "India’s Smart Luggage Delivery Solution",
    desc: "Smart logistics meets seamless travel. Book online and track in real time.",
    img: bannerthree,
  },
];

const slides = heroSlides;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0); // For smooth crossfade

  useEffect(() => {
    const timer = setInterval(() => {
      setNextIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (nextIndex !== index) {
      const timeout = setTimeout(() => {
        setIndex(nextIndex);
      }, 800); // matches fade duration
      return () => clearTimeout(timeout);
    }
  }, [nextIndex]);

  const goNext = () => setNextIndex((index + 1) % slides.length);
  const goPrev = () =>
    setNextIndex(index === 0 ? slides.length - 1 : index - 1);

  return (
    <div>
      <section className="relative w-full h-[110vh] md:h-screen -mt-24 overflow-hidden">
        {/* SLIDES background */}
        <Image
          src="/hero-desktop.jpg"
          alt="Frisbi Door-to-Door Luggage Delivery"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-20 h-full container mx-auto px-4 md:px-8 pt-16 flex items-center justify-between gap-8 lg:gap-12">
          <motion.div
            key={index + "-text"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-white text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {slides[index].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-100">
              {slides[index].desc}
            </p>
            <Link
              href="/rate-calculator"
              className="inline-block btn-primary hover:scale-105 transition"
            >
              Get  Quote
            </Link>
          </motion.div>

          {/* DESKTOP CHECK PRICE CARD */}
          <div className="hidden md:block flex-shrink-0 w-full max-w-md">
            <PorterPickupDrop />
          </div>
        </div>
      </section>
      <div className=" mb-7  block md:hidden" style={{ marginTop: -180, zIndex: 24, position: "relative" }}
      >
        <PorterPickupDrop />
      </div>
    </div>
  );
}
