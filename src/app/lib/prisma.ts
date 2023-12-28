import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export interface ISubmission {
  userName: string;
  email: string;
  phone: string;
  message: string;
}

export async function createSubmission(submission: ISubmission) {
  try {
    // TODO: habdle empty fields case in server action
    // TODO: replace empty fields with 'not specified'
    const data = await db.submission.create({ data: submission });
    return data;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("There is a Prisma error!: ", e.code, e.message);
    } else {
      console.log("Unknown error while creating submission!");
    }
    throw e;
  }
}
