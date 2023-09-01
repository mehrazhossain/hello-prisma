import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 3003;

const prisma = new PrismaClient();

async function main() {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();
