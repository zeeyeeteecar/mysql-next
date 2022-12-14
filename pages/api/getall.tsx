import { prisma } from "./prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req, res) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  //   const result = await prisma.user.findMany({
  //     orderBy: [
  //       {
  //         id: "asc",
  //       },
  //     ],
  //   });

  //   await prisma.$disconnect();
  //   res.json(result);

  const result = await prisma.user.findMany({
    include: {
      post: true,
    },
    orderBy: { id: "asc" },
  });

  await prisma.$disconnect();
  res.json(result);
}
