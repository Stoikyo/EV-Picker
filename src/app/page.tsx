export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(10,102,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(8,79,194,0.08),transparent_35%)]" />
        <header className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-14 sm:pb-24 lg:flex-row lg:items-center lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/assets/EVPICKER-LOGO-final.png"
                  alt="EV Picker"
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700">EV Picker</p>
                <p className="text-xs text-slate-600">Buyer-first recommendations</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge bg-white text-blue-700 ring-1 ring-blue-100">
                EV Picker · Buyer-first
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Cut through EV noise. Get a clear, confident shortlist.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              Answer a few practical questions, pay once, and receive a tailored EV report:
              the right 2–3 options, why they fit your life, and what to do next. No dealer spam. No endless research loops.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/get-your-ev-picker">
                Get your EV Picker
              </a>
              <a className="btn btn-secondary" href="#how-it-works">
                How it works
              </a>
              <a className="btn btn-text" href="/privacy">
                Privacy first
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Pay once, no subscriptions
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Human-reviewed recommendations
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Report by email in under 48h
              </div>
            </div>
          </div>
          <div className="relative mt-6 w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-500/10">
            <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span>What you get</span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 ring-1 ring-blue-100">
                Buyer-first
              </span>
            </div>
            <div className="space-y-4">
              {[
                "Your top 2–3 EV matches with why they fit.",
                "Key specs that actually matter for your lifestyle.",
                "Charging + cost notes you can act on.",
                "Plain-English next steps so you can buy confidently.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700 ring-1 ring-blue-200">
                    ✓
                  </span>
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-slate-900 px-5 py-4 text-slate-100">
              <p className="text-sm text-slate-300">Transparent pricing</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">$149</span>
                <span className="text-sm text-slate-400">one-time</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Pay via secure Stripe Checkout. No subscriptions. No upsells.
              </p>
            </div>
          </div>
        </header>

        <section
          id="how-it-works"
          className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 sm:pb-24"
        >
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              How it works
            </p>
            <h2 className="text-3xl font-semibold">Three steps, low effort</h2>
            <p className="max-w-3xl text-slate-700">
              Keep it simple: answer a few lifestyle questions, pay once, and we’ll send a concise report. No
              accounts to create, no endless forms.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "1) Tell us about your driving",
                desc: "Location, budget, typical trips, charging access, and any notes.",
              },
              {
                title: "2) Pay securely via Stripe",
                desc: "One-time payment. No subscriptions. You’ll see the price before you pay.",
              },
              {
                title: "3) Get your report by email",
                desc: "A clear shortlist with reasons, key specs, and next steps—usually within 48 hours.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-base font-semibold text-blue-700 ring-1 ring-blue-100">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Ready when you are
                </p>
                <h3 className="text-xl font-semibold">Start your EV Picker in under 2 minutes</h3>
                <p className="text-sm text-slate-700">
                  We’ll confirm by email, then send your tailored report once payment clears.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-primary" href="/get-your-ev-picker">
                  Start the form
                </a>
                <a className="btn btn-secondary" href="/terms">
                  See terms
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
