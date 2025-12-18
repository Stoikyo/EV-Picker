import { Resend } from "resend";
import { requireEnv } from "./env";

const resendApiKey = process.env.RESEND_API_KEY;
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendOrderEmail(params: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  if (!resend) {
    console.warn("Resend API key not set; email skipped");
    return;
  }

  const from = requireEnv("EMAIL_FROM");
  await resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
}
