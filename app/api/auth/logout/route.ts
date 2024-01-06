import { NextResponse } from "next/server";

export const POST = async () => {
  const response = new NextResponse(
    JSON.stringify({
      success: true,
      message: "Logout successfully",
    })
  );

  response.cookies.set("token", "", {
    expires: new Date(Date.now()),
  });

  return response;
};
