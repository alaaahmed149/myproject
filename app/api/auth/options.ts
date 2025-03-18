import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, Session, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "test@example.com" &&
          credentials.password === "password"
        ) {
          return {
            id: "1",
            name: "User Example",
            role: "Admin",
            image: "/avatar.svg",
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Include all user fields in the token
        token.id = user.id;
        token.name = user.name;
        token.image = user.image;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      // Include all token fields in the session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          name: token.name as string,
          role: token.role as string,
          image: token.image as string,
          email: token.email as string,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
