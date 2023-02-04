import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import prisma from "../../../lib/prisma";
import { loginSchema } from "@/lib/validation/auth";

function confirmPasswordHash(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    compare(plainPassword, hashedPassword, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 15 * 24 * 30 * 60,
  },
  pages: {
    signIn: "/",
    newUser: "/sign-up",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "smith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const creds = await loginSchema.parseAsync(credentials);

          const user = await prisma.user.findFirst({
            where: {
              email: creds.email,
            },
          });

          if (!user) return null;

          const isValidPassword = await confirmPasswordHash(
            creds.password,
            user.password
          );

          if (!isValidPassword) return null;

          return {
            id: user.id,
            email: user.email,
          };
        } catch (e) {
          console.log(e);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
      }

      return session;
    },
  },
});
