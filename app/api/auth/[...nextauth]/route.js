import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
};

// const handler = NextAuth({
//   ...authOptions,
//   site: process.env.NEXTAUTH_URL || "http://localhost:3000",
// });

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
