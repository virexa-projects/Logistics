"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import trackbg from "@/asset/terms-conditions.png";
import aboutmobile from "@/asset/about/about-banner-img.svg";

function Termsofservice() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[260px] md:h-[460px] overflow-hidden "
        >
          <Image
            src={trackbg}
            alt="Track Package Background"
            fill
            priority
            className="md:object-contain object-contain "
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black text-3xl md:text-4xl">Terms of Use</h1>
          </div>
        </motion.section>

    
      </div>

      <section className="container mx-auto py-12 md:py-24 px-4">
        <div className="">
          <h2 className="">
            Terms & Conditions — Frisbi Luggage Delivery Services
          </h2>
          <p className="mt-5 text-second">
            Last Updated:{" "}
            <span className="text-black">
              <strong>31-12-2025</strong>
            </span>
          </p>
          <p className="mt-3 text-second">
            Welcome to <b> Frisbi.</b> These Terms & Conditions (“Terms”) govern
            your access to and use of Frisbi’s luggage pick-up, transport, and
            delivery services (“Services”). By booking or using our services via
            website, mobile app, WhatsApp, call, or partner platforms, you agree
            to these Terms. If you do not agree, please do not use the Services.
          </p>
        </div>
        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">1. Definitions</h3>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              <span className="text-black font-bold">“Customer / User”</span> –
              Any individual or entity booking or using Frisbi services.
            </li>
            <li className="text-second">
              <span className="text-black font-bold">“Shipment / Luggage”</span>{" "}
              – Bags, suitcases, boxes, or permissible personal belongings
              handled by Frisbi.
            </li>
            <li className="text-second">
              <span className="text-black font-bold">“Order / Booking”</span> –
              A scheduled request for pickup and delivery created by the
              Customer.
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">2. Service Overview</h3>
          <p className="text-second mt-4">
            Frisbi provides{" "}
            <span className="font-bold text-black">
              {" "}
              luggage pick-up and delivery services{" "}
            </span>{" "}
            within designated city/airport zones.
          </p>
          <p className="text-second mt-4">The service includes:</p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Pick-up from provided location</li>
            <li className="text-second">Secure handling and transport</li>
            <li className="text-second">
              Delivery to confirmed drop location.
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">3. Customer Responsibilities</h3>
          <p className="text-second mt-4">
            By booking the service, you agree to:
          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Provide accurate pick-up & delivery details.
            </li>
            <li className="text-second">
              Ensure someone is available during the scheduled time slots.
            </li>
            <li className="text-second">
              Pack luggage securely to prevent damage or leakage.
            </li>
            <li className="text-second">
              Declare fragile items in advance (additional charges may apply).
            </li>
            <li className="text-second">
              Pay applicable service charges, taxes, and fees.
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">4. Prohibited Items</h3>
          <p className="text-second mt-4">
            Customers agree not to transport items prohibited by law or unsafe
            for handling, including but not limited to:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Cash, jewelry, gold, or valuables</li>
            <li className="text-second">Electronics without declaration</li>
            <li className="text-second">
              Liquids, inflammable items, chemicals, sharp objects
            </li>
            <li className="text-second">
              Illegal items by accordance by indian law.{" "}
            </li>
            <li className="text-second">
              Items restricted by airport/security regulations
            </li>
          </ul>
          <p className="text-second mt-4">
            Frisbi reserves the right to inspect shipments in case of suspicion
            or compliance requirements.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">5. Weight & Size Policy</h3>
          <p className="text-second mt-4">
            Pricing and acceptance of luggage are based on declared dimensions
            and weight. If the actual weight/size exceeds the declared value,
            <span className="text-black font-bold">
              {" "}
              additional charges will be collected.
            </span>
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">6. Delivery & Delays</h3>
          <p className="text-second mt-4">
            Frisbi attempts timely delivery within scheduled slots.
          </p>

          <p className="text-second mt-4">
            However, delivery may be delayed due to:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Weather disruptions</li>
            <li className="text-second">Road restrictions or strikes</li>
            <li className="text-second">Traffic congestion</li>
            <li className="text-second">Airport/security protocols</li>
            <li className="text-second">Incomplete or incorrect address</li>
          </ul>
          <p className="text-second mt-4">
            Frisbi is <span className="text-black font-bold">not liable</span>{" "}
            for delays caused by factors beyond operational control.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">7. Damage, Loss & Insurance</h3>
          <p className="text-second mt-4">
            Frisbi takes utmost care in handling luggage.
          </p>

          <p className="text-second mt-4">
            However, liability is limited as follows:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Maximum coverage:{" "}
              <span className="text-black font-bold">₹1,999</span> per luggage
              (if insurance opted)
            </li>
            <li className="text-second">
              Without insurance: Liability is limited to{" "}
              <span className="text-black font-bold">
                basic handling coverage only,
              </span>{" "}
              excluding fragile/undeclared items.
            </li>
          </ul>
          <p className="text-second mt-4">
            Frisbi is
            <span className="text-black font-bold"> not liable</span> for:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Improper packing by customer</li>
            <li className="text-second">Normal wear & tear , Scartches</li>
            <li className="text-second">
              Delay-related losses (missed flights, shows, meetings, etc.)
            </li>
            <li className="text-second">
              Loss of prohibited, undeclared, or high-value items
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">8. Cancellations & Refunds</h3>
          <p className="text-second mt-4">
            Frisbi attempts timely delivery within scheduled slots.
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              <span className="text-black font-bold">Full refund: </span> Order
              cancelled{" "}
              <span className="text-black font-bold"> ≥ 4 hours </span> before
              pickup time
            </li>
            <li className="text-second">
              {" "}
              <span className="text-black font-bold">50% refund:</span> Order
              cancelled <span className="text-black font-bold">2 hours </span>{" "}
              before pickup time
            </li>
            <li className="text-second">
              {" "}
              <span className="text-black font-bold">No refund:</span>{" "}
              Cancellation{" "}
              <span className="text-black font-bold"> after pickup </span> or
              failure to hand luggage to pickup team
            </li>
          </ul>
          <p className="text-second mt-4">
            Refunds are processed within
            <span className="text-black font-bold"> 7–10 working days </span>to
            the original payment method.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">9. Unsuccessful Delivery</h3>
          <p className="text-second mt-4">
            If the customer (or authorized receiver) is not available:
          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Delivery will be rescheduled once without charge
            </li>
            <li className="text-second">
              Additional attempts may involve rescheduling fees
            </li>
            <li className="text-second">
              Luggage may be returned to the pickup location if customer is
              unreachable
            </li>
          </ul>
          <p className="text-second mt-4">
            Storage fees may apply after
            <span className="text-black font-bold"> 24 hours of holding.</span>
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">10. Payments</h3>
          <p className="text-second mt-4">
            Accepted modes: Online payments (UPI / Wallets / Net Banking /
            Cards).
          </p>

          <p className="text-second mt-4">
            Orders are confirmed only upon{" "}
            <span className="text-black font-bold"> successful payment. </span>
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">11. Privacy & Data Usage</h3>
          <p className="text-second mt-4">
            Frisbi collects customer information only for:
          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Service fulfillment</li>
            <li className="text-second"> KYC Identity verification</li>
            <li className="text-second">Safety & compliance</li>

            <li className="text-second">Customer support & communication</li>
          </ul>
          <p className="text-second mt-4">
            Frisbi does <span className="font-bold text-black"> not </span> sell
            or share customer data with third parties, except for operations or
            legal requirements.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">12. Customer Conduct</h3>
          <p className="text-second mt-4">Customers shall not:</p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Misuse the service or harass staff</li>
            <li className="text-second">
              Use Frisbi for illegal shipment purposes
            </li>
            <li className="text-second">
              Create fraudulent or duplicate bookings
            </li>
          </ul>
          <p className="text-second mt-4">
            Violation may result in
            <span className="font-bold text-black">
              {" "}
              denial of current and future services.{" "}
            </span>{" "}
            and legal actions.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">13. Modifications to Terms</h3>
          <p className="text-second mt-4">
            Frisbi may update these Terms periodically.
          </p>

          <p className="text-second mt-4">
            Continued use of the service implies acceptance of updated Terms.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">14. Governing Law</h3>
          <p className="text-second mt-4">
            These Terms are governed by the laws of{" "}
            <span className="text-black font-bold">India.</span>
          </p>

          <p className="text-second mt-4">
            Any disputes shall be subject to{" "}
            <span className="text-black font-bold">Bangalore city</span>{" "}
            jurisdiction.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">15. Contact Information</h3>
          <p className="text-second mt-4">
            For support, disputes, or escalations:
            <span className="text-black font-bold">India.</span>
          </p>

          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Email:{" "}
              <span className="font-bold text-black"> support@frisbi.in</span>
            </li>
            <li className="text-second">
              Contact Us:{" "}
              <span className="font-bold text-black"> +91 7418152531</span>
            </li>
            <li className="text-second">
              Website:{" "}
              <span className="font-bold text-black">
                {" "}
                <Link href="www.frisbi.in" className="text-primary">
                  www.frisbi.in
                </Link>{" "}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Termsofservice;
