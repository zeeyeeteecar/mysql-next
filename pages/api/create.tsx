//import { PrismaClient } from "@prisma/client";
import { prisma } from "./prisma";

export default async function handle(req, res) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const { fname, lname, email, avator } = req.body;

  const result = await prisma.user.create({
    data: {
      fname: fname,
      lname: lname,
      email: email,
      avator: avator,
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
