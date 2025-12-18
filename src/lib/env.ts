export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export function getSiteUrl(headersHost?: string): string {
  const explicit = process.env.APP_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (!headersHost) return "http://localhost:3000";
  const isLocal = headersHost.includes("localhost") || headersHost.startsWith("127.");
  const protocol = isLocal ? "http" : "https";
  return `${protocol}://${headersHost}`;
}
