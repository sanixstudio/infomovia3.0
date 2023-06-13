// import { PrismaClient } from "@prisma/client";

// let prisma = new PrismaClient();
// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient;
//     }
//   }
// }

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!(global as unknown as NodeJS.Global).prisma) {
//     (global as unknown as NodeJS.Global).prisma = new PrismaClient();
//   }
//   prisma = (global as unknown as NodeJS.Global).prisma;
// }

// export default prisma;
