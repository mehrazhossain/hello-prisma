import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);

  //   const postUser = await prisma.user.create({
  //     data: {
  //       email: "mehraz@gmail.com",
  //       name: "Mehraz Hossain",
  //     },
  //   });
  //   console.log(postUser);
}

main();
