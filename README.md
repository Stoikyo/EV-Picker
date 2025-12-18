This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal) to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment variables (local & Vercel)

Create `.env.local` from `.env.example` and set:

```
APP_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@host:5432/evpicker
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
EMAIL_FROM=evpicker@mail.example.com
ADMIN_PASSWORD=choose-a-strong-password
```

- Never commit real secrets. Avoid `NEXT_PUBLIC_` for sensitive values (those are exposed to the browser).
- In Vercel, add the same keys under Project Settings → Environment Variables (Production + Preview).

## Assets

- Place static images/logos in `public/assets/` and reference them with `/assets/filename.ext` in your JSX.
- The folder includes a `.gitkeep` so it stays in the repo even when empty.

## Local database (Prisma + Postgres)

- Uses Prisma with Postgres (Neon recommended). Set `DATABASE_URL` accordingly.
- After setting the env var, generate and sync schema:

```bash
npm run prisma:generate
npm run prisma:push
```

## Stripe setup

- Create a one-time price in Stripe and set `STRIPE_PRICE_ID`.
- Use `STRIPE_SECRET_KEY` (test or live) locally; use the matching webhook secret for each environment.
- Set webhook endpoint to `/api/stripe/webhook`. Example for local (with Stripe CLI):
  - `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`
- Success URL: `/success`, cancel URL: `/cancelled` (handled in code).

## Email (Resend)

- Set `RESEND_API_KEY` and `EMAIL_FROM` (verified domain/sender).
- If `RESEND_API_KEY` is absent, emails are skipped (logged in server).

## Admin page

- `/admin/orders` is protected by a simple password gate using `ADMIN_PASSWORD` (sets an HTTP-only cookie for 6 hours).
- You can view orders, see payment/report status, and mark a report as sent with an optional URL.

## Order flow (MVP)

1) User fills `/get-your-ev-picker` → client posts to `/api/checkout` → Stripe Checkout.
2) On payment success, Stripe calls `/api/stripe/webhook`.
3) Webhook creates/updates the Order in Postgres, calls `generateReport` (stub), and sends a confirmation email.
4) `/success` confirms to the user; `/admin/orders` shows the order.

## Deploy on Vercel

- Push to GitHub; import the repo in Vercel (Next.js defaults are fine).
- Add env vars in Vercel before deploying (see list above).
- Use a hosted Postgres (e.g., Neon) and set `DATABASE_URL` in Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
