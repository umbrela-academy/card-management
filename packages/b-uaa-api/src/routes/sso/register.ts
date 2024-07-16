import { Elysia } from "elysia";
import cookie from "@elysiajs/cookie";
import { randomUUID } from "crypto";
import { basicAuthModel, jwtAccessSetup, jwtRefreshSetup } from "../../middlewares/setup";
import { prisma } from "../../libs/prisma";

export const register = new Elysia()
  .use(basicAuthModel)
  .use(cookie())
  .use(jwtAccessSetup)
  .use(jwtRefreshSetup)
  .post(
    "/register",
    async function handler(h) {
      const existingUser = await prisma.principal.findUnique({
        where: {
          email: h.body.email,
        },
      });
      if (existingUser) {
        h.set.status = 400;
        return {
          message: "Email already in use.",
        };
      }
      const savedPassword = await Bun.password.hash(h.body.password);
      const refreshId = randomUUID();
      const refreshToken = await h.jwtRefresh.sign({
        id: refreshId,
      });
      const hashedToken = new Bun.CryptoHasher("sha512")
        .update(refreshToken)
        .digest("hex");

      const user = await prisma.principal.create({
        data: {
          email: h.body.email,
          password: savedPassword,
          refreshTokens: {
            create: {
              hashedToken,
              id: refreshId,
            },
          },
        },
      });
      const accessToken = await h.jwtAccess.sign({
        id: String(user.id),
      });
      h.cookie.access.set({
        domain: "api.nep.work",
        value: { accessToken },
        httpOnly: true,
        maxAge: 7 * 86400,
      });
      return {
        accessToken,
      };
    },
    {
      body: "basicAuthModel",
    }
  );
