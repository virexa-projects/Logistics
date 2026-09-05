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

  /* ---------- DESKTOP HANDLERS ---------- */
  // const handlePickupChange = () => {
  //   const place = pickupAuto.current?.getPlace();
  //   if (place?.formatted_address) {
  //     setPickup(place.formatted_address);
  //   }
  // };

  // const handleDropChange = () => {
  //   const place = dropAuto.current?.getPlace();
  //   if (place?.formatted_address) {
  //     setDrop(place.formatted_address);
  //   }
  // };

  // /* ---------- MOBILE POPUP SELECT ---------- */
  // const handlePopupSelect = () => {
  //   const place = popupAuto.current?.getPlace();
  //   if (!place?.formatted_address) return;

  //   if (open === "pickup") setPickup(place.formatted_address);
  //   if (open === "drop") setDrop(place.formatted_address);

  //   setOpen(null);
  // };

  /* ---------- CURRENT LOCATION ---------- */
  // const useCurrentLocation = (type) => {
  //   const selectedType = type; // 🔒 lock value

  //   if (!navigator.geolocation) {
  //     alert("Geolocation not supported");
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     async (pos) => {
  //       const { latitude, longitude } = pos.coords;

  //       const res = await fetch(
  //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_KEY}`
  //       );
  //       const data = await res.json();
  //       const address = data.results?.[0]?.formatted_address;

  //       if (!address) return;

  //       if (selectedType === "pickup") {
  //         setPickup(address);
  //       }

  //       if (selectedType === "drop") {
  //         setDrop(address);
  //       }

  //       setOpen(null); // close popup AFTER setting value
  //     },
  //     () => alert("Location permission denied")
  //   );
  // };


  /* ---------- BOOK NOW NAVIGATION ---------- */
  const handleBookNow = () => {
    if (!pickup || !drop) {
      toast.error("Please enter the pickup and drop PIN codes");
      return;
    }

    router.push(
      `/rate-calculator?pickup=${encodeURIComponent(
        pickup
      )}&drop=${encodeURIComponent(drop)}`
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

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
            {/* ICON */}
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
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
            {/* {isMobile ? (
        <input
          readOnly
          value={pickup}
          placeholder="Enter pickup PIN code"
          onClick={() => setOpen("pickup")}
          className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      ) : ( */}
            {/* <Autocomplete
          // onLoad={(a) => (pickupAuto.current = a)}
          // onPlaceChanged={handlePickupChange}
        > */}
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup PIN code"
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            {/* </Autocomplete> */}
            {/* )} */}
          </div>
        </div>


        {/* DROP */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Drop PIN code
          </label>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
            {/* ICON */}
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
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
            {/* {isMobile ? (
        <input
          readOnly
          value={drop}
          placeholder="Enter drop PIN code"
          onClick={() => setOpen("drop")}
          className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      ) : ( */}
            {/* <Autocomplete
          // onLoad={(a) => (dropAuto.current = a)}
          // onPlaceChanged={handleDropChange}
        > */}
            <input
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Enter drop PIN code"
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            {/* </Autocomplete> */}
            {/* )} */}
          </div>
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
