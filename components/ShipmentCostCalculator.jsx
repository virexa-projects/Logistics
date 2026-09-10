"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { API_CONFIG } from "@/utils/apiConfig";

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


  // console.log("values", values);
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [luggageType, setluggageType] = useState("Suitcase");
  const [service, setService] = useState("Express");
  const [total, setTotal] = useState(null);
  const [rateCalculatedAt, setRateCalculatedAt] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [errors, setErrors] = useState({});
  const summaryRef = useRef(null);

  /* ✅ AUTO FILL CITY */
  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      pickupPincode: pickupFromUrl || "",
      dropPincode: dropFromUrl || "",
    }));
  }, [pickupFromUrl, dropFromUrl]);

  /* ✅ SMOOTH SCROLL TO SHIPMENT SUMMARY */
  useEffect(() => {
    if (total !== null && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [total]);

  /* ---------------- VALIDATION ---------------- */
  // const validate = () => {
  //   const err = {};

  //   if (!values.pickupPincode) err.pickupPincode = "Pickup city required";
  //   if (!values.dropPincode) err.dropPincode = "Drop city required";

  //   // 🔥 IMPORTANT FIX
  //   if (!weight) {
  //     err.weight = "Weight required";
  //   } else if (Number(weight) < 5) {
  //     err.weight = "Minimum 5kg required";
  //   }

  //   if (!luggageType) err.luggageType = "Select luggage type";
  //   if (!service) err.service = "Select service";

  //   setErrors(err);
  //   return Object.keys(err).length === 0;
  // };


  const validate = () => {
    const err = {};

    // Name
    if (!values.pickupName?.trim()) {
      err.pickupName = "Name is required";
    }

    // Phone (10-digit Indian mobile number)
    if (!values.pickupPhone?.trim()) {
      err.pickupPhone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(values.pickupPhone.trim())) {
      err.pickupPhone = "Enter a valid 10-digit mobile number";
    }

    // Pickup PIN (strictly 6 digits number)
    if (!values.pickupPincode?.trim()) {
      err.pickupPincode = "Pickup PIN code is required";
    } else if (!/^\d{6}$/.test(values.pickupPincode.trim())) {
      err.pickupPincode = "Enter a valid 6-digit PIN code";
    }

    // Drop PIN (strictly 6 digits number)
    if (!values.dropPincode?.trim()) {
      err.dropPincode = "Drop PIN code is required";
    } else if (!/^\d{6}$/.test(values.dropPincode.trim())) {
      err.dropPincode = "Enter a valid 6-digit PIN code";
    }

    // Weight
    if (!weight || String(weight).trim() === "") {
      err.weight = "Weight is required";
    } else if (Number(weight) < 5) {
      err.weight = "Minimum 5kg required";
    }

    // Length
    if (!length || String(length).trim() === "") {
      err.length = "Length is required";
    } else if (Number(length) <= 0) {
      err.length = "Length must be greater than 0";
    }

    // Width
    if (!width || String(width).trim() === "") {
      err.width = "Width is required";
    } else if (Number(width) <= 0) {
      err.width = "Width must be greater than 0";
    }

    // Height
    if (!height || String(height).trim() === "") {
      err.height = "Height is required";
    } else if (Number(height) <= 0) {
      err.height = "Height must be greater than 0";
    }

    // Package Type
    if (!luggageType) {
      err.luggageType = "Select package type";
    }

    // Service
    if (!service) {
      err.service = "Select delivery speed";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };


  const sendMessage = async (totalPrice) => {
    try {
      await fetch(API_CONFIG.VIREXA_MESSAGE_API_URL, {
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

      // console.log("WhatsApp message sent ✅");
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

    setIsCalculating(true);

    const serviceRates = {
      Express: { base: 699, perKg: 109 },
      Standard: { base: 499, perKg: 79 },
      Premium: { base: 999, perKg: 249 },
    };

    const selectedService = serviceRates[service];
    if (!selectedService) {
      setIsCalculating(false);
      return;
    }

    const weightNum = Number(weight);

    const baseCost = selectedService.base;
    const weightCost = weightNum * selectedService.perKg;

    const totalPrice = baseCost + weightCost;

    setTotal(totalPrice);

    const now = new Date();
    const usedAt = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setRateCalculatedAt(usedAt);

    // Smooth scroll to Shipment Summary
    setTimeout(() => {
      summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    try {
      // =========================
      // 1️⃣ WhatsApp
      // =========================
      await sendMessage(totalPrice);

      // =========================
      // 2️⃣ Google Sheet (RateCalculator)
      // =========================
      const formData = new URLSearchParams();

      formData.append("sheetName", "RateCalculator"); // Meaningful Sheet Name

      // ✅ Ordered payload: dimensions (length, height, weight, width) grouped together
      const payload = {
        type: "CALCULATOR",
        status: "",
        service,
        luggageType,
        length: length || "",
        height: height || "",
        weight: weight || "",
        width: width || "",
        totalPrice,
        rateCalculatorAmount: totalPrice,
        rateCalculatorUsedAt: usedAt,
        "Rate Calculator Amount": totalPrice,
        "Rate Calculator Used At": usedAt,
        pickupName: values.pickupName || "",
        pickupPhone: values.pickupPhone || "",
        pickupPincode: values.pickupPincode || "",
        pickupCity: values.pickupCity || "",
        pickupState: values.pickupState || "",
        pickupAddress: values.pickupAddress || "",
        name: values.name || "",
        phone: values.phone || "",
        dropPincode: values.dropPincode || "",
        dropCity: values.dropCity || "",
        dropState: values.dropState || "",
        dropAddress: values.dropAddress || values.address || "",
        address: values.address || values.dropAddress || "",
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(
          key,
          Array.isArray(value) ? value.join(", ") : value ?? ""
        );
      });

      await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // console.log("RateCalculator saved ✅");

    } catch (err) {
      console.error("Sheet save error", err);
    } finally {
      setIsCalculating(false);
    }
  };
  /* ---------------- BOOK NOW ---------------- */
  const handleBookNow = async () => {
    const timestamp =
      rateCalculatedAt ||
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

    setIsBooking(true);

    try {
      const formData = new URLSearchParams();
      formData.append("sheetName", "RateCalculator");

      // ✅ Ordered payload: dimensions (length, height, weight, width) grouped together
      const payload = {
        type: "BOOK_NOW",
        status: "Book Now Clicked",
        service,
        luggageType,
        length: length || "",
        height: height || "",
        weight: weight || "",
        width: width || "",
        totalPrice: total,
        rateCalculatorAmount: total,
        rateCalculatorUsedAt: timestamp,
        "Rate Calculator Amount": total,
        "Rate Calculator Used At": timestamp,
        pickupName: values.pickupName || "",
        pickupPhone: values.pickupPhone || "",
        pickupPincode: values.pickupPincode || "",
        pickupCity: values.pickupCity || "",
        pickupState: values.pickupState || "",
        pickupAddress: values.pickupAddress || "",
        name: values.name || "",
        phone: values.phone || "",
        dropPincode: values.dropPincode || "",
        dropCity: values.dropCity || "",
        dropState: values.dropState || "",
        dropAddress: values.dropAddress || values.address || "",
        address: values.address || values.dropAddress || "",
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(
          key,
          Array.isArray(value) ? value.join(", ") : value ?? ""
        );
      });

      await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch (err) {
      console.error("Sheet save error on Book Now", err);
    } finally {
      setIsBooking(false);
    }

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
          rateCalculatorAmount: total,
          rateCalculatorUsedAt: timestamp,
          "Rate Calculator Amount": total,
          "Rate Calculator Used At": timestamp,
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
                Pickup PIN code <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                maxLength={6}
                value={values.pickupPincode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ""); // only digits
                  setValues((p) => ({ ...p, pickupPincode: val }));
                  if (errors.pickupPincode) {
                    setErrors((prev) => ({ ...prev, pickupPincode: "" }));
                  }
                }}
                placeholder="Enter 6-digit pickup PIN code"
                className={`w-full h-[56px] rounded-xl px-4 outline-none transition-colors border ${
                  errors.pickupPincode
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-[#013EFE]"
                }`}
              />
              {errors.pickupPincode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pickupPincode}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Drop PIN code <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                maxLength={6}
                value={values.dropPincode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ""); // only digits
                  setValues((p) => ({ ...p, dropPincode: val }));
                  if (errors.dropPincode) {
                    setErrors((prev) => ({ ...prev, dropPincode: "" }));
                  }
                }}
                placeholder="Enter 6-digit drop PIN code"
                className={`w-full h-[56px] rounded-xl px-4 outline-none transition-colors border ${
                  errors.dropPincode
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-[#013EFE]"
                }`}
              />
              {errors.dropPincode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dropPincode}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={values.pickupName}
                onChange={(e) => {
                  const val = e.target.value;
                  setValues((p) => ({ ...p, pickupName: val }));
                  if (errors.pickupName && val.trim()) {
                    setErrors((prev) => ({ ...prev, pickupName: "" }));
                  }
                }}
                className={`w-full h-[56px] rounded-xl px-4 outline-none transition-colors border ${
                  errors.pickupName
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-[#013EFE]"
                }`}
              />
              {errors.pickupName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pickupName}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#0F2D7A] font-semibold mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                maxLength={10}
                value={values.pickupPhone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ""); // only digits
                  setValues((p) => ({ ...p, pickupPhone: val }));
                  if (errors.pickupPhone) {
                    setErrors((prev) => ({ ...prev, pickupPhone: "" }));
                  }
                }}
                placeholder="Enter 10-digit mobile number"
                className={`w-full h-[56px] rounded-xl px-4 outline-none transition-colors border ${
                  errors.pickupPhone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-[#013EFE]"
                }`}
              />
              {errors.pickupPhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pickupPhone}
                </p>
              )}
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
                  Package Type <span className="text-red-500">*</span>
                </label>

                <select
                  value={luggageType}
                  onChange={(e) => {
                    setluggageType(e.target.value);
                    if (errors.luggageType) {
                      setErrors((prev) => ({ ...prev, luggageType: "" }));
                    }
                  }}
                  className={`w-full h-[56px] rounded-xl px-4 outline-none transition-colors border ${
                    errors.luggageType
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-[#013EFE]"
                  }`}
                >
                  <option>Suitcase</option>
                  <option>Trolley</option>
                  <option>Backpack</option>
                  <option>Box</option>
                </select>
                {errors.luggageType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.luggageType}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-2">
                  Delivery Speed <span className="text-red-500">*</span>
                </label>

                <select
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (errors.service) {
                      setErrors((prev) => ({ ...prev, service: "" }));
                    }
                  }}
                  className="w-full h-[56px] rounded-xl border border-gray-200 px-4 outline-none focus:border-[#013EFE] transition-colors"
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
                  Weight (kg) <span className="text-red-500">*</span>
                </label>

                <input
                  type="number"
                  placeholder="Weight (min 5kg)"
                  value={weight}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value === "") {
                      setWeight("");
                      return;
                    }

                    if (Number(value) >= 0) {
                      setWeight(value);
                      if (errors.weight && Number(value) >= 5) {
                        setErrors((prev) => ({ ...prev, weight: "" }));
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors border ${
                    errors.weight
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-[#013EFE]"
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
                  Length (cm) <span className="text-red-500">*</span>
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
                      if (errors.length && Number(value) > 0) {
                        setErrors((prev) => ({ ...prev, length: "" }));
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors border ${
                    errors.length
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-[#013EFE]"
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
                  Width (cm) <span className="text-red-500">*</span>
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
                      if (errors.width && Number(value) > 0) {
                        setErrors((prev) => ({ ...prev, width: "" }));
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors border ${
                    errors.width
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-[#013EFE]"
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
                  Height (cm) <span className="text-red-500">*</span>
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
                      if (errors.height && Number(value) > 0) {
                        setErrors((prev) => ({ ...prev, height: "" }));
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full h-14 rounded-xl px-4 text-sm md:text-base outline-none transition-colors border ${
                    errors.height
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-[#013EFE]"
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
              disabled={isCalculating}
              className="mt-8 btn-primary hover:scale-105 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wait a moment...
                </>
              ) : (
                "Calculate Price"
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-5">
            🔒 Your details are safe and secure with us
          </div>

        </div>
        {/* </div> */}








        {total !== null && (
          <div ref={summaryRef} className="bg-[#E7ECFF] rounded-3xl p-6 mt-6 space-y-5 scroll-mt-24">
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
              disabled={isBooking}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isBooking ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wait a moment...
                </>
              ) : (
                "🚀 Book Now"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
