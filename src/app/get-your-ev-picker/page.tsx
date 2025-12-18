import { CheckoutForm } from "./checkout-form";

export const metadata = {
  title: "Get your EV Picker",
  description: "Answer a few questions and get a tailored EV shortlist and report.",
};

export default function GetYourEvPicker() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-14">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            EV Picker · Order
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Tell us about your driving. We’ll handle the EV shortlist.
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            This is a quick, plain-English form. No accounts or subscriptions. After payment, you’ll get an
            email confirming your order, and we’ll send your report—usually within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="badge bg-blue-50 text-blue-800 ring-1 ring-blue-100">One-time $149</span>
            <span className="badge">Secure Stripe Checkout</span>
            <span className="badge">No dealer spam</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Your details</h2>
            <p className="text-sm text-slate-600">
              We’ll use this to tailor your shortlist and send your report.
            </p>
            <div className="mt-6">
              <CheckoutForm />
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">What happens next</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                You’ll be redirected to Stripe to pay securely.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                After payment, we’ll confirm by email and start your report.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                We aim to send your shortlist and recommendations within 48 hours.
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What’s in the report</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• 2–3 EV recommendations that fit your life</li>
                <li>• Key specs that matter (range, charging, practicality)</li>
                <li>• Charging + cost considerations</li>
                <li>• Plain-English next steps</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
