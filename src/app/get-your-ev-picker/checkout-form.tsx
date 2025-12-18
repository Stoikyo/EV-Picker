"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  location: string;
  budgetRange: string;
  primaryUse: string;
  longestDrive: string;
  homeCharging: string;
  notes: string;
};

const budgetOptions = [
  "Under $40k",
  "$40k–$60k",
  "$60k–$80k",
  "$80k–$110k",
  "$110k+",
];

const primaryUseOptions = ["Commuting", "Family", "Weekend trips", "Mix"];
const longestDriveOptions = ["<50km", "50–150km", "150–300km", "300km+"];
const homeChargingOptions = ["Yes", "No", "Not sure"];

export function CheckoutForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    location: "",
    budgetRange: budgetOptions[1],
    primaryUse: primaryUseOptions[3],
    longestDrive: longestDriveOptions[1],
    homeCharging: homeChargingOptions[2],
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to start checkout. Please try again.");
      }
      const data = await res.json();
      if (!data?.url) {
        throw new Error("No checkout URL returned. Please try again.");
      }
      window.location.href = data.url as string;
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-800">Full name</span>
          <input
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-100 transition focus:border-blue-500 focus:ring-2"
            placeholder="Alex Smith"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-800">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-100 transition focus:border-blue-500 focus:ring-2"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-800">Location (city/suburb)</span>
        <input
          required
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-100 transition focus:border-blue-500 focus:ring-2"
          placeholder="Sydney, Melbourne, Brisbane..."
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-800">Budget range</span>
          <select
            value={form.budgetRange}
            onChange={(e) => updateField("budgetRange", e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-800">Primary use</span>
          <select
            value={form.primaryUse}
            onChange={(e) => updateField("primaryUse", e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {primaryUseOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-800">Typical longest drive</span>
          <select
            value={form.longestDrive}
            onChange={(e) => updateField("longestDrive", e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {longestDriveOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-slate-800">Home charging access</span>
          <select
            value={form.homeCharging}
            onChange={(e) => updateField("homeCharging", e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {homeChargingOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-800">Notes (optional)</span>
        <textarea
          value={form.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          className="min-h-[120px] rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-100 transition focus:border-blue-500 focus:ring-2"
          placeholder="Any makes you like, constraints, or must-haves."
        />
      </label>

      {error && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Starting checkout..." : "Continue to secure checkout"}
      </button>
      <p className="text-center text-xs text-slate-500">
        Payments handled by Stripe. You’ll receive a confirmation email and your report once it’s prepared.
      </p>
    </form>
  );
}
