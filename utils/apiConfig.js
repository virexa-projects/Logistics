/**
 * Centralized API configuration for external services.
 * You can easily update URLs & Razorpay keys here in one single place,
 * or set environment variables in your .env / .env.local file.
 */

// ⚙️ Choose mode: "test" or "live"
const RAZORPAY_ENV = process.env.NEXT_PUBLIC_RAZORPAY_ENV || "live";

const RAZORPAY_KEYS = {
  test: {
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_S9MbPhPiYZr1P9",
    key_secret: process.env.RAZORPAY_KEY_SECRET || "XqgnLetVkiuJK8wIZcqckftH",
  },
  live: {
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_SUAtPnMwmeZpX4",
    key_secret: process.env.RAZORPAY_KEY_SECRET || "TrY02BPqyChYp45ZPIBEVhDO",
  },
};

export const API_CONFIG = {
  GOOGLE_SHEET_URL:
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
    "https://script.google.com/macros/s/AKfycbyaYT_L0JhQ9oEWhJrX1TvKghx4M624e3myTqDB1pwuhU8sznkw5j5AwWJqxzmn1auTMw/exec",
  VIREXA_MESSAGE_API_URL:
    process.env.NEXT_PUBLIC_VIREXA_MESSAGE_API_URL ||
    "https://api.virexa.in/v1/message/send-message?token=1a051309720abd839dd2a59adff7240a485c2f2ac8aae63d654f456fa19662cd5254d594e0b476d110e78332044d3e35802efea6ce118bde4e53feb1bb86ff28",

  // Razorpay Active Mode & Keys
  RAZORPAY_ENV,
  RAZORPAY_KEY_ID: RAZORPAY_KEYS[RAZORPAY_ENV]?.key_id || RAZORPAY_KEYS.test.key_id,
  RAZORPAY_KEY_SECRET: RAZORPAY_KEYS[RAZORPAY_ENV]?.key_secret || RAZORPAY_KEYS.test.key_secret,
};