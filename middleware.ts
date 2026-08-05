import { NextRequest, NextResponse } from "next/server";

// Gates draft pages behind HTTP basic auth so they can live on Vercel without
// being public. Set PREVIEW_PASSWORD in the Vercel project env vars.
// Any username works, only the password is checked.

const REALM = 'Basic realm="Applied AI Works draft", charset="UTF-8"';

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": REALM },
  });
}

export function middleware(req: NextRequest) {
  const expected = process.env.PREVIEW_PASSWORD;

  // No password configured means the gate isn't armed. Hide the page rather
  // than serve it unprotected.
  if (!expected) {
    return new NextResponse("Not found", { status: 404 });
  }

  const header = req.headers.get("authorization");
  if (!header) return unauthorized();

  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return unauthorized();

  let decoded: string;
  try {
    decoded = atob(encoded);
  } catch {
    return unauthorized();
  }

  // Everything after the first colon is the password, so passwords may contain colons.
  const supplied = decoded.slice(decoded.indexOf(":") + 1);
  if (supplied !== expected) return unauthorized();

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}

export const config = {
  matcher: ["/revenue-recovery"],
};
