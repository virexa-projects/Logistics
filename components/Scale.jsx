import { Globe, Users, Activity, FileCheck, Repeat } from 'lucide-react';

export function Scale() {
  const features = [
    { icon: Globe, text: 'Pan-city & inter-city coverage' },
    { icon: Users, text: 'Trained handling teams' },
    { icon: Activity, text: 'Centralized tracking & reporting' },
    { icon: FileCheck, text: 'SLA-based execution' },
    { icon: Repeat, text: 'Ideal for repeat & high-volume movements' }
  ];

  return (
    <div className="py-24 bg-black from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4">
          Designed for Scale & Reliability
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-blue-100">{feature.text}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-white">
          From startups to enterprises—Frisbi scales with your operations.
        </p>
      </div>
    </div>
  );
}
