export const metadata = {
  title: "Checkout cancelled | EV Picker",
};

export default function Cancelled() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
          Checkout cancelled
        </div>
        <h1 className="text-3xl font-semibold">No worries—nothing was charged.</h1>
        <p className="mt-3 text-slate-700">
          You can restart the form anytime. If you had an issue at checkout and need help, reach out and we’ll get
          you sorted.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/get-your-ev-picker">
            Try again
          </a>
          <a className="btn btn-secondary" href="/">
            Back home
          </a>
        </div>
      </div>
    </div>
  );
}
