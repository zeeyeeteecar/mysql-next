//import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export default async function handle(req, res) {
  //const prisma = new PrismaClient();
  const { id, fname, lname, email, avator } = req.body;

  const result = await prisma.User.update({
    where: { id: id },
    data: {
      fname: fname,
      lname: lname,
      email: email,
      avator: avator,
    },
  });
  res.json(result);
}
