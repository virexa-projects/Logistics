import crypto from "crypto";

const SECRET = "XqgnLetVkiuJK8wIZcqckftH";

export async function POST(req) {
  const body = await req.formData();

  const order_id = body.get("razorpay_order_id");
  const payment_id = body.get("razorpay_payment_id");
  const signature = body.get("razorpay_signature");

  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  if (expected === signature) {
    return Response.redirect(
      new URL("/thank-you", req.url)
    );
  }

  return Response.redirect(
    new URL("/payment-failed", req.url)
  );
}
