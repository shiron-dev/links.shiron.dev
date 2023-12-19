import { Hono } from "hono";
import { SNS, SNSIcon } from "./data";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/", (c) => c.json(SNS));

app.get("/icons", (c) => c.json(SNSIcon));

export const GET = app.fetch;
