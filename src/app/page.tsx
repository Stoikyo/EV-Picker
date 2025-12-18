import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-12 pt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/assets/EVPICKER-LOGO-final.png"
                alt="EV Picker"
                width={64}
                height={64}
                priority
              />
            </div>
            <div>
              <p className="text-base font-semibold text-blue-700">EV Picker</p>
              <p className="text-xs text-slate-600">Paid, buyer-first EV recommendations</p>
            </div>
          </div>
          <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 sm:flex">
            <a href="#how-it-works" className="hover:text-blue-700">
              How it works
            </a>
            <a href="/privacy" className="hover:text-blue-700">
              Privacy
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Stop doom-scrolling specs. Get a confident EV shortlist.
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            A paid decision helper that turns a few lifestyle answers into a clear shortlist of 2–3 EVs and a
            simple report. No dealer spam. No endless research loops.
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
          <div className="space-y-3 text-lg text-slate-800">
            <p>• Your best 2–3 EV options, with why they fit your life.</p>
            <p>• Specs that matter for your trips and charging—without the noise.</p>
            <p>• Plain-English next steps so you can buy confidently.</p>
          </div>
        </section>

        <section aria-labelledby="how-it-works" className="space-y-4">
          <h2 id="how-it-works" className="text-2xl font-semibold">
            How it works
          </h2>
          <div className="space-y-3 text-lg text-slate-800">
            <p>1) Tell us about your driving, budget, and charging access.</p>
            <p>2) Pay securely via Stripe (one-time, $149).</p>
            <p>3) We send your report by email—usually within 48 hours.</p>
          </div>
        </section>

        <section aria-labelledby="after-you-pay" className="space-y-4 rounded-2xl bg-slate-900 px-6 py-8 text-slate-100">
          <h2 id="after-you-pay" className="text-2xl font-semibold text-white">
            After you pay
          </h2>
          <div className="space-y-2 text-lg text-slate-200">
            <p>We confirm by email and start your report immediately.</p>
            <p>You get a clear shortlist and next steps in your inbox—typically within 48 hours.</p>
            <p>No upsells. No dealer handoffs. Just a confident recommendation.</p>
          </div>
        </section>

        <section aria-labelledby="pricing" className="space-y-4">
          <h2 id="pricing" className="text-2xl font-semibold">
            Pricing and trust
          </h2>
          <div className="space-y-2 text-lg text-slate-800">
            <p>$149 one-time. Secure Stripe Checkout.</p>
            <p>We only use your info to build your report. No subscriptions. No spam.</p>
            <p>If we can’t deliver a useful report, we’ll make it right.</p>
          </div>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Start your EV Picker for $149
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
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
  );
}
