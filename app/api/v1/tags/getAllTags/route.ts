import { client } from "@/app/lib";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({
      message: "Session Error",
    });
  }

  const userId = session?.user?.id;
  const tags = await client.tags.findMany({
    where: {
      ownerId: userId,
    },
  });

  return NextResponse.json(tags);
}
