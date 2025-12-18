export const metadata = {
  title: "Payment received | EV Picker",
};

export default function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          ✓ Payment received
        </div>
        <h1 className="text-3xl font-semibold">Thanks for your order!</h1>
        <p className="mt-3 text-slate-700">
          We’re preparing your EV Picker report now. You’ll receive a confirmation email shortly with next steps,
          and we’ll send your tailored shortlist as soon as it’s ready.
        </p>
        <div className="mt-6 space-y-2 text-sm text-slate-600">
          <p>What to expect:</p>
          <ul className="space-y-1 pl-5">
            <li className="list-disc">A confirmation email within a few minutes.</li>
            <li className="list-disc">Your report by email—usually within 48 hours.</li>
            <li className="list-disc">If we need anything else, we’ll reach out.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/">
            Back to homepage
          </a>
          <a className="btn btn-secondary" href="/get-your-ev-picker">
            Start another order
          </a>
        </div>
      </div>
    </div>
  );
}
