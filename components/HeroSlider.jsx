"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import bannerone from "@/asset/banner-1-1.webp";
import bannertwo from "@/asset/luggage-bag.jpg";
import bannerthree from "@/asset/luggage-person.jpg";
import PorterPickupDrop from "./PickupDropBooking";

const slides = [
  {
    title: "Door-to-Door Luggage Delivery for Stress-Free Travel",
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
        {/* FLOATING COMPONENT */}
        <div className="absolute z-40 hidden md:block
                bottom-4 left-1/2 -translate-x-1/2 md:right-10 md:top-1/2 md:bottom-auto md:translate-x-0 md:-translate-y-1/2">
          <PorterPickupDrop />
        </div>


        {/* SLIDES (both old and new) */}
        {/* {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: i === index ? 1 : 0 }}
            animate={{ opacity: i === nextIndex ? 1 : i === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          > */}
            <Image
              src={bannerone}
              alt={bannerone}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          {/* </motion.div>
        ))} */}

        {/* CONTENT */}
        <div className="relative z-20 h-full container mx-auto px-4  md:px-8 flex items-center">
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
        </div>

        {/* ARROWS */}
        {/* <button
          onClick={goPrev}
          className="absolute block md:hidden left-4 md:left-8 bottom-6 md:top-1/2 md:-translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full"
        >
          ←
        </button>
        <button
          onClick={goNext}
          className="absolute block md:hidden right-4 md:right-8 bottom-6 md:top-1/2 md:-translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full"
        >
          →
        </button> */}

        {/* DOTS */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setNextIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div> */}
      </section>
      <div className=" mb-7  block md:hidden" style={{ marginTop: -180, zIndex: 50,position:"relative" }}
>
        <PorterPickupDrop />
      </div>
    </div>
  );
}
