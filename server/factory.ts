import type { ContextEnv } from "server";
import { createFactory } from "hono/factory";

export const factory = createFactory<ContextEnv>();
