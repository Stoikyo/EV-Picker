import Stripe from "stripe";
import { requireEnv } from "./env";

const stripeSecret = requireEnv("STRIPE_SECRET_KEY");

export const stripe = new Stripe(stripeSecret, {
  apiVersion: "2024-10-28",
});
