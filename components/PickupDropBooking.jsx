"use client";

import { useState, useRef, useEffect } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// const GOOGLE_MAPS_KEY = "AIzaSyCUFg0FXQzrsLAuQ0Cs59mkQlwp6mzIQHc";
// const libraries = ["places"];

export default function PorterPickupDrop() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: GOOGLE_MAPS_KEY,
  //   libraries,
  // });

  const router = useRouter();

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupError, setPickupError] = useState("");
  const [dropError, setDropError] = useState("");
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const pickupAuto = useRef(null);
  const dropAuto = useRef(null);
  const popupAuto = useRef(null);

  /* ---------- MOBILE DETECTION ---------- */
  // useEffect(() => {
  //   const checkMobile = () => setIsMobile(window.innerWidth < 768);
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  // if (!isLoaded) return null;

  /* ---------- INPUT HANDLERS & VALIDATION ---------- */
  const handlePickupKeyDown = (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key === "Escape" ||
      e.key === "Enter" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      setPickupError("Text is not allowed. Only 6 digits allowed.");
    }
  };

  const handlePickupChange = (e) => {
    const rawVal = e.target.value;
    if (/\D/.test(rawVal)) {
      setPickupError("Text is not allowed. Only 6 digits allowed.");
    } else {
      setPickupError("");
    }
    const cleanVal = rawVal.replace(/\D/g, "").slice(0, 6);
    setPickup(cleanVal);
    if (cleanVal.length === 6) {
      setPickupError("");
    }
  };

  const handlePickupBlur = () => {
    if (pickup && pickup.length < 6) {
      setPickupError("Pickup PIN code must be exactly 6 digits");
    }
  };

  const handleDropKeyDown = (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key === "Escape" ||
      e.key === "Enter" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      setDropError("Text is not allowed. Only 6 digits allowed.");
    }
  };

  const handleDropChange = (e) => {
    const rawVal = e.target.value;
    if (/\D/.test(rawVal)) {
      setDropError("Text is not allowed. Only 6 digits allowed.");
    } else {
      setDropError("");
    }
    const cleanVal = rawVal.replace(/\D/g, "").slice(0, 6);
    setDrop(cleanVal);
    if (cleanVal.length === 6) {
      setDropError("");
    }
  };

  const handleDropBlur = () => {
    if (drop && drop.length < 6) {
      setDropError("Drop PIN code must be exactly 6 digits");
    }
  };

  /* ---------- BOOK NOW NAVIGATION ---------- */
  const handleBookNow = () => {
    let hasError = false;

    if (!pickup.trim()) {
      setPickupError("Pickup PIN code is required");
      hasError = true;
    } else if (!/^\d{6}$/.test(pickup.trim())) {
      setPickupError("Pickup PIN code must be exactly 6 digits");
      hasError = true;
    } else {
      setPickupError("");
    }

    if (!drop.trim()) {
      setDropError("Drop PIN code is required");
      hasError = true;
    } else if (!/^\d{6}$/.test(drop.trim())) {
      setDropError("Drop PIN code must be exactly 6 digits");
      hasError = true;
    } else {
      setDropError("");
    }

    if (hasError) {
      toast.error("Please enter valid 6-digit PIN codes");
      return;
    }

    router.push(
      `/rate-calculator?pickup=${encodeURIComponent(
        pickup.trim()
      )}&drop=${encodeURIComponent(drop.trim())}`
    );
  };

  return (
    <>
      {/* ================= BOOKING CARD ================= */}
      <div className="bg-white shadow-2xl rounded-[30px] p-6 md:p-8 max-w-md mx-auto border border-gray-100">
        <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Your Booking is a Step Away!
        </h4>

        {/* PICKUP */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Pickup PIN code
          </label>

          <div
            className={`flex items-center gap-3 bg-white border ${
              pickupError ? "border-red-500 ring-1 ring-red-400" : "border-gray-200"
            } rounded-2xl px-4 py-2 shadow-sm transition-all`}
          >
            {/* ICON */}
            <div
              className={`w-10 h-10 rounded-full ${
                pickupError ? "bg-red-50" : "bg-blue-50"
              } flex items-center justify-center transition-colors`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${pickupError ? "text-red-500" : "text-blue-600"} transition-colors`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.243-4.243a8 8 0 1111.313 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            {/* INPUT */}
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={pickup}
              onChange={handlePickupChange}
              onKeyDown={handlePickupKeyDown}
              onBlur={handlePickupBlur}
              placeholder="Enter pickup PIN code"
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          {pickupError && (
            <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">
              {pickupError}
            </p>
          )}
        </div>


        {/* DROP */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Drop PIN code
          </label>

          <div
            className={`flex items-center gap-3 bg-white border ${
              dropError ? "border-red-500 ring-1 ring-red-400" : "border-gray-200"
            } rounded-2xl px-4 py-2 shadow-sm transition-all`}
          >
            {/* ICON */}
            <div
              className={`w-10 h-10 rounded-full ${
                dropError ? "bg-red-50" : "bg-blue-50"
              } flex items-center justify-center transition-colors`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${dropError ? "text-red-500" : "text-blue-600"} transition-colors`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.243-4.243a8 8 0 1111.313 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            {/* INPUT */}
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={drop}
              onChange={handleDropChange}
              onKeyDown={handleDropKeyDown}
              onBlur={handleDropBlur}
              placeholder="Enter drop PIN code"
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          {dropError && (
            <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">
              {dropError}
            </p>
          )}
        </div>


        <div style={{textAlign:"center"}}>
                  {/* BUTTON */}
        <button
          onClick={handleBookNow}
          className="btn-primary "
        >
          Check Price
        </button>
        </div>
      </div>

      {/* ================= MOBILE FULL SCREEN POPUP ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white p-4"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-sm">
                {open === "pickup" ? "Pickup Location" : "Drop Location"}
              </h4>
              <button onClick={() => setOpen(null)}>✕</button>
            </div>

            {/* <button
  onClick={() => useCurrentLocation(open)}
  className="w-full mb-4 p-3 border rounded-xl text-blue-600 font-medium"
>
  📍 Use Current Location
</button> */}


            {/* <Autocomplete
              onLoad={(a) => (popupAuto.current = a)}
              onPlaceChanged={handlePopupSelect}
            >
              <input
                autoFocus
                placeholder="Type location..."
                className="w-full p-3 bg-gray-100 rounded-xl"
              />
            </Autocomplete> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
