import {
  BriefcaseBusiness,
  Presentation,
  MapPinned,
  Church,
  Luggage,
  Handshake,
} from "lucide-react";

export function TrustedBy() {
  const categories = [
    { icon: BriefcaseBusiness, text: "Corporate offsites & office retreats" },
    {
      icon: Presentation,
      text: "Conferences, exhibitions, and business events",
    },
    { icon: MapPinned, text: "Group tours & incentive travel programs" },
    { icon: Church, text: "Pilgrimage groups and organized religious travel" },
    {
      icon: Luggage,
      text: "Inter-city & multi-location bulk luggage transfers",
    },
    {
      icon: Handshake,
      text: "Travel operators, resellers, & growing businesses",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4">
          Trusted by businesses that refuse to compromise
        </h2>

        <p className="text-center text-second text-sm md:text-base mb-16">
          Whether it's 10 bags or 100+, Frisbi delivers with reliability.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-3
        ${index >= 3 ? "sm:mt-8" : ""}
      `}
            >
              <category.icon className="w-8 h-8 text-blue-600" />
              <span className="text-sm md:text-base font-semibold">
                {category.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
