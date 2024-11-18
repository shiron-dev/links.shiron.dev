import type { AppLoadContext, RequestHandler } from "@remix-run/cloudflare";
import process from "node:process";
import { staticAssets } from "remix-hono/cloudflare";
import { remix } from "remix-hono/handler";
import { factory } from "server/factory";
import { SNS, SNSIcon } from "./data";

let handler: RequestHandler | undefined;

const app = factory.createApp();

app.get("/api/sns", c => c.json(SNS));

app.get("/api/icons", (c) => {
  const host = process.env.NODE_ENV !== "development" || import.meta.env.PROD ? `https://${c.env.HOST}` : "http://localhost:5173";
  return c.json(SNSIcon(host));
});

app.use(
  async (c, next) => {
    if (process.env.NODE_ENV !== "development" || import.meta.env.PROD) {
      return staticAssets()(c, next);
    }
    await next();
  },
  async (c, next) => {
    if (process.env.NODE_ENV !== "development" || import.meta.env.PROD) {
      const serverBuild = await import("../build/server");
      return remix({
        build: serverBuild,
        mode: "production",
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-ignore
        getLoadContext(c) {
          return {
            cloudflare: {
              env: c.env,
            },
          };
        },
      })(c, next);
    }
    else {
      if (!handler) {
        // @ts-expect-error it's not typed
        const build = await import("virtual:remix/server-build");
        const { createRequestHandler } = await import("@remix-run/cloudflare");
        handler = createRequestHandler(build, "development");
      }
      const remixContext = {
        cloudflare: {
          env: c.env,
        },
      } as unknown as AppLoadContext;
      return handler(c.req.raw, remixContext);
    }
  },
);

export default app;
