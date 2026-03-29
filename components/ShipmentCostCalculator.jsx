"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/* ---------------- Floating Input ---------------- */
const FloatingInput = ({ label, value, onChange, type = "text", error }) => (
  <div className="relative w-full">
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full rounded-xl px-4 py-3 bg-[#f7f8fa] border outline-none
        ${error ? "border-red-500" : "border-gray-300"}
        focus:ring-2 focus:ring-blue-500 transition`}
    />
    <label
      className="absolute left-4 top-3 text-gray-500 text-sm transition-all
      peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1
      peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white peer-valid:px-1"
    >
      {label}
    </label>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

/* ================= MAIN ================= */
export default function ShipmentCalculator({ pickupFromUrl, dropFromUrl }) {
  const router = useRouter();

  /* ---------------- STATE ---------------- */
  const [values, setValues] = useState({
    // FROM
    pickupName: "",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupPincode: "",
    pickupPhone: "",

    // TO
    name: "",
    address: "",
    dropCity: "",
    dropState: "",
    dropPincode: "",
    phone: "",
  });

  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [luggageType, setluggageType] = useState("Suitcase");
  const [service, setService] = useState("Express");
  const [total, setTotal] = useState(null);
  const [errors, setErrors] = useState({});

  /* ✅ AUTO FILL CITY */
  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      pickupCity: pickupFromUrl || "",
      dropCity: dropFromUrl || "",
    }));
  }, [pickupFromUrl, dropFromUrl]);

  /* ---------------- VALIDATION ---------------- */
const validate = () => {
  const err = {};

  if (!values.pickupCity) err.pickupCity = "Pickup city required";
  if (!values.dropCity) err.dropCity = "Drop city required";

  // 🔥 IMPORTANT FIX
  if (!weight) {
    err.weight = "Weight required";
  } else if (Number(weight) < 5) {
    err.weight = "Minimum 5kg required";
  }

  if (!luggageType) err.luggageType = "Select luggage type";
  if (!service) err.service = "Select service";

  setErrors(err);
  return Object.keys(err).length === 0;
};


  const sendMessage = async (totalPrice) => {
  try {
    await fetch(
      "https://api.virexa.in/v1/message/send-message?token=1a051309720abd839dd2a59adff7240a485c2f2ac8aae63d654f456fa19662cd5254d594e0b476d110e78332044d3e35802efea6ce118bde4e53feb1bb86ff28",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: `91${values.pickupPhone}`, // 👈 customer number
          type: "template",
          template: {
            language: {
              policy: "deterministic",
              code: "en",
            },
            name: "rate_calculator",
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    text: values.name || "Customer",
                  },
                  {
                    type: "text",
                    text: values.pickupCity || "-",
                  },
                  {
                    type: "text",
                    text: values.dropCity || "-",
                  },
                  {
                    type: "text",
                    text: `${weight}kg (${luggageType})`,
                  },
                  {
                    type: "text",
                    text: `₹${totalPrice}`,
                  },
                ],
              },
            ],
          },
        }),
      }
    );

    console.log("WhatsApp message sent ✅");
  } catch (err) {
    console.error("WhatsApp error", err);
  }
};

  /* ---------------- PRICE ---------------- */
  /* ---------------- PRICE ---------------- */
  const calculatePrice = async () => {
    if (!validate()) return;

    const serviceRates = {
      Express: { base: 699, perKg: 109 },
      Standard: { base: 499, perKg: 79 },
      Premium: { base: 999, perKg: 249 },
    };

    const selectedService = serviceRates[service];

    if (!selectedService) return;

    const weightNum = Number(weight);

    const baseCost = selectedService.base;
    const weightCost = weightNum * selectedService.perKg;

    // Optional: volume cost (keep if needed)
    const volumeCost =
      (Number(length || 0) +
        Number(width || 0) +
        Number(height || 0)) * 0.5;

    const totalPrice = baseCost + weightCost + volumeCost;

    setTotal(totalPrice);

      // ✅ CALL WHATSAPP API
  await sendMessage(totalPrice);  
  };

  /* ---------------- BOOK NOW ---------------- */
  const handleBookNow = () => {
    router.push(
      `/book-shipment?data=${encodeURIComponent(
        JSON.stringify({
          ...values,
          weight,
          length,
          width,
          height,
          luggageType,
          service,
          total,
        }),
      )}`,
    );
  };

  /* ---------------- UI ---------------- */
  return (
    <div id="" className="w-full flex justify-center px-4 py-10 bg-[#f6f7fb]">
      <div className="w-full max-w-3xl bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-center text-2xl font-bold mb-6">
          Shipment Cost Calculator
        </h3>

        {/* ================= FROM ================= */}
        <h4 className="font-semibold mb-5">Pickup Details (From)</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <FloatingInput
            label="Pickup Name"
            value={values.pickupName}
            onChange={(e) =>
              setValues((p) => ({ ...p, pickupName: e.target.value }))
            }
          />
          <FloatingInput
            label="Pickup Phone"
            value={values.pickupPhone}
            onChange={(e) =>
              setValues((p) => ({ ...p, pickupPhone: e.target.value }))
            }
          />
          <FloatingInput
            label="Pickup Address"
            value={values.pickupAddress}
            onChange={(e) =>
              setValues((p) => ({ ...p, pickupAddress: e.target.value }))
            }
          />
          <FloatingInput
            label="Pickup City"
            value={values.pickupCity}
            onChange={(e) =>
              setValues((p) => ({ ...p, pickupCity: e.target.value }))
            }
          />
          <FloatingInput
            label="Pickup State"
            value={values.pickupState}
            onChange={(e) =>
              setValues((p) => ({ ...p, pickupState: e.target.value }))
            }
          />
          <FloatingInput
            label="Pickup Pincode"
            value={values.pickupPincode}
            onChange={(e) =>
              setValues((p) => ({ ...p, pickupPincode: e.target.value }))
            }
          />
        </div>

        {/* ================= TO ================= */}
        <h4 className="font-semibold mb-5">Delivery Details (To)</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <FloatingInput
            label="Customer Name"
            value={values.name}
            onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
          />
          <FloatingInput
            label="Customer Phone"
            value={values.phone}
            onChange={(e) =>
              setValues((p) => ({ ...p, phone: e.target.value }))
            }
          />
          <FloatingInput
            label="Customer Address"
            value={values.address}
            onChange={(e) =>
              setValues((p) => ({ ...p, address: e.target.value }))
            }
          />
          <FloatingInput
            label="Drop City"
            value={values.dropCity}
            onChange={(e) =>
              setValues((p) => ({ ...p, dropCity: e.target.value }))
            }
          />
          <FloatingInput
            label="State"
            value={values.dropState}
            onChange={(e) =>
              setValues((p) => ({ ...p, dropState: e.target.value }))
            }
          />
          <FloatingInput
            label="Pincode"
            value={values.dropPincode}
            onChange={(e) =>
              setValues((p) => ({ ...p, dropPincode: e.target.value }))
            }
          />
        </div>

        {/* ================= PACKAGE ================= */}
        <h4 className="font-semibold mb-5">Package Details</h4>




        {/* Bags + Service */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* <select
            value={bags}
            onChange={(e) => setBags(e.target.value)}
            className="w-full rounded-xl px-4 py-3 border bg-[#f7f8fa]"
          >
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select> */}

          <select
            value={luggageType}   // ✅ MUST ADD
            className="w-full rounded-xl px-4 py-3 border bg-[#f7f8fa]"
            onChange={(e) => setluggageType(e.target.value)}
          >
            <option value="Duffel">Trolley</option>
            <option value="Suitcase">Suitcase</option>
            <option value="Backpack">Backpack</option>
            <option value="Box">Box</option>
          </select>






          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl px-4 py-3 border bg-[#f7f8fa]"
          >
            {/* <option value="">Select the Service</option> */}
            <option value="Express">Express</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        {/* Weight + Dimensions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
         <FloatingInput
  label="Weight (min 5kg)"
  type="number"
  value={weight}
  onChange={(e) => {
    const value = e.target.value;

    // allow empty
    if (value === "") {
      setWeight("");
      return;
    }

    // allow only numbers (no negative)
    if (Number(value) >= 0) {
      setWeight(value);
    }
  }}
  onKeyDown={(e) => {
    if (e.key === "-" || e.key === "e") {
      e.preventDefault();
    }
  }}
  error={errors.weight}
/>

          <FloatingInput
            label="L (cm)"
            type="number"
            min={0}
            value={length}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                setLength(value);
              }
            }}
            // onChange={(e) => setLength(e.target.value)}
            onKeyDown={(e) => e.key === "-" && e.preventDefault()}
          />

          <FloatingInput
            label="W (cm)"
            type="number"
            min={0}
            value={width}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                setWidth(value);
              }
            }}
            // onChange={(e) => setWidth(e.target.value)}
            onKeyDown={(e) => e.key === "-" && e.preventDefault()}
          />

          <FloatingInput
            label="H (cm)"
            type="number"
            min={0}
            value={height}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                setHeight(value);
              }
            }}
            // onChange={(e) => setHeight(e.target.value)}
            onKeyDown={(e) => e.key === "-" && e.preventDefault()}
          />
        </div>


        {/* ACTION */}
        <button
          onClick={calculatePrice}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Calculate Price
        </button>

        {total !== null && (
          <div className="bg-[#E7ECFF] rounded-3xl p-6 mt-6 space-y-5">
            <h4 className="text-lg font-semibold">Shipment Summary</h4>

            {/* ================= FROM ================= */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold mb-2 text-blue-700">
                Pickup Details
              </h4>
              <div className="text-sm text-gray-700 grid grid-cols-2 gap-2">
                <p>
                  <b>Name:</b> {values.pickupName || "-"}
                </p>
                <p>
                  <b>Phone:</b> {values.pickupPhone || "-"}
                </p>
                <p className="col-span-2">
                  <b>Address:</b> {values.pickupAddress || "-"}
                </p>
                <p>
                  <b>City:</b> {values.pickupCity || "-"}
                </p>
                <p>
                  <b>State:</b> {values.pickupState || "-"}
                </p>
                <p>
                  <b>Pincode:</b> {values.pickupPincode || "-"}
                </p>
              </div>
            </div>

            {/* ================= TO ================= */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold mb-2 text-green-700">
                Delivery Details
              </h4>
              <div className="text-sm text-gray-700 grid grid-cols-2 gap-2">
                <p>
                  <b>Name:</b> {values.name || "-"}
                </p>
                <p>
                  <b>Phone:</b> {values.phone || "-"}
                </p>
                <p className="col-span-2">
                  <b>Address:</b> {values.address || "-"}
                </p>
                <p>
                  <b>City:</b> {values.dropCity || "-"}
                </p>
                <p>
                  <b>State:</b> {values.dropState || "-"}
                </p>
                <p>
                  <b>Pincode:</b> {values.dropPincode || "-"}
                </p>
              </div>
            </div>

            {/* ================= PACKAGE ================= */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold mb-2 text-purple-700">
                Package Details
              </h4>
              <div className="text-sm text-gray-700 grid grid-cols-2 gap-2">
                <p>
                  <b>Weight:</b> {weight} kg
                </p>
                <p>
                  <b>luggage:</b> {luggageType}
                </p>
                <p>
                  <b>Length:</b> {length} cm
                </p>
                <p>
                  <b>Width:</b> {width} cm
                </p>
                <p>
                  <b>Height:</b> {height} cm
                </p>
                <p>
                  <b>Service:</b> {service}
                </p>
              </div>
            </div>

            <hr />

            {/* ================= TOTAL ================= */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">Total Price</h3>
              <p className="text-3xl font-bold mt-2 text-blue-600">
                ₹{total.toFixed(2)}
              </p>
            </div>

            {/* ================= BUTTON ================= */}
            <button
              onClick={handleBookNow}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              🚀 Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
