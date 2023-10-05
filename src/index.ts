import { Elysia } from "elysia";
import querys from "./querys";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .post("/search", async () => {
    return querys.test();
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
