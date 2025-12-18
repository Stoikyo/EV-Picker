export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex max-w-[1100px] flex-col gap-12 px-6 pb-16 pt-16">
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

        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
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
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <span>3 recommendations</span>
              <span>•</span>
              <span>Delivered within 48 hours</span>
              <span>•</span>
              <span>One-time payment</span>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Your EV Picker report</p>
              <span className="text-xs text-slate-600">Preview</span>
            </div>
            <div className="space-y-4 text-sm text-slate-800">
              {[1, 2, 3].map((num) => (
                <div key={num} className="space-y-1 rounded-md border border-slate-200 p-3">
                  <p className="text-sm font-semibold">Recommendation {num}</p>
                  <p className="text-xs text-slate-600">Why it fits</p>
                  <p className="text-xs text-slate-600">Watch-outs</p>
                  <p className="text-xs text-slate-600">Charging notes</p>
                </div>
              ))}
              <div className="space-y-1 rounded-md border border-slate-200 p-3">
                <p className="text-sm font-semibold">Next steps</p>
                <p className="text-xs text-slate-600">What to do after you pick.</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 pb-20">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">If this sounds familiar, you’re not alone.</h2>
          <ul className="space-y-2 text-lg text-slate-800">
            <li>• Conflicting reviews everywhere</li>
            <li>• Specs that don’t translate to real life</li>
            <li>• Range anxiety mixed with charging confusion</li>
            <li>• Not wanting to talk to dealers yet</li>
            <li>• Just wanting someone to narrow it down</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What EV Picker actually does</h2>
          <p className="text-lg text-slate-800">
            You answer practical questions about driving, budget, and charging. We assess trade-offs, not perfection,
            and you always get exactly three EVs with reasons—not just specs.
          </p>
          <p className="text-lg text-slate-700">Three options is enough to compare without getting stuck.</p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">What you get</h2>
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

        <section id="how-it-works" className="space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="space-y-3 text-lg text-slate-800">
            <li>1) Answer questions (5–7 minutes).</li>
            <li>2) Pay once via Stripe.</li>
            <li>3) We prepare your report (human-reviewed, considered output).</li>
            <li>4) Delivered by email within 48 hours.</li>
          </ol>
        </section>

        <section className="rounded-md border border-slate-200 bg-slate-50 p-5">
          <div className="space-y-2 text-lg text-slate-800">
            <p>One-time payment.</p>
            <p>No subscriptions.</p>
            <p>No dealer payments.</p>
            <p>No handoffs.</p>
            <p>We only use your answers to build the report.</p>
            <p>If it’s not useful, we’ll make it right.</p>
          </div>
        </section>

        <section id="pricing" className="space-y-4">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <div className="space-y-2 text-lg text-slate-800">
            <p>$149 one-time.</p>
            <p>Delivered by email.</p>
            <p>No account required.</p>
          </div>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Get your report — $149
          </a>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">FAQ</h2>
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
              <details key={item.q} className="rounded-md border border-slate-200 p-3">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                <p className="pt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Ready to stop researching?</h2>
          <a className="btn btn-primary w-fit" href="/get-your-ev-picker">
            Get your report — $149
          </a>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span>3 recommendations</span>
            <span>•</span>
            <span>Delivered within 48 hours</span>
            <span>•</span>
            <span>One-time payment</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
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
