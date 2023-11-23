import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  const secret = process.env.NEXT_PUBLIC_SECRET;
  const token = await getToken({ req, secret });
  const data = {
    accessToken: token,
  };

  return NextResponse.json(data);
}
