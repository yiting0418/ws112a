import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(content) {
  return `
    <html>
      <body>
        ${content}
      </body>
    </html>
  `;
}

app.use(async (ctx) => {
  console.log('pathname', ctx.request.url.pathname);
  console.log(`path=${ctx.request.url.pathname}`);
  
  ctx.response.body = `
    <html>
        <body>
        </body>
    </html>`;
  
  if (ctx.request.url.pathname === "/nqu") {
    ctx.response.body = page(`
      <a href="https://nqu.edu.tw//">金門大學</a>
    `);
  } 
  else if (ctx.request.url.pathname === "/nqu/csie") {
    ctx.response.body = page(`
      <a href="https://csie.nqu.edu.tw">金門大學資工系</a>
    `);
  } 
  else if (ctx.request.url.pathname === "/to/nqu") {
    ctx.response.redirect("https://nqu.edu.tw");
  } 
  else if (ctx.request.url.pathname === "/to/nqu/csie") {
    ctx.response.redirect("https://csie.nqu.edu.tw");
  } 
});

console.log('start at : http://127.0.0.1:8000');
await app.listen({ port: 8000 });
