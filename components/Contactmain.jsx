"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

/* ---------------- INPUT COMPONENTS (PLACEHOLDER ONLY) ---------------- */

function Input({ type = "text", name, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none
      focus:ring-1 focus:ring-[#013efe] transition text-sm placeholder:text-sm placeholder:text-gray-600"
    />
  );
}

function Select({ name, value, onChange, options = [], placeholder }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none
      focus:ring-1 focus:ring-[#013efe] transition text-sm placeholder:text-xs placeholder:text-gray-600"
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
  );
}

function Textarea({ name, value, onChange, placeholder }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
      required
      className="w-full bg-[#f5f5f5] text-black px-4 py-3 rounded-xl outline-none
      focus:ring-1 focus:ring-[#013efe] transition text-sm placeholder:text-sm placeholder:text-gray-600"
    />
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
          ${
            value === type
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams(form).toString();

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.result === "success") {
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
      } else {
        toast.error("Error submitting form");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <section>
      <div className="container mx-auto px-4">
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

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Name" name="name" value={form.name} onChange={handleChange} />
                <Input placeholder="Email" name="email" value={form.email} onChange={handleChange} />
              </div>

              {/* CORPORATE ONLY */}
              {form.userType === "Corporate" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Company Name"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="GST Number"
                    name="gstNumber"
                    value={form.gstNumber}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={services}
                  placeholder="Select Service"
                />
                <Input
                  placeholder="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                placeholder="Write your message"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <button type="submit" className="w-full btn-primary">
                Get a Free Quote
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
