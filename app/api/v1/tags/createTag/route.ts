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
  const nameLowercase = body.name.toLowerCase();
  // Check if the user has Already Created similar tag

  const check = await client.tags.findFirst({
    where: {
      ownerId: body.userId,
      name: nameLowercase,
    },
  });

  if (check != null) {
    return NextResponse.json({
      message: "Tag Already Exist",
    });
  }

  const tag = await client.tags.create({
    data: {
      name: nameLowercase,
      ownerId: body.userId,
    },
  });

  return NextResponse.json(tag);
}
