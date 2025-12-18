export const metadata = {
  title: "Terms | EV Picker",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-semibold">Terms</h1>
      <p className="mt-4 text-slate-700">
        EV Picker is a paid recommendation service. By purchasing, you agree to the following:
      </p>
      <div className="mt-6 space-y-4 text-slate-700">
        <p>We provide guidance based on the information you share. The final purchase decision is yours.</p>
        <p>Payments are processed by Stripe; refunds are handled case by case if we have not delivered a report.</p>
        <p>Reports are delivered digitally via email. Delivery timelines are estimates.</p>
      </div>
      <p className="mt-6 text-slate-600">
        For questions about these terms, contact us via the email in your order confirmation.
      </p>
    </div>
  );
}
