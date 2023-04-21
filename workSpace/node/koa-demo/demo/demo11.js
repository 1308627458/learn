const Koa = require('koa')
const app = new Koa()


const main = (ctx) => {  // ctx == context  代表 koa 上下文对象
  ctx.body = 'hello world'      
}

// 中间件 
const logger = (ctx, next) => {
    console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`);
    next()
}


app.use(logger)
app.use(main)



app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})
