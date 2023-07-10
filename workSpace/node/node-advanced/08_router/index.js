const Server = require('./lib/server.js');

const Router = require('./lib/middleware/router.js');


const app = new Server();
const router = new Router();

// 添加路由

app.use(() => {
  // 验证用户信息
  if(验证用户信息) {
    next()
  }
  
})

app.use(() => {
  // 查询业务数据

})
// 添加拦截切面
app.use(async ({res}, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.body = '<h1>Hello World</h1>'
  
})


app.listen({port: 3000, host: 'localhost'});
