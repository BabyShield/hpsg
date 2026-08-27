import { NextResponse } from "next/server";

/**
 * Sends X-Robots-Tag: noindex on any host where HPSG_NOINDEX is "true" —
 * currently the workers.dev deployment, whose canonicals all point at
 * hpsg.co.uk. Flipped to "false" in wrangler.jsonc at launch.
 *
 * Next 16 deprecates this file in favour of the `proxy.ts` convention, but
 * that migration is blocked here: Proxy defaults to the Node.js runtime and
 * forbids the `runtime` config option, while @opennextjs/cloudflare 1.20.2
 * refuses to build Node.js middleware ("Consider switching to Edge
 * Middleware"). Revisit when the adapter supports it; until then the
 * deprecation warning in `next dev` is expected.
 */
export function middleware() {
  const response = NextResponse.next();
  if (process.env.HPSG_NOINDEX === "true") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
