"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import { Mail, Phone, MapPin } from "lucide-react";
import CustomSlider from "@/components/LocationSlider";

import TestimonialSliderRight from "@/components/TestimonialSliderRight";
import ContactUs from "@/asset/shippment/contactus.webp";

function Haveanyqueries() {
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
            src={ContactUs} // your hero image path
            alt="About Background"
            fill
            priority
            className="object-cover p-2 rounded-3xl"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white ">Have any queries? We’re all ears!</h2>

            <p className="text-white/80 mt-3">
              Home <span className="text-blue-200">›</span> Track your package
            </p>
          </div>
        </motion.section>
      </div>

      <section className="max-w-7xl mx-auto py-20">
        <MarqueeLogos />
      </section>

      <section className="w-full py-16  px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-semibold">
              We’re here to answer <br /> your questions.
            </h2>

            <p className="text-[#717889] mt-4 ">
              Have a question, suggestion, or just want to say hi? <br />
              We’re here and happy to hear from you!
            </p>

            <div className="mt-10 space-y-6">
              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Office Location
                  </h4>
                  <p className="text-gray-600 text-sm">
                    100 S Main St, New York, NY
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Send a Message
                  </h4>
                  <p className="text-gray-600 text-sm">contact@frisbi.in</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Call Us Directly
                  </h4>
                  <p className="text-gray-600 text-sm">+91 987-879-8298</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)]   p-10 md:p-10"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Get In Touch
            </h3>
            <p className="text-second text-sm mt-2">
              Have a question, suggestion, or want to say hi? Fill out the form
              below and we'll get back to you soon.
            </p>

            {/* FORM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Id"
                className="p-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Select Service"
                className="p-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* MESSAGE BOX */}
            <textarea
              placeholder="Write a message"
              className="w-full mt-4 p-3 rounded-lg border border-gray-300 text-sm h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button className="w-full mt-6 bg-primary text-white text-sm md:text-[16px] font-sem py-3 rounded-full  transition-all">
              Get a free Quote
            </button>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#000] py-30 pb-30">
        <CustomSlider title="Our Key Locations" />
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <TestimonialSliderRight />
        </div>
      </section>
    </div>
  );
}

export default Haveanyqueries;
