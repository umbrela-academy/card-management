import { Elysia } from "elysia";
import { register } from "./register";
import { login } from "./login";
import { refresh } from "./refresh";

export const sso = new Elysia({
  prefix: "/auth",
})
  .use(register)
  .use(login)
  .use(refresh);
