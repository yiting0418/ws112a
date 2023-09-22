import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const room = new Map();

room.set("319", {
  id: "319",
  name: "數位系統應用實驗室",
});
room.set("320", {
  id: "320",
  name: "多媒體實驗室",
});
room.set("321", {
  id: "321",
  name: "電腦網路實驗室",
});
room.set("322", {
  id: "322",
  name: "嵌入式實驗室",
});
const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/nqu", (context) => {
    context.response.body = `<html><body><a href="https://nqu.edu.tw"></a></body></html>`;
  })
  .get("/nqu/csie", (context) => {
    context.response.body = `<html><body><a href="https://csie.nqu.edu.tw"></a></body></html>`;
  })
  .get("/nqu/room/:id", (context) => {
    if (context.params && context.params.id && room.has(context.params.id)) {
      context.response.body = room.get(context.params.id);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
