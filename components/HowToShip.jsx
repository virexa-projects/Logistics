import {
  MessageSquare,
  FileText,
  Calendar,
  Radar,
  CheckCircle,
} from "lucide-react";

export function HowToShip() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Get an Instant Quote",
      description: "See the price upfront before you book.",
    },
    {
      number: "2",
      icon: FileText,
      title: "Schedule Your Pickup",
      description: "Choose a time and place that works.",
    },
    {
      number: "3",
      icon: Calendar,
      title: "Handover Your Luggage",
      description: "We scan, seal, and confirm pickup.",
    },
    {
      number: "4",
      icon: Radar,
      title: "Track Your Delivery",
      description: "Follow your luggage in real time.",
    },
    {
      number: "5",
      icon: CheckCircle,
      title: "Receive at Destination",
      description: "Door-to-door delivery safely done.",
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4">
         Here’s how we move your luggage
        </h2>
        <p className="mb-6 text-center text-second">
          Five quick steps to stress-free delivery.

        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* <div className="absolute -top-1 -right-1 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center text-xs font-semibold">
                    {step.number}
                  </div> */}
                </div>
                <h5 className="mb-2">{step.title}</h5>
                <p className="text-second">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToShip;
