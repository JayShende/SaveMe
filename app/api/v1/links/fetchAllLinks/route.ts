import { client } from "@/app/lib";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // const session = await auth();
  // if (!session?.user?.id) {
  //   return NextResponse.json({
  //     message: "Session Error",
  //   });
  // }

  // const userId = session?.user?.id;
  const body = await req.json();
  // const userId=body.userId;
  console.log(body);
  const links = await client.links.findMany({
    where: {
      userId: body.userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(links);
}
