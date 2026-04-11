import { deleteCookie } from "./lib/cookies";
import { verifyJWT } from "./lib/utils";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  const token = req?.cookies.get("jwt_token")?.value || null;
  const publicRoutes = ["/login"];
  const isValidToken = token ? await verifyJWT(token) : false;

  if (!isValidToken && !publicRoutes.includes(req.nextUrl.pathname)) {
    deleteCookie("jwt_token");
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (isValidToken && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|uploads).*)"],
};
