import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const inbox = await prisma.inbox.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(inbox, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
