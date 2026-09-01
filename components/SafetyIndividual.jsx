import {
  Luggage,
  ShieldCheck,
  HeartHandshake,
  Clock
} from "lucide-react";

export function Safety() {
  const features = [
  {
    icon: Luggage,
    text: "Because your shoulders aren’t built for airports",
  },
  {
    icon: ShieldCheck,
    text: "Because airline rules change, your plans shouldn’t",
  },
  {
    icon: HeartHandshake,
    text: "Because people matter more than suitcases",
  },
  {
    icon: Clock,
    text: "Because long trips are already long enough",
  },
];


  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4">
          When carrying your bags just doesn’t make sense
        </h2>
        <p className="text-center text-second mb-16">
          If the luggage is slowing you down, it’s probably not meant to travel with you.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h5 className="font-bold">{feature.text}</h5>
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
}
