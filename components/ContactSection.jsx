"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { API_CONFIG } from "@/utils/apiConfig";

/* ---------------- INPUT COMPONENTS ---------------- */

function Input({ type = "text", name, value, onChange, placeholder, maxLength, inputMode, error }) {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        className={`w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none transition text-sm placeholder:text-sm placeholder:text-gray-600 border ${
          error ? "border-red-500 ring-1 ring-red-400" : "border-transparent focus:ring-1 focus:ring-[#013efe]"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">{error}</p>}
    </div>
  );
}

function Select({ name, value, onChange, options = [], placeholder, error }) {
  return (
    <div className="w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none transition text-sm placeholder:text-xs placeholder:text-gray-600 border ${
          error ? "border-red-500 ring-1 ring-red-400" : "border-transparent focus:ring-1 focus:ring-[#013efe]"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">{error}</p>}
    </div>
  );
}

function Textarea({ name, value, onChange, placeholder, error }) {
  return (
    <div className="w-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className={`w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none transition text-sm placeholder:text-sm placeholder:text-gray-600 border ${
          error ? "border-red-500 ring-1 ring-red-400" : "border-transparent focus:ring-1 focus:ring-[#013efe]"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">{error}</p>}
    </div>
  );
}

/* ---------------- RADIO GROUP ---------------- */

function RadioGroup({ value, onChange }) {
  return (
    <div className="flex gap-4">
      {["Individual", "Corporate"].map((type) => (
        <label
          key={type}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl border transition
          ${value === type
              ? "border-primary bg-primary/10 text-primary font-medium"
              : "border-gray-300 text-gray-600 font-medium"
            }`}
        >
          <input
            type="radio"
            name="userType"
            value={type}
            checked={value === type}
            onChange={onChange}
            className="hidden"
          />
          <span className="w-3 h-3 rounded-full border flex items-center justify-center">
            {value === type && (
              <span className="w-2 h-2 bg-primary rounded-full"></span>
            )}
          </span>
          {type}
        </label>
      ))}
    </div>
  );
}

/* ---------------- INFO ITEM ---------------- */

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gray-100 rounded-xl">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h5 className="font-medium">{title}</h5>
        <p className="text-gray-600 mt-1">{value}</p>
      </div>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function ContactSection() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    userType: "Individual",
    name: "",
    email: "",
    service: "",
    phone: "",
    companyName: "",
    gstNumber: "",
    message: "",
  });

  const services = [
    "Standard Delivery",
    "Express Delivery",
    "Premium Delivery",
  ];

  /* ---------- HANDLE CHANGE ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (name === "userType") {
      setErrors((prev) => ({ ...prev, companyName: "", gstNumber: "" }));
    }
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: value.replace(/\D/g, "").slice(0, 10) }));
    } else if (name === "email") {
      setForm((prev) => ({ ...prev, email: value.toLowerCase() }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    const err = {};

    // Name validation
    if (!form.name?.trim()) {
      err.name = "Name is required";
    }

    // Email validation (no numbers-only emails, valid domain, no pure numbers)
    const cleanEmail = form.email?.trim().toLowerCase();
    if (!cleanEmail) {
      err.email = "Email is required";
    } else if (/^\d+$/.test(cleanEmail)) {
      err.email = "Email cannot be numbers only";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanEmail)) {
      err.email = "Enter a valid email address";
    } else {
      const username = cleanEmail.split("@")[0];
      if (!/[a-zA-Z]/.test(username) || /^\d+$/.test(username)) {
        err.email = "Email username cannot consist of only numbers";
      }
    }

    // Corporate validation
    if (form.userType === "Corporate") {
      if (!form.companyName?.trim()) {
        err.companyName = "Company name is required";
      }
      if (!form.gstNumber?.trim()) {
        err.gstNumber = "GST number is required";
      }
    }

    // Service validation
    if (!form.service?.trim()) {
      err.service = "Select a service";
    }

    // Phone validation (10 digits starting with 6-9)
    const phoneDigits = form.phone?.replace(/\D/g, "") || "";
    if (!phoneDigits) {
      err.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10 || !/^[6-9]\d{9}$/.test(phoneDigits)) {
      err.phone = "Enter a valid 10-digit mobile number";
    }

    // Message validation
    if (!form.message?.trim()) {
      err.message = "Message is required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ---------- HANDLE SUBMIT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Submitting...");

    try {
      const now = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const formData = new URLSearchParams();
      formData.append("sheetName", "ContactUs");

      const payload = {
        sheetName: "ContactUs",
        userType: form.userType || "Individual",
        name: form.name || "",
        email: form.email || "",
        phone: form.phone || "",
        service: form.service || "",
        companyName: form.companyName || "-",
        gstNumber: form.gstNumber || "-",
        message: form.message || "",
        date: now,
        timestamp: now,

        // Header column mappings (Title Case & Spaced)
        "User Type": form.userType || "Individual",
        "Name": form.name || "",
        "Email": form.email || "",
        "Phone": form.phone || "",
        "Phone Number": form.phone || "",
        "Service": form.service || "",
        "Company Name": form.companyName || "-",
        "GST Number": form.gstNumber || "-",
        "Message": form.message || "",
        "Date": now,
        "Timestamp": now,
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });

      await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
        method: "POST",
        body: formData, // ✅ no headers
        mode: "no-cors", // 🔥 KEY FIX
      });

      // ✅ If fetch didn’t crash → SUCCESS
      toast.dismiss(toastId);
      toast.success("Form submitted successfully!");

      setForm({
        userType: "Individual",
        name: "",
        email: "",
        service: "",
        phone: "",
        companyName: "",
        gstNumber: "",
        message: "",
      });

      router.push("/thank-you");

    } catch (err) {
      toast.dismiss(toastId);
      console.error(err);
      toast.error("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };





  return (
    <section>
      <div className="container mx-auto px-4 py-13 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">
              Heavy baggage? Not your problem anymore.
            </h2>

            <p className="text-gray-600 max-w-md">
              Send it with Frisbi and enjoy traveling hands-free while we take
              care of your luggage.
            </p>

            <div className="space-y-8 mt-8">
              {/* <Info icon={MapPin} title="Where to Find Us" value="India" /> */}
            
              <Info icon={Phone} title="Call us" value="+91 7418152531" />
                <Info icon={Mail} title="Drop us a line" value="info@frisbi.in" />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h4 className="text-xl font-semibold">Plan Your Delivery</h4>
              <RadioGroup value={form.userType} onChange={handleChange} />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              {/* CORPORATE ONLY */}
              {form.userType === "Corporate" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Company Name"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    error={errors.companyName}
                  />
                  <Input
                    placeholder="GST Number"
                    name="gstNumber"
                    value={form.gstNumber}
                    onChange={handleChange}
                    error={errors.gstNumber}
                  />
                </div>
              )}

              {/* SERVICE + PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={services}
                  placeholder="Select Service"
                  error={errors.service}
                />
                <Input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>

              {/* MESSAGE */}
              <Textarea
                placeholder="Write your message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Wait a moment...
                  </>
                ) : (
                  "Get a Free Quote"
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
