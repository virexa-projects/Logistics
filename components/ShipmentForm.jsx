"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CheckCircle2, Download, Loader2, Copy, Check, ExternalLink } from "lucide-react";
import InvoiceContent from "./InvoiceContent";
import { API_CONFIG } from "@/utils/apiConfig";
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

const submitToGoogleSheet = async (values, totalPrice, router, skipRedirect = false) => {
  const toastId = toast.loading("Submitting...");
  console.log("values>>>>>", values);
  try {
    const payload = {
      type: values.type || "ONLINE_PAYMENT",
      status: values.status || "online payment confirmed",
      service: values.service || "Express",
      serviceType: values.serviceType || values.service || "",
      luggageType: values.luggageType || "Suitcase",
      length: values.length || "",
      height: values.height || "",
      weight: values.weight || "",
      width: values.width || "",
      bagSize: values.bagSize || "",
      totalPrice: totalPrice || values.totalPrice || values.total || 0,
      total: totalPrice || values.total || values.totalPrice || 0,
      rateCalculatorAmount:
        values.rateCalculatorAmount ||
        values["Rate Calculator Amount"] ||
        values.total ||
        totalPrice ||
        "-",
      rateCalculatorUsedAt:
        values.rateCalculatorUsedAt ||
        values["Rate Calculator Used At"] ||
        "-",
      "Rate Calculator Amount":
        values["Rate Calculator Amount"] ||
        values.rateCalculatorAmount ||
        values.total ||
        totalPrice ||
        "-",
      "Rate Calculator Used At":
        values["Rate Calculator Used At"] ||
        values.rateCalculatorUsedAt ||
        "-",
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
      address: values.address || values.dropAddress || values.pickupAddress || "",
      customerType: values.customerType || "Individual",
      addons: values.addons || [],
      includeGST: values.includeGST || false,
      email: values.email || "",
      paymentStatus: values.paymentStatus || "PAID",
      paymentId: values.paymentId || "",
      orderId: values.orderId || "",
      awb: values.awb || "",
      courier: values.courier || "",
      shipmentId: values.shipmentId || "",
      shipmentStatus: values.shipmentStatus || "",
      labelUrl: values.labelUrl || "",
    };

    // 1️⃣ Send to RateCalculator sheet (updates the user's calculator funnel table)
    const rateCalcFormData = new URLSearchParams();
    rateCalcFormData.append("sheetName", "RateCalculator");
    Object.entries(payload).forEach(([key, value]) => {
      rateCalcFormData.append(
        key,
        Array.isArray(value) ? value.join(", ") : value ?? ""
      );
    });

    await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
      method: "POST",
      body: rateCalcFormData,
      mode: "no-cors",
    });

    // 2️⃣ Also log to Bookings sheet (for standalone order records)
    try {
      const bookingsFormData = new URLSearchParams();
      bookingsFormData.append("sheetName", "Bookings");
      Object.entries(payload).forEach(([key, value]) => {
        bookingsFormData.append(
          key,
          Array.isArray(value) ? value.join(", ") : value ?? ""
        );
      });
      await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
        method: "POST",
        body: bookingsFormData,
        mode: "no-cors",
      });
    } catch (bErr) {
      console.warn("Secondary bookings sheet log warning:", bErr);
    }

    // ✅ If fetch didn’t crash → success
    toast.dismiss(toastId);
    toast.success("Booking confirmed 🎉");
    if (!skipRedirect && router) {
      router.push("/thank-you");
    }
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

  let subtotal = baseCost + weightCost;


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
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successDetails, setSuccessDetails] = useState(null);
  const [copiedAwb, setCopiedAwb] = useState(false);

  const [errors, setErrors] = useState({});

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
    dropAddress: "",
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



  const validateForm = () => {
    const newErrors = {};

    if (!values.name?.trim()) {
      newErrors.name = "Drop Name is required";
    }
    if (!values.pickupName?.trim()) {
      newErrors.pickupName = "Pickup Name is required";
    }
    if (!values.phone?.trim()) {
      newErrors.phone = "phone is required";
    }

    // if (!values.phone?.trim()) {
    //   newErrors.phone = "Phone number is required";
    // } else if (!/^[6-9]\d{9}$/.test(values.phone)) {
    //   newErrors.phone = "Enter a valid 10 digit mobile number";
    // }

    if (!values.email?.trim()) {
      newErrors.email = "Email is required";
    }
    // if (!values.companyName?.trim()) {
    //   newErrors.companyName = "Company Name is required";
    // }
    // if (!values.gstNumber?.trim()) {
    //   newErrors.gstNumber = "gst Numberis required";
    // }

    if (!values.pickupCity?.trim()) {
      newErrors.pickupCity = "Pickup City is required";
    }


    if (!values.pickupAddress?.trim()) {
      newErrors.pickupAddress = "Pickup Address is required";
    }
    if (!values.pickupState?.trim()) {
      newErrors.pickupState = "Pickup State is required";
    }

    if (!values.pickupPincode?.trim()) {
      newErrors.pickupPincode = "Pickup pincode is required";
    }
  if (!values.dropAddress?.trim()) {
      newErrors.dropAddress = "Drop Address is required";
    }

  if (!values.dropCity?.trim()) {
      newErrors.dropCity = "Drop City is required";
    }

  if (!values.dropState?.trim()) {
      newErrors.dropState = "Drop State is required";
    }

  if (!values.dropPincode?.trim()) {
      newErrors.dropPincode = "Drop Pincode is required";
    }

  if (!values.pickupDate?.trim()) {
      newErrors.pickupDate = "Pickup Date is required";
    }

  if (!values.pickupTimeSlot?.trim()) {
      newErrors.pickupTimeSlot = "Pickup Time Slot is required";
    }

  if (!values.service?.trim()) {
      newErrors.service = "Service is required";
    }

  if (!values.weight?.trim()) {
      newErrors.weight = "weight is required";
    }

  if (!values.height?.trim()) {
      newErrors.height = "Height is required";
    }

  if (!values.length?.trim()) {
      newErrors.length = "length is required";
    }


  if (!values.width?.trim()) {
      newErrors.width = "width is required";
    }

  if (!values.bagSize?.trim()) {
      newErrors.bagSize = "bagSize is required";
    }


  if (!values.luggageType?.trim()) {
      newErrors.luggageType = "Luggage Type is required";
    }






    if (!values.weight || Number(values.weight) < 5) {
      newErrors.weight = "Minimum weight should be 5kg";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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
        API_CONFIG.VIREXA_MESSAGE_API_URL,
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
    if (!validateForm()) {
      return;
    }

    if (!values.weight || Number(values.weight) < 5) {
      toast.error("Minimum 5kg required");
      return;
    }

    try {
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
      });

      const order = await orderRes.json();

      if (!order || !order.id) {
        throw new Error(order?.error || "Failed to create payment order");
      }

      // ✅ OPEN RAZORPAY
      const options = {
        key: API_CONFIG.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,

        name: "Shipment Booking",
        description: "Shipment Charges",

        handler: async function (response) {
          setIsProcessingPayment(true);
          const toastId = toast.loading("Verifying payment & confirming booking...");
          try {
            // ==========================================
            // 1️⃣ VERIFY PAYMENT SIGNATURE (SERVER-SIDE)
            // ==========================================
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyData.success) {
              throw new Error(verifyData.message || "Payment signature verification failed");
            }

            // Default identifiers (used if courier API fails or pincode is not serviceable)
            let awb = "FB" + Date.now().toString().slice(-8);
            let courier = "Frisbi Express";
            let shipmentId = "";
            let shipmentStatus = "Payment Confirmed";
            let labelUrl = "";

            // ==========================================
            // 2️⃣ ATTEMPT XPRESSBEES DISPATCH (NON-BLOCKING)
            // ==========================================
            try {
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
              const token = loginData?.data;

              if (token) {
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
                        address: values.dropAddress || "Customer Address",
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
                if (shipData.status && shipData.data) {
                  awb = shipData.data.awb_number || awb;
                  courier = shipData.data.courier_name || "Xpressbees";
                  shipmentId = shipData.data.shipment_id || "";
                  shipmentStatus = shipData.data.status || "Created";
                  labelUrl = shipData.data.label || "";
                } else {
                  console.warn("Courier note:", shipData.message || "Pincode unserviceable");
                  courier = "Manual Dispatch Required";
                  shipmentStatus = shipData.message || "Pincode not serviceable";
                }
              }
            } catch (courierErr) {
              console.warn("Courier API warning:", courierErr.message);
              courier = "Manual Dispatch Required";
              shipmentStatus = courierErr.message || "Courier dispatch pending";
            }

            // ==========================================
            // 3️⃣ INVOICE & NOTIFICATIONS
            // ==========================================
            setShowInvoice(true);
            try {
              await downloadInvoice();
            } catch (invErr) {
              console.warn("Invoice download error", invErr);
            }

            try {
              await sendMessage(price.total); // WhatsApp notification
            } catch (msgErr) {
              console.warn("WhatsApp notification error", msgErr);
            }

            // ==========================================
            // 4️⃣ SAVE VERIFIED PAYMENT TO GOOGLE SHEET
            // ==========================================
            await submitToGoogleSheet(
              {
                ...values,
                type: "ONLINE_PAYMENT",
                status: "online payment confirmed",
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                awb,
                courier,
                shipmentId,
                shipmentStatus,
                labelUrl,
                paymentStatus: "PAID",
              },
              price.total,
              router,
              true // skip direct redirect to show celebration modal
            );

            toast.dismiss(toastId);
            toast.success("Payment verified & booking confirmed! 🎉");

            // Open Confirmation Celebration Modal
            setSuccessDetails({
              awb,
              courier,
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              amount: price.total,
              fromCity: values.pickupCity,
              toCity: values.dropCity,
              labelUrl,
            });
            setShowSuccessModal(true);

          } catch (err) {
            toast.dismiss(toastId);
            console.error(err);
            toast.error(err.message || "Payment verification failed");
          } finally {
            setIsProcessingPayment(false);
          }
        },

        modal: {
          ondismiss: function () {
            setIsProcessingPayment(false);
          },
        },

        prefill: {
          name: values.name,
          email: values.email,
          contact: values.phone,
        },

        theme: { color: "#2563EB" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error("Payment initiation error:", err);
      toast.error(err.message || "Could not initiate payment");
      setIsProcessingPayment(false);
    }
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
            <div>
              <input
                placeholder="Enter Name"
                className={fieldClass}
                value={values.pickupName}
                onChange={(e) => handleChange("name", e.target.value)}

              />
              {errors.pickupName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupName}
                </p>
              )}
            </div>
            <div>
              <input
                placeholder="Whatsapp Number"
                className={fieldClass}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <input
                placeholder="Email"
                className={fieldClass}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {values.customerType === "Corporate" && (
              <>
                <div>
                  <input
                    placeholder="Company Name"
                    className={fieldClass}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    placeholder="GST Number"
                    className={fieldClass}
                    onChange={(e) => handleChange("gstNumber", e.target.value)}
                  />
                  {errors.gstNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gstNumber}
                    </p>
                  )}

                </div>

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
                // readOnly
                className={fieldClass}
                value={values.pickupCity}
                onChange={(e) => handleChange("pickupCity", e.target.value)}
              />
              {errors.pickupCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupCity}
                </p>
              )}
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
              {errors.pickupAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupAddress}
                </p>
              )}
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
              {errors.pickupState && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupState}
                </p>
              )}
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
              {errors.pickupPincode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupPincode}
                </p>
              )}
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
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Drop Address */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Drop Address
              </label>
              <input
                placeholder="Enter Drop Address"
                className={fieldClass}
                value={values.dropAddress}
                onChange={(e) => handleChange("dropAddress", e.target.value)}
              />
              {errors.dropAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dropAddress}
                </p>
              )}
            </div>

            {/* Drop City */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Drop City
              </label>
              <input
                placeholder="Drop City"
                // readOnly
                className={fieldClass}
                value={values.dropCity}
                onChange={(e) => handleChange("dropCity", e.target.value)}
              />
              {errors.dropCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dropCity}
                </p>
              )}
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
              {errors.dropState && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dropState}
                </p>
              )}
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
              {errors.dropPincode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dropPincode}
                </p>
              )}
            </div>

          </div>
          
        </div>

        {/* Pickup & Delivery */}
        <div>
          <h4 className="font-semibold mb-4">Select Pickup Date & Time Slot</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <input
                type="date"
                className={fieldClass}
                min={new Date().toISOString().split("T")[0]}   // ✅ block past dates
                onChange={(e) => handleChange("pickupDate", e.target.value)}
              />
              {errors.pickupDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupDate}
                </p>
              )}
            </div>
            {/* <input
              type="date"
              className={fieldClass}
              onChange={(e) => handleChange("deliveryDate", e.target.value)}
            /> */}
            <div>
              <select
                className={fieldClass}
                onChange={(e) => handleChange("pickupTimeSlot", e.target.value)}
              >
                <option value="">Pickup Time Slot</option>
                {PICKUP_SLOTS.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
              {errors.pickupTimeSlot && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupTimeSlot}
                </p>
              )}

            </div>
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
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">
              {errors.service}
            </p>
          )}
        </div>

        {/* this one Express 699 for per kg 109,Standard 499 for per kg 79, premium 999 for per kg 249 undersstabd  */}

        {/* Luggage */}
        <div>
          <h4 className="font-semibold mb-4">Luggage Details</h4>
          <div className="grid md:grid-cols-4 gap-4">


            <div>
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
              {errors.weight && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.weight}
                </p>
              )}

            </div>

            <div>
              <input
                type="number"
                min="0"
                placeholder="Height (cm)"
                className={fieldClass}
                value={values.height}
                onChange={(e) => handleChange("height", e.target.value)}
              />
              {errors.height && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.height}
                </p>
              )}
            </div>


            <div>
              <input
                type="number"
                min="0"
                placeholder="Length (cm)"
                className={fieldClass}
                value={values.length}
                onChange={(e) => handleChange("length", e.target.value)}
              />

              {errors.length && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.length}
                </p>
              )}
            </div>


            <div>
              <input
                type="number"
                min="0"
                placeholder="Width (cm)"
                className={fieldClass}
                value={values.width}
                onChange={(e) => handleChange("width", e.target.value)}
              />
              {errors.width && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.width}
                </p>
              )}
            </div>


            {/* <input
              type="number"
              min="0"
              placeholder="No of Bags"
              className={fieldClass}
              value={values.bags}
              onChange={(e) => handleChange("bags", e.target.value)}
            /> */}


            <div>
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

              {errors.bagSize && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bagSize}
                </p>
              )}

            </div>

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

            {errors.luggageType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.luggageType}
              </p>
            )}

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
          className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          onClick={startPayment}
          disabled={isProcessingPayment}
        >
          {isProcessingPayment ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Wait a moment...
            </>
          ) : (
            `Pay ₹${price.total} & Confirm Booking`
          )}
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

      {/* ================= SUCCESS CONFIRMATION MODAL ================= */}
      {showSuccessModal && successDetails && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 text-center relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                router.push("/thank-you");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Booking & Payment Confirmed!
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Your shipment has been successfully registered with {successDetails.courier} and pickup scheduled.
            </p>

            {/* Shipment Summary Details Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left space-y-3 mb-6 text-sm">
              <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-500">AWB Tracking No.</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-blue-600">
                    {successDetails.awb || "Generated"}
                  </span>
                  {successDetails.awb && (
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof navigator !== "undefined" && navigator.clipboard) {
                          navigator.clipboard.writeText(successDetails.awb);
                        }
                        setCopiedAwb(true);
                        toast.success("AWB copied to clipboard!");
                        setTimeout(() => setCopiedAwb(false), 2000);
                      }}
                      className="p-1 rounded hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer"
                      title="Copy AWB"
                    >
                      {copiedAwb ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Courier Partner</span>
                <span className="font-semibold text-gray-800">
                  {successDetails.courier || "Xpressbees"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Route</span>
                <span className="font-medium text-gray-800">
                  {successDetails.fromCity} ➔ {successDetails.toCity}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-bold text-green-600">
                  ₹{successDetails.amount}
                </span>
              </div>

              {successDetails.paymentId && (
                <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-xs text-gray-400">
                  <span>Payment ID</span>
                  <span className="font-mono">{successDetails.paymentId}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={downloadInvoice}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  Download Invoice
                </button>

                {successDetails.labelUrl && (
                  <a
                    href={successDetails.labelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-purple-600" />
                    Shipping Label
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push("/thank-you");
                }}
                className="w-full bg-[#013EFE] hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md text-sm cursor-pointer"
              >
                Go to Order Summary
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
