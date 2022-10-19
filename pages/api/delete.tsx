//import { PrismaClient } from "@prisma/client";
import { prisma } from "./prisma";

export default async function handle(req, res) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const { id } = req.body;

  const result = await prisma.user.delete({
    where: { id: id },
  });

  await prisma.$disconnect();
  res.json(result);
}
