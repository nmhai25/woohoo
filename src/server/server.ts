import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.create({
    data: {
      name: "Hello World",
    },
  });
  console.log("object", posts);
}

main();
