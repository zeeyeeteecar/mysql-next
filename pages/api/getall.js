import prisma from "../lib/prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req, res) {
  //const prisma = new PrismaClient();

  const result = await prisma.User.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
  res.json(result);
}
