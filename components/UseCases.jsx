import {
  Clock,
  Users,
  CalendarCheck,
  Boxes,
  Globe,
  ShieldCheck,
} from "lucide-react";

export function UseCases() {
  const useCases = [
    {
      icon: Clock,
      title: "No last-minute hiccups",
      description:
        "Bags picked up, packed, labeled, and moved on schedule without fire drills.",
    },
    {
      icon: Users,
      title: "Zero load on internal teams",
      description:
        "Travel managers and ops teams stay focused while we handle logistics end to end.",
    },
    {
      icon: CalendarCheck,
      title: "Predictable timelines",
      description:
        "Clear pickup slots, committed delivery windows, real updates at every step.",
    },
    {
      icon: Boxes,
      title: "Bulk without breakdowns",
      description:
        "From dozens to thousands of bags, the process stays structured and traceable.",
    },
    {
      icon: Globe,
      title: "One partner, nationwide",
      description:
        "No juggling vendors across cities. One system. One point of contact.",
    },
    {
      icon: ShieldCheck,
      title: "Professional handling, always",
      description:
        "Trained teams who treat corporate luggage with care, not shortcuts.",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white mb-4">
          The weight we take off your operations
        </h2>
        <p className="text-center text-white max-w-2xl mx-auto mb-12">
          From planning to final delivery, we manage every step so luggage never
          becomes your problem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h5 className="text-black font-semibold mb-1">
                    {item.title}
                  </h5>
                  <p className="text-sm text-second leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
