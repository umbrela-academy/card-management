import cookie from "@elysiajs/cookie";
import { Elysia } from "elysia";
import { randomUUID } from "crypto";
import { jwtAccessSetup, jwtRefreshSetup } from "../../middlewares/setup";
import { prisma } from "../../libs/prisma";

export const refresh = new Elysia()
  .use(cookie())
  .use(jwtRefreshSetup)
  .use(jwtAccessSetup)
  .post(
    "/refresh",
    async function handler({
      set,
      jwtRefresh,
      jwtAccess,
      cookie: { refresh_token: refreshToken, refresh },
    }) {
      const payload = await jwtRefresh.verify(refreshToken.value);
      if (!payload) {
        set.status = 401;
        return {
          message: "Unauthorized.",
        };
      }
      const { id } = payload;
      const existingToken = await prisma.refreshToken.findUnique({
        where: {
          id,
        },
      });

      if (!existingToken) {
        set.status = 401;
        return {
          message: "Unauthorized.",
        };
      }
      const hashedToken = new Bun.CryptoHasher("sha512")
        .update(refreshToken.value)
        .digest("hex");
      if (hashedToken !== existingToken.hashedToken) {
        set.status = 401;
        return {
          message: "Unauthorized.",
        };
      }

      const user = await prisma.principal.findUnique({
        where: {
          id: existingToken.principalId,
        },
      });
      if (!user) {
        set.status = 401;
        return {
          message: "Unauthorized.",
        };
      }

      await prisma.refreshToken.delete({
        where: {
          id,
        },
      });

      // wait
      const refreshId = randomUUID();
      const newRefreshToken = await jwtRefresh.sign({
        id: refreshId,
      });
      const hashedRefreshToken = new Bun.CryptoHasher("sha512")
        .update(newRefreshToken)
        .digest("hex");

      await prisma.refreshToken.create({
        data: {
          hashedToken: hashedRefreshToken,
          id: refreshId,
          principalId: user.id,
        },
      });

      const accessToken = await jwtAccess.sign({
        id: String(user.id),
      });

      refresh.set({
        domain: "api.nep.work",
        value: { refreshToken: newRefreshToken },
        httpOnly: true,
        maxAge: 7 * 86400,
      });


      return {
        accessToken,
      };
    },
    {
      beforeHandle({ cookie: { refresh_token: refreshToken }, set }) {
        if (!refreshToken) {
          set.status = 401;
          return {
            message: "Unauthorized.",
          };
        }
      },
    }
  );
