import { PrismaClient } from "@prisma/client";
//import prisma from "../lib/prisma";

export default async function handle(req, res) {
  const prisma = new PrismaClient();
  
  const { id } = req.body;

  const user = await prisma.User.delete({
    where: { id: id },
  });
  //res.json(result);
}
