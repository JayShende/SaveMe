import { client } from "@/app/lib";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({
      message: "Session Error",
    });
  }

  const userId = session?.user?.id;
  const links = await client.links.findMany({
    where: {
      userId: userId,
      type:"Instagram"
    },
    include:{
      tags:true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(links);
}
