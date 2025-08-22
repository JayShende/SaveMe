import { client } from "@/app/lib";
import { auth } from "@/auth";
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
  console.log(body);
  const tags = body.tags;
  console.log(tags);
  const newLink = await client.links.create({
    data: {
      title:body.title,
      description:body.description,
      userId: body.userId,
      url: body.url,
      type: "WebUrl",
      tags: {
        connect: tags.map((id: string) => ({ tagId: id })),
      },
    },
  });

  return NextResponse.json(newLink);
}
