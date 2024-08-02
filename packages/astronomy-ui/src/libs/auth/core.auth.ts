import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials: { email: string; password: string }) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const providedPwHash = await Bun.password.hash(credentials.password);

        if (user && await Bun.password.verify(providedPwHash, user.password)) {
          return { id: user.id, email: user.email };
        }

        return null;
      },
    },
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_ACCESS_SECRET,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
};

export function generateTokens(user: { id: string }) {
  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET as string, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: user.id }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}