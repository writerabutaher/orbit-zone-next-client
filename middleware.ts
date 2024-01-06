import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  try {
    const token = request.cookies.get("token")?.value;

    if (!token || !token.startsWith("Bearer ")) {
      throw new Error("Invalid token");
    }

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

    await jwtVerify(token.split("Bearer ")[1], secret);

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(
      new URL(`/login?redirectURL=${pathname}`, request.url)
    );
  }
};

export const config = {
  matcher: "/dashboard/:path*",
};
