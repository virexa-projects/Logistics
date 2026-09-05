
import Image from "next/image";
import { Check } from 'lucide-react';

const useCases = [
  'Skip carrying heavy bags to airports or stations',
  'Avoid excess baggage hassles',
  'Travel comfortably with kids or elders',
  'Move luggage ahead during long or multi-stop trips',
];

export function WhenToUse() {
  return (
   <section className="w-full bg-cover bg-center bg-no-repeat overflow-x-hidden md:py-16 py-16"  style={{ backgroundImage: "url(/asset/background.png)" }} >
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center md:justify-start">
              <Image
                src={location}
                alt="location"
                className="w-[100%] h-auto"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="mb-7">
               When to Use  <span className="text-primary">Frisbi</span>
              </h2>
              <p className="mb-6">
                 From a single suitcase to multiple bags, Frisbi ensures your belongings move safely while you move freely.
              </p>
              {/* FAQ */}
              <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 flex-1">{useCase}</p>
                </div>
              ))}
            </div>
              
            </div>
          </div>
        </div>
      </section>
  );
}
