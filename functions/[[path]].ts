import { handle } from "hono/cloudflare-pages";

import * as build from "../build/server";
import hono from "../server";

export const onRequest = handle(build, hono);
