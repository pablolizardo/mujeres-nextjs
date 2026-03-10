import { NextResponse } from "next/server";

export function middleware() {
  return new NextResponse("Maintenance", { status: 503 });
}

export const config = {
  matcher: "/:path*",
};
