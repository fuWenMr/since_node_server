const Koa = require("koa");
const routers = require("./router");

const app = new Koa();

var port = 8084;

app.use(routers.routes());
app.use(routers.allowedMethods());

app.listen(port);

console.log(`开始监听${port}端口`);
console.log(`localhost:${port}/`);
console.log(`localhost.charlesproxy.com:${port}/`);