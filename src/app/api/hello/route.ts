import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ data: [{ id: 1 }, { id: 2 }] }, { status: 200 });
}
