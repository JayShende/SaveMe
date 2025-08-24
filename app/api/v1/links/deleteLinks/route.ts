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
  const linkId = body.linkId;

  // Check if the Link Id Exists

  const checkLink = await client.links.findFirst({
    where: {
      linkId: linkId,
    },
  });

  if (checkLink == null) {
    return NextResponse.json({
      message: "The Link Dont Exist",
    });
  }

  // Proceed with the Deletion of The Link

  const response = await client.links.delete({
    where: {
      userId: userId,
      linkId: linkId,
    },
  });
  return NextResponse.json({
    status:"Success",
    message:"Link Deleted SuccessFull"
  })
}
