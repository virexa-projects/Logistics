"use client";

import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import About from "@/asset/about-us.png";
import Image from "next/image";
export default function AboutCompanySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-3">
          <p className="font-medium uppercase">
         
            About Company
          
          </p>
          <h2 className="">
            Digital & Trusted Transport Logistic Company
          </h2>
          <p className="text-second mb-6">
            Our global logistics expertise, advanced supply chain technology & customized
            logistics solutions will help you analyze, develop and implement successful supply
            chain management strategies from end-to-end.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <div className="flex items-start gap-3">
              <div className="text-primary">
                {/* Icon for Online Tracing */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v4a2 2 0 002 2h4M21 17v-4a2 2 0 00-2-2h-4M7 21h10M7 3h10"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Online Tracking</h4>
                <p className="text-second text-sm mt-5">The is a long established fact that a reader.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span className="font-semibold">On-Time Delivery </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span className="font-semibold">Fleet Expansion </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" size={20} />
                <span className="font-semibold">Advanced Technology </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link href="/about" className="bg-primary rounded-full text-white px-6 py-3 font-semibold text-[15px]">
            Discover More
          </Link>
        </div>

        {/* Right Content (Images) */}
        <div className="flex-1 relative flex flex-col gap-4">
          <div className="relative">
            <Image
              src={About}
              alt="About Us"
              className=""
            />
            
          </div>

         
        </div>
      </div>
    </section>
  );
}
