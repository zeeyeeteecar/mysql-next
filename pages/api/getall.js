//import Prisma from "../components/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  //const prisma = new PrismaClient();

  const result = await Prisma.User.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
  res.json(result);
}
