import { NextResponse } from "next/server";

export function middleware(request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  // Si está en modo mantenimiento
  if (maintenanceMode) {
    // Permitir acceso solo a la página de mantenimiento y assets
    if (
      request.nextUrl.pathname === "/maintenance" ||
      request.nextUrl.pathname.startsWith("/assets/") ||
      request.nextUrl.pathname.startsWith("/_next/") ||
      request.nextUrl.pathname === "/favicon.ico"
    ) {
      return NextResponse.next();
    }

    // Redirigir todas las otras rutas a mantenimiento
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};
