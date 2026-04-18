import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Intercept all .md requests and serve markdown content
  if (
    pathname.endsWith(".md") &&
    !pathname.startsWith("/_next/") &&
    !pathname.startsWith("/api/")
  ) {
    const url = request.nextUrl.clone()
    url.pathname = "/api/md"
    url.searchParams.set("path", pathname)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
}
