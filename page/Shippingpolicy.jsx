"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import trackbg from "@/asset/terms-conditions.png";

function Shippingpolicy() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[260px] md:h-[460px] overflow-hidden"
        >
          <Image
            src={trackbg}
            alt="Track Package Background"
            fill
            priority
            className="md:object-contain object-contain bg-center"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black text-3xl md:text-4xl">Shipping Policy</h1>

         
          </div>
        </motion.section>
      </div>

      <section className="container mx-auto py-12 md:py-16 px-4">
        <div className="">
          <h2 className="">
            Shipping & Delivery Policy — Frisbi Luggage Delivery Services
          </h2>
          <p className="mt-5 text-second">
            Last Updated:{" "}
            <span className="text-black">
              <strong>31-12-2025</strong>
            </span>
          </p>
          <p className="mt-3 text-second">
            This Shipping & Delivery Policy explains how Frisbi (“Company”,
            “we”, “our”, “us”) manages luggage pickup, handling, logistics,
            transport, and delivery services (“Services”). By booking or using
            our Services, you agree to this policy.
          </p>
        </div>
        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">1. Service Availability</h3>
          <p className="text-second mt-4">
            Our luggage pickup and delivery services operate within selected:
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Cities and metro regions</li>
            <li className="text-second">Airports and hotels</li>
            <li className="text-second">Partner networks</li>
          </ul>
          <p className="font-italic text-black mt-4">
            Service areas may expand or vary without prior notice.
          </p>
          <p className="font-italic text-black mt-4">
            To check availability, customers must verify location availability
            during the booking process.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">2. Pickup & Delivery Slots</h3>
          <p className="text-second mt-4">
            We recommend scheduling pickups{" "}
            <span className="font-bold text-black">
              {" "}
              upto 24 hours before travel{" "}
            </span>{" "}
            to avoid delays.
          </p>

          <p className="text-second mt-4">
            If flexible slots are chosen, the pickup team may arrive
            <span className="text-black font-bold">
              any time within the selected window.
            </span>
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">3. Pickup Process</h3>
          <p className="text-second mt-4">
            At the time of pickup, the customer must ensure:
          </p>

          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Luggage is packed and sealed securely
            </li>
            <li className="text-second">
              Accurate address, landmarks, and contact information are provided
            </li>
            <li className="text-second">Someone is available for handover</li>
          </ul>
          <p className="text-second mt-4">
            During pickup, the delivery personnel may:
          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Scan luggage tags</li>
            <li className="text-second">Capture luggage images for record</li>
            <li className="text-second">
              Verify customer identity (airport/hotel protocols)
            </li>
          </ul>
          <p className="text-second mt-4">
            Refusal/failure to hand over luggage at the scheduled time may lead
            to{" "}
            <span className="text-black font-bold"> cancellation charges </span>{" "}
            as per policy.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">4. Delivery Process</h3>
          <p className="text-second mt-4">
            At the time of delivery, the receiver must:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Be available at the scheduled date</li>
            <li className="text-second">
              Provide booking ID or verification details
            </li>
            <li className="text-second">Inspect and acknowledge the luggage</li>
          </ul>
          <p className="text-second mt-4">
            If the receiver is{" "}
            <span className="text-black font-bold">
              {" "}
              not reachable or unavailable:
            </span>
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              One{" "}
              <span className="text-black font-bold">
                {" "}
                free rescheduling attempt{" "}
              </span>{" "}
              will be offered
            </li>
            <li className="text-second">
              Additional attempts may incur rescheduling or storage fees
            </li>
            <li className="text-second">
              If unattended beyond{" "}
              <span className="text-black font-bold"> 24 hours, </span> luggage
              may be returned to pickup location (return charges apply)
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">5. Shipping Restrictions</h3>
          <p className="text-second mt-4">
            Frisbi will not transport items that are illegal, dangerous,
            restricted, or prohibited by law, including (but not limited to):
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Cash, jewelry, gold, precious stones
            </li>
            <li className="text-second">Electronics without declaration</li>
            <li className="text-second">
              Liquids, explosives, toxic or flammable items
            </li>
            <li className="text-second">illegal items  by accordance by indian law.</li>
            <li className="text-second">Perishable and high-value items</li>
          </ul>
          <p className="text-second mt-4">
            If such items are found, Frisbi reserves the right to:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Cancel the shipment</li>
            <li className="text-second">Notify authorities if mandated</li>
            <li className="text-second">
              Charge penalties and damages if applicable
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">6. Packaging Responsibility</h3>
          <p className="text-second mt-4">
            Customers are responsible for providing proper packaging for safe
            handling.
          </p>
          <p className="text-second mt-4">
            Frisbi is <span className="text-black font-bold"> not liable </span>{" "}
            for: s
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Damage due to inadequate packaging</li>
            <li className="text-second">
              Fragile items sent without declaration
            </li>
          </ul>
          <p className="text-second mt-4">
            Packaging support may be offered at selected locations for an
            additional fee.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">7. Delivery Timeframes</h3>
          <p className="text-second mt-4">
            Estimated delivery time depends on:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Distance</li>
            <li className="text-second">
              Chosen service category (Standard / Express / Premium)
            </li>
            <li className="text-second">
              Traffic, weather, and regulatory checkpoints
            </li>
          </ul>
          <p className="text-second mt-4">
            While we strive to meet scheduled delivery times, delays may occur
            due to circumstances beyond our control.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">8. Tracking & Status Updates</h3>
          <p className="text-second mt-4">
            Customers may receive shipment status updates through:
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              SMS / WhatsApp / Email notifications
            </li>
            <li className="text-second">Website / App tracking dashboard</li>
            <li className="text-second">Customer support chat</li>
          </ul>
          <p className="text-second mt-4">
            Live tracking availability may vary by region.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">9. Handling, Damage & Lost Shipments</h3>
          <p className="text-second mt-4">
            Frisbi ensures professional handling throughout the delivery chain.
          </p>
          <div class="overflow-x-auto mt-4">
            <table class="min-w-full border border-[#f5f5f5] rounded-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-4 py-2 text-left font-semibold border border-[#f5f5f5]">
                    Packaging Status
                  </th>
                  <th class="px-4 py-2 text-left font-semibold border border-[#f5f5f5]">
                    Compensation Eligibility
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Customer packed securely
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Covered up to maximum insurance (if opted)
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Customer packed inadequately
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Limited or no coverage
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Fragile items declared
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Eligible for conditional compensation
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Fragile items not declared
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    No compensation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-second mt-4">
            Maximum compensation applies as per the{" "}
            <span className="text-black font-bold">
              {" "}
              Insurance Policy / Terms & Conditions.
            </span>
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">10. Refusal of Service</h3>
          <p className="text-second mt-4">
            Frisbi reserves the right to refuse pickup or cancel delivery if:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Prohibited contents are suspected</li>
            <li className="text-second">
              Verification documents are not provided (airport/hotel
              regulations)
            </li>
            <li className="text-second">
              The customer behaves abusively or engages in fraudulent activity
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">11. Payments & Charges</h3>
          <p className="text-second mt-4">
            All shipping and delivery charges are calculated based on:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Distance</li>
            <li className="text-second">
              Number of bags

            </li>
            <li className="text-second">
              Service category
            </li>
             <li className="text-second">
              Add-on services (insurance, express service, packaging, storage, etc.)
              </li>
           <p className="text-second mt-4">
            Shipments are processed <span className="font-bold text-black"> only after successful payment.</span>

          </p>
            
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">12. Support & Escalation</h3>
          <p className="text-second mt-4">
           For delivery support, delays, package disputes, or feedback:

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

export default Shippingpolicy;
