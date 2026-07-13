"use client";
import React from 'react'
import ratecalculator from "@/asset/rate-calculator.png";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import aboutmobile from "@/asset/shippment/rate-caluculator.svg";
import bangalore from "@/asset/blog/blog-one.png";


const blogs = [
    {
        image: bangalore,
        title: "Moving to Bangalore? Here's the Easiest Way to Transport Your Luggage",
        day: "13",
        month: "Jul",
        year: "2026",
        description:
            "Moving to Bangalore is exciting. A new job, a new college, a fresh start in India's Silicon Valley, the city pulls in lakhs of people every year. But between booking a place to stay, planning your travel, and saying goodbye to your old city, one question quietly stresses everyone out: how do I get all my luggage there without losing my mind?",
        slug: "/blog/moving-to-bangalore-luggage-transport",
    },
    //   {
    //     image: "/blogs/delivery.jpg",
    //     title: "Top Benefits of Door-to-Door Luggage Delivery Services",
    //     day: "16",
    //     month: "Jul",
    //     year: "2026",
    //     description:
    //       "Discover how door-to-door luggage transportation can save time and reduce stress.",
    //     slug: "/blog/door-to-door-delivery",
    //   },
    //   {
    //     image: "/blogs/student.jpg",
    //     title: "Why Students Prefer Luggage Transport Services in India",
    //     day: "17",
    //     month: "Jul",
    //     year: "2026",
    //     description:
    //       "Students moving between cities can benefit from affordable luggage transport services.",
    //     slug: "/blog/student-luggage-service",
    //   },
    //   {
    //     image: "/blogs/family.jpg",
    //     title: "Safe & Affordable Parcel Delivery for Families Relocating",
    //     day: "18",
    //     month: "Jul",
    //     year: "2026",
    //     description:
    //       "Relocating with family? Explore cost-effective parcel and luggage transportation solutions.",
    //     slug: "/blog/family-relocation",
    //   },
];

function Blogs() {
    return (
        <div>
            <div className="-mt-24 -mt-16 ">
                <motion.section
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[460px] md:h-[460px] overflow-hidden  block "
                >
                    {/* Background Image */}
                    <Image
                        src={ratecalculator} // your hero image path
                        alt="About Background"
                        fill
                        priority
                        className="md:object-contain object-cover bg-center"
                    />

                    {/* Gradient Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
                        <h1 className="text-black mb-4">Blog</h1>
                        <p className="text-black/80 text-base md:text-lg">
                            Insights, tips, and guides on luggage transportation, relocation, and hassle-free travel.
                        </p>


                    </div>
                </motion.section>

                {/* mobile section */}
            </div>

            <section className="container mx-auto relative px-4 py-12 md:py-20 sm:px-6 lg:px-8 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white p-5">
                            {/* Blog Image */}
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                className="w-full md:h-[220px] sm:h-[220px] h-auto object-cover"
                            />

                            {/* Title */}
                            <h3 className="mt-4 text-[24px] font-semibold leading-snug">
                                {blog.title}
                            </h3>

                            {/* Date */}
                            <div className="flex justify-center mt-6">
                                <div className="flex bg-[#013efe] text-white overflow-hidden">
                                    <span className="px-5 py-3 border-r border-white/20">
                                        {blog.day}
                                    </span>
                                    <span className="px-5 py-3 border-r border-white/20">
                                        {blog.month}
                                    </span>
                                    <span className="px-5 py-3">
                                        {blog.year}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-gray-700 leading-8 text-[16px]">
                                {blog.description}
                            </p>

                            {/* Read More */}
                            <a
                                href={blog.slug}
                                className="inline-block mt-4 font-semibold text-[#013efe] hover:underline"
                            >
                                Read more...
                            </a>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default Blogs;
