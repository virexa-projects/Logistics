import crypto from "crypto";
import { API_CONFIG } from "@/utils/apiConfig";

const SECRET = API_CONFIG.RAZORPAY_KEY_SECRET;

export async function POST(req) {
  try {
    let order_id, payment_id, signature;
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const data = await req.json();
      order_id = data.razorpay_order_id;
      payment_id = data.razorpay_payment_id;
      signature = data.razorpay_signature;
    } else {
      const body = await req.formData();
      order_id = body.get("razorpay_order_id");
      payment_id = body.get("razorpay_payment_id");
      signature = body.get("razorpay_signature");
    }

    const expected = crypto
      .createHmac("sha256", SECRET)
      .update((order_id || "") + "|" + (payment_id || ""))
      .digest("hex");

    const isValid = expected === signature;

    if (contentType.includes("application/json")) {
      return Response.json(
        {
          success: isValid,
          message: isValid ? "Payment verified successfully" : "Invalid payment signature",
        },
        { status: isValid ? 200 : 400 }
      );
    }

    if (isValid) {
      return Response.redirect(new URL("/thank-you", req.url));
    }

    return Response.redirect(new URL("/payment-failed", req.url));
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
