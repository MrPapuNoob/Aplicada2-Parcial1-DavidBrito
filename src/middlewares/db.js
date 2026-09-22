import {PrismaClient} from "@prisma/client";
import {PrismaPg} from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  url: process.env.DATABASE_URL,
});