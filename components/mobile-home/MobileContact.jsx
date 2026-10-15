"use client";

import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import toast from "react-hot-toast";

export default function MobileContact() {
  const [deliveryType, setDeliveryType] = useState("Individual");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success(
        "Quote request submitted! Our team will contact you shortly."
      );
      setContactForm({
        name: "",
        email: "",
        service: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-8 px-4 bg-[#F1F2F6] rounded-3xl mx-3 my-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 leading-tight mb-2">
          Heavy baggage? Not your problem anymore.
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed mb-5">
          Send it with Frisbi and enjoy traveling hands-free while we take care
          of your luggage.
        </p>

        {/* Quick contact buttons */}
        <div className="space-y-2 mb-6">
          <a
            href="tel:+917418152531"
            className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#013EFE]" />
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Call us</p>
              <p className="text-xs font-bold text-gray-900">+91 7418152531</p>
            </div>
          </a>

          <a
            href="mailto:info@frisbi.in"
            className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#013EFE]" />
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Drop us a line</p>
              <p className="text-xs font-bold text-gray-900">info@frisbi.in</p>
            </div>
          </a>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-5 shadow-md border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Plan Your Delivery
          </h3>

          {/* Individual vs Corporate Toggle */}
          <div className="flex gap-2 mb-3.5">
            <button
              type="button"
              onClick={() => setDeliveryType("Individual")}
              className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold border transition ${
                deliveryType === "Individual"
                  ? "border-[#013EFE] bg-blue-50/50 text-[#013EFE]"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              {deliveryType === "Individual" ? "◉" : "○"} Individual
            </button>
            <button
              type="button"
              onClick={() => setDeliveryType("Corporate")}
              className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold border transition ${
                deliveryType === "Corporate"
                  ? "border-[#013EFE] bg-blue-50/50 text-[#013EFE]"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              {deliveryType === "Corporate" ? "◉" : "○"} Corporate
            </button>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
            />

            <input
              type="email"
              placeholder="Email"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
            />

            <select
              value={contactForm.service}
              onChange={(e) =>
                setContactForm({ ...contactForm, service: e.target.value })
              }
              className="w-full bg-[#f5f5f5] text-xs text-gray-700 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
            >
              <option value="">Select Service</option>
              <option value="Standard Delivery">Standard Delivery</option>
              <option value="Express Delivery">Express Delivery</option>
              <option value="Premium Delivery">Premium Delivery</option>
              <option value="Corporate Moving">Corporate Moving</option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              value={contactForm.phone}
              onChange={(e) =>
                setContactForm({ ...contactForm, phone: e.target.value })
              }
              className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
            />

            <textarea
              rows={3}
              placeholder="Write your message"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
              className="w-full bg-[#f5f5f5] text-xs text-gray-800 px-3.5 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#013EFE]"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#013EFE] hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-full shadow transition-transform active:scale-95 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Get a Free Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
