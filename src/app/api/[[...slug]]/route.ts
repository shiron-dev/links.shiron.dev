import { Hono } from "hono";
import { SNS, SNSIcon } from "./data";

export const runtime = "edge";
const host: string = "";

const app = new Hono().basePath("/api");
app.all("*", async (c, next) => {
  const host = c.env?.HOST ?? "https://links.shiron.dev";
  await next();
});

app.get("/", (c) => c.json(SNS));

app.get("/icons", (c) => c.json(SNSIcon(host)));
export const GET = app.fetch;
