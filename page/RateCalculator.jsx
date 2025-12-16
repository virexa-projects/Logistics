"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import MarqueeLogos from '@/components/MarqueeLogos';
import ShipmentCostCalculator from '@/components/ShipmentCostCalculator';
import FAQ from '@/components/Accordion';
import ratecalculator from "@/asset/shippment/ratecalculator.webp";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";


function RateCalculator() {
    return (
        <div>

            <div className="-mt-20">
                <motion.section
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[460px] md:h-[460px] rounded-3xl overflow-hidden"
                >
                    {/* Background Image */}
                    <Image
                        src={ratecalculator} // your hero image path
                        alt="About Background"
                        fill
                        priority
                        className="object-cover p-2 rounded-3xl"
                    />

                    {/* Gradient Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

                    {/* CONTENT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-white">
                            Rate  Calculator
                        </h2>

                        <p className="mt-4 text-second">
                            Home <span className="text-blue-200">›</span> Rate  Calculator
                        </p>
                    </div>
                </motion.section>
            </div>

            <section className='container mx-auto py-20 px-4'>
                <MarqueeLogos />
            </section>

            <section className='mt-2'>
                <ShipmentCostCalculator />
            </section>



            <section className='py-24'>
                <FAQ />
            </section>

 <Testimonials />

  <CallToAction />



        </div>
    )
}

export default RateCalculator
