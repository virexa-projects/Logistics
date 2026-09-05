import { Check, X } from "lucide-react";

export default function Comparison() {
  const comparisons = [
    { feature: "Delivery Time", standard: "5–7 days", express: "3–5 days" },
    { feature: "Cost", standard: "LoBudget-friendlyw", express: "Slightly higher, worth the speed" },
    { feature: "Priority Handling", standard: false, express: true },
    { feature: "Insurance", standard: "Basic coverage", express: "Enhanced protection" },
    { feature: "Best For", standard: "Trips planned in advance", express: "Last-minute & urgent travel" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="flex text-center justify-center gap-3 mb-10">
        
          <h2 className="text-2xl font-bold">
            Standard vs Express Delivery
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-left">Standard Delivery</th>
                <th className="px-6 py-4 text-left">Express Delivery</th>
              </tr>
            </thead>

            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">
                    {item.feature}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-200">
                    {typeof item.standard === "boolean" ? (
                      item.standard ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-red-600" />
                      )
                    ) : (
                      <span className="text-gray-700">{item.standard}</span>
                    )}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-200">
                    {typeof item.express === "boolean" ? (
                      item.express ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-red-600" />
                      )
                    ) : (
                      <span className="text-gray-700">{item.express}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
