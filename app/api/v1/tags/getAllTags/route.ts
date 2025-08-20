import { client } from "@/app/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //   const session = await auth();
  //   if (!session?.user?.id) {
  //     return NextResponse.json({
  //       message: "Session Error",
  //     });
  //   }

  //   const userId = session?.user?.id;
  const body = await req.json();
  const tags = await client.tags.findMany({
    where: {
      ownerId: body.userId,
    },
  });

  return NextResponse.json(tags);
}
