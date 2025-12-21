import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-900">
      <header className="border-b border-[var(--color-border)] bg-white/90">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700">
          <Image src="/assets/EVPICKER-LOGO-final.png" alt="EV Picker" width={48} height={48} priority />
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#how-it-works" className="hover:text-[var(--color-primary)]">
              How it works
            </a>
            <a href="#benefits" className="hover:text-[var(--color-primary)]">
              Benefits
            </a>
            <a href="#pricing" className="hover:text-[var(--color-primary)]">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[var(--color-primary)]">
              FAQ
            </a>
            <a className="btn btn-primary" href="/get-your-ev-picker">
              Get report — $149
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-20 pt-10">
        <section className="grid gap-10 rounded-xl bg-white p-8 shadow-soft lg:grid-cols-[1.05fr,0.95fr]">
          <div className="flex flex-col gap-5">
            <Image src="/assets/EVPICKER-LOGO-final.png" alt="EV Picker" width={60} height={60} priority />
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
              Stop doom-scrolling EV specs. Get a clear shortlist.
            </h1>
            <p className="text-lg text-slate-700">
              Tell us how you drive. We’ll send exactly three EVs that fit, why they fit, what to watch out for, and how
              to move forward—without dealer noise or endless tabs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn btn-primary" href="/get-your-ev-picker">
                Get your report — $149
              </a>
              <p className="text-sm text-slate-600">3 picks · Delivered within 48 hours · One-time payment</p>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
            <Image
              src="/assets/hero-illustration.svg"
              alt="EV Picker hero illustration"
              width={640}
              height={400}
              className="w-full rounded-lg"
              priority
            />
          </div>
        </section>

        <section id="how-it-works" className="space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Tell us about you", desc: "Driving, budget, charging—5–7 minutes." },
              { title: "Pay once", desc: "One-time $149 via Stripe. No subscriptions." },
              { title: "Get your report", desc: "Three picks with reasons, delivered within 48 hours." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="space-y-4 rounded-xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="text-2xl font-semibold">Why people use EV Picker</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Clarity fast", desc: "Three options you can act on, not another research rabbit hole." },
              { title: "Reasons, not hype", desc: "Each pick includes why it fits and what to watch out for." },
              { title: "Charging reality check", desc: "Home vs public considerations spelled out." },
              { title: "Human-reviewed", desc: "No dealer influence. No upsells. Just a one-time report." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-[var(--color-bg)] p-4">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { quote: "In two days I had three real options with the reasons spelled out. Way better than weeks of tabs.", name: "Alex, first-time EV buyer" },
              { quote: "They told me what to watch for with charging, not just the brochure stats. Worth the $149.", name: "Priya, city commuter" },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                <p className="text-sm text-slate-800">“{item.quote}”</p>
                <p className="mt-2 text-xs font-semibold text-slate-700">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="text-lg text-slate-800">
            We’re EV specialists who care about clear decisions, not dealer leads. You pay once. We send a human-reviewed
            report you can act on without becoming an EV expert.
          </p>
        </section>

        <section id="pricing" className="space-y-4 rounded-xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="text-4xl font-semibold text-slate-900">$149</p>
          <p className="text-sm text-slate-700">One-time. Delivered by email within 48 hours. No subscriptions.</p>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Get your report — $149
          </a>
        </section>

        <section id="faq" className="space-y-3">
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
              <details key={item.q} className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="pt-1 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="text-2xl font-semibold">Ready to get your shortlist?</h2>
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
