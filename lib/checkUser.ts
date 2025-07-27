import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser) {
  dbUser = await prisma.user.create({
    data:{
        
    }
  })
  }

  return NextResponse.redirect("http://localhost:3000/")
}
