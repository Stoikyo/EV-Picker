import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-900">
      <header className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 pb-14 pt-10">
        <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span className="text-base font-semibold text-slate-900">EV Picker</span>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#how-it-works" className="hover:text-[var(--color-primary)]">
              How it works
            </a>
            <a href="#pricing" className="hover:text-[var(--color-primary)]">
              Pricing
            </a>
            <a href="/privacy" className="hover:text-[var(--color-primary)]">
              Privacy
            </a>
            <a className="btn btn-primary" href="/get-your-ev-picker">
              Get report — $149
            </a>
          </div>
        </div>

        <section className="grid gap-10 rounded-md border border-[var(--color-border)] bg-white/85 p-6 shadow-soft lg:grid-cols-[1.05fr,0.95fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/EVPICKER-LOGO-final.png"
                alt="EV Picker"
                width={72}
                height={72}
                className="h-16 w-16"
                priority
              />
              <p className="text-sm font-semibold text-slate-700">EV Picker</p>
            </div>
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
              Stop doom-scrolling EV specs. Get a clear shortlist.
            </h1>
            <p className="max-w-3xl text-lg text-slate-700">
              Tell us how you drive. We’ll send exactly three EVs that fit, why they fit, what to watch out for, and how
              to move forward—without dealer noise or endless tabs.
            </p>
            <div className="flex flex-col gap-2">
              <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
                Get your report — $149
              </a>
              <p className="text-sm text-slate-600">3 picks · Delivered within 48 hours · One-time payment</p>
            </div>
          </div>

          <div className="rounded-md border border-[var(--color-border)] bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Your EV Picker report</p>
              <span className="pill text-xs">Delivered by email</span>
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-800">
              {[{ title: "Recommendation 1", tag: "Best fit" }, { title: "Recommendation 2", tag: "Alt choice" }, { title: "Recommendation 3", tag: "Consider if" }].map(
                (item) => (
                  <div key={item.title} className="space-y-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <span className="pill text-xs">{item.tag}</span>
                    </div>
                    <p className="text-xs text-slate-600">Why it fits · Watch-outs · Charging notes</p>
                  </div>
                )
              )}
              <div className="space-y-1 rounded-md border border-[var(--color-border)] p-3">
                <p className="text-sm font-semibold">Next steps</p>
                <p className="text-xs text-slate-600">What to do after you pick.</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto flex max-w-[1100px] flex-col gap-14 px-6 pb-24">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">This is for people who…</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Feel stuck in research", desc: "Reviews and advice conflict; nothing feels clear." },
              { title: "See specs but not real life", desc: "Range and charging numbers don’t translate to their drives." },
              { title: "Don’t want dealer pressure", desc: "Prefer clarity before stepping into a showroom." },
              { title: "Want a short, confident list", desc: "Not another comparison doc—just a decision they can trust." },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-[var(--color-border)] bg-white p-4">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold">What you’ll get, plainly</h2>
          <p className="text-lg text-slate-800">
            You answer practical questions about driving, budget, and charging. We send three EV recommendations, why
            each fits, what to watch out for, and charging considerations—by email within 48 hours. You know what to do
            next.
          </p>
          <p className="text-lg text-slate-700">Three options is enough to compare without getting stuck.</p>
        </section>

        <section id="how-it-works" className="space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="space-y-3 text-lg text-slate-800">
            <p>Answer questions (5–7 minutes) about driving, budget, and charging.</p>
            <p>Pay once ($149). We prepare and review your report.</p>
            <p>Receive your three picks, reasons, and next steps by email within 48 hours.</p>
          </div>
        </section>

        <section id="trust" className="space-y-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-tint)] p-5">
          <h2 className="text-2xl font-semibold text-slate-900">Trust & independence</h2>
          <p className="text-lg text-slate-800">
            No dealer influence. No subscriptions. One-time payment. Your answers are only used to build the report. If
            it’s not useful, we’ll make it right.
          </p>
        </section>

        <section id="pricing" className="space-y-4">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <div className="space-y-3 rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft">
            <p className="text-4xl font-semibold text-slate-900">$149</p>
            <p className="text-sm text-slate-700">One-time. Delivered by email within 48 hours.</p>
            <p className="text-sm text-slate-700">Human-reviewed. No dealer payments. No subscriptions.</p>
            <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
              Get your report — $149
            </a>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="space-y-2 text-sm text-slate-800">
            {[
              {
                q: "What information do you need?",
                a: "Your name, email, location, budget range, driving patterns, and charging access. Optional notes if you have constraints.",
              },
              {
                q: "Why only three EVs?",
                a: "Three options are enough to compare without getting stuck. More adds noise.",
              },
              {
                q: "How fast is delivery?",
                a: "We aim to send your report within 48 hours of payment.",
              },
              {
                q: "Are you independent from dealers?",
                a: "Yes. No dealer payments, no referrals. You pay once for the report.",
              },
              {
                q: "What if I’m still unsure?",
                a: "Your report includes next steps. If it’s not useful, we’ll make it right.",
              },
              {
                q: "Is this suitable for first-time EV buyers?",
                a: "Yes. It’s written in plain English for people who don’t want to be EV experts.",
              },
            ].map((item) => (
              <details key={item.q} className="rounded-md border border-[var(--color-border)] bg-white p-2">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="pt-1 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Ready to stop researching?</h2>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Get your report — $149
          </a>
          <p className="text-sm text-slate-600">3 picks · Delivered within 48 hours · One-time payment</p>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-white/90">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-6 py-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-slate-900">EV Picker</span>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/privacy" className="hover:text-[var(--color-primary)]">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[var(--color-primary)]">
              Terms
            </a>
            <a href="mailto:hello@evpicker.com" className="hover:text-[var(--color-primary)]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
