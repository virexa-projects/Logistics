import {
  Building2,
  Plane,
  Hotel,
  Users,
  GraduationCap,
} from "lucide-react";

export function TrustedBy() {
  const categories = [
    { icon: Building2, text: "Corporate offices & MNCs" },
    { icon: Plane, text: "Travel & tour operators" },
    { icon: Hotel, text: "Hotels & serviced apartments" },
    { icon: Users, text: "Event & conference organizers" },
    { icon: GraduationCap, text: "Educational institutions" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-16">
          Trusted by Teams That Move Often
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-8 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-3 text-second
                ${index < 3 ? "sm:col-span-2" : "sm:col-span-3"}
              `}
            >
              <category.icon className="w-8 h-8 text-blue-600" />
              <span className="text-sm md:text-base font-medium">
                {category.text}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-second text-sm md:text-base mt-16">
          Whether it's 10 bags or 1,000+, Frisbi delivers with reliability.
        </p>
      </div>
    </section>
  );
}
