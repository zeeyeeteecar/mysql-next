import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ message: "Method not allowed" });
  //   }

  const prisma = new PrismaClient();

  const { Performer_title } = req.body;
  const savedPerformer = await prisma.tbl_onlineconcert2022_performers.create({
    data: {
      Performer_title: Performer_title,
    },
  });
  res.json(savedPerformer);

  //const addnew_Performer_Data = JSON.parse(req.body);
  //   const savedPerformer = await prisma.tbl_onlineconcert2022_performers.create({
  //     data: addnew_Performer_Data,
  //   });

  //const performers = await prisma.tbl_onlineconcert2022_performers.findMany();
  //res.status(200).json({ name: "John Doe" });
  //res.json(performers);
}
