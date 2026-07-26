"use client";
import React from 'react';
import blogbg from "@/asset/blog/excess-baggage/blog-bg.jpg";
import info from "@/asset/blog/excess-baggage/info.png";
import why from "@/asset/blog/excess-baggage/whys.png";
import Image from 'next/image';
import Link from 'next/link';

function BaggageChargesIndia() {
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
                                How to Avoid Excess Baggage Charges on Domestic Flights in India
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

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="my-5 mx-auto">
                        <Image
                            src={info}
                            alt="You pack carefully"

                            className="rounded-2xl md:w-[50%] w-[100%] mx-auto"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-9">You pack carefully, reach the airport early, and then the check-in scale stops you cold: your bag is 4 kilos over, and you owe more than you paid for half your ticket. Excess baggage charges have quietly become one of the most frustrating costs of flying within India, and most travellers only discover them at the counter when it is too late to do anything about it.</p>
                        <p className="text-lg text-gray-700 leading-9 mt-3">The good news is that these fees are almost entirely avoidable. With a little planning, and the right alternative for heavier loads, you never have to hand over another rupee in excess baggage charges again. Here is exactly how.</p>
                        <h5 className="text-2xl font-bold text-gray-900 mb-3 mt-4">
                            Why Airline Excess Baggage Fees Are Increasing
                        </h5>

                        <p className="text-lg text-gray-700 leading-9">
                            Indian airlines have steadily moved toward an "unbundled" pricing model, where your fare buys you a seat and very little else. Baggage, seat selection, and meals are now treated as separate add-ons. Under this approach, your free check-in allowance has shrunk while the cost of exceeding it has climbed.

                        </p>

                        <p className="text-lg text-gray-700 leading-9 mt-4">
                            The numbers tell the story. Excess baggage fees across Indian carriers rose by roughly 18% between 2024 and 2026, and today most domestic airlines charge somewhere between ₹600 and ₹700 per kilogram at the airport counter. On a basic economy fare, your free check-in allowance is usually just 15 kg in a single piece, plus 7 kg of cabin baggage. Step beyond that, and the meter starts running fast. </p>

                        <p className="text-lg text-gray-700 leading-9 mt-4">For airlines, baggage fees are pure ancillary revenue, a high-margin income stream that grows with every passenger who packs an extra pair of shoes. For travellers, it means the era of generous 20 kg and 25 kg free allowances on cheap tickets is largely over. Understanding this shift is the first step to keeping your money in your own pocket.</p>
                        <h5 className="text-2xl font-bold text-gray-900 mb-3 mt-4">
                            Common Reasons Travelers Pay Extra
                        </h5>
                        <p className="text-lg text-gray-700 leading-9 mt-4">Most excess baggage charges are not the result of reckless overpacking. They come from small, predictable mistakes that catch even seasoned flyers off guard.</p>
                        <p className="text-lg text-gray-700 leading-9 mt-4">The biggest culprit is the single-piece rule. On low-cost domestic fares from IndiGo, SpiceJet, and Akasa, your 15 kg allowance must fit into one bag. Split it into two suitcases of 7.5 kg each and the second bag is billed as an "extra piece," often ₹1,800 to ₹3,400, even though your total weight was within limit.</p>
                        <p className="text-lg text-gray-700 leading-9 mt-4">The second is fare confusion. Travellers assume every ticket includes 20 kg, but allowances now vary by fare class. A Saver fare and a Flexi fare on the same flight can carry very different baggage rights.</p>
                        <p className="text-lg text-gray-700 leading-9 mt-4">Other frequent traps include forgetting that cabin baggage is capped at 7 kg and gets weighed at busy metro airports, underestimating the weight of gifts and shopping picked up during the trip, and leaving baggage decisions until check-in, when airport rates are at their highest. Each of these turns a manageable trip into an unexpected bill.</p>
                        <h5 className="text-2xl font-bold text-gray-900 mb-3 mt-4">
                            Smart Ways to Avoid Excess Baggage Charges
                        </h5>
                        <p className="text-lg text-gray-700 leading-9 mt-4">If you do plan to fly with all your luggage, a handful of disciplined habits will keep your costs down.</p>


                    </div>

                    <section className="py-16 lg:py-20">
                        <div className="mx-auto max-w-4xl px-4">

                            <h3 className="text-3xl font-bold text-gray-900">
                                Smart Ways to Avoid Excess Baggage Charges
                            </h3>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                If you plan to fly with all your luggage, a few smart packing habits
                                can help you avoid unnecessary baggage fees. Most excess baggage
                                charges are preventable with a little planning before your trip.
                            </p>

                            {/* Tip 1 */}

                            <div className="mt-10 rounded-2xl ">

                                <h4 className="text-xl font-semibold text-gray-900">
                                    Weigh Everything at Home
                                </h4>

                                <p className="mt-3 leading-8 text-gray-600">
                                    A basic digital scale costs less than a single excess baggage penalty. Stand on a bathroom scale holding your bag, subtract your weight, and you will know exactly where you stand before you leave the house.
                                </p>

                            </div>

                            {/* Tip 2 */}

                            <div className="mt-8">

                                <h4 className="text-xl font-semibold text-gray-900">
                                    Pre-book Extra Weight Online
                                </h4>

                                <p className="mt-3 leading-8 text-gray-600">
                                    This is the single most effective tactic. Buying additional allowance through the airline's "Manage Booking" section, rather than at the airport, typically saves 30% to 50%. Across a sample of bookings in 2026, the average airport excess charge was around ₹3,260 versus roughly ₹1,847 online for the same weight.
                                </p>

                            </div>

                            {/* Tip 3 */}

                            <div className="mt-8">

                                <h4 className="text-xl font-semibold text-gray-900">
                                    Match your fare to your packing style.
                                </h4>

                                <p className="mt-3 leading-8 text-gray-600">
                                    If you regularly travel with 16 to 20 kg, a slightly higher fare class with a 20 kg allowance often costs less than paying per-kilo excess baggage charges on a cheaper ticket.
                                </p>

                            </div>
                            {/* Tip 4 */}

                            <div className="mt-8">

                                <h4 className="text-xl font-semibold text-gray-900">
                                    Wear your heaviest items.
                                </h4>

                                <p className="mt-3 leading-8 text-gray-600">
                                    Boots, jackets, and bulky layers worn onto the plane do not count against your allowance.
                                </p>

                            </div>
                            {/* Tip 5 */}

                            <div className="mt-8">

                                <h4 className="text-xl font-semibold text-gray-900">
                                    Use compression packing cubes.
                                </h4>

                                <p className="mt-3 leading-8 text-gray-600">
                                    They will not reduce weight, but they help you avoid a second-piece charge by keeping everything in one bag.
                                </p>
                                <p className="mt-3 leading-8 text-gray-600">
                                    These steps work well for light and moderate loads. But once your luggage crosses a certain weight, even the smartest packing tricks stop being enough.
                                </p>

                            </div>



                            {/* Bottom Highlight */}

                            <div className="mt-10 rounded-2xl border-l-4 border-blue-600 bg-gray-50 p-6">

                                <p className="text-lg leading-8 text-gray-700">
                                    These strategies work well for light and moderate luggage.
                                    However, once your baggage becomes significantly heavier,
                                    shipping it separately is often more affordable and much more
                                    convenient than paying airline excess baggage charges.
                                </p>

                            </div>

                        </div>
                    </section>



                    <section className=" bg-white">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                            <div className="">


                                <h3 className="mt-5 text-4xl font-bold text-gray-900 leading-tight text-center">
                                    When Shipping Your Luggage Makes More Sense
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    There is a tipping point where paying excess baggage charges simply
                                    stops being rational. If you are moving cities, returning from a
                                    long stay, carrying equipment, or travelling as a family with
                                    several heavy bags, the per-kilogram fees compound until they
                                    rival or exceed the cost of the flight itself.
                                </p>

                                <div className="my-10 h-px w-full bg-gray-200" />

                                <p className="text-lg leading-8 text-gray-600">
                                    This is where a <span className="font-semibold text-gray-900">
                                        door-to-door luggage delivery service
                                    </span> changes the equation entirely. Instead of dragging
                                    20 or 30 kilos through the airport and bracing for the scale,
                                    your bags are picked up from your home and delivered directly
                                    to your destination, often for less than the airline would
                                    have charged for excess baggage alone.
                                </p>

                                <div className="mt-10 grid gap-5 sm:grid-cols-2">

                                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Save More
                                        </h4>

                                        <p className="mt-2 text-gray-600">
                                            Avoid high airline excess baggage fees by choosing a more
                                            affordable door-to-door luggage delivery service.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Travel Hands-Free
                                        </h4>

                                        <p className="mt-2 text-gray-600">
                                            Skip hauling heavy luggage through airports, security
                                            checkpoints, and crowded terminals.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Doorstep Convenience
                                        </h4>

                                        <p className="mt-2 text-gray-600">
                                            Your luggage is collected from your home and delivered
                                            directly to your destination.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            Less Stress
                                        </h4>

                                        <p className="mt-2 text-gray-600">
                                            Avoid long check-in queues, baggage delays, and the hassle
                                            of carrying multiple heavy bags during your journey.
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-10 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
                                    <p className="text-lg leading-8 text-gray-700">
                                        Shipping luggage removes the hidden costs that never appear on
                                        an airline fee chart—the physical strain of carrying heavy bags,
                                        the risk of delayed or damaged baggage, and the stress of rushing
                                        through the airport. Whether you're a student returning home,
                                        a professional relocating for work, or a family travelling with
                                        multiple suitcases, luggage delivery offers a simpler, more
                                        comfortable way to travel.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </section>



                    <section className="py-16 lg:py-10 ">
                        <div className="mx-auto max-w-5xl px-4">

                            <h2 className="text-3xl text-center font-bold text-gray-900">
                                Comparing Airline Fees vs Luggage Delivery Costs
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The math is what convinces most people. Consider a traveller carrying 25 kg on a domestic route with a 15 kg free allowance. That is 10 kg of excess, and at roughly ₹600 to ₹700 per kilogram at the airport, the bill lands somewhere around ₹6,000 to ₹7,000, for a single one-way trip.
                            </p>

                            {/* Table */}

                            <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">

                                <table className="min-w-full text-left">

                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">
                                                Airline
                                            </th>

                                            <th className="px-6 py-4 font-semibold">
                                                Free Allowance
                                            </th>

                                            <th className="px-6 py-4 font-semibold">
                                                Airport Excess Fee
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">

                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                IndiGo
                                            </td>

                                            <td className="px-6 py-4">
                                                15 kg (1 Piece)
                                            </td>

                                            <td className="px-6 py-4">
                                                ~₹600 / kg
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                Air India
                                            </td>

                                            <td className="px-6 py-4">
                                                15 kg (Value) / 25 kg (Classic)
                                            </td>

                                            <td className="px-6 py-4">
                                                ~₹600–₹700 / kg
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                Akasa Air
                                            </td>

                                            <td className="px-6 py-4">
                                                15 kg (1 Piece)
                                            </td>

                                            <td className="px-6 py-4">
                                                ~₹700 / kg
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                SpiceJet
                                            </td>

                                            <td className="px-6 py-4">
                                                15 kg (1 Piece)
                                            </td>

                                            <td className="px-6 py-4">
                                                ~₹700 / kg
                                            </td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                            {/* Highlight */}

                            <div className="mt-10 p-6">
                                <p className="leading-8 text-gray-700">
                                    <Link href="https://frisbi.in/" className='text-blue-600'>A dedicated luggage delivery service</Link> like Frisbi prices on the actual route and weight rather than punishing you per kilo over an arbitrary limit. For many domestic shipments, sending that same load works out significantly cheaper than the airline's excess baggage charges, and you are not limited to one bag or 15 kg.
                                </p>
                            </div>
                            <div className="p-6">
                                <p className="leading-8 text-gray-700">
                                    Just as importantly, the comparison is not only about price. With the airline, you still have to physically manage every kilogram yourself. With luggage delivery, the weight is handled for you from doorstep to doorstep.
                                </p>
                            </div>
                        </div>
                    </section>



                    <section className=" bg-white">
                        <div className="mx-auto max-w-4xl">

                            <div className="container mx-auto px-4">
                                <div className="my-5 mx-auto">
                                    <Image
                                        src={why}
                                        alt="You pack carefully"

                                        className="rounded-2xl w-[90%] mx-auto"
                                    />
                                </div>
                            </div>

                            {/* <div className="grid lg:grid-cols-2 gap-14 items-center"> */}

                            {/* Left Content */}

                            <div>

                                <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                                    Modern Travel
                                </span>

                                <h4 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                    Why More Travelers Are Choosing Luggage Delivery
                                </h4>

                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    A growing number of Indian travellers have realised that their luggage does not need to share their seat, their schedule, or their stress. Shipping bags ahead has shifted from a niche idea to a mainstream travel habit, and the reasons are practical.
                                </p>

                                <p className="mt-5 text-lg leading-8 text-gray-600">
                                    There are no weight limits to pack around, so you carry what you actually need. There is a dedicated point of contact for every shipment instead of a chatbot and a three-day email wait. There is real-time tracking with SMS and WhatsApp updates at every step, so you always know where your bags are. And with a network reaching more than 25,000 pincodes across India, the service follows your journey well beyond the metros.
                                </p>

                                <p className="mt-5 text-lg leading-8 text-gray-600">
                                    For corporate moves, group travel, and family trips, the appeal is even clearer: multiple bags to multiple destinations, coordinated without the chaos of an airport baggage belt. Travelling hands-free, it turns out, is a habit that is hard to give up once you try it.
                                </p>

                            </div>



                            {/* </div> */}

                            {/* Bottom Quote */}

                            <div className="mt-14 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">

                                <p className="text-lg leading-8 text-gray-700 italic">
                                    "Travelling hands-free isn't just more convenient—it's a travel
                                    habit that's hard to give up once you've experienced it."
                                </p>

                            </div>

                        </div>
                    </section>



                    <section className="py-16 lg:py-10 ">
                        <div className="mx-auto max-w-5xl px-4 text-center">



                            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                                Conclusion
                            </h2>

                            <p className="mt-8 text-lg max-w-4xl mx-auto">
                                Excess baggage charges are designed to catch you off guard, but they no longer have to. Weigh ahead, pre-book wisely, and match your fare to your packing. And when your load is genuinely heavy, skip the scale altogether.
                            </p>
                            <div className='mt-3'>
                                <p className="text-xl leading-9 font-blod max-w-3xl mx-auto">
                                    Travel hands-free on your next trip. <Link href="https://frisbi.in/rate-calculator" className='text-blue-500'>Get an instant quote from Frisbi</Link> and send your luggage door-to-door, for less than the airline's excess baggage charges.
                                </p>
                            </div>



                        </div>
                    </section>




                    <section className="">
                        <div className="mx-auto max-w-4xl px-4">

                            <div className="text-center">
                                <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                                    Frequently Asked Questions
                                </span>

                                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
                                    FAQs
                                </h2>

                                <p className="mt-4 text-lg text-gray-600">
                                    Find answers to the most common questions about airline excess baggage
                                    charges and luggage delivery services.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4">

                                {/* FAQ 1 */}
                                <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                                        What are excess baggage charges on Indian domestic flights?
                                        <span className="text-2xl transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 leading-8 text-gray-600">
                                        Excess baggage charges are the per-kilogram fees airlines charge
                                        when your checked baggage exceeds your free allowance. Most Indian
                                        domestic economy fares include around <strong>15 kg</strong> of free
                                        baggage, while excess baggage is typically charged at
                                        <strong> ₹600–₹700 per kg</strong> at the airport.
                                    </p>
                                </details>

                                {/* FAQ 2 */}
                                <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                                        Is it cheaper to pre-book extra baggage or pay at the airport?
                                        <span className="text-2xl transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 leading-8 text-gray-600">
                                        Yes. Pre-booking additional baggage online is almost always more
                                        affordable and can save <strong>30%–50%</strong> compared with
                                        paying excess baggage charges at the airport.
                                    </p>
                                </details>

                                {/* FAQ 3 */}
                                <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                                        Why was I charged even though my total weight was under the limit?
                                        <span className="text-2xl transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 leading-8 text-gray-600">
                                        Many low-cost airlines allow only one checked bag. If you check in
                                        a second bag, you may be charged an additional baggage fee even if
                                        your combined weight is within the free allowance.
                                    </p>
                                </details>

                                {/* FAQ 4 */}
                                <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                                        Is shipping luggage really cheaper than paying excess baggage fees?
                                        <span className="text-2xl transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 leading-8 text-gray-600">
                                        For heavier luggage, often yes. Once your baggage exceeds the
                                        airline's free allowance by several kilograms, a door-to-door
                                        luggage delivery service can be more economical while also
                                        eliminating the hassle of carrying heavy bags.
                                    </p>
                                </details>

                                {/* FAQ 5 */}
                                <details className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                                        How do I know what shipping my bags will cost?
                                        <span className="text-2xl transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 leading-8 text-gray-600">
                                        Simply enter your pickup and delivery pincodes into the
                                        <strong> Frisbi rate calculator</strong> to receive an instant quote
                                        before deciding whether to pay airline excess baggage charges.
                                    </p>
                                </details>

                            </div>

                        </div>
                    </section>


                </div>
            </section>
        </main>
    )
}

export default BaggageChargesIndia
