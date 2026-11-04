import { NextRequest, NextResponse } from "next/server"

// Where this site's .md handler lives: app<MD_HANDLER>/[[...path]]/route.ts
const MD_HANDLER = "/api/md"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Intercept all .md requests and serve markdown content
  if (
    pathname.endsWith(".md") &&
    !pathname.startsWith("/_next/") &&
    !pathname.startsWith("/api/")
  ) {
    const url = request.nextUrl.clone()
    // Page path goes IN THE PATH, never a query: Netlify's Durable cache ignores queries, so
    // ?path=... gave every .md one cache key (#57). /twitter-thread.md -> /api/md/twitter-thread
    url.pathname = MD_HANDLER + pathname.slice(0, -".md".length)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
}
