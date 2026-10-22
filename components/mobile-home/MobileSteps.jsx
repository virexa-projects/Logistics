import React from "react";
import {
  MessageSquare,
  FileText,
  Calendar,
  Radar,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Get an Instant Quote",
    desc: "See the price upfront before you book.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Schedule Your Pickup",
    desc: "Choose a time and place that works.",
  },
  {
    num: 3,
    icon: Calendar,
    title: "Handover Your Luggage",
    desc: "We scan, seal, and confirm pickup.",
  },
  {
    num: 4,
    icon: Radar,
    title: "Track Your Delivery",
    desc: "Follow your luggage in real time.",
  },
  {
    num: 5,
    icon: CheckCircle,
    title: "Receive at Destination",
    desc: "Door-to-door delivery safely done.",
  },
];

export default function MobileSteps() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-900">
          Here’s how we move your luggage
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Five quick steps to stress-free delivery.
        </p>
      </div>

      <div className="space-y-6 max-w-sm mx-auto">
        {steps.map((st, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#013EFE] flex items-center justify-center text-white shadow-md mb-2.5">
              <st.icon className="w-6 h-6 text-white stroke-[2.2]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">{st.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5 max-w-xs">{st.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
