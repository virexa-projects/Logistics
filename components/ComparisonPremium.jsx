

import { Check, X } from "lucide-react";

export default function ServiceComparison() {
  const rows = [
    {
      feature: "Delivery Time",
      standard: "5-7 days",
      express: "3-5 days",
      premium: "Within 3 days",
    },
    {
      feature: "Cost",
      standard: "Low",
      express: "Medium",
      premium: "High",
    },
    {
      feature: "Priority Handling",
      standard: false,
      express: true,
      premium: true,
    },
    {
      feature: "Free Packaging",
      standard: false,
      express: true,
      premium: true,
    },
    {
      feature: "Dedicated Support",
      standard: "Basic",
      express: "Standard",
      premium: "Premium 24/7",
    },
    {
      feature: "Insurance",
      standard: "Basic",
      express: "Enhanced",
      premium: "Maximum",
    },
    {
      feature: "Scheduled Slots",
      standard: false,
      express: "Add",
      premium: true,
    },
    {
      feature: "Ideal For",
      standard: "Affordable trips",
      express: "Urgent travel",
      premium: "Valuable luggage",
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
    <section className="py-24 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Standard vs Express vs Premium Delivery
        </h2>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <table className="min-w-full divide-y divide-purple-200">
                <thead className="bg-primary">
                  <tr>
                    <th className="px-6 py-4 text-left text-white">Feature</th>
                    <th className="px-6 py-4 text-center text-white">Standard</th>
                    <th className="px-6 py-4 text-center text-white">Express</th>
                    <th className="px-6 py-4 text-center text-white bg-yellow-400/20">
                      Premium
                    </th>
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

                      <td className="px-6 py-4 text-center font-semibold text-primary bg-blue-50">
                        {renderValue(row.premium)}
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
