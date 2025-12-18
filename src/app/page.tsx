import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(10,102,255,0.08),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(8,79,194,0.08),transparent_40%)]" />
        <header className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-12 pt-6">
          <nav className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/assets/EVPICKER-LOGO-final.png"
                  alt="EV Picker"
                  width={44}
                  height={44}
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700">EV Picker</p>
                <p className="text-xs text-slate-600">Buyer-first EV recommendations</p>
              </div>
            </div>
            <div className="hidden items-center gap-4 text-sm font-semibold text-slate-700 sm:flex">
              <a href="#how-it-works" className="hover:text-blue-700">
                How it works
              </a>
              <a href="/get-your-ev-picker" className="hover:text-blue-700">
                Get your EV Picker
              </a>
              <a href="/privacy" className="hover:text-blue-700">
                Privacy
              </a>
              <a href="/terms" className="hover:text-blue-700">
                Terms
              </a>
            </div>
            <a className="btn btn-primary hidden sm:inline-flex" href="/get-your-ev-picker">
              Start now ($149)
            </a>
          </nav>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                $149 · one-time · Stripe checkout
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Cut through EV noise. Get a clear, confident shortlist.
              </h1>
              <p className="max-w-2xl text-lg text-slate-700">
                Answer a few practical questions, pay once, and get a tailored EV report: the right 2–3 options,
                why they fit your life, and what to do next. No dealer spam. No endless research loops.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-primary" href="/get-your-ev-picker">
                  Get your EV Picker
                </a>
                <a className="btn btn-secondary" href="#how-it-works">
                  How it works
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "2–3 EV matches that fit your life",
                  "Plain-English next steps",
                  "Delivered by email in <48h",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-700">What you get</p>
                  <p className="text-xs text-slate-600">Buyer-first recommendations, no upsells.</p>
                </div>
                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
                  $149 one-time
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  "A shortlist of your best 2–3 EVs with why they fit.",
                  "Key specs that matter for your trips and charging.",
                  "Charging + cost notes you can act on.",
                  "Clear next steps so you can buy confidently.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
                      ✓
                    </span>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-slate-900 px-5 py-4 text-slate-100">
                <p className="text-sm text-slate-300">How it works after payment</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200">
                  <li>• We confirm by email and start your report.</li>
                  <li>• You get it in your inbox—usually within 48 hours.</li>
                  <li>• If we need anything else, we’ll reach out.</li>
                </ul>
              </div>
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
              Answer a few lifestyle questions, pay once, and we’ll send a concise report. No accounts to create, no
              endless forms.
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

        <footer className="border-t border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                <Image
                  src="/assets/EVPICKER-LOGO-final.png"
                  alt="EV Picker"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <p className="font-semibold">EV Picker</p>
                <p className="text-xs text-slate-500">Buyer-first EV recommendations</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/privacy" className="hover:text-blue-700">
                Privacy
              </a>
              <a href="/terms" className="hover:text-blue-700">
                Terms
              </a>
              <a href="mailto:hello@evpicker.com" className="hover:text-blue-700">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
