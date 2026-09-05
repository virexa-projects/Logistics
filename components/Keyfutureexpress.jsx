"use client";

import Link from "next/link";
import Image from "next/image";

// --- Images ---
import illustration from "@/asset/delivery-luggage.jpg";

// --- icon ---
import icon1 from "@/asset/icon/priority-pickup.svg";
import icon2 from "@/asset/icon/faster-transit.svg";
import icon3 from "@/asset/icon/tracking.svg";
import icon4 from "@/asset/icon/insurance.svg";
import icon5 from "@/asset/icon/notification.svg";
import icon6 from "@/asset/icon/invoice.svg";
import icon7 from "@/asset/icon/support.svg";
import icon8 from "@/asset/icon/express.svg";

export default function StickyStepsOverlap() {
  const steps = [
    {
      step: "STEP 1",
      title: "Priority Pickup",
      desc: "Your booking is placed in front of standard shipments.",
      icon: icon1,
    },
    {
      step: "STEP 2",
      title: "Faster Transit",
      desc: "Reduced hub halts with accelerated routes.",
      icon: icon2,
    },
    {
      step: "STEP 3",
      title: "Live Real-Time Tracking",
      desc: "Status your luggage at every stage.",
      icon: icon3,
    },
    {
      step: "STEP 4",
      title: "Enhanced Insurance Coverage",
      desc: "Higher coverage protection than standard handling.",
      icon: icon4,
    },
    {
      step: "STEP 5",
      title: "Instant Notifications",
      desc: "Get alerts for every status update.",
      icon: icon5,
    },
    {
      step: "STEP 6",
      title: "GST Invoice & Digital Receipt",
      desc: "Fully generated invoices for businesses.",
      icon: icon6,
    },
    {
      step: "STEP 7",
      title: "Extended Customer Support",
      desc: "Priority support during delivery hours.",
      icon: icon7,
    },
    {
      step: "STEP 8",
      title: "Pan-India Express Network",
      desc: "Strong coverage across metro to tier-3 cities.",
      icon: icon8,
    },
  ];

  return (
    <section className="py-20 bg-[#F4F2F7]">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:gap-20">
          {/* LEFT – STICKY */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-24 text-center md:text-left">
              <p className="text-sm tracking-widest text-gray-500 font-semibold mb-4">
                A RELIABLE WAY TO SHIP YOUR LUGGAGE
              </p>

              <h2 className="text-4xl font-bold leading-tight mb-6">
                Why Express Delivery works
              </h2>

              <p className="text-gray-500 text-lg mb-8 max-w-lg">
                Luggage delivery designed for urgent timelines with freight accuracy, exceptional handling, seamless pickups, real-time tracking, professional teams, 24x7 customer support, and fast pan-India transit across routes.
              </p>

              <Link
                href="/services"
                className="btn-primary hover:scale-105 transition-all"
              >
                View Services
              </Link>

              <Image
                src={illustration}
                alt="Logistics Overview"
                width={500}
                height={500}
                className="rounded-3xl object-cover w-full mt-10"
                priority
              />
            </div>
          </div>

          {/* RIGHT – STEPS */}
          <div className="lg:w-1/2 space-y-6 mt-10 lg:mt-0">
            {steps.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-10 rounded-3xl transition-all duration-300 hover:shadow-xl"
              >
                <p className="text-xs tracking-widest text-gray-400 font-semibold mb-6">
                  {item.step}
                </p>

                <div className="flex items-start gap-5">
                  <div>
                    <h4 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 mb-4">{item.desc}</p>

                    {/* Icon with light blue background */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
