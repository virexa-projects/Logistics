"use client";

import { useState } from "react";

/* ---------------- Floating Input ---------------- */
const FloatingInput = ({ label, value, onChange, type = "text", error }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className={`peer w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none border
          ${error ? "border-red-500" : "border-gray-300"}
          focus:ring-2 focus:ring-[#013EFE] transition placeholder-transparent`}
        placeholder=" "
      />

      <label
        className={`absolute left-4 top-3 px-1 transition-all duration-200
          text-gray-500
          peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white
          peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white
          peer-focus:rounded-md peer-valid:rounded-md
          ${error ? "text-red-600" : ""}
        `}
      >
        {label}
      </label>

      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

/* ---------------- Main Component ---------------- */
export default function ShipmentCalculator() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [bags, setBags] = useState("");
  const [service, setService] = useState("");
  const [total, setTotal] = useState(null);
  const [errors, setErrors] = useState({});

  /* -------- Validation -------- */
  const validateForm = () => {
    const newErrors = {};

    if (!pickup.trim()) newErrors.pickup = "Pickup address is required";
    if (!drop.trim()) newErrors.drop = "Drop address is required";

    if (!weight || Number(weight) <= 0)
      newErrors.weight = "Enter valid weight";

    if (!length || Number(length) <= 0)
      newErrors.length = "Enter valid length";

    if (!width || Number(width) <= 0)
      newErrors.width = "Enter valid width";

    if (!height || Number(height) <= 0)
      newErrors.height = "Enter valid height";

    if (!bags) newErrors.bags = "Select number of bags";
    if (!service) newErrors.service = "Select a service type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -------- Price Calculation -------- */
  const calculatePrice = () => {
    if (!validateForm()) return;

    const base = 999;
    const weightCost = Number(weight) * 10;
    const volumeCost =
      (Number(length) + Number(width) + Number(height)) * 0.5;
    const bagsCost = Number(bags) * 20;

    setTotal(base + weightCost + volumeCost + bagsCost);
  };

  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-10">

        <h2 className="text-center text-xl font-semibold">
          Calculate your shipment cost
        </h2>
        <p className="text-center text-gray-500 mt-2 text-sm">
          Prices are estimates. Final cost may vary.
        </p>

        {/* -------- FORM -------- */}
        <div className="mt-8 space-y-5">

          <FloatingInput
            label="Pickup address"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            error={errors.pickup}
          />

          <FloatingInput
            label="Dropping address"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            error={errors.drop}
          />

          {/* Weight + Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FloatingInput
              label="Weight (kg)"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              error={errors.weight}
            />
            <FloatingInput
              label="L (cm)"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              error={errors.length}
            />
            <FloatingInput
              label="W (cm)"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              error={errors.width}
            />
            <FloatingInput
              label="H (cm)"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              error={errors.height}
            />
          </div>

          {/* Bags + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select
                value={bags}
                onChange={(e) => setBags(e.target.value)}
                className={`w-full rounded-lg px-4 py-3 border
                  ${errors.bags ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select No of Bags</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {errors.bags && (
                <p className="text-red-600 text-xs mt-1">{errors.bags}</p>
              )}
            </div>

            <div>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`w-full rounded-lg px-4 py-3 border
                  ${errors.service ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select Service</option>
                <option value="Standard">Standard</option>
                <option value="Express">Express</option>
                <option value="Premium">Premium</option>
              </select>
              {errors.service && (
                <p className="text-red-600 text-xs mt-1">{errors.service}</p>
              )}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={calculatePrice}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700"
          >
            Calculate Price
          </button>

          {/* -------- RESULT (FULL DETAILS) -------- */}
          {total !== null && (
            <div className="bg-[#E7ECFF] rounded-3xl p-6 mt-6 space-y-4">

              <h3 className="text-lg font-semibold">Shipment Details</h3>

              <div className="text-sm text-gray-700 space-y-2">
                <p><b>Pickup:</b> {pickup}</p>
                <p><b>Drop:</b> {drop}</p>

                <div className="grid grid-cols-2 gap-2">
                  <p><b>Weight:</b> {weight} kg</p>
                  <p><b>Bags:</b> {bags}</p>
                  <p><b>Length:</b> {length} cm</p>
                  <p><b>Width:</b> {width} cm</p>
                  <p><b>Height:</b> {height} cm</p>
                  <p><b>Service:</b> {service}</p>
                </div>
              </div>

              <hr />

              <div>
                <h3 className="text-lg font-semibold">Total Price</h3>
                <p className="text-3xl font-bold mt-2">
                  ₹{total.toFixed(2)}
                </p>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900">
                Book Now
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
