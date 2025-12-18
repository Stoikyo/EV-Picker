import type { Order } from "@prisma/client";

/**
 * Stubbed report generator. Replace with Gamma (or another provider) later.
 */
export async function generateReport(_order: Order): Promise<{
  status: "pending" | "ready";
  url: string | null;
}> {
  // Placeholder implementation. In future, call out to Gamma and return a real URL.
  return {
    status: "pending",
    url: null,
  };
}
