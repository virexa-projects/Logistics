"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { API_CONFIG } from "@/utils/apiConfig";

export default function DeliveryMessagePage() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [loading, setLoading] = useState(false);

  const sendDeliveryMessage = async () => {
    try {
      // 🔒 basic validation
      if (!phone || phone.length !== 10) {
        alert("Enter valid 10 digit phone number");
        return;
      }

      if (!name || !orderId || !dropLocation || !deliveryTime) {
        alert("Fill all fields");
        return;
      }

      setLoading(true);

      const payload = {
        to: `91${phone}`,
        type: "template",
        template: {
          language: {
            policy: "deterministic",
            code: "en",
          },
          name: "delivery_details", // ⚠️ your template name
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name },
                { type: "text", text: orderId },
                { type: "text", text: dropLocation },
                { type: "text", text: deliveryTime },
                {
                  type: "text",
                  text: "https://www.frisbi.in", // feedback link
                },
              ],
            },
          ],
        },
      };

      // console.log("PAYLOAD 👉", payload);

      const res = await fetch(API_CONFIG.VIREXA_MESSAGE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      // console.log("API RESPONSE 👉", data);

      if (!res.ok) {
        alert("Failed to send message");
      } else {
        alert("Message sent successfully ✅");
      }

    } catch (err) {
      console.error(err);
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Delivery Message Sender
        </h2>

        <div className="space-y-4">
          <input
            placeholder="Phone (10 digit)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <input
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <input
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <input
            placeholder="Drop Location"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <input
            placeholder="Delivery Date & Time"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="w-full p-3 border rounded"
          />

          <button
            onClick={sendDeliveryMessage}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Wait a moment...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}