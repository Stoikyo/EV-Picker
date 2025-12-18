import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { getSiteUrl, requireEnv } from "@/lib/env";

type Body = {
  name?: string;
  email?: string;
  location?: string;
  budgetRange?: string;
  primaryUse?: string;
  longestDrive?: string;
  homeCharging?: string;
  notes?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    if (!body.name || !body.email || !body.location) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const priceId = requireEnv("STRIPE_PRICE_ID");
    const headerList = await headers();
    const origin = getSiteUrl(headerList.get("host") || undefined);

    const metadata = {
      name: body.name,
      email: body.email,
      location: body.location,
      budgetRange: body.budgetRange || "",
      primaryUse: body.primaryUse || "",
      longestDrive: body.longestDrive || "",
      homeCharging: body.homeCharging || "",
      notes: (body.notes || "").slice(0, 400),
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancelled`,
      customer_email: body.email,
      metadata,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error", error);
    return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 });
  }
}
