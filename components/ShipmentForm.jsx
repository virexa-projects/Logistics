

import { useState, useMemo, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import InvoiceContent from "./InvoiceContent";
/* ---------------- Pricing Config ---------------- */




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


// const CHECKED_BAG_PRICE = 999;
// const WEIGHT_PRICE_PER_KG = 99;


const SERVICE_PRICING = {
  Express: { base: 699, perKg: 109 },
  Standard: { base: 499, perKg: 79 },
  Premium: { base: 999, perKg: 249 },
};

const BAG_SIZE_MULTIPLIER = {
  Small: 1,
  Medium: 1.1,
  Large: 1.25,
  XL: 1.4,
};

const LUGGAGE_TYPE_MULTIPLIER = {
  Suitcase: 0,
  Backpack: 0,
  Duffel: 0,
  Box: 0,
};

const ADDON_PRICES = {
  Packing: 499,
  "Priority Pickup": 399,
  Insurance: 399,
};

/* ---------------- Corporate & GST ---------------- */

const CORPORATE_DISCOUNT_PERCENT = 10;

const GST_PERCENT = 18;

/* ---------------- Pickup Slots ---------------- */

const PICKUP_SLOTS = [
  "9 AM - 12 PM",
  "12 PM - 3 PM",
  "3 PM - 6 PM",
];

/* ---------------- Google Sheet Submit ---------------- */

const submitToGoogleSheet = async (values, totalPrice, router) => {
  const toastId = toast.loading("Submitting...");
  console.log("values>>>>>", values)
  try {
    const formData = new URLSearchParams();

    // 🔑 Sheet routing
    formData.append("sheetName", "Sheet1");

    const payload = { ...values, totalPrice };

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(
        key,
        Array.isArray(value) ? value.join(", ") : value ?? ""
      );
    });

    console.log("formData", formData);

    // ✅ IMPORTANT FIX
    await fetch(
      "https://script.google.com/macros/s/AKfycbze9DM1_lUgyOJ1-JQuIfjfU8rXHfA-yUs8xeSu0Sqh05fi-YzaxBEH7Tzy8l_hpSgmHw/exec",
      {
        method: "POST",
        body: formData,     // ❌ no headers
        mode: "no-cors",    // 🔥 KEY LINE
      }
    );

    // ✅ If fetch didn’t crash → success
    toast.dismiss(toastId);
    toast.success("Booking confirmed 🎉");
    router.push("/thank-you");

  } catch (err) {
    toast.dismiss(toastId);
    console.error(err);
    toast.error("Submission failed");
  }
};



/* ---------------- Price Calculation ---------------- */
const calculatePriceBreakup = (values) => {
  const weight = Number(values.weight || 0);

  const service = SERVICE_PRICING[values.service] || {
    base: 0,
    perKg: 0,
  };

  const baseCost = service.base;
  const weightCost = weight * service.perKg;

  // 🔥 ADD THIS (MISSING BEFORE)
  const volumeCost =
    (Number(values.length || 0) +
      Number(values.width || 0) +
      Number(values.height || 0)) * 0.5;

  let subtotal = baseCost + weightCost ;
  

  // ✅ addons (optional)
  const addonTotal = (values.addons || []).reduce(
    (sum, addon) => sum + (ADDON_PRICES[addon] || 0),
    0
  );

  subtotal += addonTotal;

  // ✅ multipliers (optional)
  // subtotal *= BAG_SIZE_MULTIPLIER[values.bagSize || "Small"];
  // subtotal *= LUGGAGE_TYPE_MULTIPLIER[values.luggageType || "Suitcase"];

  // ✅ discount
  let discount = 0;
  if (values.customerType === "Corporate") {
    discount += (subtotal * CORPORATE_DISCOUNT_PERCENT) / 100;
  }

  const discountedTotal = subtotal - discount;

  // ✅ GST
  const gst =
    values.customerType === "Corporate" || values.includeGST
      ? (discountedTotal * GST_PERCENT) / 100
      : 0;

  return {
    subtotal: Math.round(subtotal),
    discount: Math.round(discount),
    gst: Math.round(gst),
    total: Math.round(discountedTotal + gst),
  };
};

export default function ShipmentBookingForm({
  bookingData
}) {
  const router = useRouter();
  const invoiceRef = useRef(null);
  const [addonError, setAddonError] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const [values, setValues] = useState({
    customerType: "Individual",
    addons: [],
    includeGST: false,
    luggageType: "Suitcase",

    // already existing
    pickupCity: "",
    dropCity: "",
    name: "",
    phone: "",
    email: "",
    // ✅ ADD THESE (NEW)
    pickupAddress: "",
    pickupState: "",
    pickupPincode: "",
    pickupPhone: "",
    pickupName: "",
    address: "",
    dropState: "",
    dropPincode: "",
    // bags: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    bagSize: "",
    service: "Express",
    serviceType: "",
  });


  console.log("values", values)

  /* ✅ AUTO FILL PICKUP & DROP */
  // useEffect(() => {
  //   if (bookingData) {
  //     setValues((prev) => ({
  //       ...prev,
  //       ...bookingData,
  //     }));
  //   }
  // }, [bookingData]);

      useEffect(() => {
  setValues((prev) => ({
    ...prev,
    ...bookingData,
    service:
      bookingData?.service ||
      bookingData?.serviceType ||
      prev.service ||
      "Express",
  }));
}, [bookingData]);

  // useEffect(() => {
  //   if (bookingData) {
  //     setValues((prev) => ({
  //       ...prev,
  //       ...bookingData,
  //       service: bookingData.service || bookingData.serviceType || "Express",
  //     }));
  //   }
  // }, [bookingData]);


  const price = useMemo(
    () => calculatePriceBreakup(values),
    [values]
  );

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  // const handleAddonChange = (addon, checked) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     addons: checked
  //       ? [...prev.addons, addon]
  //       : prev.addons.filter((a) => a !== addon),
  //   }));
  // };

  const handleAddonChange = (addon, checked) => {
    // 🚫 Block only these two
    if (addon === "Insurance" || addon === "Packing") {
      setAddonError("Not at your location");

      // auto clear
      setTimeout(() => setAddonError(""), 2000);

      return;
    }

    setAddonError("");

    setValues((prev) => {
      let updatedAddons = [...prev.addons];

      if (checked) {
        // ✅ avoid duplicate
        if (!updatedAddons.includes(addon)) {
          updatedAddons.push(addon);
        }
      } else {
        updatedAddons = updatedAddons.filter((a) => a !== addon);
      }

      return {
        ...prev,
        addons: updatedAddons,
      };
    });
  };

  const downloadInvoice = async () => {
    const canvas = await html2canvas(invoiceRef.current, {
      scale: 2,
      backgroundColor: "#fff",
    });

    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save("Invoice.pdf");
  };



const sendMessage = async (totalPrice) => {
  try {
    const phone = values.pickupPhone?.replace(/\D/g, ""); // only numbers

    if (!phone || phone.length !== 10) {
      console.error("Invalid phone number");
      return;
    }

    const payload = {
      to: `91${phone}`,
      type: "template",
      template: {
        language: {
          policy: "deterministic",
          code: "en",
        },
        name: "order_confirm",
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: values.name || "Customer" },
              { type: "text", text: values.orderId || "N/A" },
              { type: "text", text: values.pickupCity || "N/A" },
              {
                type: "text",
                text: `${values.weight || 0}kg`,
              },
              {
                type: "text",
                text: `${values.luggageType || 0}`,
              },
              {
                type: "text",
                text: `₹${totalPrice || 0}`,
              },
              {
                type: "text",
                text: "https://www.frisbi.in/track-your-package",
              },
            ],
          },
        ],
      },
    };

    console.log("FINAL PAYLOAD 👉", payload); // 🔥 DEBUG

    const res = await fetch(
      "https://api.virexa.in/v1/message/send-message?token=1a051309720abd839dd2a59adff7240a485c2f2ac8aae63d654f456fa19662cd5254d594e0b476d110e78332044d3e35802efea6ce118bde4e53feb1bb86ff28",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    console.log("API RESPONSE 👉", data);

  } catch (err) {
    console.error("WhatsApp error", err);
  }
};






  const startPayment = async () => {
    if (!values.name || !values.phone) {
      toast.error("Name and mobile number required");
      return;
    }

      if (!values.weight || Number(values.weight) < 5) {
    toast.error("Minimum 5kg required");
    return;
  }
    await sendMessage(price.total);   // WhatsApp message

    // ✅ WAIT FOR RAZORPAY SDK
    await new Promise((resolve) => {
      const check = () => {
        if (window.Razorpay) resolve(true);
        else setTimeout(check, 100);
      };
      check();
    });

    // ✅ CREATE ORDER
    const orderRes = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price.total }),
      // body: JSON.stringify({ amount: 1 }),
    });

    const order = await orderRes.json();

    // ✅ OPEN RAZORPAY
    const options = {
      // key: "rzp_test_S9MbPhPiYZr1P9",
      key: "rzp_live_SUAtPnMwmeZpX4",
      amount: order.amount,
      currency: "INR",
      order_id: order.id,

      name: "Shipment Booking",
      description: "Shipment Charges",

      // handler: async function (response) {
      //   try {
      //     toast.loading("Processing payment...");

      //     // 1️⃣ OPTIONAL – show invoice
      //     setShowInvoice(true);

      //     // 2️⃣ OPTIONAL – download invoice
      //     await downloadInvoice();

      //     // 3️⃣ STORE IN GOOGLE SHEET
      //     await submitToGoogleSheet(
      //       {
      //         ...values,
      //         paymentId: response.razorpay_payment_id,
      //         orderId: response.razorpay_order_id,
      //         paymentStatus: "PAID",
      //         totalAmount: price.total,
      //       },
      //       price.total,
      //       router // 👈 router inside function
      //     );

      //     // submitToGoogleSheet already does router.push("/thank-you")
      //     toast.dismiss();
      //     toast.success("Payment successful 🎉");

      //   } catch (err) {
      //     toast.dismiss();
      //     console.error(err);
      //     toast.error("Payment done, but saving failed");
      //     router.push("/thank-you"); // still allow user
      //   }
      // },


      handler: async function (response) {
        try {
          toast.loading("Processing order...");

          // =========================
          // 1️⃣ LOGIN XPRESSBEES
          // =========================
          const loginRes = await fetch(
            "https://shipment.xpressbees.com/api/users/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: "javidsherif1@gmail.com",
                password: "Frisbi@2026",
              }),
            }
          );

          const loginData = await loginRes.json();
          const token = loginData.data;

          if (!token) throw new Error("Xpress login failed");

          // =========================
          // 2️⃣ CREATE SHIPMENT
          // =========================
          const shipRes = await fetch(
            "https://shipment.xpressbees.com/api/shipments2",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                order_number: "ORD" + Date.now(),
                payment_type: "prepaid",
                order_amount: price.total,
                collectable_amount: 0,
                package_weight: Number(values.weight || 1),

                consignee: {
                  name: values.name,
                  address: values.address || "Customer Address",
                  city: values.dropCity,
                  state: values.dropState || "Tamil Nadu",
                  pincode: values.dropPincode || "---",
                  phone: values.phone,
                },

                pickup: {
                  warehouse_name: "WH1",
                  name: values.pickupName,
                  address: values.pickupAddress || "Office Address",
                  city: values.pickupCity,
                  state: values.pickupState || "Tamil Nadu",
                  pincode: values.pickupPincode || "---",
                  phone: values.pickupPhone,
                },


                order_items: [
                  {
                    name: "Shipment",
                    qty: "1",
                    price: price.total,
                    sku: "SHIP01",
                  },
                ],
              }),
            }
          );

          const shipData = await shipRes.json();

          if (!shipData.status)
            throw new Error(shipData.message || "Shipment failed");

          const awb = shipData.data.awb_number;

          // =========================
          // 3️⃣ SHOW INVOICE
          // =========================
          setShowInvoice(true);
          await downloadInvoice();

          await sendMessage(price.total);  // WhatsApp message

          // =========================
          // 4️⃣ SAVE GOOGLE SHEET
          // =========================
          await submitToGoogleSheet(
            {
              ...values,

              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,

              awb: shipData.data.awb_number,
              courier: shipData.data.courier_name,
              shipmentId: shipData.data.shipment_id,
              shipmentStatus: shipData.data.status,
              labelUrl: shipData.data.label,

              paymentStatus: "PAID",
            },
            price.total,
            router
          );


          toast.dismiss();
          toast.success("Order + Shipment success 🚚");

        } catch (err) {
          toast.dismiss();
          console.error(err);
          toast.error(err.message || "Process failed");
        }
      },

      prefill: {
        name: values.name,
        email: values.email,
        contact: values.phone,
      },

      theme: { color: "#2563EB" },
    };

    new window.Razorpay(options).open();
  };






  const fieldClass =
    "w-full h-[48px] rounded-lg px-4 bg-[#f5f5f5] text-sm outline-none border focus:ring-1 focus:ring-[#013EFE]";


  return (
    <section className="py-12 md:pt-24 px-4">
      <form onSubmit={(e) => e.preventDefault()} className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-center text-2xl font-semibold">
          Shipment Booking Form
        </h2>

        {/* Customer Details */}
        <div>
          <h4 className="font-semibold mb-4">Customer Details</h4>

          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="customerType"
                value="Individual"
                checked={values.customerType === "Individual"}
                onChange={(e) => handleChange("customerType", e.target.value)}
              />
              Individual
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="customerType"
                value="Corporate"
                checked={values.customerType === "Corporate"}
                onChange={(e) => handleChange("customerType", e.target.value)}
              />
              Corporate
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Enter Name"
              className={fieldClass}
              value={values.pickupName}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <input
              placeholder="Whatsapp Number"
              className={fieldClass}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <input
              placeholder="Email"
              className={fieldClass}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            {values.customerType === "Corporate" && (
              <>
                <input
                  placeholder="Company Name"
                  className={fieldClass}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
                <input
                  placeholder="GST Number"
                  className={fieldClass}
                  onChange={(e) => handleChange("gstNumber", e.target.value)}
                />
              </>
            )}
          </div>
        </div>

        {/* Pickup & Drop */}
        <div>
          <h4 className="font-semibold mb-4">Pickup  Location</h4>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            {/* <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                placeholder="Enter Name"
                className={fieldClass}
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div> */}

            {/* Pickup City */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Pickup City
              </label>
              <input
                placeholder="Pickup City"
                readOnly
                className={fieldClass}
                value={values.pickupCity}
              />
            </div>



            {/* Pickup Address */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Pickup Address
              </label>
              <input
                placeholder="Enter Pickup Address"
                className={fieldClass}
                value={values.pickupAddress}
                onChange={(e) => handleChange("pickupAddress", e.target.value)}
              />
            </div>

            {/* Pickup State */}
            {/* <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Pickup State
              </label>
              <input
                placeholder="Enter Pickup State"
                className={fieldClass}
                value={values.pickupState}
                onChange={(e) => handleChange("pickupState", e.target.value)}
              />
            </div> */}


            <div className="space-y-1">
  <label className="text-sm font-medium text-gray-700">
    Pickup State
  </label>

  <select
    className={fieldClass}
    value={values.pickupState || ""}   // 🔥 IMPORTANT
    onChange={(e) => handleChange("pickupState", e.target.value)}
  >
    <option value="">Select State</option>

    {INDIA_STATES.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </select>
</div>

            {/* Pickup Pincode */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Pickup Pincode
              </label>
              <input
                placeholder="Enter Pickup Pincode"
                className={fieldClass}
                value={values.pickupPincode}
                onChange={(e) => handleChange("pickupPincode", e.target.value)}
              />
            </div>

          </div>

          <h4 className="font-semibold mb-4 mt-3">Drop  Location</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                placeholder="Enter Name"
                className={fieldClass}
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            {/* Drop Address */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Drop Address
              </label>
              <input
                placeholder="Enter Drop Address"
                className={fieldClass}
                value={values.address}
                onChange={(e) => handleChange("dropAddress", e.target.value)}
              />
            </div>

            {/* Drop City */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Drop City
              </label>
              <input
                placeholder="Drop City"
                readOnly
                className={fieldClass}
                value={values.dropCity}
              />
            </div>

            {/* Drop State */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Drop State
              </label>
              {/* <input
                placeholder="Enter Drop State"
                className={fieldClass}
                value={values.dropState}
                onChange={(e) => handleChange("dropState", e.target.value)}
              /> */}


              <select
  className={fieldClass}
  value={values.dropState || ""}
  onChange={(e) => handleChange("dropState", e.target.value)}
>
  <option value="">Select State</option>

  {INDIA_STATES.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ))}
</select>
            </div>

            {/* Drop Pincode */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Drop Pincode
              </label>
              <input
                placeholder="Enter Drop Pincode"
                className={fieldClass}
                value={values.dropPincode}
                onChange={(e) => handleChange("dropPincode", e.target.value)}
              />
            </div>

          </div>

        </div>

        {/* Pickup & Delivery */}
        <div>
          <h4 className="font-semibold mb-4">Select Pickup Date & Time Slot</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="date"
              className={fieldClass}
              min={new Date().toISOString().split("T")[0]}   // ✅ block past dates
              onChange={(e) => handleChange("pickupDate", e.target.value)}
            />
            {/* <input
              type="date"
              className={fieldClass}
              onChange={(e) => handleChange("deliveryDate", e.target.value)}
            /> */}
            <select
              className={fieldClass}
              onChange={(e) => handleChange("pickupTimeSlot", e.target.value)}
            >
              <option value="">Pickup Time Slot</option>
              {PICKUP_SLOTS.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Service */}
        <div>
          <h4 className="font-semibold mb-4">Service</h4>
          <select
            className={fieldClass}
            value={values.service}   // ✅ MUST
            onChange={(e) => handleChange("service", e.target.value)}
          >
            <option value="Express">Express</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        {/* this one Express 699 for per kg 109,Standard 499 for per kg 79, premium 999 for per kg 249 undersstabd  */}

        {/* Luggage */}
        <div>
          <h4 className="font-semibold mb-4">Luggage Details</h4>
          <div className="grid md:grid-cols-4 gap-4">


<input
  type="number"
  placeholder="Total Weight (min 5kg)"
  className={fieldClass}
  value={values.weight}
  onChange={(e) => {
    const value = e.target.value;

    // allow empty
    if (value === "") {
      handleChange("weight", "");
      return;
    }

    // allow only positive numbers
    if (Number(value) >= 0) {
      handleChange("weight", value);
    }
  }}
  onKeyDown={(e) => {
    if (e.key === "-" || e.key === "e") {
      e.preventDefault();
    }
  }}
/>
            <input
              type="number"
              min="0"
              placeholder="Height (cm)"
              className={fieldClass}
              value={values.height}
              onChange={(e) => handleChange("height", e.target.value)}
            />


            <input
              type="number"
              min="0"
              placeholder="Length (cm)"
              className={fieldClass}
              value={values.length}
              onChange={(e) => handleChange("length", e.target.value)}
            />


            <input
              type="number"
              min="0"
              placeholder="Width (cm)"
              className={fieldClass}
              value={values.width}
              onChange={(e) => handleChange("width", e.target.value)}
            />


            {/* <input
              type="number"
              min="0"
              placeholder="No of Bags"
              className={fieldClass}
              value={values.bags}
              onChange={(e) => handleChange("bags", e.target.value)}
            /> */}


            <select
              className={fieldClass}
              onChange={(e) => handleChange("bagSize", e.target.value)}
            >
              <option value="">Select Bag size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XL</option>
            </select>

            <select
              className={fieldClass}
              value={values.luggageType}   // ✅ MUST ADD
              onChange={(e) => handleChange("luggageType", e.target.value)}
            >
              <option value="Duffel">Trolley</option>
              <option value="Suitcase">Suitcase</option>
              <option value="Backpack">Backpack</option>
              <option value="Box">Box</option>
            </select>

          </div>
        </div>

        {/* Add-ons */}
        <div>
          <h4 className="font-semibold mb-4">Add-ons</h4>
          <div className="flex flex-wrap gap-6">
            {Object.keys(ADDON_PRICES).map((addon) => (
              <label key={addon} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={values.addons.includes(addon)}

                  onChange={(e) =>
                    handleAddonChange(addon, e.target.checked)
                  }
                />
                {addon} (+₹{ADDON_PRICES[addon]})
              </label>
            ))}
          </div>
          {addonError && (
            <p className="text-red-500 text-sm mt-2">
              {addonError}
            </p>
          )}
        </div>

        {/* Payment */}


        {/* Price */}
        <div className="bg-blue-50 border rounded-xl p-5">
          <div className="flex justify-between font-bold text-lg">
            <span>Total Payable</span>
            <span>₹{price.total}</span>
          </div>
        </div>

        <button
          type="button"
          className="btn-primary w-full md:w-auto"
          onClick={startPayment}
        >
          Pay ₹{price.total} & Confirm Booking
        </button>

      </form>




      {/* ================= INVOICE POPUP ================= */}
      {showInvoice && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-xl w-[90vw] max-w-[900px] h-[90vh] overflow-y-auto p-6">

            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-lg">Invoice Preview</h3>
              <button onClick={() => setShowInvoice(false)}>✕</button>
            </div>

            {/* A4 LOOK */}
            <div
              style={{
                width: 794,
                minHeight: 1123,
                margin: "0 auto",
                backgroundColor: "#fff",
                padding: 40,
                boxShadow: "0 0 10px rgba(0,0,0,0.15)",
              }}
            >
              <InvoiceContent values={values} price={price} />
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={downloadInvoice}
                style={{
                  backgroundColor: "#2563EB",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: 8,
                }}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}



      <div
        ref={invoiceRef}
        style={{
          position: "fixed",
          left: "-9999px",
          top: 0,
          width: "794px",
          minHeight: "1123px",
          backgroundColor: "#fff",
          color: "#000",
          padding: 40,
          fontFamily: "Arial",
        }}
      >
        <InvoiceContent values={values} price={price} />
      </div>



    </section>
  );
}
