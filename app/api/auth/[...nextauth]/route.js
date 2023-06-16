import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma";
import bcrypt from "bcryptjs";

const authHandler = NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "Enter your email",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials.email || !credentials.password) {
    //       throw new Error("Invalid credentials");
    //     }

    //     const user = await prisma.user.findUnique({
    //       where: { email: credentials.email },
    //     });

    //     if (!user) {
    //       throw new Error("Invalid credentials");
    //     }

    //     const isCorrect = await bcrypt.compare(
    //       credentials.password,
    //       user.password
    //     );

    //     if (!isCorrect) {
    //       throw new Error("Invalid credentials");
    //     }

    //     return user;
    //   },
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/api/signin",
  // },
  secret: process.env.SECRET,
});

export { authHandler as GET, authHandler as POST };
