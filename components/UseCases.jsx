import { Briefcase, Mountain, Presentation, Map, Hotel, ArrowLeftRight } from 'lucide-react';

export function UseCases() {
  const useCases = [
    { icon: Briefcase, text: 'Employee travel & relocations' },
    { icon: Mountain, text: 'Corporate offsites & leadership retreats' },
    { icon: Presentation, text: 'Conferences, exhibitions & trade shows' },
    { icon: Map, text: 'Group tours & incentive trips' },
    { icon: Hotel, text: 'Hotel ↔ airport luggage movement' },
    { icon: ArrowLeftRight, text: 'Inter-city bulk luggage transfers' }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white mb-12">
          Common Corporate Use Cases
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-second pt-2">{useCase.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
