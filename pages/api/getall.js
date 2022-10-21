import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ message: "Method not allowed" });
  //   }

  const prisma = new PrismaClient();

  const listPerformer = await prisma.tbl_onlineconcert2022_performers.findMany();
  res.json(listPerformer);

}
