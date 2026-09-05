"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import trackbg from "@/asset/terms-conditions.png";

function Privacypolicy() {
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
            <h1 className="text-black text-3xl md:text-4xl">Privacy Policy</h1>

           
          </div>
        </motion.section>
      </div>

      <section className="container mx-auto py-12 md:py-16 px-4">
        <div className="">
          <h2 className="">
            Privacy Policy — Frisbi Luggage Delivery Services
          </h2>
          <p className="mt-5 text-second">
            Last Updated:{" "}
            <span className="text-black">
              <strong>31-12-2025</strong>
            </span>
          </p>
          <p className="mt-3 text-second">
            Frisbi (“Company”, “we”, “our”, “us”) is committed to protecting
            your privacy. This Privacy Policy describes how we collect, use,
            store, share, and safeguard your personal information when you
            access or use our luggage pickup and delivery services (“Services”)
            via our website, mobile application, WhatsApp, call, or partner
            platforms.
          </p>
          <p className="mt-3 text-second">
            By using our Services, you acknowledge and agree to the terms of
            this Privacy Policy.
          </p>
        </div>
        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">1. Information We Collect</h3>
          <p className="text-second mt-4">
            We may collect the following categories of information:
          </p>
          <h4 className="mt-4">A. Personal Information</h4>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Full name</li>
            <li className="text-second">Phone number</li>
            <li className="text-second">Email address</li>
            <li className="text-second">
              Residential or delivery locations.
            </li>
            <li className="text-second">
              Identity information (if mandated by airport/security authorities)
            </li>
          </ul>
          <h4 className="mt-4">B. Booking & Service Information</h4>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Pickup and delivery addresses</li>
            <li className="text-second">Preferred time slots for pickup</li>
            <li className="text-second">Email address</li>
            <li className="text-second">
              Number, type, and description of luggage
            </li>
            <li className="text-second">Luggage images (optional)</li>
            <li className="text-second">Order history</li>
          </ul>

          <h4 className="mt-4">C. Payment Information</h4>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Mode of payment</li>
            <li className="text-second">Transaction details</li>
            <li className="text-second">Billing information</li>
          </ul>
          <p className="font-italic text-black mt-4">
            We do not store card or banking credentials. Payments are processed
            through secure third-party payment gateways.
          </p>

          <h4 className="mt-4">D. Device & Usage Information</h4>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">IP address</li>
            <li className="text-second">Browser/app details</li>
            <li className="text-second">Device identifiers</li>
            <li className="text-second">
              Cookies and tracking data (for analytics and performance)
            </li>
          </ul>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">2. How We Use Your Information</h3>
          <p className="text-second mt-4">
            We use your information to operate and improve our Services,
            including:
          </p>
          <div class="overflow-x-auto mt-4">
            <table class="min-w-full border border-[#f5f5f5] rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th class="px-4 py-2 text-left font-semibold border border-[#f5f5f5]">
                    Category
                  </th>
                  <th class="px-4 py-2 text-left font-semibold border border-[#f5f5f5]">
                    Purpose / Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Service Fulfilment
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Pickup, handling, transport, delivery
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    User Support
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Chat, call, WhatsApp customer support
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Payment & Billing
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Processing payments, generating invoices
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Security & Compliance
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Fraud prevention, legal obligations
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Service Optimization
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Improving routes, reducing delays
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Marketing & Offers (Optional)
                  </td>
                  <td class="px-4 py-2 border border-[#f5f5f5]">
                    Promotions, discounts, push notifications
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-second mt-4">
            You may{" "}
            <span className="text-black font-bold">
              {" "}
              opt out of marketing messages{" "}
            </span>
            anytime using email/SMS/WhatsApp unsubscribe options.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">3. Sharing of Information</h3>
          <p className="text-second mt-4">
            We <span className="text-black font-bold"> do not sell </span>{" "}
            customer data.
          </p>
          <p className="text-second mt-4">
            We may share information only with:
          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
              Delivery partners and logistics personnel (for operational
              requirements)
            </li>
            <li className="text-second">
              Payment gateway providers (for secure transactions)
            </li>
            <li className="text-second">
              Airports, hotels, and verified partner businesses (when the
              delivery is booked through them)
            </li>
            <li className="text-second">
              Government/security authorities (only when required by law)
            </li>
          </ul>
          <p className="text-second mt-4">
            All third-party partners are obligated to maintain confidentiality.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">4. Data Storage & Security</h3>
          <p className="text-second mt-4">
            We use industry-standard security measures to protect your
            information, including:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">SSL encryption</li>
            <li className="text-second">Secure servers & firewalls</li>
            <li className="text-second">Restricted employee access</li>
            <li className="text-second">
              Monitoring for unauthorized activity
            </li>
          </ul>
          <p className="text-second mt-4">
            Despite best efforts, no digital transmission is 100% secure. By
            using the Service, you understand and accept this risk.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">5. Data Retention</h3>
          <p className="text-second mt-4">
            We retain your data only for as long as necessary to:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Fulfill the Service</li>
            <li className="text-second">Comply with legal requirements</li>
            <li className="text-second">Resolve disputes</li>
            <li className="text-second">
              Maintain booking history for your convenience
            </li>
          </ul>
          <p className="text-second mt-4">
            You may request{" "}
            <span className="text-black font-bold"> data deletion </span>{" "}
            anytime (Section 9).
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">6. Cookies & Tracking</h3>
          <p className="text-second mt-4">
            Our website/app uses cookies and similar technologies to:
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Improve user experience</li>
            <li className="text-second">Measure website/app performance</li>
            <li className="text-second">Provide personalized suggestions</li>
            <li className="text-second">Airport/security protocols</li>
          </ul>
          <p className="text-second mt-4">
            You can disable cookies in your browser settings, but some functions
            may be affected.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">7. Children’s Privacy</h3>
          <p className="text-second mt-4">
            Our Services are not intended for children below{" "}
            <span className="font-bold text-black"> 18 years of age. </span> We
            do not knowingly collect information from minors.
          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">8. Marketing & Communication</h3>
          <p className="text-second mt-4">
            By using our Services, you may receive:
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">Booking updates</li>
            <li className="text-second">Operational alerts</li>
            <li className="text-second">Feedback requests</li>
            <li className="text-second">Promotional messages (optional)</li>
          </ul>
          <p className="text-second mt-4">You can opt out anytime.</p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">9.  Your Rights
</h3>
          <p className="text-second mt-4">
            You may request the following anytime:

          </p>
          <ul className="mt-4 list-decimal pl-5 space-y-4 font-medium text-[15px]">
            <li className="text-second">
             Access to your stored data

            </li>
            <li className="text-second">
              Additional attempts may involve rescheduling fees
            </li>
            <li className="text-second">
              Correction of inaccurate information
            </li>
             <li className="text-second">
             Data deletion (unless restricted by legal or airport compliance)

            </li>
            <li className="text-second">
              Opt-out from marketing messages

            </li>
            
          </ul>
          <p className="text-second mt-4">
            Contact details provided below.

          </p>
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">10. Third-Party Links
</h3>
          <p className="text-second mt-4">
          Our website/app may contain links to external sites. We are not responsible for their content or privacy practices.

          </p>

        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">11. Changes to This Privacy Policy
</h3>
          <p className="text-second mt-4">
          Frisbi may update this Privacy Policy at any time. Continued use of the Services implies acceptance of updated terms.
          </p>
          
        </div>

        <hr className="mt-5 " />
        <div className="mt-5">
          <h3 className="">12. Contact Information</h3>
         <p className="text-second mt-4">
            For privacy concerns, data deletion, or policy queries:

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

export default Privacypolicy;
