import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma";
import bcrypt from "bcryptjs";

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  type: "credentials",
  async authorize(credentials) {
    if (!credentials.email || !credentials.password) {
      throw new Error("Please complete all fields");
    }

    const user = await prisma.user.findFirst({
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

    return {
      email: user.email,
    };
  },
});

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
});

const authHandler = NextAuth({
  providers: [credentialsProvider, googleProvider],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
});

export { authHandler as GET, authHandler as POST };
