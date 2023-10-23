import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
 
const peoples = new Map();
peoples.set("john", {
  account: "john",
  password: "082313345",
});

peoples.set("mary", {
  account: "mary",
  password: "082313543",
});

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.redirect('http://127.0.0.1:8000/public/index.html')
  })
  .get("/people", (ctx) => {
    ctx.response.body = Array.from(peoples.values());
  })
  .post("/people/add", async (ctx) => {
    const body = ctx.request.body()
    if (body.type === "form") {
      const pairs = await body.value
      console.log('pairs=', pairs)
      const params = {}
      for (const [key, value] of pairs) {
        params[key] = value
      }
      console.log('params=', params)
      let account = params['account']
      let password = params['password']
      console.log(`account=${account} password=${password}`)
      if (peoples.get(account)) {
        ctx.response.type = 'text/html'
        ctx.response.body = `<p>Already have account.</p>`
      } else {
        peoples.set(account, {account, password})
        ctx.response.type = 'text/html'
        ctx.response.body = `<p>Sign Up Success!</p><p><a href="http://127.0.0.1:8000/public/index.html">登入</a></p>`
      }
    }
  })

  .post("/people/find",async (ctx) => {
    const body = ctx.request.body()
    if (body.type === "form") {
      const pairs = await body.value
      console.log('pairs=', pairs)
      const params = {}
      for (const [key, value] of pairs) {
        params[key] = value
      }
      console.log('params=', params)
      let account = params['account']
      let password = params['password']
      console.log(`account=${account} password=${password}`)
      if (peoples.get(account) && password==peoples.get(account).password) {
        ctx.response.type = 'text/html'
        ctx.response.body = 'Login Success!'
      } 
      else {
        ctx.response.type = 'text/html'
        ctx.response.body = `<p>Account or Password Wrong!</p><p><a href="http://127.0.0.1:8000/public/find.html">Login</a></p>`
      }
  }
})
  .get("/public/(.*)", async (ctx) => {
    let wpath = ctx.params[0]
    console.log('wpath=', wpath)
    await send(ctx, wpath, {
      root: Deno.cwd()+"/public/",
      index: "index.html",
    })
  })

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')

await app.listen({ port: 8000 });