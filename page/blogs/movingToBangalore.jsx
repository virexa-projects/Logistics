"use client";
import Image from "next/image";
import Link from "next/link";
import blogone from "@/asset/blog/blog-one.jpeg";
import blog from "@/asset/blog/blog.jpeg";
import blogbg from "@/asset/blog/blog-pg.jpg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";



const data = [
  {
    year: "2024",
    reported: 13869,
    recovered: 1409,
  },
  {
    year: "2025 (to Nov 30)",
    reported: 18829,
    recovered: 1332,
  },
];
export default function MovingToBangalore() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src={blogbg}
          alt="Moving to Bangalore"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="bg-[#013efe] text-white px-4 py-2 rounded-full text-sm font-medium">
                Relocation Guide
              </span>

              <h1 className="mt-6 text-white text-4xl md:text-6xl font-bold leading-tight">
                Moving to Bangalore? Here's the Easiest Way to Transport Your
                Luggage
              </h1>

              {/* <div className="flex items-center gap-4 mt-6 text-white/90">
                <span>July 15, 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">


              <div className="my-5 mx-auto">
              <Image
                src={blogone}
                alt="Luggage Transport Bangalore"

                className="rounded-2xl w-[90%] mx-auto"
              />
            </div>

            {/* Intro */}
            <p className="text-lg text-gray-700 leading-9">
              Moving to Bangalore is exciting. A new job, a new college, a fresh start in India's Silicon Valley, the city pulls in lakhs of people every year. But between booking a place to stay, planning your travel, and saying goodbye to your old city, one question quietly stresses everyone out: how do I get all my luggage there without losing my mind?
            </p>
            <p className="text-lg text-gray-700 leading-9 mt-3">
              If you've ever dragged three overweight bags through a crowded railway station or paid a fortune in airline excess baggage, you already know the answer isn't simple. The good news? Transporting your luggage when moving to Bangalore has become far easier than it used to be. Let's break down exactly how.
            </p>

            <blockquote className=" my-8 text-2xl font-semibold text-gray-900">
              Challenges of Moving to Bangalore:
            </blockquote>

            <p className="text-lg text-gray-700 leading-9">
              Relocating to a metro city comes with its own set of headaches, and Bangalore is no exception. A few common challenges people face:
            </p>

            {/* Section */}
            <div className="mt-3">


              <div className="border-l-4 border-[#013efe] bg-blue-50 p-6 rounded-r-xl mb-6">
                <h5 className="text-2xl font-bold text-gray-900 mb-3">
                  Traffic and Distance
                </h5>

                <p className="text-lg leading-8 text-gray-700">
                  Bangalore is sprawling. Areas like Whitefield, Electronic City, and Sarjapur are far from the airport and railway stations, which means extra time and cost just to reach your final address with your bags.
                </p>
              </div>
              <div className="border-l-4 border-[#013efe] bg-blue-50 p-6 rounded-r-xl mb-6">
                <h5 className="text-2xl font-bold text-gray-900 mb-3">
                  Finding accommodation first
                </h5>

                <p className="text-lg leading-8 text-gray-700">
                  Many people move before their house or PG is fully ready, leaving them juggling luggage with no fixed place to store it.

                </p>
              </div>
              <div className="border-l-4 border-[#013efe] bg-blue-50 p-6 rounded-r-xl mb-6">
                <h5 className="text-2xl font-bold text-gray-900 mb-3">
                  Cost adds up fast.
                </h5>

                <p className="text-lg leading-8 text-gray-700">
                  Deposits, brokerage, transport, and travel, relocation expenses pile on quickly, so you want to avoid overpaying for moving your belongings.

                </p>
              </div>
              <div className="border-l-4 border-[#013efe] bg-blue-50 p-6 rounded-r-xl mb-6">
                <h5 className="text-2xl font-bold text-gray-900 mb-3">
                  Doing it all alone.
                </h5>

                <p className="text-lg leading-8 text-gray-700">
                  Most people relocating for a job or education don't have help on the ground, so every bag becomes their personal responsibility from doorstep to doorstep.

                </p>
              </div>
            </div>


            <p className="text-lg leading-8 text-gray-700">These challenges are manageable, but only if you plan your luggage transport smartly instead of leaving it for the last minute.</p>

            {/* Image Section */}
            <div className="my-16 mx-auto">
              <Image
                src={blog}
                alt="Luggage Transport Bangalore"

                className="rounded-2xl w-[90%] mx-auto"
              />
            </div>

            {/* Section */}
            <div className="mt-3">

              <blockquote className=" my-8 text-2xl font-semibold text-gray-900">
                Why Carrying Heavy Luggage Isn't Practical
              </blockquote>

              <p className="text-lg text-gray-700 leading-9">
                Lugging heavy bags across cities feels old-fashioned for a reason. When you carry everything yourself, you run into problems that make moving to Bangalore far more stressful than it needs to be.

              </p>
              <p className="text-lg text-gray-700 leading-9 mt-5">
                Airlines charge steep fees for excess baggage, and most economy tickets allow only 15 kg, which is nothing when you're shifting your entire life. Trains are cheaper but come with their own struggles, limited space, no guarantee your bags stay secure, and the physical effort of hauling them on and off platforms.
              </p>
              <p className="text-lg text-gray-700 leading-9 mt-5">
                Then there's the last leg. Kempegowda International Airport sits around 35–40 km from most parts of the city, so even after you land, you still have to haul your bags into a cab, fight through traffic, and carry them up to your floor. For anyone moving with bulky items, electronics, or fragile belongings, doing this solo is exhausting and risky. Simply put, your back, your budget, and your sanity deserve better.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-md border mt-2">
              <h5 className="text-2xl font-bold text-center text-gray-900">
                Lost luggage on Indian trains: reported vs recovered
              </h5>

              <p className="text-center text-gray-500 mt-2 mb-8">
                Complaints rose ~36% in a year, while barely 1 in 10 items ever made it
                back
              </p>

              <div className="h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="year" />

                    <YAxis />

                    <Tooltip
                      formatter={(value) =>
                        new Intl.NumberFormat("en-IN").format(value)
                      }
                    />

                    <Legend />

                    <Bar
                      dataKey="reported"
                      name="Items reported lost"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />

                    <Bar
                      dataKey="recovered"
                      name="Items recovered & returned"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Recovery rate: ~10% in 2024 • ~7% in 2025
              </p>

              <p className="text-xs text-gray-400 text-center mt-1">
                Source: RPF Delhi Division data
              </p>
            </div>

            {/* Comparison */}
            <div className="mt-16">
              <h4 className="text-4xl font-bold mb-3">
                Different Ways to Move Your Luggage:
              </h4>

              <p className="text-lg leading-8 text-gray-700">When it comes to transporting your luggage to Bangalore, you have a few options. Here's how they compare:</p>

              <ul className="mt-5 space-y-5">
                <li>
                  <b>1. Carry it yourself by flight or train.</b> Cheapest in theory, but limited by weight allowances, prone to damage, and physically draining.
                </li>
                <li>
                  <b>2. Courier or parcel services.</b> Fine for small packages, but most aren't built for large suitcases, multiple bags, or door-to-door pickup, and tracking can be patchy.
                </li>
                <li>
                  <b>3. Packers and movers.</b> Great for full home relocations with furniture, but often expensive and overkill if you're only shifting a few bags and personal belongings.
                </li>
                <li>
                  <b>4. Door-to-door luggage delivery.</b> A service that picks up your bags from your current home and delivers them straight to your Bangalore address, no weight stress, no carrying, no detours.
                </li>
              </ul>
              <p className="text-lg leading-8 text-gray-700 mt-5">For students, working professionals, and anyone moving without heavy furniture, that last option is increasingly the smartest choice.</p>

            </div>

            {/* Benefits */}
            <section className="my-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Benefits of Door-to-Door Luggage Delivery:
              </h3>

              <p className="text-lg text-gray-600 mb-10">
                Door-to-door luggage delivery is designed for people relocating to Bangalore,
                making the entire moving process simpler, safer, and more convenient.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Zero Carrying",
                    desc: " Your bags are picked up from your doorstep and dropped at your new address. You travel light and arrive stress-free.",
                  },
                  {
                    title: "No weight anxiety",
                    desc: "Forget airline baggage limits and excess fees. You pay for the luggage you actually have, often at a far better rate.",
                  },
                  {
                    title: "Safe and tracked",
                    desc: "Your belongings are handled, secured, and trackable end to end, so you always know where your bags are.",
                  },
                  {
                    title: "Travel separately and comfortably",
                    desc: "You can fly or take the train hands-free while your luggage makes its own way to Bangalore",
                  },
                  {
                    title: "Skip the airport baggage scramble",
                    desc: "No waiting at the carousel, no struggling to fit oversized bags into an airport cab, and no long haul from Kempegowda to your doorstep, your luggage is already on its way to your new home.",
                  },
                  {
                    title: "Affordable for the value",
                    desc: "Compared to excess baggage charges or full packers-and-movers quotes, it's a cost-effective middle ground.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#013efe]/10 flex items-center justify-center">
                        <span className="text-[#013efe] text-xl">✓</span>
                      </div>

                      <h4 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-gray-600 leading-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600  mt-3">
                For most people moving to Bangalore, this turns the single most dreaded part of relocation into something they barely have to think about.
              </p>
            </section>

            {/* Tips */}
            <section className="my-6">
              <h4 className="text-4xl font-bold text-gray-900 mb-4">
                Tips for a Hassle-Free Relocation:
              </h4>

              <p className="text-lg text-gray-600 mb-10 leading-8">
                A little planning goes a long way. Keep these tips in mind to make your move smooth:
              </p>

              <div className="space-y-8 border-l-2 border-gray-200 pl-8">
                <div>
                  <h5 className="text-2xl font-semibold text-gray-900 mb-2">
                    Book your luggage transport early.
                  </h5>
                  <p className="text-gray-700 leading-8">
                    Schedule your pickup a few days before you travel so there's no last-minute scramble.
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-semibold text-gray-900 mb-2">
                    Declutter before you pack.
                  </h5>
                  <p className="text-gray-700 leading-8">
                    Don't pay to move things you'll never use. Sort, donate, or sell what you don't need.
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-semibold text-gray-900 mb-2">
                    Label and list your bags.
                  </h5>
                  <p className="text-gray-700 leading-8">
                    Keep a simple inventory and label each bag so nothing goes missing in transit.

                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-semibold text-gray-900 mb-2">
                    Keep essentials with you.
                  </h5>
                  <p className="text-gray-700 leading-8">
                    Pack a small carry-on with documents, chargers, medicines, and a change of clothes for your travel day.

                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-semibold text-gray-900 mb-2">
                    Confirm your delivery address.
                  </h5>
                  <p className="text-gray-700 leading-8">
                    Make sure someone can receive your bags in Bangalore, or coordinate timing with your delivery service.

                  </p>
                </div>
              </div>
            </section>


            <section className="my-20">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Conclusion:
              </h3>

              <div className="space-y-6 text-lg text-gray-700 leading-9">
                <p>
                 Moving to Bangalore should feel like the start of an exciting new chapter, not a logistics nightmare. By choosing door-to-door luggage delivery instead of dragging heavy bags across the country, you save time, money, and a whole lot of effort.
                </p>

                <p>
                 Ready to make your move to Bangalore effortless? Let Frisbi pick up your luggage from your doorstep and deliver it safely to your new home, so you can travel light and start fresh. Book your luggage delivery with Frisbi today.
                </p>

            
              </div>


            </section>

            {/* CTA */}
            <div className="mt-20 bg-[#013efe] rounded-3xl p-10 text-center">
              <h3 className="text-white text-4xl font-bold">
                Ready to Move to Bangalore?
              </h3>

              <p className="text-white/90 mt-4 text-lg">
                Let Frisbi pick up your luggage from your doorstep and deliver
                it safely to your new home.
              </p>

              <Link
                href="/book-shipment"
                className="inline-block mt-8 bg-white text-[#013efe] px-8 py-4 rounded-xl font-semibold"
              >
                Book Luggage Delivery
              </Link>
            </div>

            {/* FAQs */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-10">
                Frequently Asked Questions:
              </h3>

              <div className="space-y-6">
                {[
                  {
                    q: "Is luggage delivery cheaper than airline excess baggage?",
                    a: "In most cases, yes. Door-to-door luggage delivery is usually priced more reasonably than airline excess baggage fees, especially when you're carrying multiple bags or heavier loads.",
                  },
                  {
                    q: "How long does luggage delivery to Bangalore take?",
                    a: "Delivery time depends on your origin city, but most services offer clear, trackable timelines so you can plan your move around them.",
                  },
                  {
                    q: "Are my belongings safe during transit?",
                    a: " Reputable luggage delivery services handle your bags carefully and provide tracking, so you can monitor your luggage from pickup to delivery.",
                  },
                  {
                    q: "Can I move to Bangalore without packers and movers? ",
                    a: "Absolutely. If you're not shifting furniture, door-to-door luggage delivery is often the faster, cheaper, and simpler option.",
                  },
                  {
                    q: "Can I avoid carrying luggage from the airport?",
                    a: "Yes. With door-to-door delivery, your bags go straight from your old home to your Bangalore address, so you don't have to manage heavy luggage through Kempegowda Airport or pay extra for an oversized airport cab.",
                  },
                  {
                    q: "What if my Bangalore accommodation isn't ready yet? ",
                    a: "Plan your pickup and delivery dates around when you can receive your bags, and keep essentials in a carry-on so you're covered in the meantime.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-6 bg-gray-50"
                  >
                    <h4 className="font-semibold text-xl">{faq.q}</h4>
                    <p className="mt-3 text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}