export const runtime = "nodejs";

import Razorpay from "razorpay";
import { API_CONFIG } from "@/utils/apiConfig";

const razorpay = new Razorpay({
  key_id: API_CONFIG.RAZORPAY_KEY_ID,
  key_secret: API_CONFIG.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: "order_" + Date.now(),
    });

    return Response.json(order);
  } catch (err) {
    console.error(err);
    return new Response("Order creation failed", { status: 500 });
  }
}
