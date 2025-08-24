import { client } from "@/app/lib";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({
      message: "Session Error",
    });
  }

  const userId = session?.user?.id;
  const body = await req.json();
  const tags = body.tags;

  const newLink = await client.links.create({
    data: {
      title: body.title,
      description: body.description,
      userId: userId,
      url: body.url,
      type: body.type,
      tags: {
        connect: tags.map((id: string) => ({ tagId: id })),
      },
    },
  });

  return NextResponse.json(newLink);
}
