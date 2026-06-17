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


const INDIA_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Puducherry",
  "Ladakh",
];

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


  console.log("values", values);
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
      pickupPincode: pickupFromUrl || "",
      dropPincode: dropFromUrl || "",
    }));
  }, [pickupFromUrl, dropFromUrl]);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const err = {};

    if (!values.pickupPincode) err.pickupPincode = "Pickup city required";
    if (!values.dropPincode) err.dropPincode = "Drop city required";

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
  // const calculatePrice = async () => {
  //   if (!validate()) return;

  //   const serviceRates = {
  //     Express: { base: 699, perKg: 109 },
  //     Standard: { base: 499, perKg: 79 },
  //     Premium: { base: 999, perKg: 249 },
  //   };

  //   const selectedService = serviceRates[service];

  //   if (!selectedService) return;

  //   const weightNum = Number(weight);

  //   const baseCost = selectedService.base;
  //   const weightCost = weightNum * selectedService.perKg;

  //   // Optional: volume cost (keep if needed)
  //   const volumeCost =
  //     (Number(length || 0) +
  //       Number(width || 0) +
  //       Number(height || 0)) * 0.5;

  //   const totalPrice = baseCost + weightCost ;

  //   setTotal(totalPrice);

  //   // ✅ CALL WHATSAPP API
  //   await sendMessage(totalPrice);
  // };

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

    const totalPrice = baseCost + weightCost;

    setTotal(totalPrice);

    try {
      // =========================
      // 1️⃣ WhatsApp
      // =========================
      await sendMessage(totalPrice);

      // =========================
      // 2️⃣ Google Sheet (Sheet3)
      // =========================
      const formData = new URLSearchParams();

      formData.append("sheetName", "RateCalculater"); // 🔥 முக்கியம்

      const payload = {
        ...values,
        weight,
        length,
        width,
        height,
        luggageType,
        service,
        totalPrice,
        type: "CALCULATOR", // optional tag
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(
          key,
          Array.isArray(value) ? value.join(", ") : value ?? ""
        );
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      console.log("Sheet3 saved ✅");

    } catch (err) {
      console.error("Sheet save error", err);
    }
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
    <div id="" className="w-full flex justify-center px-4 py-14 bg-[#f6f7fb]">
      <div className="w-full max-w-3xl bg-white rounded-3xl p-8 shadow-lg">
        {/* <h3 className="text-center text-2xl font-bold mb-6">
          Shipment Cost Calculator
        </h3> */}

        {/* ================= FROM ================= */}
        {/* <div className="min-h-screen bg-[#f5f7fb] flex justify-center items-center py-12 px-4"> */}
        <div className="w-full max-w-5xl bg-white rounded-[32px]  p-8 md:p-10">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#000]">
              Rate Calculator
            </h2>
            <p className="text-gray-500 mt-2">
              Get an instant estimate for your shipment
            </p>
          </div>

          {/* Top Fields */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Pickup PIN code
              </label>

              <input
                type="text"
                value={values.pickupPincode}
                onChange={(e) =>
                  setValues((p) => ({
                    ...p,
                    pickupPincode: e.target.value,
                  }))
                }
                placeholder="Enter pickup PIN code"
                className="w-full h-[56px] rounded-xl border border-gray-200 px-4 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Drop PIN code
              </label>

              <input
                type="text"
                value={values.dropPincode}
                onChange={(e) =>
                  setValues((p) => ({
                    ...p,
                    dropPincode: e.target.value,
                  }))
                }
                placeholder="Enter drop PIN code"
                className="w-full h-[56px] rounded-xl border border-gray-200 px-4 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={values.pickupName}
                onChange={(e) =>
                  setValues((p) => ({ ...p, pickupName: e.target.value }))
                }
                className="w-full h-[56px] rounded-xl border border-gray-200 px-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Contact Number
              </label>

              <input
                type="text"
                value={values.pickupPhone}
                onChange={(e) =>
                  setValues((p) => ({ ...p, pickupPhone: e.target.value }))
                }
                placeholder="Enter mobile number"
                className="w-full h-[56px] rounded-xl border border-gray-200 px-4"
              />
            </div>

          </div>

          {/* Divider */}
          <div className="border-t my-8"></div>

          {/* Package Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <span className="text-xl">📦</span> */}
              <h3 className="font-bold text-[#000]">
                Package Details
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="text-sm text-gray-500 block mb-2">
                  Package Type
                </label>

                <select
                  value={luggageType}
                  onChange={(e) => setluggageType(e.target.value)}
                  className="w-full h-[56px] rounded-xl border border-gray-200 px-4"
                >
                  <option>Suitcase</option>
                  <option>Trolley</option>
                  <option>Backpack</option>
                  <option>Box</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-2">
                  Delivery Speed
                </label>

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-[56px] rounded-xl border border-gray-200 px-4"
                >
                  <option>Express</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>

            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Weight */}
              <div className="w-full">
                <label className="block mb-2 text-sm text-gray-500">
                  Weight (kg)
                </label>

                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={weight}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value === "") {
                      setWeight("");
                      return;
                    }

                    if (Number(value) >= 0) {
                      setWeight(value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors ${errors.weight
                    ? "border border-red-500"
                    : "border border-gray-200 focus:border-[#E31E24]"
                    }`}
                />

                {errors.weight && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.weight}
                  </p>
                )}
              </div>

              {/* Length */}
              <div className="w-full">
                <label className="block mb-2 text-sm text-gray-500">
                  Length (cm)
                </label>

                <input
                  type="number"
                  placeholder="Length (cm)"
                  value={length}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value === "") {
                      setLength("");
                      return;
                    }

                    if (Number(value) >= 0) {
                      setLength(value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors ${errors.length
                    ? "border border-red-500"
                    : "border border-gray-200 focus:border-[#E31E24]"
                    }`}
                />

                {errors.length && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.length}
                  </p>
                )}
              </div>

              {/* Width */}
              <div className="w-full">
                <label className="block mb-2 text-sm text-gray-500">
                  Width (cm)
                </label>

                <input
                  type="number"
                  placeholder="Width (cm)"
                  value={width}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value === "") {
                      setWidth("");
                      return;
                    }

                    if (Number(value) >= 0) {
                      setWidth(value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors ${errors.width
                    ? "border border-red-500"
                    : "border border-gray-200 focus:border-[#E31E24]"
                    }`}
                />

                {errors.width && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.width}
                  </p>
                )}
              </div>

              {/* Height */}
              <div className="w-full">
                <label className="block mb-2 text-sm text-gray-500">
                  Height (cm)
                </label>

                <input
                  type="number"
                  placeholder="Height (cm)"
                  value={height}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value === "") {
                      setHeight("");
                      return;
                    }

                    if (Number(value) >= 0) {
                      setHeight(value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors ${errors.height
                    ? "border border-red-500"
                    : "border border-gray-200 focus:border-[#E31E24]"
                    }`}
                />

                {errors.height && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.height}
                  </p>
                )}
              </div>
            </div>
          </div>


          <div className="text-center mt-5">
                      {/* Button */}
          <button
            onClick={calculatePrice}
            className="mt-8 btn-primary hover:scale-105 transition-all"
          >
            Calculate Price
          </button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-5">
            🔒 Your details are safe and secure with us
          </div>

        </div>
        {/* </div> */}








        {total !== null && (
          <div className="bg-[#E7ECFF] rounded-3xl p-6 mt-6 space-y-5">
            <h4 className="text-lg font-semibold">Shipment Summary</h4>

            {/* ================= FROM ================= */}
            {/* <div className="bg-white rounded-xl p-4 shadow-sm">
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
            </div> */}

            {/* ================= TO ================= */}
            {/* <div className="bg-white rounded-xl p-4 shadow-sm">
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
            </div> */}

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
