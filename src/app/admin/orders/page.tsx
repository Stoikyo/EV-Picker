import { prisma } from "@/lib/prisma";
import { clearAdminSession, isAdminAuthed, setAdminSession, verifyAdminPassword } from "@/lib/adminAuth";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

async function handleLogin(formData: FormData) {
  "use server";
  const password = formData.get("password")?.toString() || "";
  if (verifyAdminPassword(password)) {
    await setAdminSession();
  } else {
    await clearAdminSession();
  }
  revalidatePath("/admin/orders");
}

async function markReportSent(formData: FormData) {
  "use server";
  const orderId = formData.get("orderId")?.toString();
  const reportUrl = formData.get("reportUrl")?.toString() || null;
  if (!orderId) return;
  await prisma.order.update({
    where: { id: orderId },
    data: {
      reportStatus: "sent",
      reportUrl,
    },
  });
  revalidatePath("/admin/orders");
}

async function signOut() {
  "use server";
  await clearAdminSession();
  revalidatePath("/admin/orders");
}

export default async function AdminOrdersPage() {
  const authed = await isAdminAuthed();

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <form action={handleLogin} className="w-full max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-semibold">Admin sign-in</h1>
          <p className="text-sm text-slate-600">Enter the admin password to view orders.</p>
          <input
            type="password"
            name="password"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-blue-100 transition focus:border-blue-500 focus:ring-2"
            placeholder="Admin password"
          />
          <button className="btn btn-primary w-full justify-center" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Orders</h1>
            <p className="text-sm text-slate-600">Manual ops tools for EV Picker.</p>
          </div>
          <form action={signOut} className="contents">
            <button className="btn btn-secondary" type="submit">
              Sign out
            </button>
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1.6fr,1fr,1fr,1fr,1fr,1fr] gap-4 border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            <span>Customer</span>
            <span>Created</span>
            <span>Status</span>
            <span>Stripe session</span>
            <span>Report</span>
            <span>Actions</span>
          </div>
          <div className="divide-y divide-slate-200">
            {orders.map((order) => (
              <div key={order.id} className="grid grid-cols-[1.6fr,1fr,1fr,1fr,1fr,1fr] gap-4 px-4 py-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-900">{order.name}</p>
                  <p className="text-xs text-slate-600">{order.email}</p>
                  <p className="text-xs text-slate-500">{order.location}</p>
                </div>
                <div className="text-xs text-slate-600">
                  {order.createdAt.toLocaleString("en-AU", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </div>
                <div className="text-xs">
                  <p className="font-semibold">{order.stripePaymentStatus}</p>
                  <p className="text-slate-600">{order.budgetRange}</p>
                </div>
                <div className="text-xs text-blue-700">{order.stripeCheckoutSessionId}</div>
                <div className="text-xs">
                  <p className="font-semibold capitalize">{order.reportStatus}</p>
                  {order.reportUrl ? (
                    <a className="text-blue-700 underline" href={order.reportUrl} target="_blank" rel="noreferrer">
                      Report link
                    </a>
                  ) : (
                    <p className="text-slate-500">No URL yet</p>
                  )}
                </div>
                <div>
                  <form action={markReportSent} className="space-y-2">
                    <input type="hidden" name="orderId" value={order.id} />
                    <input
                      name="reportUrl"
                      defaultValue={order.reportUrl || ""}
                      placeholder="Report URL"
                      className="w-full rounded-lg border border-slate-200 px-2 py-1 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                    <button className="btn btn-primary w-full justify-center text-xs" type="submit">
                      Mark sent
                    </button>
                  </form>
                </div>
              </div>
            ))}
            {orders.length === 0 && (
              <div className="px-4 py-6 text-sm text-slate-600">No orders yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
