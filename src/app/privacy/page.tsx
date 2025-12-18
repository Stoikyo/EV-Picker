export const metadata = {
  title: "Privacy | EV Picker",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">
        We only collect the information needed to prepare your EV Picker report and process your payment. We do
        not sell or share your data with third-party advertisers.
      </p>
      <div className="mt-6 space-y-4 text-slate-700">
        <p>We collect the answers you provide, your email, and payment details via Stripe Checkout.</p>
        <p>We use your email to send confirmations and your report. You can request deletion at any time.</p>
        <p>Payments are handled by Stripe; we don’t store your card details.</p>
      </div>
      <p className="mt-6 text-slate-600">
        Questions? Reach out to our support email listed in your order confirmation.
      </p>
    </div>
  );
}
