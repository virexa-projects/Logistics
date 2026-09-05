import {
  DollarSign,
  MapPin,
  Ruler,
  Weight,
  Plus,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import illsutration from "@/asset/common-illustrator.png";
import Image from "next/image";

function PricingStructure() {
  const factors = [
    {
      icon: MapPin,
      title: "Pickup and delivery locations",
      description: "From origin to destination, and the distance in between.",
      gradient: "bg-primary",
    },
    {
      icon: Ruler,
      title: "Distance and route exclusivity",
      description: "The larger the distance, the lesser per-km cost.",
      gradient: "bg-primary",
    },
    {
      icon: Weight,
      title: "Weight and luggage dimensions",
      description: "Starting from 5 kg to 30 kg.",
      gradient: "bg-primary",
    },
    {
      icon: Plus,
      title: "Declared value of luggage",
      description: "Optional add-ons available.",
      gradient: "bg-primary",
    },
  ];

  const addOns = [
    { name: "Special handling", icon: "📦" },
    { name: "Fragile care", icon: "🔒" },
    { name: "High-value insurance", icon: "🛡️" },
    { name: "Return pickup", icon: "🔄" },
  ];

  return (
    <div className=" py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 ">
            Pricing Structure
          </h2>
          <p className="text-second max-w-2xl mx-auto">
            Premium pricing reflects exclusive service, higher security, and personalized handling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${factor.gradient} p-3`}
                >
                  <factor.icon className="w-full h-full text-white" />
                </div>
                <span className="text-3xl text-second">{index + 1}</span>
              </div>
              <h4 className="mb-2 ">{factor.title}</h4>
              <p className="text-second">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        <section className="w-full ">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-10 items-center">
            {/* LEFT CARD with image on right */}
            <div className="bg-[#1448FF] text-white p-10 rounded-3xl h-full flex items-center">
              <span className=" text-2xl font-semibold  leading-[1.6]">
               Premium Delivery includes free packaging, faster timelines, and extra care but you can add more protection based on your needs.

              
              </span>
            </div>
            <div className="bg-[#E0E1FF] rounded-3xl p-8 flex flex-col lg:flex-row items-start gap-8">
              {/* TEXT LEFT */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6">Optional add-ons:</h3>

                <ul className="space-y-4 text-[16px]">
                  {[
                    "Insurance for high-value luggage items",
                    "Special handling for fragile bags",
                    "Additional protective wrapping layers",
                    "Flexible pick-up and delivery slots",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-primary text-lg">➤</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE RIGHT */}
              <Image
                src={illsutration}
                alt="Overview"
                width={400}
                height={400}
                className="rounded-3xl object-cover w-full lg:w-1/2"
              />
            </div>

            {/* RIGHT CARD */}
            
          </div>
        </section>
      </div>
    </div>
  );
}
export default PricingStructure;
