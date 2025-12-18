export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-900">
      <header className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 pb-16 pt-12">
        <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span className="text-base font-semibold text-slate-900">EV Picker</span>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#how-it-works" className="hover:text-blue-700">
              How it works
            </a>
            <a href="#pricing" className="hover:text-blue-700">
              Pricing
            </a>
            <a href="/privacy" className="hover:text-blue-700">
              Privacy
            </a>
            <a className="btn btn-primary" href="/get-your-ev-picker">
              Get report — $149
            </a>
          </div>
        </div>

        <section className="grid gap-10 rounded-md border border-[var(--color-border)] bg-white/80 p-6 shadow-soft lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
              Stop doing EV homework every night.
            </h1>
            <p className="max-w-3xl text-lg text-slate-700">
              Tell us how you drive. We’ll send back 3 EVs that fit, why they fit, and what to do next—without drowning
              you in specs.
            </p>
            <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
              Get your report — $149
            </a>
            <div className="flex flex-wrap gap-2 text-sm text-slate-700">
              <span className="pill">3 recommendations</span>
              <span className="pill">Delivered within 48 hours</span>
              <span className="pill">One-time payment</span>
            </div>
          </div>

          <div className="rounded-md border border-[var(--color-border)] bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Your EV Picker report</p>
              <span className="pill text-xs">Delivered by email</span>
            </div>
            <div className="space-y-4 text-sm text-slate-800">
              {[{ label: "Recommendation 1", tag: "Best value" }, { label: "Recommendation 2", tag: "Longest range" }, { label: "Recommendation 3", tag: "Easiest charging" }].map(
                (item) => (
                  <div key={item.label} className="space-y-2 rounded-md border border-[var(--color-border)] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{item.label}</p>
                      <span className="pill text-xs">{item.tag}</span>
                    </div>
                    <div className="grid gap-1 text-xs text-slate-600">
                      <span>Why it fits</span>
                      <span>Watch-outs</span>
                      <span>Charging notes</span>
                    </div>
                  </div>
                )
              )}
              <div className="space-y-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-tint)] p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Next steps</p>
                  <span className="text-xs text-slate-600">Action plan</span>
                </div>
                <p className="text-xs text-slate-700">What to do after you pick.</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-24">
        <section className="space-y-4">
          <h2 className="section-heading text-2xl font-semibold">If this sounds familiar, you’re not alone.</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Conflicting reviews everywhere", desc: "Every source says something different." },
              { title: "Specs don’t translate", desc: "Range and charging claims rarely match real life." },
              { title: "Range anxiety + charging confusion", desc: "Not sure if trips or infrastructure are covered." },
              { title: "Avoiding dealers for now", desc: "Want clarity before stepping into a showroom." },
              { title: "Too many models", desc: "Need someone to narrow it down decisively." },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-[var(--color-border)] bg-white p-4">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft">
          <h2 className="section-heading text-2xl font-semibold">What EV Picker actually does</h2>
          <p className="text-lg text-slate-800">
            You answer practical questions about driving, budget, and charging. We assess trade-offs, not perfection,
            and you always get exactly three EVs with reasons—not just specs.
          </p>
          <p className="text-lg text-slate-700">Three options is enough to compare without getting stuck.</p>
        </section>

        <section className="grid gap-8 rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="section-heading text-2xl font-semibold">What you get</h2>
            <p className="text-lg text-slate-800">
              A concise report that narrows the field and tells you what to do next—built around your real-world use.
            </p>
          </div>
          <div className="space-y-2 text-lg text-slate-800">
            <p>
              <span className="font-semibold">Three EV recommendations</span> tailored to your reality.
            </p>
            <p>
              <span className="font-semibold">Why each one fits</span> and what to be aware of.
            </p>
            <p>
              <span className="font-semibold">Charging reality check</span> (home vs public).
            </p>
            <p>
              <span className="font-semibold">Key specs that actually matter</span> for your trips.
            </p>
            <p>
              <span className="font-semibold">Clear next steps</span> to move forward.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="space-y-5">
          <h2 className="section-heading text-2xl font-semibold">How it works</h2>
          <div className="relative border-l border-[var(--color-border)] pl-6">
            {[
              { title: "Answer questions", desc: "5–7 minutes about driving, budget, and charging." },
              { title: "Pay once via Stripe", desc: "One-time $149 payment." },
              { title: "We prepare your report", desc: "Human-reviewed, considered output." },
              { title: "Delivered within 48 hours", desc: "Report arrives by email." },
            ].map((step, idx) => (
              <div key={step.title} className="mb-6 last:mb-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-sm font-semibold text-slate-900">
                    {idx + 1}
                  </span>
                  <p className="text-base font-semibold text-slate-900">{step.title}</p>
                </div>
                <p className="ml-11 text-sm text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md bg-[var(--color-surface-tint)] p-6">
          <h2 className="section-heading text-2xl font-semibold text-slate-900">Trust & guarantees</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "One-time payment",
              "No subscriptions",
              "No dealer payments",
              "No handoffs",
              "We only use your answers to build the report",
              "If it’s not useful, we’ll make it right",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-md border border-[var(--color-border)] bg-white px-3 py-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <p className="text-sm text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-4">
          <h2 className="section-heading text-2xl font-semibold">Pricing</h2>
          <div className="rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-3xl font-semibold text-slate-900">$149</p>
            <p className="text-sm text-slate-600">One-time. Delivered by email. No account required.</p>
            <div className="mt-4 space-y-2 text-sm text-slate-800">
              <p>• 3 recommendations with reasons</p>
              <p>• Charging reality check</p>
              <p>• Plain-English next steps</p>
            </div>
            <div className="mt-5">
              <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
                Get your report — $149
              </a>
            </div>
            <p className="mt-2 text-xs text-slate-600">If it’s not useful, we’ll make it right.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="section-heading text-2xl font-semibold">FAQ</h2>
          <div className="space-y-3 text-base text-slate-800">
            {[
              {
                q: "What information do you need?",
                a: "Your name, email, location, budget range, driving patterns, and charging access. Optional notes if you have constraints.",
              },
              {
                q: "Why only three EVs?",
                a: "Three options are enough to compare without getting stuck. More than that creates decision fatigue.",
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
              <details
                key={item.q}
                className="rounded-md border border-[var(--color-border)] bg-white p-3 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="pt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="section-heading text-2xl font-semibold">Ready to stop researching?</h2>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Get your report — $149
          </a>
          <div className="flex flex-wrap gap-2 text-sm text-slate-700">
            <span className="pill">3 recommendations</span>
            <span className="pill">Delivered within 48 hours</span>
            <span className="pill">One-time payment</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-white/90">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-6 py-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
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
