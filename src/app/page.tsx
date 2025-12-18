export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-10 pt-12">
        <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span className="text-base font-semibold text-slate-900">EV Picker</span>
          <div className="hidden items-center gap-4 sm:flex">
            <a href="#after-you-pay" className="hover:text-blue-700">
              After you pay
            </a>
            <a href="/privacy" className="hover:text-blue-700">
              Privacy
            </a>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            A paid EV decision helper that tells you exactly what to buy.
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Answer a few practical questions. Get a concise report with 2–3 EVs that fit your life—and the next steps
            to buy confidently.
          </p>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Get your EV Picker for $149
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-14 px-6 pb-16">
        <section aria-labelledby="what-you-get" className="space-y-4">
          <h2 id="what-you-get" className="text-2xl font-semibold">
            What you get
          </h2>
          <div className="space-y-2 text-lg text-slate-800">
            <p>Your best 2–3 EV options and why they fit your driving and budget.</p>
            <p>The specs that matter for your trips and charging—no noise.</p>
            <p>Plain-English next steps to move forward without second-guessing.</p>
          </div>
        </section>

        <section
          id="after-you-pay"
          aria-labelledby="after-you-pay-heading"
          className="space-y-3 bg-slate-900 px-6 py-8 text-slate-100"
        >
          <h2 id="after-you-pay-heading" className="text-2xl font-semibold text-white">
            After you pay
          </h2>
          <p className="text-lg text-slate-200">We confirm by email, then start your report immediately.</p>
          <p className="text-lg text-slate-200">You get your shortlist and next steps in your inbox—usually within 48 hours.</p>
          <p className="text-lg text-slate-200">No upsells. No dealer handoffs. Just a confident recommendation.</p>
        </section>

        <section aria-labelledby="pricing" className="space-y-4">
          <h2 id="pricing" className="text-2xl font-semibold">
            Pricing and trust
          </h2>
          <div className="space-y-2 text-lg text-slate-800">
            <p>$149 one-time. Secure Stripe Checkout.</p>
            <p>Your information is only used to build your report. No subscriptions. No spam.</p>
            <p>If we can’t deliver a useful report, we’ll make it right.</p>
          </div>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Start your EV Picker for $149
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-slate-900">EV Picker</span>
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
  );
}
