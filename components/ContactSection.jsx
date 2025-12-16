"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

/* ---------------- FLOATING INPUT ---------------- */

function FloatingInput({ label, type = "text", name, value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="peer w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none focus:border-primary transition placeholder-transparent"
      />
      <label
        className="
        absolute left-4 top-4 text-white/70 text-sm transition-all

        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:px-0

        peer-focus:-top-2
        peer-focus:text-xs
        peer-focus:text-primary
        peer-focus:bg-black
        peer-focus:px-1

        peer-valid:-top-2
        peer-valid:text-xs
        peer-valid:bg-black
        peer-valid:px-1
        "
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- FLOATING SELECT ---------------- */

function FloatingSelect({ label, name, value, onChange, options = [] }) {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="peer w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none focus:border-primary appearance-none transition"
      >
        <option value="" disabled hidden></option>
        {options.map((opt, i) => (
          <option key={i} value={opt} className="bg-gray-900 text-white">
            {opt}
          </option>
        ))}
      </select>

      <label
        className="
        absolute left-4 top-4 text-white/70 text-sm transition-all

        peer-focus:-top-2
        peer-focus:text-xs
        peer-focus:bg-black
        peer-focus:px-1

        peer-valid:-top-2
        peer-valid:text-xs
        peer-valid:bg-black
        peer-valid:px-1
        "
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- FLOATING TEXTAREA ---------------- */

function FloatingTextarea({ label, name, value, onChange }) {
  return (
    <div className="relative w-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={5}
        required
        className="peer w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none focus:border-primary transition placeholder-transparent"
      />

      <label
        className="
        absolute left-4 top-4 text-white/70 text-sm transition-all

        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:px-0

        peer-focus:-top-2
        peer-focus:text-xs
        peer-focus:bg-black
        peer-focus:px-1

        peer-valid:-top-2
        peer-valid:text-xs
        peer-valid:bg-black
        peer-valid:px-1
        "
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- MAIN CONTACT SECTION ---------------- */

export default function ContactSection() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const services = [
    "Web Development",
    "App Development",
    "SEO Optimization",
    "UI/UX Design",
    "Digital Marketing",
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
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.result === "success") {
        toast.success("Form submitted successfully!");
        setForm({
          name: "",
          email: "",
          service: "",
          phone: "",
          message: "",
        });
        router.push("/thank-you");
      } else {
        toast.error("Error submitting form");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              We're here to answer <br /> your questions.
            </h2>

            <p className="text-white/90 max-w-md">
              Have a question, suggestion, or just want to say hi? We’re here and happy to hear from you!
            </p>

            <div className="space-y-8 mt-8">
              <Info icon={MapPin} title="Office Location" value="100 S Main St, New York, NY" />
              <Info icon={Mail} title="Send a Message" value="contact@frisbi.in" />
              <Info icon={Phone} title="Call Us Directly" value="+91 987-879-8298" />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingInput label="Name" name="name" value={form.name} onChange={handleChange} />
                <FloatingInput label="Email Address" name="email" value={form.email} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingSelect
                  label="Select Service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={services}
                />
                <FloatingInput label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
              </div>

              <FloatingTextarea
                label="Write your message"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
              >
                Get a Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INFO ITEM ---------------- */

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white/10 rounded-xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <span className="text-white/80 text-sm">{value}</span>
      </div>
    </div>
  );
}
