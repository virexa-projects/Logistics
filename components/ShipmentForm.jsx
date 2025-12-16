"use client";
import { useState } from "react";
import { toast } from "react-hot-toast"; // Import toast
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ShipmentBookingForm() {
  const [values, setValues] = useState({});
  const [active, setActive] = useState("");


const router = useRouter();


  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  // Handle checkbox group
  const handleCheckbox = (item, checked) => {
    let luggage = values.luggageType || [];
    if (checked) {
      luggage.push(item);
    } else {
      luggage = luggage.filter((i) => i !== item);
    }
    setValues((prev) => ({ ...prev, luggageType: luggage }));
  };

 
  

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation (optional)
  if (!values.name || !values.phone) {
    toast.error("Please fill required fields");
    return;
  }

  const toastId = toast.loading("Submitting...");

  try {
    const formData = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, value.join(","));
      } else {
        formData.append(key, value ?? "");
      }
    });

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    if (!res.ok) {
      throw new Error("Network response failed");
    }

    const data = await res.json();

    toast.dismiss(toastId);

    if (data.result === "success") {
      toast.success("Form submitted successfully 🎉");
      setValues({}); // reset form
      router.push("/thank-you");

    } else {
      toast.error("Submission failed. Try again.");
      console.error(data);
    }

  } catch (error) {
    toast.dismiss(toastId);
    toast.error("Something went wrong. Please try again.");
    console.error(error);
  }
};


  const labelClass = (field) =>
    `absolute left-3 transition-all duration-200 pointer-events-none
     ${
       values[field] || active === field
         ? "-top-2 text-xs text-blue-600 bg-white px-1"
         : "top-3 text-gray-500"
     }
    `;

  const textareaClass =
    "w-full rounded-xl px-4 py-3 bg-[#f5f5f5] outline-none border-0 resize-none overflow-hidden focus:ring-2 focus:ring-[#013EFE] transition";

  const inputClass =
    "w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none border-0 focus:ring-2 focus:ring-[#013EFE] transition";

  const selectClass =
    "w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none border-0 focus:ring-2 focus:ring-[#013EFE] transition";

  return (
    <section className="w-full py-10 px-4">
      <form onSubmit={handleSubmit}>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-center">Shipment Booking Form</h2>
          <p className="mb-10 text-second text-center">
            Book door-to-door luggage delivery. Share your pickup & delivery
            details.
          </p>

          {/* ---------------- Customer Details ---------------- */}
          <h3 className="font-semibold mb-3">Customer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <label className={labelClass("name")}>Full Name</label>
              <input
                type="text"
                value={values.name || ""}
                onFocus={() => setActive("name")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("email")}>Email</label>
              <input
                type="email"
                value={values.email || ""}
                onFocus={() => setActive("email")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("phone")}>Mobile Number</label>
              <input
                type="tel"
                value={values.phone || ""}
                onFocus={() => setActive("phone")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* ---------------- Pickup & Delivery ---------------- */}
          <h3 className="font-semibold mb-3">Pickup & Delivery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <label className={labelClass("pickupCity")}>Pickup City</label>
              <input
                type="text"
                value={values.pickupCity || ""}
                onFocus={() => setActive("pickupCity")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("pickupCity", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("deliveryCity")}>Delivery City</label>
              <input
                type="text"
                value={values.deliveryCity || ""}
                onFocus={() => setActive("deliveryCity")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("deliveryCity", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("pickupAddress")}>
                Pickup Address
              </label>
              <textarea
                value={values.pickupAddress || ""}
                onFocus={() => setActive("pickupAddress")}
                onBlur={() => setActive("")}
                onChange={(e) => {
                  handleChange("pickupAddress", e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                className={textareaClass}
                rows={1}
              />
            </div>

            <div className="relative">
              <label className={labelClass("deliveryAddress")}>
                Delivery Address
              </label>
              <textarea
                value={values.deliveryAddress || ""}
                onFocus={() => setActive("deliveryAddress")}
                onBlur={() => setActive("")}
                onChange={(e) => {
                  handleChange("deliveryAddress", e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                className={textareaClass}
                rows={1}
              />
            </div>

            <div className="relative">
              <label className={labelClass("pickupDate")}>
                Preferred Pickup Date & Time
              </label>
              <input
                type="datetime-local"
                value={values.pickupDate || ""}
                onFocus={() => setActive("pickupDate")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("pickupDate", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("deliveryDate")}>
                Expected Delivery Date
              </label>
              <input
                type="date"
                value={values.deliveryDate || ""}
                onFocus={() => setActive("deliveryDate")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("deliveryDate", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* ---------------- Luggage Details ---------------- */}
          <h3 className="font-semibold mb-3">Luggage Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label className={labelClass("checkedBags")}>
                Number of Checked-in Bags
              </label>
              <input
                type="number"
                value={values.checkedBags || ""}
                onFocus={() => setActive("checkedBags")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("checkedBags", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("cabinBags")}>
                Number of Cabin Bags
              </label>
              <input
                type="number"
                value={values.cabinBags || ""}
                onFocus={() => setActive("cabinBags")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("cabinBags", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("weight")}>
                Approx. Total Weight (Kg)
              </label>
              <input
                type="number"
                value={values.weight || ""}
                onFocus={() => setActive("weight")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("weight", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="relative">
              <label className={labelClass("bagSize")}>Largest Bag Size</label>
              <select
                className={selectClass}
                value={values.bagSize || ""}
                onFocus={() => setActive("bagSize")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("bagSize", e.target.value)}
              >
                <option value=""></option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          {/* Checkbox Group */}
          <div className="mb-8">
            <p className="font-medium mb-2">Luggage Type</p>
            <div className="flex gap-6 flex-wrap">
              {["Suitcase", "Bag", "Box", "Sports Gear"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={values.luggageType?.includes(item) || false}
                    onChange={(e) => handleCheckbox(item, e.target.checked)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="relative mb-12">
            <label className={labelClass("special")}>
              Special Instructions
            </label>
            <textarea
              rows={3}
              value={values.special || ""}
              onFocus={() => setActive("special")}
              onBlur={() => setActive("")}
              onChange={(e) => handleChange("special", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-gray-100 outline-none focus:bg-white focus:border-blue-600 transition-all"
            ></textarea>
          </div>

          {/* ---------------- Payment & Extras ---------------- */}
          <h3 className="font-semibold mb-3">Payment & Extras</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <label className={labelClass("paymentMethod")}>
                Payment Method
              </label>
              <select
                className={selectClass}
                value={values.paymentMethod || ""}
                onFocus={() => setActive("paymentMethod")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("paymentMethod", e.target.value)}
              >
                <option value=""></option>
                <option>Cash</option>
                <option>UPI</option>
                <option>Card</option>
              </select>
            </div>

            <div className="relative">
              <label className={labelClass("billingAddress")}>
                Billing Address
              </label>
              <input
                type="text"
                value={values.billingAddress || ""}
                onFocus={() => setActive("billingAddress")}
                onBlur={() => setActive("")}
                onChange={(e) => handleChange("billingAddress", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="relative mb-8">
            <label className={labelClass("notes")}>Additional Notes</label>
            <textarea
              rows={3}
              value={values.notes || ""}
              onFocus={() => setActive("notes")}
              onBlur={() => setActive("")}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-gray-100 outline-none focus:bg-white focus:border-blue-600 transition-all"
            ></textarea>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm">I agree to the Terms & Conditions</p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-[30%] bg-primary text-[16px] text-white font-semibold py-3 px-12 rounded-full transition duration-300 shadow-xl shadow-blue-500/50"
          >
            Book Shipment
          </button>
        </div>
      </form>
    </section>
  );
}
