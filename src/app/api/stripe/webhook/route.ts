import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { generateReport } from "@/lib/generateReport";
import { sendOrderEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    console.error("Missing stripe signature or webhook secret");
    return NextResponse.json({ error: "Unauthorized" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};
    try {
      const order = await prisma.order.upsert({
        where: { stripeCheckoutSessionId: session.id },
        update: {
          stripePaymentStatus: session.payment_status || "paid",
          reportStatus: "pending",
        },
        create: {
          name: metadata.name || "Unknown",
          email: metadata.email || (session.customer_details?.email ?? "unknown@example.com"),
          location: metadata.location || "",
          budgetRange: metadata.budgetRange || "",
          primaryUse: metadata.primaryUse || "",
          longestDrive: metadata.longestDrive || "",
          homeCharging: metadata.homeCharging || "",
          notes: metadata.notes || "",
          stripeCheckoutSessionId: session.id,
          stripePaymentStatus: session.payment_status || "paid",
          reportStatus: "pending",
        },
      });

      const report = await generateReport(order);
      await prisma.order.update({
        where: { id: order.id },
        data: {
          reportStatus: report.status === "ready" ? "sent" : "pending",
          reportUrl: report.url,
        },
      });

      const toEmail = metadata.email || session.customer_details?.email;
      if (toEmail) {
        await sendOrderEmail({
          to: toEmail,
          subject: "We received your EV Picker order",
          html: `
            <p>Hi ${metadata.name || "there"},</p>
            <p>Thanks for your order. We’re preparing your EV Picker report now.</p>
            <p>What happens next:</p>
            <ul>
              <li>We’ll tailor your shortlist based on what you shared.</li>
              <li>We’ll email your report as soon as it’s ready (usually within 48 hours).</li>
              <li>If we need anything else, we’ll reach out.</li>
            </ul>
            <p>If you didn’t make this request, reply to let us know.</p>
            <p>— EV Picker</p>
          `,
        });
      }
    } catch (err) {
      console.error("Error handling checkout.session.completed", err);
      return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
