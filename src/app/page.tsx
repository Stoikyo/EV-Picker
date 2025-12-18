export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-900">
      <header className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 pb-12 pt-12">
        <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
          <span className="text-base font-semibold text-slate-900">EV Picker</span>
        </div>
        <section className="space-y-4">
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            EV research is loud. You need a clear answer.
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Conflicting reviews, specs that don’t match real life, and too many tabs open. You want someone to narrow it
            down, not add more noise.
          </p>
        </section>
      </header>

      <main className="mx-auto flex max-w-[1100px] flex-col gap-14 px-6 pb-20">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What happens if I pay?</h2>
          <p className="text-lg text-slate-800">
            You answer a few practical questions about driving, budget, and charging. We send you three EV
            recommendations, why each fits you, what to watch out for, and charging considerations—delivered by email
            within 48 hours. You’ll know what to do next.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Why three?</h2>
          <p className="text-lg text-slate-800">Three is enough to compare without getting stuck. More is just noise.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Trust & independence</h2>
          <p className="text-lg text-slate-800">
            No dealer influence. No subscriptions. One-time payment. Your answers are used only to build your report. If
            it’s not useful, we’ll make it right.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Pricing</h2>
          <div className="space-y-2 rounded-md border border-[var(--color-border)] bg-white p-5">
            <p className="text-3xl font-semibold text-slate-900">$149</p>
            <p className="text-sm text-slate-700">One-time. Delivered by email within 48 hours.</p>
            <p className="text-sm text-slate-700">Human-reviewed. No dealer payments. No subscriptions.</p>
            <a className="btn btn-primary mt-4 w-fit" href="/get-your-ev-picker">
              Get your report — $149
            </a>
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
