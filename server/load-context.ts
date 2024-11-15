import type { Context } from "hono";
import type { ContextEnv } from "server";
import type { PlatformProxy } from "wrangler";

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

export function getLoadContext(c: Context<ContextEnv>) {
  const cloudflare = { env: c.env } as Cloudflare;

  return {
    cloudflare,
  };
}

declare module "@remix-run/cloudflare" {
  interface AppLoadContext extends ReturnType<typeof getLoadContext> {}
}
