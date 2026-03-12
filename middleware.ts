import { NextResponse } from "next/server";

const MAINTENANCE_MODE = false; // Cambia a true para activar mantenimiento

export function middleware() {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  return new NextResponse("Maintenance", { status: 503 });
}

export const config = {
  matcher: "/:path*",
};
