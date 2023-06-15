import prisma from "@/prisma";
import bcrypt from "bcryptjs";

// Prisma Connection
export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

// Hashing password wth bcrypt
export async function hashPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hashSync(password, saltRounds);
  return hashedPassword;
}
