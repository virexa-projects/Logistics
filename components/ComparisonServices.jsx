import { Check, X } from "lucide-react";

export default function ServiceComparison() {
  const rows = [
    {
      feature: "Lowest price, can wait a week",
      standard: "Standard",
      express: "Budget-friendly with 5-7 day delivery",
    
    },
    {
      feature: "Need it faster, traveling soon",
      standard: "Express",
      express: "3-5 days with priority handling",
      
    },
    {
      feature: "Expensive luggage, zero stress",
      standard: "Premium",
      express: "3 days, free packaging, dedicated support",
      
    },
    {
      feature: "Moving a team or organizing an event",
      standard: "Corporate",
      express: "Bulk handling with",
     
    },
    {
      feature: "Just me and my bags",
      standard: "Individual",
      express: "Flexible and affordable for solo travelers",
     
    },
    
  ];

  const renderValue = (value) => {
    if (value === true) {
      return <Check className="mx-auto text-green-600" size={20} />;
    }
    if (value === false) {
      return <X className="mx-auto text-red-600" size={20} />;
    }
    return value; // string or other values
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Match your trip to the right service

        </h2>
       

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <table className="min-w-full divide-y divide-purple-200">
                <thead className="bg-primary">
                  <tr>
                    <th className="px-6 py-4 text-left text-white">What You Need</th>
                    <th className="px-6 py-4 text-center text-white">Best Service</th>
                    <th className="px-6 py-4 text-center text-white">Why</th>
                    
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-purple-100">
                  {rows.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-black font-semibold">
                        {row.feature}
                      </td>

                      <td className="px-6 py-4 text-center font-medium">
                        {renderValue(row.standard)}
                      </td>

                      <td className="px-6 py-4 text-center font-medium">
                        {renderValue(row.express)}
                      </td>

                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
