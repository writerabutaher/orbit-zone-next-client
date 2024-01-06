import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("1m")
    .sign(secret);

  cookies().set({
    name: "token",
    value: `Bearer ${jwt}`,
    secure: true,
    httpOnly: true,
  });

  return NextResponse.json({ success: true, message: "Token created" });
};
