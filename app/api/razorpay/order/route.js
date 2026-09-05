export const runtime = "nodejs";

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  // key_id: "rzp_test_S9MbPhPiYZr1P9",
  // key_secret: "XqgnLetVkiuJK8wIZcqckftH",
    key_id: "rzp_live_SUAtPnMwmeZpX4",
  key_secret: "TrY02BPqyChYp45ZPIBEVhDO",
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
