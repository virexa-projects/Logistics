import { Briefcase, Users, GraduationCap, Plane } from "lucide-react";

const audiences = [
  {
    icon: Plane,
    text: "Leisure & business travelers",
    para: "Fly for fun or work without the baggage.",
  },
  {
    icon: Users,
    text: "Families & senior citizens",
    para: "More comfort with fewer carry-ons.",
  },
  {
    icon: GraduationCap,
    text: "Students & solo travelers",
    para: "Travel light and move freely.",
  },
  {
    icon: Briefcase,
    text: "Long stays, relocations & vacations",
    para: "Everything you need delivered safely.",
  },
];

export function PerfectFor() {
  return (
    <section className="py-12 md:py-20 ">
      <div className="container mx-auto px-4 sm:px-6  lg:px-8">
        <h2 className="text-center mb-16 ">
          Built for people who loves to travel hands-free
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl  border-1 border-[#f5f5f5]  text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-black">{audience.text}</p>
                <p className="text-sm text-second leading-relaxed">
                  {audience.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
