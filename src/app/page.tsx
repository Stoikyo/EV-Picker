export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.12),transparent_35%)]" />
        <header className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:py-28">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100 backdrop-blur dark:bg-white/10 dark:text-indigo-200 dark:ring-white/10">
                Fresh Next.js Starter
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 backdrop-blur dark:bg-emerald-900/30 dark:text-emerald-200 dark:ring-emerald-800/60">
                Deployed on Vercel ✅
              </p>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Build your next idea with Next.js, TypeScript, and Tailwind.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
              You’re running locally on <span className="font-semibold">http://localhost:3001</span>. Edit{" "}
              <code className="rounded bg-white/60 px-1 py-0.5 text-sm text-indigo-700 ring-1 ring-indigo-100 dark:bg-white/10 dark:text-indigo-200 dark:ring-white/10">
                src/app/page.tsx
              </code>{" "}
              and watch changes hot-reload.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/40"
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
              >
                Deploy to Vercel
              </a>
              <a
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-white/5"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
              >
                View Docs
              </a>
            </div>
          </div>
          <div className="relative mt-10 w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur-sm dark:border-zinc-800 dark:bg-white/5">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              <span>Local dev</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200 dark:bg-green-900/30 dark:text-green-200 dark:ring-green-800">
                ● Running
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-zinc-700 dark:text-zinc-200">
              <div className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="font-medium text-zinc-900 dark:text-white">Hostname</span>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">localhost</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="font-medium text-zinc-900 dark:text-white">Port</span>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">3001</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="font-medium text-zinc-900 dark:text-white">Framework</span>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">Next.js 16 + Turbopack</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="font-medium text-zinc-900 dark:text-white">Stack</span>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">TypeScript · Tailwind</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto mb-20 grid max-w-5xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Edit & save",
              desc: "Modify src/app/page.tsx to see instant hot reloads in the browser.",
              href: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
            },
            {
              title: "Run lint",
              desc: "Use npm run lint to keep the project tidy and catch issues early.",
              href: "https://nextjs.org/docs/app/building-your-application/configuring/eslint",
            },
            {
              title: "Ship to Vercel",
              desc: "Deploy directly or connect a repo—Next.js is auto-detected.",
              href: "https://vercel.com/new",
            },
          ].map((card) => (
            <a
              key={card.title}
              className="group rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-white/5 dark:focus-visible:ring-offset-black"
              href={card.href}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-lg font-semibold text-zinc-900 transition group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-200">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 transition group-hover:text-zinc-800 dark:text-zinc-300 dark:group-hover:text-zinc-100">
                {card.desc}
              </p>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
