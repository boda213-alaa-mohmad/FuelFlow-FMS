import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("user")?.value;
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === "/login";

  // second condition isLoginPage === false
  // means if someoene has no token and he wants to get to dashboard
  // so he typed https://localhost:3000/dashboard
  // if he doesn't have no token it have to direct to login
  // because it will happens infinite loop in login page
  if (token === undefined && isLoginPage === false) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
