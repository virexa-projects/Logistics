"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import thankyou from "@/asset/thankyou.svg";
import Link from "next/link";
import ServicesSection from "@/components/ServiceCard";

import Testimonials from "@/components/Testimonials";

export default function ThankYouSection() {
  return (
    <section className="w-full py-24 px-4">
      {/* TOP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto pb-36"
      >
        <Image
          src={thankyou} // replace icon
          alt="Success icon"
          width={160}
          height={160}
          className="mx-auto"
        />

        <h2 className=" mt-4">
          <span className="text-blue-600">Thank you</span> for Contacting us
        </h2>

        <p className="text-second mt-4 ">
          We will be in Touch with you soon.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className="bg-primary text-lg text-white text-[16px] font-semibold py-3 px-10 rounded-full transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

      <section className=" bg-[#f1f1f5] pt-16 pb-8">
        <ServicesSection />
      
      </section>
       <section className="pt-24">
      <Testimonials />
       </section>

      
    </section>

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
