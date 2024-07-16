import { Elysia } from "elysia";
import { sso } from "./routes/sso/plugin";
import swagger from "@elysiajs/swagger";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "C-CMS API",
          version: "0.0.1",
        },
      },
    })
  )
  .use(sso)
  .listen(8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
