import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma";
import bcrypt from "bcryptjs";

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Complete form fields");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("User does not exist");
        }

        const isCorrectUser = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectUser) {
          throw new Error("Invalid credentials");
        }

        return user.id;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/api/signin",
  },
  secret: process.env.SECRET,
});

export { authHandler as GET, authHandler as POST };
